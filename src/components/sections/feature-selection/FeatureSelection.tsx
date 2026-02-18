'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeatureItem {
    id: number;
    title: string;
    description: string;
}

const features: FeatureItem[] = [
    {
        id: 1,
        title: 'Outdoor Unit',
        description: 'Houses the compressor, condenser coil, and reversing valve, and is typically located outside the building',
    },
    {
        id: 2,
        title: 'Indoor Unit',
        description: 'Heat pump is responsible for distributing conditioned air throughout the living or working space',
    },
    {
        id: 3,
        title: 'Ducted Indoor Unit',
        description: 'Distribute conditioned air throughout buildings via a network of ducts, ensuring consistent and efficient heating or cooling for every room',
    }
];

export function FeatureSelection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full flex-1 py-24 bg-[#F1F5F9] flex flex-col">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Side: Images */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center h-[350px] md:h-[450px] lg:h-[550px] order-1 lg:order-1">
                        <div className="relative w-full h-full lg:max-w-lg overflow-hidden rounded-3xl bg-gray-200 shadow-inner">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-20%", opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute inset-0 flex items-center justify-center bg-gray-300"
                                >
                                    <div className="flex items-center justify-center w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-400/50 border-4 border-white/30">
                                        <span className="text-6xl md:text-8xl font-black text-white drop-shadow-md">
                                            {features[activeIndex].id}
                                        </span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Side: Selection */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-2">
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveIndex(index)}
                                className={cn(
                                    "text-left p-6 md:p-8 rounded-2xl transition-all duration-300 border-2 cursor-pointer group bg-white",
                                    activeIndex === index
                                        ? "border-blue-500 shadow-xl shadow-blue-500/10"
                                        : "border-transparent hover:border-blue-200 shadow-sm"
                                )}
                            >
                                <h4 className={cn(
                                    "text-xl md:text-2xl font-bold mb-3 transition-colors",
                                    activeIndex === index ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                                )}>
                                    {feature.title}
                                </h4>
                                <p className={cn(
                                    "text-sm md:text-base leading-relaxed transition-colors",
                                    activeIndex === index ? "text-gray-600" : "text-gray-400 group-hover:text-gray-600"
                                )}>
                                    {feature.description}
                                </p>
                            </button>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
