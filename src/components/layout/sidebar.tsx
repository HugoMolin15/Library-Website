

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


const sidebarConfig = [
    {
        title: "Getting Started",
        items: [
            { title: "Introduction", href: "/" },
        ],
    },
    {
        title: "Hero Sections",
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
        items: [
            { title: "Community CTA", href: "/community-cta" },
            { title: "Gradient CTA", href: "/gradient-cta" },
            { title: "Horizontal CTA", href: "/horizontal-cta" },
        ],
    },
    {
        title: "FAQ & Support",
        items: [
            { title: "Accordion FAQ 1", href: "/accordion-faq-1" },
            { title: "FAQ Premium", href: "/faq-premium" },
        ],
    },
    {
        title: "Pricing",
        items: [
            { title: "Pricing", href: "/pricing" },
        ],
    },
    {
        title: "Footers",
        items: [
            { title: "Footer 1", href: "/footer-1" },
            { title: "Footer 2", href: "/footer-2" },
            { title: "Footer 3", href: "/footer-3" },
            { title: "Footer 4", href: "/footer-4" },
        ],
    },
    {
        title: "Animations & Special",
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

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 h-screen border-r border-slate-200 bg-white sticky top-0 overflow-y-auto flex-shrink-0">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-8 px-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">L</span>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                        Luma UI
                    </span>
                </div>

                {sidebarConfig.map((section, i) => (
                    <div key={i} className="mb-8">
                        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">
                            {section.title}
                        </h3>
                        <div className="space-y-1">
                            {section.items.map((item, j) => (
                                <Link
                                    key={j}
                                    href={item.href}
                                    prefetch={false}
                                    className={cn(
                                        "block px-2 py-2 text-sm rounded-md transition-colors",
                                        pathname === item.href
                                            ? "bg-purple-50 text-purple-600 font-medium"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
