'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function CommunityCta() {
    return (
        <section className="w-full py-12 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#F8FAFC] rounded-[16px] overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-stretch">

                        {/* Left Side: Visual - Fills height to match text on desktop, fixed height on mobile */}
                        <div className="w-full lg:w-1/2 h-[400px] lg:h-auto bg-gray-200 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 shadow-inner order-1 lg:order-1">
                            <div className="text-gray-400 font-black text-4xl opacity-30">IMAGE</div>
                        </div>

                        {/* Right Side: Content & Button */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 lg:gap-8 p-8 md:p-12 lg:p-16 order-2 lg:order-2">
                            <div className="space-y-6">
                                <h3 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight lg:whitespace-nowrap">
                                    Electrify your community
                                </h3>
                                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                                    Manatee was developed to make it easy for entire communities to electrify. By facilitating group buys & bulk deals on our platform, we end up with enough market power to offer you quality installations for wholesale prices. And by getting an installation done with Manatee, you'll help others in your community get access to better prices, too.
                                </p>
                            </div>

                            <button className="inline-flex items-center justify-center bg-black hover:bg-black/90 text-white rounded-full px-10 py-5 w-fit min-w-[220px] transition-all duration-200 font-bold text-lg cursor-pointer shadow-none">
                                Get a quote
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
