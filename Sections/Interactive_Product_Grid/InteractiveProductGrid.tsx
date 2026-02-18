'use client';

import React, { useState, useRef } from 'react';
import { Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Grinding and brewing in one device",
        description: "Experience the ultimate convenience with our integrated grinding and brewing system. Freshly ground beans every time for the perfect cup.",
        details: "High-precision ceramic grinder with adjustable settings to match your taste profile."
    },
    {
        id: 2,
        title: "Automatic tamping",
        description: "Perfect pressure every time. Our automated tamping system ensures consistent extraction and rich crema without the manual effort.",
        details: "Constant 15kg pressure application for professional-grade espresso quality at home."
    },
    {
        id: 3,
        title: "Aroma balance system",
        description: "Customize your coffee's character. Choose from three different aroma profiles to perfectly match your morning mood or afternoon break.",
        details: "Advanced water flow control system that extracts maximum flavor from every bean."
    },
    {
        id: 4,
        title: "Compact design",
        description: "Sleek, modern, and space-saving. Designed to fit perfectly in any kitchen without compromising on professional performance.",
        details: "Minimal footprint with maximum efficiency. Engineered for modern living spaces."
    }
];

export function InteractiveProductGrid() {
    const [openId, setOpenId] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.4;
            const newScrollLeft = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full h-[85vh] bg-white flex flex-col py-12 overflow-hidden">
            <div className="px-6 md:px-12 lg:px-24 mb-12">
                <h2 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] max-w-2xl leading-tight">
                    Make every coffee moment perfect with Nivona <br />
                    Cube 4. Compact, easy, and built for your daily brew
                </h2>
            </div>

            <div
                ref={scrollRef}
                className="flex-grow relative flex items-center px-6 md:px-12 lg:px-24 gap-4 overflow-x-auto no-scrollbar pb-12 scroll-smooth"
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[32vw] h-full rounded-[12px] bg-gray-100 relative overflow-hidden group cursor-default"
                    >
                        {/* Gray Placeholder */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-300 font-bold text-4xl opacity-50 tracking-widest uppercase">Product Showcase</span>
                        </div>

                        {/* Bottom Bar (Initial State) */}
                        <div className="absolute bottom-0 inset-x-0 p-8 flex items-center justify-between bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none">
                            <span className="text-white text-base font-medium z-10">{item.title}</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenId(item.id);
                                }}
                                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white cursor-pointer hover:bg-white/40 transition-all duration-300 pointer-events-auto active:scale-90"
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Glassmorphism Overlay */}
                        <AnimatePresence>
                            {openId === item.id && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                    className="absolute inset-0 z-30 bg-black/10 backdrop-blur-[30px] p-10 flex flex-col justify-center text-white"
                                >
                                    <button
                                        onClick={() => setOpenId(null)}
                                        className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white cursor-pointer hover:bg-white/40 transition-all active:scale-95"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>

                                    <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
                                    <p className="text-white/90 text-base leading-relaxed mb-8">
                                        {item.description}
                                    </p>
                                    <div className="pt-8 border-t border-white/20">
                                        <p className="text-white/70 text-sm italic leading-relaxed">
                                            {item.details}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="px-6 md:px-12 lg:px-24 mt-6 flex gap-3">
                <button
                    onClick={() => scroll('left')}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    <ChevronRight size={20} className="text-gray-600" />
                </button>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
