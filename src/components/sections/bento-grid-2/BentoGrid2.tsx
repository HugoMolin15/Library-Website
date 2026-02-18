'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Fingerprint } from 'lucide-react';

const securityFeatures = [
    {
        title: 'Advanced Encryption',
        description: 'Military-grade AES-256 encryption protects your data at rest and in transit.',
        icon: ShieldCheck,
        className: 'md:col-span-2 md:row-span-2'
    },
    {
        title: 'Biometric Access',
        description: 'Seamless fingerprint and facial recognition integration.',
        icon: Fingerprint,
        className: 'md:col-span-1 md:row-span-1'
    },
    {
        title: 'Real-time Monitoring',
        description: '24/7 threat detection and automated response systems.',
        icon: Eye,
        className: 'md:col-span-1 md:row-span-1'
    },
    {
        title: 'Secure Vault',
        description: 'Isolated storage environment for sensitive assets.',
        icon: Lock,
        className: 'md:col-span-2 md:row-span-1'
    }
];

export function BentoGrid2() {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">


            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {securityFeatures.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        className={`relative group overflow-hidden rounded-lg bg-white border border-[#E0E0E0] p-5 shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${feature.className}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div className={`p-3 w-fit rounded-xl bg-gray-100 text-gray-900 mb-4`}>
                                <feature.icon className="w-6 h-6" />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>

                        {/* Placeholder generic background/decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
