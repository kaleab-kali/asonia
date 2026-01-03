// Global video preloader - caches blob URLs for all videos

import video1 from '../assets/1.mp4';
import video2 from '../assets/2.mp4';
import video3 from '../assets/3.mp4';
import video4 from '../assets/4.mp4';
import video5 from '../assets/5.mp4';
import video6 from '../assets/6.mp4';
import video7 from '../assets/7.mp4';

// Original sources mapped by key
export const VIDEO_SOURCES = {
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
} as const;

// Cache for blob URLs after preloading
const videoCache: Map<string, string> = new Map();

// Track if preloading is complete
let preloadComplete = false;

/**
 * Get a video source - returns cached blob URL if available, otherwise original
 */
export const getVideoSrc = (key: keyof typeof VIDEO_SOURCES): string => {
    const cached = videoCache.get(key);
    return cached || VIDEO_SOURCES[key];
};

/**
 * Check if all videos are preloaded
 */
export const isPreloadComplete = (): boolean => preloadComplete;

/**
 * Preload a single video and return blob URL when fully loaded
 * Uses actual video element with canplaythrough for true readiness
 */
const preloadSingleVideo = (
    src: string,
    key: string,
    onProgress: (bytesLoaded: number, bytesTotal: number) => void
): Promise<string> => {
    return new Promise((resolve) => {
        // First, download the video as a blob with progress tracking
        const xhr = new XMLHttpRequest();
        xhr.open('GET', src, true);
        xhr.responseType = 'blob';

        xhr.onprogress = (event) => {
            if (event.lengthComputable) {
                onProgress(event.loaded, event.total);
            }
        };

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const blob = xhr.response as Blob;
                const blobUrl = URL.createObjectURL(blob);

                // Now verify the video can actually play
                const testVideo = document.createElement('video');
                testVideo.preload = 'auto';
                testVideo.muted = true;
                testVideo.playsInline = true;

                const cleanup = () => {
                    testVideo.src = '';
                    testVideo.load();
                };

                testVideo.oncanplaythrough = () => {
                    // Video is truly ready to play
                    videoCache.set(key, blobUrl);
                    onProgress(blob.size, blob.size);
                    cleanup();
                    resolve(blobUrl);
                };

                testVideo.onerror = () => {
                    console.warn(`Video validation failed for ${key}, using blob anyway`);
                    videoCache.set(key, blobUrl);
                    onProgress(blob.size, blob.size);
                    cleanup();
                    resolve(blobUrl);
                };

                // Start loading the blob URL into video element
                testVideo.src = blobUrl;
                testVideo.load();

                // Safety timeout - if canplaythrough doesn't fire in 10s, proceed anyway
                setTimeout(() => {
                    if (!videoCache.has(key)) {
                        console.warn(`Video ${key} canplaythrough timeout, proceeding`);
                        videoCache.set(key, blobUrl);
                        onProgress(blob.size, blob.size);
                        cleanup();
                        resolve(blobUrl);
                    }
                }, 10000);
            } else {
                console.warn(`Failed to download video ${key}: ${xhr.status}`);
                onProgress(1, 1);
                resolve(src); // Fall back to original
            }
        };

        xhr.onerror = () => {
            console.warn(`Network error downloading video ${key}`);
            onProgress(1, 1);
            resolve(src); // Fall back to original
        };

        xhr.send();
    });
};

export interface PreloadProgress {
    percent: number;
    loaded: number;
    total: number;
}

/**
 * Preload all videos with unified progress tracking
 * Progress only increases, never decreases
 */
export const preloadAllVideos = (
    onProgress: (progress: PreloadProgress) => void
): Promise<void> => {
    return new Promise((resolve) => {
        const videoKeys = Object.keys(VIDEO_SOURCES) as (keyof typeof VIDEO_SOURCES)[];

        // Track bytes for each video
        const bytesLoaded: number[] = new Array(videoKeys.length).fill(0);
        const bytesTotal: number[] = new Array(videoKeys.length).fill(1);

        // Track the highest percent we've reported (never go backwards)
        let highestPercent = 0;

        const updateProgress = () => {
            const totalLoaded = bytesLoaded.reduce((a, b) => a + b, 0);
            const totalSize = bytesTotal.reduce((a, b) => a + b, 0);

            let currentPercent = totalSize > 0
                ? Math.round((totalLoaded / totalSize) * 100)
                : 0;

            // Never allow progress to go backwards
            if (currentPercent > highestPercent) {
                highestPercent = currentPercent;
            }

            // Clamp to 0-99 until all complete (100 is set explicitly at the end)
            const reportPercent = Math.min(highestPercent, 99);

            onProgress({
                percent: reportPercent,
                loaded: totalLoaded,
                total: totalSize
            });
        };

        // Start all downloads in parallel
        const promises = videoKeys.map((key, index) => {
            const src = VIDEO_SOURCES[key];
            return preloadSingleVideo(src, key, (loaded, total) => {
                bytesLoaded[index] = loaded;
                bytesTotal[index] = total;
                updateProgress();
            });
        });

        Promise.all(promises).then(() => {
            preloadComplete = true;
            // Final 100% report
            const totalLoaded = bytesLoaded.reduce((a, b) => a + b, 0);
            const totalSize = bytesTotal.reduce((a, b) => a + b, 0);
            onProgress({
                percent: 100,
                loaded: totalLoaded,
                total: totalSize
            });
            resolve();
        });
    });
};
