'use client';

import React from 'react';
import Image from 'next/image';

/* --- Simplified Local UI Components --- */

const Card = ({ children, className = "", style = {} }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
    <div className={`overflow-hidden isolate ${className}`} style={style}>
        {children}
    </div>
);

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${className}`}>
        {children}
    </span>
);

/* --- Main Component --- */

export default function ImageTextCard() {
    return (
        <Card
            className="relative w-full max-w-[340px] h-[450px] rounded-[20px] border-none shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-transparent"
            style={{
                outline: '1px solid transparent',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden'
            }}
        >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=2000&auto=format&fit=crop"
                    alt="Potted plant"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay Content */}
            <div className="absolute left-2 right-2 bottom-2">
                <div className="p-6 rounded-xl bg-black/30 backdrop-blur-lg border border-white/10 shadow-lg">
                    <Badge className="bg-indigo-600 text-white border-0 mb-3">
                        Design
                    </Badge>
                    <h3 className="text-xl font-bold leading-normal text-white">
                        Everything you need to know About UI/UX Design.
                    </h3>
                </div>
            </div>
        </Card>
    );
}
