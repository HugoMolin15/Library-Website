'use client'

import React from 'react'
import { Github, Twitter, Linkedin, ArrowRight, Sparkles } from 'lucide-react'

export function NeoMinimalFooter() {
    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200 flex flex-wrap pt-24 pb-12 relative overflow-hidden">

            {/* Background Tech Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-24">

                    {/* Brand Column (Span 4) */}
                    <div className="col-span-1 md:col-span-4 flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <Sparkles className="text-black" size={24} />
                            <h2 className="text-2xl font-bold tracking-tighter text-black uppercase">
                                LUMA
                            </h2>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                            Next-generation interface primitives for the modern web.
                            Built for speed, designed for awe.
                        </p>

                        {/* Minimal Input */}
                        <div className="flex items-center gap-2 mt-2 group">
                            <div className="relative flex-1 max-w-xs">
                                <input
                                    type="email"
                                    placeholder="Enter your signal..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            <button className="p-2.5 bg-black rounded-lg text-white hover:bg-gray-900 transition-colors cursor-pointer">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Links Columns (Span 2 each) */}
                    {[
                        { title: "Product", links: ["Components", "Templates", "Pricing", "Features"] },
                        { title: "Company", links: ["About", "Careers", "Legal", "Blog"] },
                        { title: "Connect", links: ["Twitter", "GitHub", "Discord", "Whatsapp"] }
                    ].map((section, idx) => (
                        <div
                            key={idx}
                            className={`col-span-6 md:col-span-2 flex flex-col gap-6 text-left ${idx === 0 ? 'md:col-start-7' : ''}`}
                        >
                            <h4 className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-widest">
                                {section.title}
                            </h4>
                            <ul className="flex flex-col gap-4">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm font-mono text-gray-500 hover:text-black transition-all flex items-center gap-2 group w-fit cursor-pointer">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200
                                group-hover:bg-black 
                                transition-all group-hover:w-4 duration-200" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-gray-100">
                    <p className="text-xs text-gray-400 font-mono">
                        © 2026 LUMA. ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex items-center gap-6">
                        {/* Socials - Integrated Horizontal */}
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-400 hover:text-black transition-colors cursor-pointer">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
