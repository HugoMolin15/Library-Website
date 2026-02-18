
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Plus } from 'lucide-react';

export function HealthHero() {
    return (
        <section className="relative w-full min-h-[700px] overflow-hidden flex items-center bg-[#03453d] py-20 px-4 md:px-8">
            {/* Background Image Placeholder with subtle overlay */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[#03453d]" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
                <div className="max-w-4xl flex flex-col gap-6 md:gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full w-fit">
                            <ShieldCheck className="w-4 h-4 text-green-400" />
                            <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Medical Grade Security</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight italic">
                            Sexual Health <br />
                            <span className="text-green-400">treatments</span> tailored <br />
                            to your needs
                        </h1>

                        <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
                            Join tens of thousands who have already transformed their lives. Medication kits tailored to your unique needs, delivered discreetly to your door.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
                    >
                        <button className="w-full sm:w-auto bg-green-500 text-[#03453d] hover:bg-green-400 hover:scale-105 transition-all duration-300 rounded-full py-5 px-12 font-black text-lg cursor-pointer shadow-xl flex items-center justify-center gap-2">
                            Get Started
                        </button>
                        <button className="w-full sm:w-auto bg-transparent text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300 rounded-full py-5 px-12 font-bold text-lg cursor-pointer shadow-none">
                            See Eligibility
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 max-w-2xl"
                    >
                        <div>
                            <p className="text-3xl font-bold text-white leading-none mb-2">48h</p>
                            <p className="text-white/50 text-xs uppercase tracking-widest font-bold text-[10px]">Express delivery</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white leading-none mb-2">10k+</p>
                            <p className="text-white/50 text-xs uppercase tracking-widest font-bold text-[10px]">Active patients</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Float Element */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-96 h-96 rounded-3xl bg-gradient-to-br from-green-400/20 to-transparent border border-white/10 backdrop-blur-xl p-8"
            >
                <div className="w-full h-full bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center">
                    <Plus className="w-24 h-24 text-green-400/20" strokeWidth={1} />
                </div>
            </motion.div>
        </section>
    );
}
