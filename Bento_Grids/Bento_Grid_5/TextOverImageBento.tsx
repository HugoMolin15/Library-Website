'use client';

import React from 'react';

/* --- Standalone HeroUI-like components --- */

const Card = ({ children, className = "", isFooterBlurred = false }: { children: React.ReactNode, className?: string, isFooterBlurred?: boolean }) => (
    <div className={`relative overflow-hidden rounded-lg bg-white border border-[#E0E0E0] shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${className}`}>
        {children}
    </div>
);

const CardHeader = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`absolute top-0 left-0 w-full z-10 p-5 flex flex-col ${className}`}>
        {children}
    </div>
);

const CardFooter = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`absolute bottom-0 w-full z-10 flex items-center p-4 border-t border-white/20 ${className}`}>
        {children}
    </div>
);

const Button = ({ children, className = "", color = "primary", radius = "full", size = "sm" }: { children: React.ReactNode, className?: string, color?: string, radius?: string, size?: string }) => {
    const bgColor = color === "primary" ? "bg-[#3b59ff]" : "bg-white/20";
    const textColor = color === "primary" ? "text-white" : "text-white";
    return (
        <button className={`${bgColor} ${textColor} font-bold px-4 py-2 rounded-full text-[10px] uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer ${className}`}>
            {children}
        </button>
    );
};

/* --- Main Layout --- */

export default function TextOverImageBento() {
    return (
        <div className="max-w-[1240px] w-full gap-4 grid grid-cols-12 auto-rows-[300px] px-4 md:px-8">
            {/* Top Row: 3 Small Cards */}
            <Card className="col-span-12 sm:col-span-4 h-full">
                <div className="absolute inset-0 w-full h-full bg-gray-200 opacity-50" />
                <CardHeader className="top-1 flex-col items-start text-black">
                    <p className="text-[10px] text-black/60 uppercase font-black tracking-widest">What to watch</p>
                    <h4 className="font-black text-xl tracking-tight">Stream the Acme event</h4>
                </CardHeader>
            </Card>

            <Card className="col-span-12 sm:col-span-4 h-full">
                <div className="absolute inset-0 w-full h-full bg-gray-200 opacity-50" />
                <CardHeader className="top-1 flex-col items-start text-black">
                    <p className="text-[10px] text-black/60 uppercase font-black tracking-widest">Plant a tree</p>
                    <h4 className="font-black text-xl tracking-tight">Contribute to the planet</h4>
                </CardHeader>
            </Card>

            <Card className="col-span-12 sm:col-span-4 h-full">
                <div className="absolute inset-0 w-full h-full bg-gray-200 opacity-50" />
                <CardHeader className="top-1 flex-col items-start text-black">
                    <p className="text-[10px] text-black/60 uppercase font-black tracking-widest">Supercharged</p>
                    <h4 className="font-black text-xl tracking-tight">Creates beauty like a beast</h4>
                </CardHeader>
            </Card>

            {/* Bottom Row: 2 Larger Cards */}
            <Card isFooterBlurred className="w-full h-full col-span-12 sm:col-span-5">
                <div className="absolute inset-0 w-full h-full bg-gray-200 opacity-50" />
                <CardHeader className="top-1 flex-col items-start text-black">
                    <p className="text-[10px] text-black/60 uppercase font-black tracking-widest">New</p>
                    <h4 className="font-black text-3xl tracking-tighter">Acme camera</h4>
                </CardHeader>
            </Card>

            <Card isFooterBlurred className="w-full h-full col-span-12 sm:col-span-7">
                <div className="absolute inset-0 w-full h-full bg-gray-200 opacity-50" />
                <CardHeader className="top-1 flex-col items-start text-black">
                    <p className="text-[10px] text-black/60 uppercase font-black tracking-widest">Your day your way</p>
                    <h4 className="font-black text-2xl tracking-tight">Your checklist for better sleep</h4>
                </CardHeader>
            </Card>
        </div>
    );
}
