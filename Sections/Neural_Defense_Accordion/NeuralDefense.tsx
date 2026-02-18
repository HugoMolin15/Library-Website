'use client';

import React, { useState } from 'react';


const NeuralDefense: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            title: "Deepfake Forensics",
            description: "Advanced pixel-level analysis to distinguish between authentic media and AI-generated fabrications in real-time.",
            icon: "fingerprint",
            type: "gradient",
            gradientProps: {
                color1: "#2c262b",
                color2: "#7a69bf",
                color3: "#a094c7",
                timeSpeed: 0.25,
                colorBalance: 0,
                warpStrength: 1,
                warpFrequency: 5,
                warpSpeed: 2,
                warpAmplitude: 50,
                blendAngle: 0,
                blendSoftness: 0.05,
                rotationAmount: 500,
                noiseScale: 2,
                grainAmount: 0.1,
                grainScale: 2,
                grainAnimated: false,
                contrast: 1.5,
                gamma: 1,
                saturation: 1,
                centerX: 0,
                centerY: 0,
                zoom: 0.9,
            }
        },
        {
            title: "Automated Takedowns",
            description: "Instant API integration with major social platforms to flag and remove infringing synthetic content before it trends.",
            icon: "gavel",
            type: "gradient",
            gradientProps: {
                color1: "#2c262b",
                color2: "#df2a2a",
                color3: "#c794a6",
                timeSpeed: 0.25,
                colorBalance: 0,
                warpStrength: 1,
                warpFrequency: 5,
                warpSpeed: 2,
                warpAmplitude: 50,
                blendAngle: 0,
                blendSoftness: 0.05,
                rotationAmount: 500,
                noiseScale: 2,
                grainAmount: 0.1,
                grainScale: 2,
                grainAnimated: false,
                contrast: 1.5,
                gamma: 1,
                saturation: 1,
                centerX: 0,
                centerY: 0,
                zoom: 0.9,
            }
        },
        {
            title: "Cognitive Security",
            description: "We analyze the sentiment and rhetoric of AI-driven bot swarms to predict and neutralize coordinated brand attacks.",
            icon: "psychology",
            type: "gradient",
            gradientProps: {
                color1: "#2c262b",
                color2: "#19a117",
                color3: "#9dc794",
                timeSpeed: 0.25,
                colorBalance: 0,
                warpStrength: 1,
                warpFrequency: 5,
                warpSpeed: 2,
                warpAmplitude: 50,
                blendAngle: 0,
                blendSoftness: 0.05,
                rotationAmount: 500,
                noiseScale: 2,
                grainAmount: 0.1,
                grainScale: 2,
                grainAnimated: false,
                contrast: 1.5,
                gamma: 1,
                saturation: 1,
                centerX: 0,
                centerY: 0,
                zoom: 0.9,
            }
        }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-8 lg:gap-y-0 items-start">
            <div className="order-1 lg:col-start-1 lg:row-start-1 flex flex-col justify-end lg:pb-12">
                <p className="text-[11px] font-normal text-[#12262B] uppercase tracking-widest mb-4">NEURAL DEFENSE</p>

                <h2 className="text-[40px] font-medium text-[#0D1B1E] leading-[0.95] tracking-tighter mb-6">
                    Securing truth in a <br />
                    <span className="text-[#12262B]">world of synthetic</span> <br />
                    <span className="text-[#12262B]">deception</span>
                </h2>

                <p className="text-[16px] text-[#0D1B1E] mb-8 leading-relaxed max-w-sm font-normal">
                    The line between human and machine blurs. Sentinel Veda provides the cryptographic proof of authenticity for the modern web.
                </p>

                <button
                    className="bg-black text-white px-8 py-3.5 rounded-full text-[14px] font-bold transition-all duration-200 hover:bg-black/90 cursor-pointer shadow-none w-fit"
                >
                    Initialize Defense
                </button>
            </div>

            <div className="order-2 lg:order-none lg:col-start-2 lg:row-span-2 self-stretch min-h-[450px] lg:min-h-[750px]">
                <div className="relative h-full w-full bg-[#F3F4F6] rounded-[12px] overflow-hidden flex flex-col items-center justify-center p-0 group">

                    {/* Grid Background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    <div className="w-full h-full relative overflow-hidden">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 w-full h-full transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${activeIndex === index
                                    ? 'opacity-100 scale-100 rotate-0 blur-0'
                                    : 'opacity-0 scale-[1.08] rotate-1 blur-xl pointer-events-none'
                                    }`}
                            >
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-[120px] md:text-[180px] font-bold text-gray-400 select-none">
                                        {index + 1}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Soft Ambient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>


                </div>
            </div>

            <div className="order-3 lg:col-start-1 lg:row-start-2 w-full pt-4 lg:pt-0">
                <div className="w-full">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`border-t border-[#E8E9EB] w-full py-8 transition-all cursor-pointer group ${activeIndex === index ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="flex items-center gap-4">
                                <span className={`material-icons text-[20px] transition-colors duration-300 ease-in-out ${activeIndex === index ? 'text-[#0D1B1E]' : 'text-gray-400 group-hover:text-[#0D1B1E]'}`}>
                                    {item.icon}
                                </span>
                                <h3 className="text-[16px] font-medium text-[#0D1B1E]">
                                    {item.title}
                                </h3>
                                <span className={`ml-auto material-icons text-[18px] transition-colors duration-300 ease-in-out ${activeIndex === index ? 'text-[#0D1B1E]' : 'text-gray-300 group-hover:text-[#0D1B1E]'}`}>
                                    {activeIndex === index ? 'remove' : 'add'}
                                </span>
                            </div>

                            <div
                                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                                style={{ gridTemplateRows: activeIndex === index ? '1fr' : '0fr' }}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm font-normal pl-9 mt-4">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-[#E8E9EB] w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default NeuralDefense;
