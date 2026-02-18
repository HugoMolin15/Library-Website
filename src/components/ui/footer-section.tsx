'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: 'Product',
        links: [
            { title: 'Features', href: '#features' },
            { title: 'Pricing', href: '#pricing' },
            { title: 'Testimonials', href: '#testimonials' },
            { title: 'Integration', href: '/' },
        ],
    },
    {
        label: 'Company',
        links: [
            { title: 'FAQs', href: '/faqs' },
            { title: 'About Us', href: '/about' },
            { title: 'Privacy Policy', href: '/privacy' },
            { title: 'Terms of Services', href: '/terms' },
        ],
    },
    {
        label: 'Resources',
        links: [
            { title: 'Blog', href: '/blog' },
            { title: 'Changelog', href: '/changelog' },
            { title: 'Brand', href: '/brand' },
            { title: 'Help', href: '/help' },
        ],
    },
    {
        label: 'Social Links',
        links: [
            { title: 'Facebook', href: '#', icon: FacebookIcon },
            { title: 'Instagram', href: '#', icon: InstagramIcon },
            { title: 'Youtube', href: '#', icon: YoutubeIcon },
            { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
        ],
    },
];

export function Footer() {
    return (
        <footer className="md:rounded-t-[3rem] relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-[2rem] border-t bg-white px-6 py-12 lg:py-16">
            {/* Decorative Top Line */}
            <div className="bg-gray-200 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px]" />

            <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-12">
                <AnimatedContainer className="space-y-4">
                    <div className="flex items-center gap-2">
                        <FrameIcon className="size-8 text-black" />
                        <span className="font-bold text-xl">Asme</span>
                    </div>
                    <p className="text-gray-500 mt-8 text-sm md:mt-4">
                        © {new Date().getFullYear()} Asme. All rights reserved.
                    </p>
                </AnimatedContainer>

                <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                            <div className="mb-10 md:mb-0">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">{section.label}</h3>
                                <ul className="text-gray-500 space-y-3 text-sm">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <a
                                                href={link.href}
                                                className="hover:text-black inline-flex items-center transition-all duration-300"
                                            >
                                                {link.icon && <link.icon className="me-2 size-4" />}
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </footer>
    );
};

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, children }: ViewAnimationProps) {
    return (
        <div className={className}>
            {children}
        </div>
    );
};
