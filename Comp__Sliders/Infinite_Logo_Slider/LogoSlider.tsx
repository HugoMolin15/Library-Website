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
        <section className="w-full py-12 md:py-16 bg-[#F8F8FF] overflow-hidden relative">
            {/* Edge Gradients for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#F8F8FF] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#F8F8FF] to-transparent z-10 pointer-events-none" />

            <div className="logo-slider">
                <div className="logos-slide">
                    {[...logos, ...logos].map((logo, index) => (
                        <img key={`logo-1-${index}`} src={logo} alt="Partner" />
                    ))}
                </div>
                <div className="logos-slide">
                    {[...logos, ...logos].map((logo, index) => (
                        <img key={`logo-2-${index}`} src={logo} alt="Partner" />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .logo-slider {
                    display: flex;
                    overflow: hidden;
                    white-space: nowrap;
                    position: relative;
                }

                .logos-slide {
                    display: flex;
                    align-items: center;
                    animation: slide 40s infinite linear;
                    flex-shrink: 0;
                }

                .logos-slide img {
                    width: 120px;
                    height: 50px;
                    margin: 0 40px;
                    object-fit: contain;
                }

                @media (min-width: 768px) {
                    .logos-slide img {
                        width: 183px;
                        height: 83px;
                        margin: 0 45px;
                    }
                }

                @keyframes slide {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </section>
    );
}
