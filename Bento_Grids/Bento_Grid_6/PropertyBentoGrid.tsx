'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export function PropertyBentoGrid() {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* Card 1: Unified dashboard - White */}
                    <div className="col-span-1 row-span-1 bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-black mb-3">Unified dashboard</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                                Track all your properties, income, and growth metrics in one intuitive interface.
                            </p>
                        </div>

                        {/* Placeholder: Dashboard Visual */}
                        <div className="flex-grow bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gray-200/50 flex flex-col items-center justify-center gap-2">
                                <div className="w-1/2 h-2 bg-gray-300 rounded-full" />
                                <div className="w-1/3 h-2 bg-gray-300 rounded-full opacity-60" />
                                <div className="w-2/3 h-24 mt-4 bg-gray-300/40 rounded-xl relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-300/60 transition-transform duration-700 group-hover:scale-y-110 origin-bottom" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Collaborative - Black */}
                    <div className="col-span-1 row-span-1 bg-neutral-900 rounded-[2.5rem] p-8 flex flex-col text-white shadow-xl">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-3">Collaborative</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Sub-agents work together seamlessly to handle complex scenarios, achieving superior results.
                            </p>
                        </div>

                        {/* Placeholder: Globe/Avatars Visual */}
                        <div className="flex-grow bg-neutral-800 rounded-2xl flex items-center justify-center border border-neutral-700 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full border border-neutral-700 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-neutral-700/50 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-neutral-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Smart homes - Vertical (Right side) */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 flex flex-col shadow-sm">
                        <div className="flex flex-col items-center text-center mb-8">
                            <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-6 shadow-sm border border-gray-100">
                                Sustainable
                            </span>
                            <h3 className="text-2xl font-bold text-black mb-3">Smart homes.<br />Smarter investments</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                                Data-driven insights to help you secure the best eco-homes for the short-term rental market. High demand. High returns.
                            </p>
                        </div>

                        {/* Placeholder: Image area */}
                        <div className="flex-grow bg-gray-200 rounded-3xl flex items-center justify-center overflow-hidden relative">
                            <div className="absolute inset-0 bg-gray-300/30 flex items-center justify-center">
                                <div className="w-2/3 h-2/3 bg-gray-400/20 rounded-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: From single assets - Horizontal (Bottom) */}
                    <div className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-[#FEF9E1] to-[#FFE5CF] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-sm">
                        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                            <h3 className="text-3xl font-bold text-black mb-4">From single assets<br />to a rental empire</h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-[360px]">
                                Our coordinated sub-agents handle the complexities of property management, leaving you with nothing but consistent monthly returns.
                            </p>
                            <button className="bg-neutral-900 text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-black transition-colors flex items-center gap-2 group cursor-pointer active:scale-95 duration-200">
                                Start investing
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Placeholder: Agents Visual */}
                        <div className="w-full md:w-1/2 h-full min-h-[220px] bg-white/60 backdrop-blur-sm rounded-3xl p-6 flex flex-col gap-4 border border-white/40">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center px-1">
                                        <div className="w-24 h-2 bg-gray-200 rounded-full" />
                                        <div className="w-16 h-2 bg-gray-200 rounded-full opacity-60" />
                                    </div>
                                    <div className="w-full h-8 bg-gray-200/50 rounded-lg relative overflow-hidden">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-green-400/20"
                                            style={{ width: i === 1 ? '85%' : '60%' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
