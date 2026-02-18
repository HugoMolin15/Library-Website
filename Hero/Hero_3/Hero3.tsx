'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Zap, Heart } from 'lucide-react';

export function Hero3() {
    return (
        <div className="w-full bg-white relative overflow-hidden">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                    Revenue-first <br />
                    web analytics
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    See every visitor in realtime and witness the moment <br className="hidden md:block" />
                    they become a customer.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button className="px-8 py-6 text-base font-medium rounded-full bg-black hover:bg-black/90 text-white shadow-none w-72 sm:w-auto min-w-[160px] cursor-pointer transition-all duration-200">
                        Get started
                    </Button>
                    <Button variant="secondary" className="px-8 py-6 text-base font-medium rounded-full bg-white text-black border border-[#D1D1D1] hover:bg-[#F5F5F5] shadow-none w-72 sm:w-auto min-w-[160px] cursor-pointer transition-colors duration-200">
                        See demo
                    </Button>
                </div>
            </div>

            {/* Visual Section with Background */}
            <div className="w-full relative">
                {/* Background Image */}
                <div className="absolute inset-0 h-[500px] w-full -z-10 bg-[#5b21b6]">
                    <img
                        src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    {/* Strong Purple/Blue Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/90 to-purple-600/90 mix-blend-normal" />
                    {/* Grain/Noise Texture for that 'cloudy' feel */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                </div>

                {/* Gradient Fades for smoothness */}
                <div className="absolute inset-0 h-[500px] bg-gradient-to-b from-white/10 to-transparent -z-10"></div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
                    {/* Dashboard Image Placeholder */}
                    <div className="relative rounded-2xl md:rounded-3xl shadow-2xl bg-white p-2 md:p-4 border border-white/20 overflow-hidden">
                        <div className="aspect-[16/9] w-full bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center border border-gray-100">
                            <span className="text-gray-300 font-medium tracking-widest uppercase text-xs">Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 ring-1 ring-blue-100">
                            <Clock className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            <span className="text-gray-900">Lightweight script.</span>
                        </h3>
                        <p className="text-gray-500 leading-relaxed max-w-xs">
                            Under 1KB. Won&apos;t hurt your page speed or Core Web Vitals.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4 ring-1 ring-green-100">
                            <Clock className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            <span className="text-gray-900">5-minute setup.</span>
                        </h3>
                        <p className="text-gray-500 leading-relaxed max-w-xs">
                            One script tag. No confusing tag configuration or build steps.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4 ring-1 ring-purple-100">
                            <Heart className="w-6 h-6 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            <span className="text-gray-900">Independent.</span>
                        </h3>
                        <p className="text-gray-500 leading-relaxed max-w-xs">
                            No VC funding. We ship what users ask for, not what investors want.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
