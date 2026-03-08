"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Spark The Magic.",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden mix-blend-screen">
            <div className="absolute inset-0 z-10 opacity-30">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-20 container mx-auto px-4 md:px-6 text-center mt-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-poppins font-light tracking-wide leading-[1.05] text-white drop-shadow-xl mb-8">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-2 sm:mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-white"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>
                     
                    <motion.p
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-8 mb-12 text-base md:text-2xl font-sans font-medium tracking-wide max-w-2xl mx-auto text-white drop-shadow-md"
                    >
                      We build digital experiences that drop jaws and break rules. Fast, vibrant, and undeniably luxury.
                    </motion.p>

                    <div
                        className="inline-block group relative bg-gradient-to-b from-white/20 to-transparent 
                        p-px rounded-full backdrop-blur-lg 
                        overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-shadow duration-300"
                    >
                      <Link href="/inquiry">
                        <Button
                            variant="ghost"
                            className="rounded-full px-8 py-6 md:px-12 md:py-8 text-sm md:text-lg font-bold uppercase tracking-widest backdrop-blur-md 
                            bg-white hover:bg-white text-black transition-transform duration-500 
                            hover:scale-105 pointer-events-auto"
                        >
                            <span className="opacity-100">
                                Let's Make Noise
                            </span>
                        </Button>
                      </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
