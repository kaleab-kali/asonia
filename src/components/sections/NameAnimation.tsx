import { useState, useEffect, useRef, useMemo, memo } from 'react';
import gsap from 'gsap';

interface LetterData {
    letter: string;
    meaning: string;
    compliment: string;
}

const ASONIA_LETTERS: LetterData[] = [
    { letter: 'A', meaning: 'Alluring', compliment: 'Your presence lights up every room' },
    { letter: 'S', meaning: 'Stunning', compliment: 'Natural elegance that captivates' },
    { letter: 'O', meaning: 'Original', compliment: 'Unique in every way' },
    { letter: 'N', meaning: 'Natural', compliment: 'Effortlessly sophisticated' },
    { letter: 'I', meaning: 'Inspiring', compliment: 'Your strength shines through' },
    { letter: 'A', meaning: 'Amazing', compliment: 'A heart as beautiful as your smile' },
];

export const NameAnimation: React.FC = memo(() => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showFinal, setShowFinal] = useState(false);
    const letterRef = useRef<HTMLDivElement>(null);
    const letters = useMemo(() => ASONIA_LETTERS, []);

    useEffect(() => {
        if (currentIndex >= letters.length) {
            setShowFinal(true);
            return;
        }

        // Animate current letter in
        if (letterRef.current) {
            gsap.fromTo(letterRef.current,
                { opacity: 0, y: 30, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power2.out' }
            );
        }

        // Move to next letter after delay
        const timer = setTimeout(() => {
            if (letterRef.current) {
                gsap.to(letterRef.current, {
                    opacity: 0,
                    y: -20,
                    duration: 0.4,
                    ease: 'power2.in',
                    onComplete: () => setCurrentIndex(prev => prev + 1)
                });
            }
        }, 1800);

        return () => clearTimeout(timer);
    }, [currentIndex, letters.length]);

    const currentLetter = letters[currentIndex];

    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-black via-elegant-black to-cream py-8 px-4 -mt-1">
            <div className="text-center max-w-4xl mx-auto w-full">
                {/* Section Title */}
                <span className="font-montserrat text-[9px] sm:text-xs uppercase tracking-[0.3em] text-soft-black mb-4 block">
                    What Makes Her Special
                </span>

                {/* Animation Area */}
                {!showFinal ? (
                    <div className="min-h-[200px] sm:min-h-[240px] flex items-center justify-center">
                        <div ref={letterRef} className="text-center">
                            {currentLetter && (
                                <>
                                    {/* Big Letter */}
                                    <div
                                        className="font-playfair text-rose-gold font-bold leading-none mb-3"
                                        style={{ fontSize: 'clamp(5rem, 22vw, 10rem)' }}
                                    >
                                        {currentLetter.letter}
                                    </div>

                                    {/* Meaning */}
                                    <p className="font-playfair text-elegant-black text-lg sm:text-xl md:text-2xl italic mb-1">
                                        {currentLetter.meaning}
                                    </p>

                                    {/* Compliment */}
                                    <p className="font-montserrat text-soft-black text-xs sm:text-sm">
                                        {currentLetter.compliment}
                                    </p>

                                    {/* Progress dots */}
                                    <div className="flex justify-center gap-1.5 mt-4">
                                        {letters.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${idx <= currentIndex ? 'bg-rose-gold' : 'bg-rose-gold/30'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    /* Final State - All letters with meanings */
                    <div className="animate-[fadeIn_0.8s_ease-out]">
                        {/* ASONIA spelled out */}
                        <div className="flex justify-center gap-0.5 sm:gap-1 md:gap-2 mb-6">
                            {letters.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="font-playfair text-rose-gold font-bold"
                                    style={{ fontSize: 'clamp(2rem, 9vw, 4.5rem)' }}
                                >
                                    {item.letter}
                                </span>
                            ))}
                        </div>

                        {/* All meanings grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mt-6">
                            {letters.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-rose-gold/10"
                                >
                                    <span className="font-playfair text-rose-gold text-xl sm:text-2xl font-bold">
                                        {item.letter}
                                    </span>
                                    <p className="font-montserrat text-elegant-black text-xs sm:text-sm font-medium mt-1">
                                        {item.meaning}
                                    </p>
                                    <p className="font-montserrat text-soft-black text-[9px] sm:text-[10px] mt-0.5 leading-tight">
                                        {item.compliment}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
});

NameAnimation.displayName = 'NameAnimation';
