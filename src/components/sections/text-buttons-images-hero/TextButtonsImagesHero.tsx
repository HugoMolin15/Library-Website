'use client';
import { motion, Variants } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Star, Smartphone } from 'lucide-react';
import React from 'react';

// Define the props for reusability
interface StatProps {
    value: string;
    label: string;
    icon: React.ReactNode;
}

interface ActionProps {
    text: string;
    onClick: () => void;
    variant?: ButtonProps['variant'];
    className?: string;
}

interface HeroSectionProps {
    title?: React.ReactNode;
    subtitle?: string;
    actions?: ActionProps[];
    stats?: StatProps[];
    images?: string[];
    className?: string;
}

// Animation variants for Framer Motion
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const floatingVariants: Variants = {
    animate: {
        y: [0, -8, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

const HeroSection = ({
    title = <span className="italic">Design & Build <span className="text-purple-600">Faster.</span></span>,
    subtitle = "The ultimate component collection for modern developers looking to build high-end aesthetic websites.",
    actions = [
        { text: "Launch Project", onClick: () => { }, variant: 'default' },
        { text: "Documentation", onClick: () => { }, variant: 'outline' },
    ],
    stats = [
        { value: "40+", label: "Components", icon: <Star size={16} /> },
        { value: "100%", label: "Responsive", icon: <Smartphone size={16} /> },
    ],
    images = [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
    ],
    className
}: HeroSectionProps) => {
    return (
        <section className={cn('w-full overflow-hidden bg-white text-black py-12 sm:py-24', className)}>
            <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 px-6 md:px-12 lg:px-24">
                {/* Left Column: Text Content */}
                <motion.div
                    className="flex flex-col items-center text-center lg:items-start lg:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl font-bold tracking-tight text-black sm:text-6xl"
                        variants={itemVariants}
                    >
                        {title}
                    </motion.h1>
                    <motion.p className="mt-6 max-w-md text-lg text-gray-500" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    <motion.div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start" variants={itemVariants}>
                        {actions.map((action, index) => (
                            <Button
                                key={index}
                                onClick={action.onClick}
                                variant={action.variant}
                                size="lg"
                                className={cn(
                                    action.className,
                                    "cursor-pointer h-12 px-8 text-base transition-all duration-200 active:scale-95",
                                    action.variant === 'default'
                                        ? "rounded-full bg-black text-white font-medium hover:bg-black/90 shadow-none border-none"
                                        : "rounded-full bg-white text-black border border-[#D1D1D1] font-medium hover:bg-[#F5F5F5] hover:text-black shadow-none"
                                )}
                            >
                                {action.text}
                            </Button>
                        ))}
                    </motion.div>
                    <motion.div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start" variants={itemVariants}>
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">{stat.icon}</div>
                                <div>
                                    <p className="text-xl font-bold text-black">{stat.value}</p>
                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Column: Image Collage */}
                <motion.div
                    className="relative h-[400px] w-full sm:h-[500px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Decorative Shapes */}
                    <motion.div
                        className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-blue-100 blur-2xl"
                        variants={floatingVariants}
                        animate="animate"
                    />
                    <motion.div
                        className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-purple-100 blur-2xl"
                        variants={floatingVariants}
                        animate="animate"
                        style={{ transitionDelay: '0.5s' }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-green-100 blur-2xl"
                        variants={floatingVariants}
                        animate="animate"
                        style={{ transitionDelay: '1s' }}
                    />

                    {/* Images */}
                    <motion.div
                        className="absolute z-20 overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100
                                   inset-0 w-full h-full p-0
                                   lg:p-2 lg:w-64 lg:h-64 lg:inset-auto lg:top-0 lg:left-1/2 lg:-translate-x-1/2"
                        style={{ transformOrigin: 'bottom center' }}
                        variants={imageVariants}
                    >
                        <img src={images[0]} alt="Student learning" className="w-full h-full object-cover lg:rounded-xl" />
                    </motion.div>
                    <motion.div
                        className="hidden lg:block absolute right-0 top-1/3 h-40 w-40 rounded-2xl bg-white p-2 shadow-lg sm:h-56 sm:w-56 border border-gray-100 z-10"
                        style={{ transformOrigin: 'left center' }}
                        variants={imageVariants}
                    >
                        <img src={images[1]} alt="Tutor assisting" className="h-full w-full rounded-xl object-cover" />
                    </motion.div>
                    <motion.div
                        className="hidden lg:block absolute bottom-0 left-0 h-32 w-32 rounded-2xl bg-white p-2 shadow-lg sm:h-48 sm:w-48 border border-gray-100 z-10"
                        style={{ transformOrigin: 'top right' }}
                        variants={imageVariants}
                    >
                        <img src={images[2]} alt="Collaborative discussion" className="h-full w-full rounded-xl object-cover" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
