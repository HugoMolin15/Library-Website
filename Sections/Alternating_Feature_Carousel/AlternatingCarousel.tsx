'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselItem {
    id: number;
    type: 'text' | 'image';
    content?: string;
    author?: string;
    role?: string;
}

const items: CarouselItem[] = [
    {
        id: 1,
        type: 'text',
        content: "From start to finish, they were professional, efficient, and downright friendly. The software they use for sizing and quoting is genius—saved me time and money.",
        author: "Kylie Jefferson",
        role: "Homeowner"
    },
    {
        id: 2,
        type: 'image',
    },
    {
        id: 3,
        type: 'text',
        content: "I was skeptical at first, but Manatee blew me away with their efficiency. No hidden costs, no surprises—just a straightforward, hassle-free experience.",
        author: "Tomas Gibson",
        role: "Homeowner"
    },
    {
        id: 4,
        type: 'image',
    },
    {
        id: 5,
        type: 'text',
        content: "The best investment we've made for our home. The team transition was seamless and the results speak for themselves.",
        author: "Sarah Chen",
        role: "Property Manager"
    },
    {
        id: 6,
        type: 'image',
    }
];

export function AlternatingCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our experience<br />runs deep</h2>
                        <p className="text-gray-500 text-lg">Here are just some of the things people love about Manatee</p>
                    </div>
                    <div className="hidden md:flex gap-2">
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
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="min-w-[320px] md:min-w-[400px] h-[500px] snap-start"
                        >
                            {item.type === 'text' ? (
                                <div className="w-full h-full bg-[#2D3339] rounded-[8px] p-8 flex flex-col justify-between relative overflow-hidden group">
                                    <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                                        "{item.content}"
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden">
                                            {/* Placeholder for small avatar */}
                                            <div className="w-full h-full bg-gray-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm">{item.author}</h4>
                                            <p className="text-gray-400 text-xs">{item.role}</p>
                                        </div>
                                    </div>

                                    {/* Green accent shape from reference */}
                                    <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 bg-[#059669] opacity-20 blur-2xl rounded-full" />
                                </div>
                            ) : (
                                <div className="w-full h-full bg-gray-200 rounded-[8px] flex items-center justify-center overflow-hidden relative group">
                                    {/* Placeholder for photo */}
                                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                        <div className="w-24 h-24 rounded-full bg-gray-400 opacity-50 border-4 border-white/20 flex items-center justify-center">
                                            <span className="text-white font-black text-2xl">IMG</span>
                                        </div>
                                    </div>

                                    {/* Subtle overlay on hover */}
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <div className="flex md:hidden justify-center gap-4 mt-8">
                    <button
                        onClick={() => scroll('left')}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ChevronRight size={20} className="text-gray-600" />
                    </button>
                </div>
            </div>

            <style jsx global>{`
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
