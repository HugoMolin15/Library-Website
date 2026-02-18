
'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Box, Zap, Sparkles, Database, Shield, CreditCard, PanelsTopLeft, MousePointer2, Layers } from 'lucide-react';

const sidebarConfig = [
    {
        title: "Hero Sections",
        icon: PanelsTopLeft,
        items: [
            { title: "Hero 1", href: "/hero-1" },
            { title: "Hero 2", href: "/hero-2" },
            { title: "Hero 3", href: "/hero-3" },
            { title: "Hero 4", href: "/hero-4" },
            { title: "Hero 5", href: "/hero-5" },
        ],
    },
    {
        title: "Backgrounds",
        icon: Layers,
        items: [
            { title: "Aurora", href: "/aurora" },
            { title: "Grainient", href: "/grainient" },
            { title: "Dot Grid", href: "/dot-grid" },
        ],
    },
    {
        title: "Bento Grids",
        icon: Database,
        items: [
            { title: "Bento Grid 1", href: "/bento-grid-1" },
            { title: "Bento Grid 2", href: "/bento-grid-2" },
            { title: "Bento Grid 3", href: "/bento-grid-3" },
            { title: "Bento Grid 4", href: "/bento-grid-4" },
            { title: "Bento Grid 5", href: "/bento-grid-5" },
            { title: "Bento Grid 6", href: "/bento-grid-6" },
        ],
    },
    {
        title: "Sections",
        icon: Box,
        items: [
            { title: "Feature 1", href: "/feature-1" },
            { title: "Feature 2", href: "/feature-2" },
            { title: "Feature Selection", href: "/feature-selection" },
            { title: "Auto Feature Selection", href: "/auto-feature-selection" },
            { title: "Interactive Product Grid", href: "/interactive-product-grid" },
            { title: "Left Image Text", href: "/left-image-text" },
            { title: "Right Image Text", href: "/right-image-text" },
            { title: "Horizontal Text Image", href: "/horizontal-text-image" },
            { title: "Neural Defense", href: "/neural-defense" },
            { title: "Alternating Carousel", href: "/alternating-carousel" },
        ],
    },
    {
        title: "CTAs",
        icon: Zap,
        items: [
            { title: "Community CTA", href: "/community-cta" },
            { title: "Gradient CTA", href: "/gradient-cta" },
            { title: "Horizontal CTA", href: "/horizontal-cta" },
        ],
    },
    {
        title: "FAQ & Support",
        icon: Shield,
        items: [
            { title: "Accordion FAQ 1", href: "/accordion-faq-1" },
            { title: "FAQ Premium", href: "/faq-premium" },
        ],
    },
    {
        title: "Pricing",
        icon: CreditCard,
        items: [
            { title: "Pricing", href: "/pricing" },
        ],
    },
    {
        title: "Footers",
        icon: Layout,
        items: [
            { title: "Footer 1", href: "/footer-1" },
            { title: "Footer 2", href: "/footer-2" },
            { title: "Footer 3", href: "/footer-3" },
            { title: "Footer 4", href: "/footer-4" },
        ],
    },
    {
        title: "Special & Effects",
        icon: Sparkles,
        items: [
            { title: "Glass Icons", href: "/glass-icons" },
            { title: "Logo Slider", href: "/logo-slider" },
            { title: "Silk", href: "/silk" },
            { title: "Social Buttons", href: "/social-buttons" },
            { title: "Vertical Testimonials", href: "/vertical-testimonials" },
        ],
    },
];

export default function Home() {
    const [activeTab, setActiveTab] = React.useState('All');

    const filteredSections = activeTab === 'All'
        ? sidebarConfig
        : sidebarConfig.filter(section => section.title === activeTab);

    const allCount = sidebarConfig.reduce((acc, section) => acc + section.items.length, 0);
    const tabs = [
        { name: 'All', count: allCount },
        ...sidebarConfig.map(s => ({ name: s.title, count: s.items.length }))
    ];

    return (
        <div className="space-y-12 pb-20 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Tab System */}
            <div className="flex flex-wrap justify-center gap-3 py-12 sticky top-0 z-50 bg-white/80 backdrop-blur-xl">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2.5 cursor-pointer outline-none border ${activeTab === tab.name
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200'
                            : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300 hover:text-slate-600'
                            }`}
                    >
                        <span>{tab.name}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] tabular-nums transition-colors ${activeTab === tab.name
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-100 text-slate-500'
                            }`}>
                            {tab.count}
                        </span>
                    </button>
                ))}
            </div>

            {/* Component Gallery Groups */}
            <div className="space-y-40 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.03),transparent_50%)] pointer-events-none" />
                <AnimatePresence mode="popLayout">
                    <motion.div layout className="space-y-40">
                        {filteredSections.map((section) => (
                            <motion.section
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                                key={section.title}
                                className="space-y-12 relative z-10"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-2xl shadow-slate-200">
                                        <section.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">{section.title}</h2>
                                        <div className="h-1.5 w-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-3" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {section.items.map((item, i) => (
                                        <Link key={i} href={item.href} className="group">
                                            <motion.div
                                                className="relative bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-100/50 hover:border-purple-200 transition-all duration-500 aspect-[16/10] flex flex-col p-3"
                                            >
                                                {/* Image Container with Internal Padding */}
                                                <div className="absolute inset-3 bg-slate-50 flex items-center justify-center overflow-hidden transition-colors rounded-2xl">
                                                    {item.href === '/grainient' || item.href === '/bento-grid-3' ? (
                                                        <div className="absolute inset-0 w-full h-full">
                                                            {/* Local Image Priority */}
                                                            <img
                                                                src={item.href === '/grainient' ? "/previews/granient.png" : "/previews/bento-1.png"}
                                                                alt={`${item.title} Preview`}
                                                                className="absolute inset-0 w-full h-full object-cover z-10"
                                                                onError={(e) => (e.currentTarget.style.display = 'none')}
                                                            />
                                                            {/* Fallback CSS Gradient (only for grainient) */}
                                                            {item.href === '/grainient' && (
                                                                <div className="absolute inset-0 bg-gradient-to-r from-[#f9a8d4] via-[#ec4899] via-[#4f46e5] via-[#9333ea] to-[#c084fc]">
                                                                    <div className="absolute inset-0 opacity-20 contrast-125 brightness-100 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
                                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    )}

                                                    {item.href !== '/grainient' && item.href !== '/bento-grid-3' && (
                                                        <span className="text-slate-200 group-hover:text-purple-100 transition-colors">
                                                            <MousePointer2 size={64} strokeWidth={1} />
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Glassmorphism Title Overlay - Expands to inner card bounds on hover */}
                                                <div className="absolute inset-3 z-20 flex items-end group-hover:items-stretch transition-all duration-500 pointer-events-none">
                                                    <div className="w-full h-12 group-hover:h-full bg-white/20 group-hover:bg-white/40 backdrop-blur-md group-hover:backdrop-blur-xl border border-white/20 rounded-xl group-hover:rounded-2xl transition-all duration-500 flex items-center justify-center overflow-hidden shadow-lg">
                                                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors uppercase tracking-tight italic text-center px-4">
                                                            {item.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </div>
                            </motion.section>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    );
}
