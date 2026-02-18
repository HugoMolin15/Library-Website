import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Sparkles } from "lucide-react";

interface Footer7Props {
    logo?: {
        url: string;
        src?: string;
        alt?: string;
        title: string;
    };
    sections?: Array<{
        title: string;
        links: Array<{ name: string; href: string }>;
    }>;
    description?: string;
    socialLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    copyright?: string;
    legalLinks?: Array<{
        name: string;
        href: string;
    }>;
}

const defaultSections = [
    {
        title: "Product",
        links: [
            { name: "Overview", href: "#" },
            { name: "Pricing", href: "#" },
            { name: "Marketplace", href: "#" },
            { name: "Features", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "#" },
            { name: "Team", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Careers", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Help", href: "#" },
            { name: "Sales", href: "#" },
            { name: "Advertise", href: "#" },
            { name: "Privacy", href: "#" },
        ],
    },
];

const defaultSocialLinks = [
    { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
    { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
    logo = {
        url: "/",
        title: "Luma",
    },
    sections = defaultSections,
    description = "A collection of premium components for modern web experiences.",
    socialLinks = defaultSocialLinks,
    copyright = "© 2026 Luma. All rights reserved.",
    legalLinks = defaultLegalLinks,
}: Footer7Props) => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="w-full px-8 md:px-12 lg:px-24">
                <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
                        {/* Logo */}
                        <div className="flex items-center gap-2 lg:justify-start">
                            <a href={logo.url} className="flex items-center gap-2 group">
                                <div className="bg-black p-1.5 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
                                    <Sparkles className="h-5 w-5 text-white" />
                                </div>
                                <h2 className="text-xl font-bold text-black tracking-tight">{logo.title}</h2>
                            </a>
                        </div>
                        <p className="max-w-[70%] text-sm text-gray-500">
                            {description}
                        </p>
                        <ul className="flex items-center space-x-6 text-gray-400">
                            {socialLinks.map((social, idx) => (
                                <li key={idx} className="font-medium hover:text-black transition-colors">
                                    <a href={social.href} aria-label={social.label} className="cursor-pointer">
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold text-black">{section.title}</h3>
                                <ul className="space-y-3 text-sm text-gray-500">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="font-medium hover:text-black transition-colors"
                                        >
                                            <a href={link.href} className="cursor-pointer">{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-100 py-8 text-xs font-medium text-gray-400 md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">{copyright}</p>
                    <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-black transition-colors">
                                <a href={link.href} className="cursor-pointer"> {link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
