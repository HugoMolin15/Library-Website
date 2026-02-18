'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatItemProps {
    value: string;
    label: string;
    showStar?: boolean;
}

const StatItem = ({ value, label, showStar }: StatItemProps) => (
    <div className="flex flex-col items-center text-center px-4">
        <div className="flex items-center gap-2 mb-2">
            {showStar && <Star className="w-8 h-8 md:w-10 md:h-10 fill-black text-black" />}
            <span className="text-5xl md:text-7xl font-bold text-black tracking-tighter">
                {value}
            </span>
        </div>
        <p className="text-gray-500 text-sm md:text-base font-medium max-w-[200px]">
            {label}
        </p>
    </div>
);

export function StatsSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
                    <StatItem
                        value="120K+"
                        label="Active users tracking finances daily"
                    />
                    <StatItem
                        value="$3,200,000"
                        label="Funds managed through the app"
                    />
                    <StatItem
                        value="4.8"
                        label="Top rated on the App Store"
                        showStar
                    />
                </div>
            </div>
        </section>
    );
}
