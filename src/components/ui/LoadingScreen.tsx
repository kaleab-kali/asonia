import { useEffect, useRef, useCallback, memo } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = memo(({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const hasCompleted = useRef(false);

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
        // Animate progress bar
        if (progressRef.current) {
            gsap.to(progressRef.current, {
                width: '100%',
                duration: 2,
                ease: 'power2.inOut',
            });
        }

        // Minimum display time then animate out
        const timer = setTimeout(animateOut, 2200);

        return () => {
            clearTimeout(timer);
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
                    Loading your surprise...
                </p>
            </div>
        </div>
    );
});

LoadingScreen.displayName = 'LoadingScreen';
