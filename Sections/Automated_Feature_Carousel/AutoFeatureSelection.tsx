'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StepItem {
    id: number;
    number: string;
    title: string;
    description: string;
}

const steps: StepItem[] = [
    {
        id: 1,
        number: '01',
        title: 'Stay in the loop',
        description: 'Designed to help you manage the flow of business and personal communication.',
    },
    {
        id: 2,
        number: '02',
        title: 'Express yourself',
        description: 'Tailor your workspace to reflect your personality and boost your productivity.',
    },
    {
        id: 3,
        number: '03',
        title: 'Get ready for the future',
        description: 'Prepare for the upcoming digital era with tools designed for the next generation of work.',
    },
    {
        id: 4,
        number: '04',
        title: 'Align Work with Meaning',
        description: 'Connect your daily tasks to higher goals and find deeper satisfaction in your achievements.',
    }
];

const AUTOPLAY_DURATION = 4000; // 4 seconds

export function AutoFeatureSelection() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % steps.length);
        }, AUTOPLAY_DURATION);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Side: Minimalist List with Integrated Progress Bars */}
                    <div className="w-full lg:w-[450px] flex flex-col">
                        <div className="flex flex-col">
                            {steps.map((step, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div
                                        key={step.id}
                                        className={cn(
                                            "relative pt-1 pb-6 transition-opacity duration-300",
                                            !isActive && "opacity-60"
                                        )}
                                    >
                                        {/* Individual Divider / Progress Bar */}
                                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-100">
                                            {isActive && (
                                                <motion.div
                                                    key={activeIndex}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: AUTOPLAY_DURATION / 1000, ease: "linear" }}
                                                    className="h-full bg-black shadow-[0_0_8px_rgba(0,0,0,0.1)]"
                                                />
                                            )}
                                        </div>

                                        <div className="mt-6 flex justify-between items-baseline mb-2">
                                            <h4 className="text-xl md:text-2xl font-semibold text-black tracking-tight">
                                                {step.title}
                                            </h4>
                                            <span className="text-base font-medium text-gray-400 tabular-nums">
                                                {step.number}
                                            </span>
                                        </div>

                                        <AnimatePresence initial={false}>
                                            {isActive && (
                                                <motion.p
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                                    className="text-gray-500 text-sm md:text-base leading-relaxed overflow-hidden max-w-[90%]"
                                                >
                                                    {step.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side: Reverted Placeholder Images and Animations */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center h-[350px] md:h-[450px] lg:h-[600px]">
                        <div className="relative w-full h-full lg:max-w-lg overflow-hidden rounded-3xl bg-gray-100 shadow-inner border border-gray-100/50">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-20%", opacity: 0 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 flex items-center justify-center bg-gray-200"
                                >
                                    <div className="flex items-center justify-center w-32 h-32 md:w-56 md:h-56 rounded-full bg-gray-300 border-8 border-white/20">
                                        <span className="text-7xl md:text-9xl font-black text-white drop-shadow-md">
                                            {steps[activeIndex].id}
                                        </span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
