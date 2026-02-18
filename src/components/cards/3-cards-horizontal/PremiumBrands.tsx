'use client';

import React from 'react';
import Grainient from './Grainient';

const PremiumBrands: React.FC = () => {
    const brands = [
        {
            id: 'aether',
            title: 'Aether Finance',
            desc: 'Protected executive video assets from high-frequency deepfake phishing.',
            icon: 'account_balance',
            color: '#5227FF',
            gradient: {
                color1: "#00A3FF",
                color2: "#0500FF",
                color3: "#01081A"
            }
        },
        {
            id: 'lumina',
            title: 'Lumina Health',
            desc: 'Neutralized AI-generated medical misinformation campaigns across 12 regions.',
            icon: 'health_and_safety',
            color: '#10b981',
            gradient: {
                color1: "#10B981",
                color2: "#065F46",
                color3: "#022C22"
            }
        },
        {
            id: 'vanguard',
            title: 'Vanguard Retail',
            desc: 'Eliminated synthetic "clone" storefronts using real-time domain forensics.',
            icon: 'storefront',
            color: '#ffaa40',
            gradient: {
                color1: "#FFAA40",
                color2: "#B45309",
                color3: "#451A03"
            }
        }
    ];

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {brands.map((brand, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-[12px] overflow-hidden border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] flex flex-col group"
                    >
                        {/* Icon Header Section with Grainient */}
                        <div className="h-48 bg-[#0D1B1E] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                                <Grainient
                                    color1={brand.gradient.color1}
                                    color2={brand.gradient.color2}
                                    color3={brand.gradient.color3}
                                    timeSpeed={0.15}
                                    warpAmplitude={30}
                                    noiseScale={1.5}
                                />
                            </div>

                            <div
                                className="z-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl border border-white/10 backdrop-blur-md bg-white/10 transition-transform duration-500 group-hover:scale-105"
                            >
                                <span
                                    className="material-icons text-4xl text-white"
                                >
                                    {brand.icon}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                            <h4 className="font-normal text-[#0D1B1E] mb-3 text-[18px] tracking-tight">
                                {brand.title}
                            </h4>

                            <p className="text-[15px] text-gray-500 mb-8 flex-grow leading-relaxed font-normal">
                                {brand.desc}
                            </p>

                            <button
                                className="w-full bg-[#0D1B1E] hover:bg-black text-white text-[13px] uppercase tracking-widest font-medium py-4 px-2 rounded-[6px] transition-all shadow-sm active:scale-[0.98] whitespace-nowrap cursor-pointer"
                            >
                                Access Forensic Case
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PremiumBrands;
