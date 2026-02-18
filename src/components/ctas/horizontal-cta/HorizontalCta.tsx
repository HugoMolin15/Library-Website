'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function HorizontalCta() {
    return (
        <section className="w-full py-12 md:py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative w-full overflow-hidden rounded-[40px] bg-black min-h-[220px] flex items-center">
                    {/* Background Visual Overlay (Gray Placeholder Style) */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-700/50 to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-400/10 backdrop-blur-sm pointer-events-none skew-x-[-20deg] translate-x-12" />

                    <div className="relative z-10 w-full px-8 md:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Text */}
                        <div className="text-center lg:text-left max-w-2xl">
                            <h2 className="text-white text-2xl md:text-5xl font-bold tracking-tight leading-tight lg:whitespace-nowrap">
                                Ready to improve your <br className="hidden md:block" /> sales & conversions
                            </h2>
                        </div>

                        {/* Buttons - Force one line with larger hit targets on mobile */}
                        <div className="flex flex-row flex-nowrap items-center gap-3 md:gap-4 w-auto shrink-0">
                            <button className="whitespace-nowrap px-6 md:px-8 py-4 bg-white text-black border border-[#D1D1D1] font-bold rounded-full hover:bg-[#F5F5F5] hover:text-black transition-all duration-200 cursor-pointer text-sm md:text-base">
                                Book Demo
                            </button>
                            <button className="whitespace-nowrap px-6 md:px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-black/90 transition-all duration-200 cursor-pointer text-sm md:text-base">
                                Try Reelup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
