
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layout, Box, Zap, Sparkles, Database, Shield, CreditCard, PanelsTopLeft, MousePointer2 } from 'lucide-react';

const sidebarConfig = [
    {
        title: "Hero Sections",
        icon: PanelsTopLeft,
        items: [
            { title: "Aurora", href: "/aurora" },
            { title: "Hero 1", href: "/hero-1" },
            { title: "Hero 2", href: "/hero-2" },
            { title: "Hero 3", href: "/hero-3" },
            { title: "Hero 4", href: "/hero-4" },
            { title: "Hero 5", href: "/hero-5" },
            { title: "Neural Defense", href: "/neural-defense" },
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
        title: "Features",
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
            { title: "Grainient", href: "/grainient" },
            { title: "Dot Grid", href: "/dot-grid" },
            { title: "Alternating Carousel", href: "/alternating-carousel" },
        ],
    },
];

export default function Home() {
    return (
        <div className="space-y-24 pb-20 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Hero Section */}
            <section className="space-y-8 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest px-1">Luma Premium UI Kit</span>
                </div>
                <h1 className="text-7xl font-black tracking-tighter text-slate-900 leading-[0.9] uppercase italic">
                    The Next <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
                        Design Frontier.
                    </span>
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed italic">
                    Explore a curated collection of beautiful, high-performance React components. Click any card to preview it in real-time and view the source code.
                </p>
            </section>

            {/* Component Gallery Groups */}
            <div className="space-y-40 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.03),transparent_50%)] pointer-events-none" />
                {sidebarConfig.map((section, idx) => (
                    <section key={idx} className="space-y-12 relative z-10">
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
                                        whileHover={{ y: -5 }}
                                        className="relative bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-100/50 hover:border-purple-200 transition-all duration-300 aspect-[16/10] flex flex-col"
                                    >
                                        {/* Full Bleed Image Placeholder */}
                                        <div className="absolute inset-0 bg-slate-50 flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span className="text-slate-200 group-hover:text-purple-100 transition-colors">
                                                <MousePointer2 size={64} strokeWidth={1} />
                                            </span>

                                            {/* Action Badge */}
                                            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-100 shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                                                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">Preview Live</span>
                                            </div>
                                        </div>

                                        {/* Glassmorphism Title Overlay at Bottom */}
                                        <div className="absolute inset-x-0 bottom-0 p-4 z-10 transition-transform translate-y-2 group-hover:translate-y-0 duration-300">
                                            <div className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg group-hover:bg-white/60 transition-all">
                                                <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors uppercase tracking-tight italic text-center">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Bottom CTA */}
            <section className="bg-slate-900 rounded-[40px] p-20 text-white overflow-hidden relative">
                <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl font-black tracking-tight italic uppercase">Ready to build something amazing?</h2>
                    <p className="text-slate-400 font-light text-xl italic">Copy and paste components directly into your project. High-end design, zero maintenance.</p>
                    <div className="flex justify-center gap-6 pt-4">
                        <Link href="/aurora" className="px-10 py-4 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-500 transition-all shadow-2xl shadow-purple-500/20 uppercase tracking-widest text-sm italic">
                            Get Started
                        </Link>
                        <a href="#" className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-sm italic">
                            View GitHub
                        </a>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/20 to-transparent blur-3xl" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/20 to-transparent blur-3xl opacity-50" />
            </section>
        </div>
    );
}
