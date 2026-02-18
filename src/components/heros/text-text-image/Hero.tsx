import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-start mb-8 md:mb-16 px-8 md:px-16 lg:px-24 py-12 md:py-20 max-w-7xl mx-auto">
            <div className="max-w-2xl">
                <p className="text-[11px] font-normal text-[#12262B] uppercase tracking-widest mb-6">NEXT-GEN BRAND DEFENSE</p>
                <h1 className="text-[40px] font-medium text-[#0D1B1E] leading-[0.95] tracking-tighter mb-4 md:mb-8">
                    Shield Your Identity <br /> in the Synthetic Era.
                </h1>
            </div>
            <div className="max-w-lg lg:ml-auto pt-0 lg:pt-8">
                <p className="text-[16px] text-gray-500 mb-10 leading-relaxed font-medium">
                    Sentinel Veda deploys a proprietary neural layer to detect deepfakes, unauthorized brand clones, and AI-driven misinformation before they reach your audience.
                </p>
                <div className="flex gap-3 sm:gap-4 w-full">
                    <button className="flex-1 sm:flex-none rounded-full bg-black text-white font-medium hover:bg-black/90 px-4 sm:px-10 py-4 text-[13px] sm:text-[14px] transition-all duration-200 cursor-pointer shadow-none truncate">
                        Initialize Defense
                    </button>
                    <button className="flex-1 sm:flex-none rounded-full bg-white text-black font-medium border border-[#D1D1D1] hover:bg-[#F5F5F5] px-4 sm:px-10 py-4 text-[13px] sm:text-[14px] transition-all duration-200 cursor-pointer shadow-none truncate">
                        View Threat Map
                    </button>
                </div>
            </div>

            <div className="col-span-full rounded-[16px] overflow-hidden shadow-sm relative bg-[#F3F4F6] h-[400px] md:h-[600px] flex items-center justify-center mt-8 md:mt-12 border border-[#E8E9EB]">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 font-bold text-4xl select-none uppercase tracking-[0.2em]">Hero</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
