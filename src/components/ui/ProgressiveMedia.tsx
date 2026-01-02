import { useState, useRef, useCallback, memo } from 'react';

interface ProgressiveMediaProps {
    src: string;
    placeholder?: string;
    alt?: string;
    className?: string;
    type?: 'image' | 'video';
    onLoad?: () => void;
    autoPlay?: boolean;
}

export const ProgressiveMedia: React.FC<ProgressiveMediaProps> = memo(({
    src,
    placeholder: _placeholder,
    alt = '',
    className = '',
    type = 'image',
    onLoad,
    autoPlay = true
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
        onLoad?.();
    }, [onLoad]);

    if (type === 'video') {
        return (
            <div className={`relative overflow-hidden ${className}`}>
                <video
                    ref={videoRef}
                    src={src}
                    muted
                    loop
                    playsInline
                    autoPlay={autoPlay}
                    onLoadedData={handleLoad}
                    className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                {/* Loading placeholder */}
                {!isLoaded && (
                    <div className="absolute inset-0 bg-elegant-black/20 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-rose-gold border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <img
                src={src}
                alt={alt}
                onLoad={handleLoad}
                className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'blur-0 opacity-100' : 'blur-sm opacity-70'
                    }`}
            />

            {/* Shimmer effect while loading */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            )}
        </div>
    );
});

ProgressiveMedia.displayName = 'ProgressiveMedia';
