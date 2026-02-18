'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function LeftImageText() {
    return (
        <section className="w-full bg-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image Side - Left on Desktop, Top on Mobile */}
                <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 font-bold uppercase tracking-widest italic opacity-50">Image Placeholder</span>
                </div>

                {/* Text Side - Right on Desktop, Bottom on Mobile */}
                <div className="flex flex-col gap-6 items-start text-left lg:items-end lg:text-right">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight">
                            Design that speaks <br className="hidden md:block" /> louder than words.
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            We create digital experiences that blend aesthetic beauty with functional precision. Every pixel is crafted to tell a story, engaging your users from the first glance to the final interaction.
                        </p>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4 justify-start lg:justify-end">
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-black/90 transition-all duration-200 cursor-pointer">
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
