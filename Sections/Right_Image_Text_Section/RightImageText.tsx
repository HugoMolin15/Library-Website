'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function RightImageText() {
    return (
        <section className="w-full bg-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Text Side - Left on Desktop, Bottom on Mobile */}
                <div className="flex flex-col gap-6 items-start text-left order-2 lg:order-1">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight">
                            Start your journey <br className="hidden md:block" /> with confidence.
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            Unlock the potential of your ideas with our comprehensive toolkit. From initial concept to final deployment, we provide the resources you need to succeed in a digital-first world.
                        </p>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4 justify-start">
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-black/90 transition-all duration-200 cursor-pointer">
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Image Side - Right on Desktop, Top on Mobile */}
                <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-gray-200 flex items-center justify-center order-1 lg:order-2">
                    <span className="text-gray-400 font-bold uppercase tracking-widest italic opacity-50">Image Placeholder</span>
                </div>
            </div>
        </section>
    );
}
