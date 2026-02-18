'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

/* --- Simplified Local UI Components to match the request --- */

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`flex bg-[#F9FAFB] rounded-2xl overflow-hidden transition-all duration-300 ${className}`}>
        {children}
    </div>
);

const Button = ({ children, className = "", variant = "primary" }: { children: React.ReactNode, className?: string, variant?: string }) => (
    <button className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.98] rounded-full cursor-pointer whitespace-nowrap ${variant === "primary"
        ? "bg-black text-white hover:bg-black/90"
        : "bg-white border-2 border-black text-black hover:bg-black hover:text-white"
        } ${className}`}>
        {children}
    </button>
);

/* --- The Main Component --- */

export default function HorizontalTextImageCard() {
    return (
        <div className="w-full max-w-5xl flex flex-col items-center gap-12 mx-auto py-12 px-6">
            {/* Horizontal Card Section */}
            <div className="flex flex-col gap-3 w-full">
                <Card className="flex-col md:flex-row border border-gray-100 shadow-sm">
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B1E] mb-4 leading-tight">
                            Barry Geraghty’s blog Vango runs unchained up in trip.
                        </h3>
                        <p className="text-gray-500 mb-8 text-base leading-relaxed">
                            William Hill ambassador Barry Geraghty previews Saturday’s races
                            at Uttoxeter, Kempton, and Thurles.
                        </p>
                        <div>
                            <Button className="px-8 py-4">
                                Learn More
                                <ChevronRight size={20} />
                            </Button>
                        </div>
                    </div>
                    <div className="relative w-full md:max-w-md min-h-[300px] shrink-0 order-first md:order-last bg-gray-200 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 font-bold uppercase tracking-widest text-xl">
                            Image Placeholder
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
