'use client';

import React from 'react';
import Link from 'next/link';

const navigationLinks = [
    { name: 'Home', href: '#' },
    { name: 'Discover', href: '#' },
    { name: 'InvestGPT', href: '#' },
    { name: 'Portfolio Toolbox', href: '#' },
];

const toolsLinks = [
    { name: 'Watchlist', href: '#' },
    { name: 'Market Movers', href: '#' },
    { name: 'AI Stock Picker', href: '#' },
    { name: 'Smart Signals', href: '#' },
    { name: 'Stocklist', href: '#' },
];

const resourcesLinks = [
    { name: 'Affiliate Program', href: '#' },
    { name: 'Academy', href: '#' },
    { name: 'API for Signal DB', href: '#' },
    { name: 'Pricing Plans', href: '#' },
    { name: 'Podcast', href: '#' },
];

export function Footer1() {
    return (
        <footer className="w-full bg-white pt-24 pb-0 overflow-hidden relative border-t border-gray-100">
            {/* 
                Main Wrapper: 
                The 'w-fit' parent ensures the entire block is sized exactly by the widest element (the Big Text).
                We then use 'items-stretch' so the links row expands to that same width.
            */}
            <div className="flex flex-col items-center w-full px-6 md:px-12 lg:px-24">
                <div className="w-fit flex flex-col items-stretch">

                    {/* Links row - stretched to match the Big Text width precisely */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 mb-16 w-full">

                        {/* Brand / Legal - Pinned to the Left Edge */}
                        <div className="flex flex-col gap-12 lg:gap-20">
                            <div className="flex items-center group cursor-pointer">
                                <div className="relative w-8 h-8">
                                    <div className="absolute inset-0 bg-black rounded-full" />
                                    <div className="absolute inset-0 bg-white rounded-full translate-x-4 mix-blend-difference" />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm font-medium cursor-pointer transition-all duration-300 whitespace-nowrap">
                                    Privacy Policy
                                </Link>
                                <Link href="#" className="text-gray-500 hover:text-black transition-colors text-sm font-medium cursor-pointer transition-all duration-300 whitespace-nowrap">
                                    Terms of Use
                                </Link>
                            </div>
                        </div>

                        {/* Navigation Groups - Stretched to fill the space to the Right Edge */}
                        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 lg:gap-32">
                            <div className="flex flex-col gap-6">
                                <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider">Navigation</h4>
                                <ul className="flex flex-col gap-4">
                                    {navigationLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-black hover:text-gray-500 transition-colors text-base font-medium cursor-pointer whitespace-nowrap">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider">Tools</h4>
                                <ul className="flex flex-col gap-4">
                                    {toolsLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-black hover:text-gray-500 transition-colors text-base font-medium cursor-pointer whitespace-nowrap">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider">Resources</h4>
                                <ul className="flex flex-col gap-4 hover:text-black">
                                    {resourcesLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-black hover:text-gray-500 transition-colors text-base font-medium cursor-pointer whitespace-nowrap">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Massive Heading - Defines the width of the whole block */}
                    <div className="relative translate-y-[30%] pointer-events-none">
                        <h2 className="text-[25vw] sm:text-[20vw] lg:text-[24vw] font-bold text-black leading-none select-none tracking-tighter m-0 p-0 text-left">
                            FinSage
                        </h2>
                    </div>
                </div>
            </div>
        </footer>
    );
}
