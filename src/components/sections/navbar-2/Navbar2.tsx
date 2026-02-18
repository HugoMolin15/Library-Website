'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown,
    Menu,
    X,
    DollarSign,
    Globe,
    Zap,
    Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Navbar2() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

    // Lock body scroll when mobile menu is open - NOT NEEDED ANYMORE since it's not full screen
    // But maybe useful if it gets very long. For now, let's remove it as requested "expand the nav".

    const features = [
        {
            title: 'Revenue',
            description: 'Track revenue by source',
            icon: DollarSign,
            color: 'bg-green-500',
            bgColor: 'bg-[#1A2C24]', // Dark green tint for card bg
            iconColor: 'text-white',
        },
        {
            title: 'Realtime',
            description: 'Live visitor map and feed',
            icon: Globe,
            color: 'bg-indigo-500',
            bgColor: 'bg-[#1E1E2E]', // Dark indigo tint
            iconColor: 'text-white',
        },
        {
            title: 'Performance',
            description: 'Monitor your web vitals',
            icon: Zap,
            color: 'bg-amber-500',
            bgColor: 'bg-[#2A2218]', // Dark amber tint
            iconColor: 'text-white',
        },
        {
            title: 'Profiles',
            description: 'Identify returning visitors',
            icon: Users,
            color: 'bg-pink-500',
            bgColor: 'bg-[#2A1824]', // Dark pink tint
            iconColor: 'text-white',
        },
    ];

    return (
        <motion.nav
            layout
            initial={{ borderRadius: 24 }} // rounded-3xl approx
            animate={{ borderRadius: 24 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
                "fixed top-4 left-0 right-0 mx-auto z-50",
                "bg-[#0D0E12] border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden",
                "w-[90%] md:w-auto md:max-w-2xl"
            )}
            onMouseLeave={() => setIsFeaturesOpen(false)}
        >
            <motion.div layout className="flex items-center justify-between px-4 py-2 min-h-[50px]">
                {/* Logo */}
                <div className="flex items-center gap-2 shrink-0">
                    <Link href="#" className="flex items-center justify-center bg-white/10 rounded-full w-8 h-8 hover:bg-white/20 transition-colors">
                        <div className="w-4 h-4 rounded-full border-2 border-white/80" />
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
                    <div
                        className="relative group px-2 py-1 cursor-pointer"
                        onMouseEnter={() => setIsFeaturesOpen(true)}
                    >
                        <button className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer" onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}>
                            Features <ChevronDown size={14} className={cn("transition-transform duration-200", isFeaturesOpen ? "rotate-180" : "")} />
                        </button>
                    </div>

                    <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
                    <Link href="#" className="hover:text-white transition-colors">Blog</Link>
                    <Link href="#" className="hover:text-white transition-colors">Docs</Link>
                </div>

                {/* Auth Buttons (Desktop) */}
                <div className="hidden md:flex items-center gap-4 shrink-0">
                    <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Login</Link>
                    <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full px-5 py-1.5 h-auto text-sm font-semibold shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] transition-all duration-300 cursor-pointer">
                        Register
                    </Button>
                </div>

                {/* Mobile Toggle & Actions */}
                <div className="flex items-center md:hidden gap-3 shrink-0">
                    <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Login</Link>
                    <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full px-4 py-1.5 h-auto text-xs font-semibold shadow-lg shadow-indigo-500/20 cursor-pointer">
                        Register
                    </Button>
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            setIsFeaturesOpen(false); // Close features if switching modes
                        }}
                        className="text-gray-300 hover:text-white p-1"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.div>

            {/* Expanded Content */}
            <AnimatePresence>
                {(isFeaturesOpen || isMobileMenuOpen) && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-4 pt-2">

                            {/* Desktop Features Grid */}
                            {isFeaturesOpen && !isMobileMenuOpen && (
                                <div className="grid grid-cols-2 gap-2">
                                    {features.map((feature, idx) => (
                                        <Link key={idx} href="#" className={cn(feature.bgColor, "group/card relative p-3 rounded-xl flex items-center gap-3 hover:bg-white/5 transition-colors border border-white/5 hover:border-white/10")}>
                                            <div className={cn(feature.color, "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg")}>
                                                <feature.icon size={16} className="text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold text-sm mb-0.5">{feature.title}</h4>
                                                <p className="text-gray-400 text-[10px] leading-tight">{feature.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* Mobile Menu Content */}
                            {isMobileMenuOpen && (
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3 px-1">Features</h3>
                                        <div className="grid grid-cols-1 gap-2">
                                            {features.map((feature, idx) => (
                                                <Link key={idx} href="#" className={cn(feature.bgColor, "p-3 rounded-xl flex items-center gap-3 border border-white/5")}>
                                                    <div className={cn(feature.color, "w-8 h-8 rounded-full flex items-center justify-center shrink-0")}>
                                                        <feature.icon size={16} className="text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                                                        <p className="text-gray-400 text-[10px]">{feature.description}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <Link href="#" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Pricing</Link>
                                        <Link href="#" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Blog</Link>
                                        <Link href="#" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Docs</Link>
                                    </div>
                                </div>
                            )}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
