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

interface LoadProgress {
    loaded: number;
    total: number;
}

/**
 * Preloads a video by fetching all bytes using ReadableStream
 * This ensures the video is fully downloaded before resolving
 */
const preloadVideoWithFetch = async (
    src: string,
    onProgress: (loaded: number, total: number) => void
): Promise<void> => {
    try {
        const response = await fetch(src);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const contentLength = response.headers.get('content-length');
        const total = contentLength ? parseInt(contentLength, 10) : 0;

        if (!response.body) {
            onProgress(total, total);
            return;
        }

        const reader = response.body.getReader();
        let loaded = 0;

        while (true) {
            const { done, value } = await reader.read();

            if (done) {
                onProgress(total || loaded, total || loaded);
                break;
            }

            loaded += value.length;
            onProgress(loaded, total || loaded);
        }
    } catch (error) {
        console.warn(`Failed to preload: ${src}`, error);
        // Resolve anyway to not block loading
        onProgress(1, 1);
    }
};

export const LoadingScreen: React.FC<LoadingScreenProps> = memo(({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const hasCompleted = useRef(false);
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('Preparing...');

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
        }, 300);
    }, [onComplete]);

    useEffect(() => {
        const progressMap: Record<number, LoadProgress> = {};
        let completedCount = 0;

        // Initialize progress for each video
        ALL_VIDEOS.forEach((_, i) => {
            progressMap[i] = { loaded: 0, total: 1 };
        });

        const calculateTotalProgress = () => {
            let totalLoaded = 0;
            let totalSize = 0;

            Object.values(progressMap).forEach(({ loaded, total }) => {
                totalLoaded += loaded;
                totalSize += total;
            });

            const percent = totalSize > 0 ? (totalLoaded / totalSize) * 100 : 0;
            return Math.min(Math.round(percent), 100);
        };

        const updateUI = () => {
            const percent = calculateTotalProgress();
            setProgress(percent);

            if (progressRef.current) {
                progressRef.current.style.width = `${percent}%`;
            }
        };

        const loadAllVideos = async () => {
            setStatusText('Loading videos...');

            const promises = ALL_VIDEOS.map((src, index) =>
                preloadVideoWithFetch(src, (loaded, total) => {
                    progressMap[index] = { loaded, total };
                    updateUI();
                }).then(() => {
                    completedCount++;
                    setStatusText(`Loading... (${completedCount}/${ALL_VIDEOS.length})`);
                })
            );

            await Promise.all(promises);

            setProgress(100);
            if (progressRef.current) {
                progressRef.current.style.width = '100%';
            }

            animateOut();
        };

        loadAllVideos();

        // Fallback: max 45 seconds wait
        const fallback = setTimeout(() => {
            if (!hasCompleted.current) {
                console.warn('Loading timeout - proceeding anyway');
                animateOut();
            }
        }, 45000);

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
