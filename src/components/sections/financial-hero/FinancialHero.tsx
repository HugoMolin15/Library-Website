'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FinancialHero() {
    return (
        <section className="w-full min-h-[700px] bg-[#F3F4F6] p-4 md:p-6 lg:p-8 flex items-center justify-center">
            <div className="max-w-[95vw] w-full grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 h-auto min-h-[600px] items-stretch">

                {/* Left Container: Content */}
                <div className="bg-white rounded-[8px] p-6 sm:p-8 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-between shadow-sm border border-gray-100/60">
                    <div className="flex flex-col gap-6 md:gap-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-medium text-[#1A1A1A] leading-[1.05] tracking-tight">
                            Reliable Financial <br className="hidden xl:block" /> Solutions for <br className="hidden xl:block" /> Business
                        </h1>
                        <p className="text-[#6B7280] text-base md:text-xl leading-relaxed max-w-xl">
                            Casbank provides reliable financial services for various business needs powered by the latest AI. We are pioneers in this service field, and the best among others.
                        </p>

                        <div className="flex flex-row items-center gap-3 sm:gap-4 mt-4 flex-nowrap">
                            <button className="bg-black text-white hover:bg-black/90 transition-all duration-200 rounded-full py-3 px-6 lg:py-4 lg:px-8 font-medium text-sm lg:text-base flex items-center justify-center gap-2 cursor-pointer group whitespace-nowrap flex-shrink-0 shadow-none">
                                Get Started Now
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                            <button className="bg-white text-black border border-[#D1D1D1] hover:bg-[#F5F5F5] transition-colors duration-200 rounded-full py-3 px-6 lg:py-4 lg:px-8 font-medium text-sm lg:text-base cursor-pointer group whitespace-nowrap flex-shrink-0 shadow-none">
                                View Live Demo
                            </button>
                        </div>
                    </div>

                    {/* Stats Footer */}
                    <div className="grid grid-cols-2 gap-8 mt-12 md:mt-20 border-t border-gray-100 pt-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1A1A1A]">20+</span>
                            <p className="text-[#6B7280] text-xs sm:text-sm md:text-base leading-relaxed">
                                Multinational businesses have used Cashbank
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1A1A1A]">4K+</span>
                            <p className="text-[#6B7280] text-xs sm:text-sm md:text-base leading-relaxed">
                                Daily transactions from around the world
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Container: Simple Placeholder */}
                <div className="bg-[#E5E7EB] rounded-[8px] h-[250px] sm:h-[300px] md:h-[400px] xl:h-full w-full shadow-sm flex-shrink-0" />

            </div>
        </section>
    );
}
