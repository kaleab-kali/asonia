import { useEffect, useRef, useCallback, memo, useState } from 'react';
import gsap from 'gsap';

// Import all videos to preload
import video1 from '../../assets/1.mp4';
import video2 from '../../assets/2.mp4';
import video3 from '../../assets/3.mp4';
import video4 from '../../assets/4.mp4';
import video5 from '../../assets/5.mp4';
import video6 from '../../assets/6.mp4';
import video7 from '../../assets/7.mp4';

const ALL_VIDEOS = [video1, video2, video3, video4, video5, video6, video7];

interface LoadingScreenProps {
    onComplete: () => void;
}

/**
 * Preloads a video using XMLHttpRequest for reliable progress tracking
 * Returns a promise that resolves when the video is fully downloaded
 */
const preloadVideo = (
    src: string,
    onProgress: (loaded: number, total: number) => void
): Promise<void> => {
    return new Promise((resolve) => {
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
                // Video fully downloaded
                const blob = xhr.response;
                onProgress(blob.size, blob.size);
                resolve();
            } else {
                console.warn(`Failed to load video: ${src}, status: ${xhr.status}`);
                onProgress(1, 1);
                resolve();
            }
        };

        xhr.onerror = () => {
            console.warn(`Network error loading video: ${src}`);
            onProgress(1, 1);
            resolve();
        };

        xhr.send();
    });
};

export const LoadingScreen: React.FC<LoadingScreenProps> = memo(({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const hasCompleted = useRef(false);
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('Preparing your experience...');

    const animateOut = useCallback(() => {
        if (hasCompleted.current || !containerRef.current) return;
        hasCompleted.current = true;

        setStatusText('Ready!');

        setTimeout(() => {
            gsap.to(containerRef.current, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: onComplete
            });
        }, 400);
    }, [onComplete]);

    useEffect(() => {
        // Track progress for each video
        const progressMap: { loaded: number; total: number }[] = ALL_VIDEOS.map(() => ({
            loaded: 0,
            total: 1 // Will be updated when we know the actual size
        }));

        const updateTotalProgress = () => {
            let totalLoaded = 0;
            let totalSize = 0;

            progressMap.forEach(({ loaded, total }) => {
                totalLoaded += loaded;
                totalSize += total;
            });

            const percent = totalSize > 0 ? Math.round((totalLoaded / totalSize) * 100) : 0;
            const clampedPercent = Math.min(percent, 100);

            setProgress(clampedPercent);
            if (progressRef.current) {
                progressRef.current.style.width = `${clampedPercent}%`;
            }
        };

        const loadAllVideos = async () => {
            setStatusText('Loading...');

            // Start all video downloads in parallel
            const promises = ALL_VIDEOS.map((src, index) =>
                preloadVideo(src, (loaded, total) => {
                    progressMap[index] = { loaded, total };
                    updateTotalProgress();
                })
            );

            // Wait for ALL videos to complete
            await Promise.all(promises);

            // Ensure we show 100%
            setProgress(100);
            if (progressRef.current) {
                progressRef.current.style.width = '100%';
            }

            // Small delay to show 100% before transitioning
            setTimeout(() => {
                animateOut();
            }, 200);
        };

        loadAllVideos();

        // Safety fallback: max 60 seconds
        const fallback = setTimeout(() => {
            if (!hasCompleted.current) {
                console.warn('Loading timeout reached - proceeding anyway');
                animateOut();
            }
        }, 60000);

        return () => clearTimeout(fallback);
    }, [animateOut]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream"
        >
            <div className="text-center px-4">
                {/* ASONIA Logo */}
                <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-rose-gold mb-8 md:mb-12 tracking-[0.1em]">
                    ASONIA
                </h1>

                {/* Progress Bar */}
                <div className="w-48 md:w-64 h-[3px] bg-rose-gold/20 rounded-full overflow-hidden mx-auto">
                    <div
                        ref={progressRef}
                        className="h-full bg-rose-gold rounded-full transition-all duration-150 ease-out"
                        style={{ width: '0%' }}
                    />
                </div>

                {/* Percentage */}
                <p className="mt-4 font-montserrat text-rose-gold text-2xl md:text-3xl font-semibold">
                    {progress}%
                </p>

                {/* Status Text */}
                <p className="mt-2 font-montserrat text-soft-black/70 text-xs md:text-sm tracking-[0.15em] uppercase">
                    {statusText}
                </p>
            </div>
        </div>
    );
});

LoadingScreen.displayName = 'LoadingScreen';
