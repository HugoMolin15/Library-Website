'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function BentoGrid3() {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr lg:h-[700px]">

                    {/* Left Column (Stats & Visual) */}
                    <div className="flex flex-col gap-6 h-full">
                        {/* 75% Small Card */}
                        <div className="flex-1 bg-[#E2DFD8] rounded-[24px] p-8 flex flex-col justify-center min-h-[250px]">
                            <p className="text-[#6B6861] text-xs font-bold uppercase tracking-wider mb-4 leading-relaxed max-w-[200px]">
                                Regularly reviewing and analyzing expenses helps
                            </p>
                            <h3 className="text-3xl lg:text-4xl font-black text-[#1A1A1A] leading-tight mt-auto">
                                75% of households
                            </h3>
                        </div>
                        {/* Image Card (Bottom Left) */}
                        <div className="flex-1 bg-gray-200 rounded-[24px] overflow-hidden group relative min-h-[250px]">
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-400 font-black text-2xl opacity-30">IMAGE</span>
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                        </div>
                    </div>

                    {/* Middle Column (Large Tall Card) */}
                    <div className="h-full min-h-[500px] lg:min-h-0">
                        <div className="h-full bg-black rounded-[24px] overflow-hidden relative group p-6 md:p-8 flex flex-col justify-between">
                            {/* Placeholder Background */}
                            <div className="absolute inset-0 bg-gray-800 opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
                                    $3000+ Saved
                                </h3>
                            </div>

                            <div className="relative z-10 max-w-[280px]">
                                <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
                                    of income on dining out reduces savings by 5%
                                </p>
                                <p className="text-white/40 text-[10px] leading-relaxed">
                                    Elementum amet vitae hendrerit fringilla eu vel pellentesque ultricies arcu.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Visual & 24 Hours) */}
                    <div className="flex flex-col gap-6 h-full md:col-span-2 lg:col-span-1">
                        {/* Image Card (Top Right) */}
                        <div className="flex-1 bg-gray-200 rounded-[24px] overflow-hidden group relative min-h-[250px]">
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-400 font-black text-2xl opacity-30">IMAGE</span>
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                        </div>
                        {/* 24 Hours Green Card */}
                        <div className="flex-1 bg-[#55584D] rounded-[24px] p-8 flex flex-col justify-end min-h-[250px]">
                            <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-8">
                                24 hours
                            </h3>
                            <p className="text-white/60 text-[10px] leading-relaxed max-w-[240px]">
                                Lorem ipsum dolor sit amet consectetur. Elementum amet vitae hendrerit fringilla eu vel pellentesque ultricies arcu.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
