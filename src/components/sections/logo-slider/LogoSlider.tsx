'use client';

import React from 'react';

const logos = [
    "https://i.ibb.co/Vv5rkDK/api-partner-verzon.png",
    "https://i.ibb.co/J399KDg/api-partner-netflix.png",
    "https://i.ibb.co/TKT0F5L/api-partner-yelp.png",
    "https://i.ibb.co/HG6KR89/api-partner-adobe.png",
    "https://i.ibb.co/hMSJ1sg/api-partner-ring.png",
    "https://i.ibb.co/4RWQcMS/api-partner-nespresso.png"
];

export function LogoSlider() {
    return (
        <section className="w-full py-20 bg-white overflow-hidden relative group">
            {/* Premium Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex w-fit animate-marquee pause-on-hover">
                <div className="flex items-center gap-24 px-12">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={`logo-1-${index}`} className="flex-shrink-0">
                            <img
                                src={logo}
                                alt="Partner"
                                className="h-12 md:h-16 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-24 px-12">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={`logo-2-${index}`} className="flex-shrink-0">
                            <img
                                src={logo}
                                alt="Partner"
                                className="h-12 md:h-16 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                
                .pause-on-hover:hover {
                    animation-play-state: paused;
                }

                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
}
