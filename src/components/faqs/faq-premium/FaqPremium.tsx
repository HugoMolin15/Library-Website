'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "What are heat pumps?",
        answer: "Reversible air conditioners that can cool your home in the summer, and heat your home in the winter—all from the same device. They work with and without central air ducts."
    },
    {
        id: 2,
        question: "How much do I get in rebates?",
        answer: "Rebate amounts vary by location and equipment efficiency. Many homeowners qualify for $2,000 or more in federal tax credits plus local utility incentives."
    },
    {
        id: 3,
        question: "How long does it take to get a rebate?",
        answer: "The timeline depends on your local program. Generally, tax credits are claimed during your yearly filing, while utility rebates often take 4-8 weeks to process."
    },
    {
        id: 4,
        question: "How long does it take to get a quote?",
        answer: "Our online quoting system provides an initial estimate in under 5 minutes. A finalized site-specific quote usually follows within 24-48 hours after a technician visit."
    }
];

export function FaqPremium() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full min-h-screen flex items-center py-24 bg-[#F1F5F9]">
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 w-full">

                    {/* Left Side: Title */}
                    <div className="w-full lg:w-1/3 text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight lg:leading-[1.1]">
                            Frequently asked questions
                        </h2>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-3">
                        {faqs.map((faq) => {
                            const isOpen = openId === faq.id;
                            return (
                                <motion.div
                                    layout
                                    key={faq.id}
                                    className={cn(
                                        "rounded-2xl transition-shadow duration-300 overflow-hidden",
                                        isOpen ? "bg-white shadow-xl shadow-blue-500/5" : "bg-[#E2E8F0]/50 hover:bg-[#E2E8F0]"
                                    )}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <button
                                        onClick={() => toggle(faq.id)}
                                        className="w-full flex items-start gap-4 md:gap-6 p-6 md:p-8 text-left cursor-pointer group"
                                    >
                                        <div className="mt-1.5 shrink-0 transition-transform duration-300">
                                            {isOpen ? (
                                                <Minus className="w-5 h-5 text-gray-900" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
                                            )}
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <h3 className={cn(
                                                "text-lg md:text-2xl font-bold transition-colors",
                                                isOpen ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
                                            )}>
                                                {faq.question}
                                            </h3>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed pt-2 md:pt-4 pb-2">
                                                            {faq.answer}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
