'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Fingerprint,
    Globe,
    History,
    Laptop,
    MonitorSmartphone,
    ShieldCheck,
    Timer,
    User,
    Zap,
    CircleDashed,
    Activity,
    LineChart,
    PieChart,
    ChevronRight,
    Smile,
    Shield,
    ShoppingBag
} from 'lucide-react';
import { cn } from '@/lib/utils';


// Helper components
const StatusDot = ({ className }: { className?: string }) => (
    <div className={cn("w-2 h-2 rounded-full", className)} />
);

const HeatmapGrid = () => {
    // Generate a 10x7 grid or similar
    // Just a visual representation, doesn't need real data
    const rows = 5;
    const cols = 26;
    return (
        <div className="flex flex-col gap-1 w-full overflow-hidden">
            {Array.from({ length: rows }).map((_, r) => (
                <div key={r} className="flex gap-1">
                    {Array.from({ length: cols }).map((_, c) => {
                        // Random opacity for visual effect
                        const active = Math.random() > 0.8;
                        const color = active
                            ? (Math.random() > 0.5 ? 'bg-indigo-500' : 'bg-green-400')
                            : 'bg-gray-100';

                        return (
                            <div key={c} className={cn("w-2 h-2 rounded-full shrink-0", color)} />
                        )
                    })}
                </div>
            ))}
        </div>
    );
}

export function BentoGrid1() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Card 1: Visitor Profiles */}
                    <div className="bg-white rounded-lg p-5 border border-[#E0E0E0] shadow-[0_2px_4px_rgba(0,0,0,0.05)] flex flex-col h-full">
                        {/* Visual / Dashboard Part */}
                        <div className="mb-8 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm relative overflow-hidden">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-inner" />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-gray-900">Ginormous Ant</h3>
                                            <Fingerprint className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <StatusDot className="bg-green-500" />
                                            <span className="text-xs text-gray-500">Online</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Meta Info */}
                            <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
                                <span className="flex items-center gap-1"><span className="text-base">🇺🇸</span> Google</span>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div>
                                    <p className="text-xs text-gray-500 font-medium mb-1">First seen</p>
                                    <p className="text-sm font-semibold text-gray-900">Jul 15, 2024</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium mb-1">Sessions</p>
                                    <p className="text-sm font-semibold text-gray-900">12</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium mb-1">Revenue</p>
                                    <p className="text-sm font-semibold text-green-600">$249</p>
                                </div>
                            </div>

                            {/* Activity Heatmap */}
                            <div>
                                <p className="text-xs text-gray-500 font-medium mb-2">Activity</p>
                                <p className="text-xs text-gray-400 mb-3">702 events in the last 6 months</p>
                                <HeatmapGrid />
                            </div>
                        </div>

                        {/* Text Content Part */}
                        <div className="mt-auto">
                            <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center mb-4 text-pink-500">
                                <Smile className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Visitor Profiles</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                Every visitor gets a profile showing their complete journey.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                                    <History className="w-4 h-4 text-pink-500" /> Full session history
                                </li>
                                <li className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                                    <MonitorSmartphone className="w-4 h-4 text-pink-500" /> Cross-device tracking
                                </li>
                                <li className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                                    <Fingerprint className="w-4 h-4 text-pink-500" /> Identify logged-in users
                                </li>
                            </ul>
                            <Button variant="default" className="rounded-full px-6 group cursor-pointer bg-black text-white font-medium hover:bg-black/90 transition-all duration-200 shadow-none">
                                Explore profiles <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Card 2: Performance Metrics */}
                    <div className="bg-white rounded-lg p-5 border border-[#E0E0E0] shadow-[0_2px_4px_rgba(0,0,0,0.05)] flex flex-col h-full">
                        {/* Visual Part */}
                        <div className="flex-1 flex flex-col items-center justify-center py-12 mb-8 relative">
                            {/* Score Circle */}
                            <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                                {/* Simple SVG Circle */}
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="80" cy="80" r="70" stroke="#f3f4f6" strokeWidth="12" fill="none" />
                                    <circle cx="80" cy="80" r="70" stroke="#22c55e" strokeWidth="12" fill="none" strokeDasharray="440" strokeDashoffset="0" className="drop-shadow-sm" />
                                </svg>
                                <span className="absolute text-4xl font-bold text-gray-900">100</span>
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 mb-2">Perfect</h4>
                            <p className="text-center text-gray-500 text-sm max-w-xs mb-6">
                                All your visitors had a perfect experience. That&apos;s pretty remarkable.
                            </p>

                            {/* Legend */}
                            <div className="flex items-center gap-4 text-xs font-medium text-gray-600 mb-12">
                                <div className="flex items-center gap-1.5"><StatusDot className="bg-red-500" /> 0-49</div>
                                <div className="flex items-center gap-1.5"><StatusDot className="bg-yellow-500" /> 50-89</div>
                                <div className="flex items-center gap-1.5"><StatusDot className="bg-green-500" /> 90+</div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-5 gap-4 w-full px-4">
                                {[
                                    { label: 'CLS', val: '0.000', color: 'text-green-500' },
                                    { label: 'TTFB', val: '0.74s', color: 'text-green-500' },
                                    { label: 'FCP', val: '1.35s', color: 'text-green-500' },
                                    { label: 'LCP', val: '1.68s', color: 'text-green-500' },
                                    { label: 'INP', val: '136ms', color: 'text-green-500' },
                                ].map((m, i) => (
                                    <div key={i} className="text-center">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 border-b border-dotted border-gray-300 pb-0.5 inline-block">{m.label}</p>
                                        <p className={cn("text-sm font-bold", m.color)}>{m.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Text Content Part */}
                        <div className="mt-auto">
                            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mb-4 text-yellow-600">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Performance Metrics</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                Real user metrics showing how your site performs for actual visitors.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                                    <Activity className="w-4 h-4 text-yellow-500" /> Core Web Vitals tracking
                                </li>
                                <li className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                                    <PieChart className="w-4 h-4 text-yellow-500" /> Experience Score rating
                                </li>
                                <li className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                                    <LineChart className="w-4 h-4 text-yellow-500" /> Per-page breakdowns
                                </li>
                            </ul>
                            <Button variant="default" className="rounded-full px-6 group cursor-pointer bg-black text-white font-medium hover:bg-black/90 transition-all duration-200 shadow-none">
                                Explore performance <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                        </div>
                    </div>


                    {/* Card 3: Privacy-first */}
                    <div className="bg-white rounded-lg p-5 border border-[#E0E0E0] shadow-[0_2px_4px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div className="max-w-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy-first</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Privacy is our foundation, and we are fully GDPR compliant by default.
                            </p>
                        </div>
                        <div className="shrink-0 text-gray-200">
                            <Shield className="w-24 h-24 stroke-1" />
                        </div>
                    </div>

                    {/* Card 4: Integrations */}
                    <div className="bg-white rounded-lg p-5 border border-[#E0E0E0] shadow-[0_2px_4px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div className="max-w-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Integrations</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Connect Stripe to track revenue alongside your traffic.
                            </p>
                        </div>
                        <div className="shrink-0 flex items-center -space-x-4">
                            <div className="w-16 h-16 rounded-full bg-[#635BFF] flex items-center justify-center text-white font-bold text-2xl border-4 border-white shadow-sm z-30">S</div>
                            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white border-4 border-white shadow-sm z-20">
                                <span className="font-mono text-xs">dev</span>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-[#96BF48] flex items-center justify-center text-white border-4 border-white shadow-sm z-10">
                                <ShoppingBag className="w-8 h-8" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
