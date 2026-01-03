import { useEffect, useRef, useCallback, memo, useState } from 'react';
import gsap from 'gsap';

// Import all videos to preload
import video2 from '../../assets/2.mp4';
import video3 from '../../assets/3.mp4';
import video4 from '../../assets/4.mp4';
import video5 from '../../assets/5.mp4';
import video6 from '../../assets/6.mp4';
import coverVideo from '../../assets/1.mp4';

const ALL_VIDEOS = [coverVideo, video2, video3, video4, video5, video6];

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = memo(({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const hasCompleted = useRef(false);
    const [progress, setProgress] = useState(0);

    const animateOut = useCallback(() => {
        if (hasCompleted.current || !containerRef.current) return;
        hasCompleted.current = true;

        gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: onComplete
        });
    }, [onComplete]);

    useEffect(() => {
        let loadedCount = 0;
        const totalVideos = ALL_VIDEOS.length;

        const updateProgress = () => {
            loadedCount++;
            const newProgress = (loadedCount / totalVideos) * 100;
            setProgress(newProgress);

            // Update progress bar
            if (progressRef.current) {
                gsap.to(progressRef.current, {
                    width: `${newProgress}%`,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }

            // All videos loaded
            if (loadedCount >= totalVideos) {
                // Small delay after loading completes for smooth transition
                setTimeout(animateOut, 500);
            }
        };

        // Preload all videos
        ALL_VIDEOS.forEach((videoSrc) => {
            const video = document.createElement('video');
            video.preload = 'auto';

            video.oncanplaythrough = () => {
                updateProgress();
            };

            video.onerror = () => {
                // Still count as loaded even if error (don't block forever)
                updateProgress();
            };

            video.src = videoSrc;
            video.load();
        });

        // Fallback timeout - don't wait more than 15 seconds
        const fallbackTimer = setTimeout(() => {
            if (!hasCompleted.current) {
                animateOut();
            }
        }, 15000);

        return () => {
            clearTimeout(fallbackTimer);
        };
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
                <div className="w-48 md:w-64 h-[2px] bg-rose-gold-light/50 rounded-full overflow-hidden mx-auto">
                    <div
                        ref={progressRef}
                        className="h-full bg-rose-gold rounded-full"
                        style={{ width: '0%' }}
                    />
                </div>

                {/* Loading Text */}
                <p className="mt-6 font-montserrat text-soft-black text-xs md:text-sm tracking-[0.2em] uppercase">
                    {progress < 100 ? `Loading... ${Math.round(progress)}%` : 'Ready!'}
                </p>
            </div>
        </div>
    );
});

LoadingScreen.displayName = 'LoadingScreen';
