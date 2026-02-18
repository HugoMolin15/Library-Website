'use client';

import React from 'react';

export function HealthHero() {
    return (
        <section className="relative w-full h-[100vh] overflow-hidden flex items-center">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">

                <div className="w-full h-full bg-[#03453d]" />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
                <div className="max-w-3xl flex flex-col gap-6 md:gap-8">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.05] tracking-tight">
                        Sexual Health <br /> treatments tailored <br /> to your needs
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl max-w-lg leading-relaxed">
                        Join tens of thousands who have already transformed their lives. Medication kits tailored to your unique needs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                        <button className="w-full sm:w-auto bg-black text-white hover:bg-black/90 transition-all duration-200 rounded-full py-4 px-10 font-medium text-lg cursor-pointer shadow-none">
                            Get Started
                        </button>
                        <button className="w-full sm:w-auto bg-white text-black border border-[#D1D1D1] hover:bg-[#F5F5F5] transition-colors duration-200 rounded-full py-4 px-10 font-medium text-lg cursor-pointer shadow-none">
                            See If You Are Eligible
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
