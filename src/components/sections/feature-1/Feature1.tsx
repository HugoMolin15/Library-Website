'use client';

import React from 'react';

export function Feature1() {
    return (
        <section className="w-full bg-[#4F46E5] overflow-hidden min-h-[900px] flex">
            {/* Stacks vertically on mobile/tablet (< lg), horizontal on desktop (lg+) */}
            <div className="flex flex-col lg:flex-row w-full">

                {/* Left Content Side */}
                {/* items-center on mobile (center text), items-end on desktop (align right side of col) */}
                <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center lg:items-end relative z-10">

                    {/* Content Block */}
                    {/* Centered on mobile, Left-aligned on Desktop */}
                    <div className="w-full max-w-xl text-center lg:text-left lg:pr-12">

                        {/* Tag */}
                        <div className="flex justify-center lg:justify-start mb-6">
                            <h3 className="text-[#FBBF24] font-bold tracking-widest text-sm uppercase">
                                Personalization
                            </h3>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                            Deliver personalized communication flows that feel just like magic.
                        </h2>

                        <div className="space-y-6 text-indigo-100/90 text-lg leading-relaxed">
                            <p>
                                Experience the power of <strong className="text-white font-semibold">subscription data that works seamlessly with email marketing</strong> within the same powerful and easy platform. Customers don&apos;t just want individualized communications — they expect it.
                            </p>

                            {/* Quote Section */}
                            {/* Mobile: Top bar, centered. Desktop: Left sidebar, left aligned. */}
                            <div className="relative mt-8 flex flex-col items-center lg:block">
                                {/* The Yellow Bar: Horizontal on mobile, Vertical absolute on desktop */}
                                <div className="w-12 h-1.5 mb-4 lg:mb-0 lg:w-1.5 lg:h-auto lg:absolute lg:left-0 lg:top-1 lg:bottom-1 bg-[#FBBF24] rounded-full"></div>

                                <p className="text-indigo-200 text-base italic lg:pl-6">
                                    Rewrite the playbook on spray-and-pray mass email communications — speak <strong className="text-white not-italic">directly to your power users</strong> differently than your free trial users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Visual Side - Darker Blue Background */}
                <div className="w-full lg:w-1/2 bg-[#312e81] relative flex items-center justify-center p-8 md:p-16 overflow-hidden">
                    {/* Placeholder Image - Larger */}
                    <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl">
                        {/* Ensure image scales down on small screens so it doesn't push width */}
                        <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl shadow-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
