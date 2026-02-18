'use client';

import React from "react";
import { motion } from "motion/react";

interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-white"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div className="p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 max-w-xs w-full bg-white" key={i}>
                                    <div className="text-gray-600 leading-relaxed font-medium">{text}</div>
                                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                                        <img
                                            width={40}
                                            height={40}
                                            src={image}
                                            alt={name}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-bold tracking-tight leading-5 text-gray-900">{name}</div>
                                            <div className="leading-5 text-gray-400 text-sm tracking-tight font-medium">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};

const testimonials = [
    {
        text: "This platform has completely transformed how we manage our design system. It's intuitive, fast, and incredibly powerful.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        name: "Alex Morgan",
        role: "Product Designer",
    },
    {
        text: "I was amazed by how quickly we could integrate this into our existing workflow. The documentation is top-notch.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
        name: "David Chen",
        role: "Senior Developer",
    },
    {
        text: "The customer support team went above and beyond to help us get started. Truly exceptional service.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
        name: "Sarah Williams",
        role: "CTO",
    },
    {
        text: "Vertical scrolling testimonials are a great way to showcase social proof without taking up too much vertical space.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
        name: "Michael Brown",
        role: "Marketing Director",
    },
    {
        text: "A game-changer for our agency. We've seen a 40% increase in client satisfaction since adopting this tool.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
        name: "Emily Davis",
        role: "Agency Owner",
    },
    {
        text: "Simple, elegant, and effective. Exactly what we were looking for to boost our conversion rates.",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150",
        name: "James Wilson",
        role: "Growth Hacker",
    },
    {
        text: "The attention to detail in the UI components is remarkable. It feels premium and trustworthy.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
        name: "Jessica Taylor",
        role: "UI Engineer",
    },
    {
        text: "Highly recommended for any team looking to scale their operations efficiently.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
        name: "Robert Anderson",
        role: "VP of Operations",
    },
    {
        text: "Best investment we've made this year. The ROI has been incredible.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        name: "Olivia Martinez",
        role: "Business Owner",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const VerticalTestimonials = () => {
    return (
        <section className="bg-white py-20 relative w-full overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center mb-16"
                >
                    <div className="inline-block border border-gray-200 bg-gray-50 py-1.5 px-4 rounded-full text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">
                        Testimonials
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                        What our users say
                    </h2>
                    <p className="text-lg text-gray-500 font-medium">
                        Join thousands of satisfied customers who have transformed their business with our platform.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
};
