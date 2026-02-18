import { motion } from 'framer-motion';

const logos = [
    "https://i.ibb.co/Vv5rkDK/api-partner-verzon.png",
    "https://i.ibb.co/J399KDg/api-partner-netflix.png",
    "https://i.ibb.co/TKT0F5L/api-partner-yelp.png",
    "https://i.ibb.co/HG6KR89/api-partner-adobe.png",
    "https://i.ibb.co/hMSJ1sg/api-partner-ring.png",
    "https://i.ibb.co/4RWQcMS/api-partner-nespresso.png"
];

export function LogoSlider() {
    return (
        <section className="w-full py-24 bg-slate-50 overflow-hidden relative">
            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

            <div className="flex relative">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: [0, "-50%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    <div className="flex items-center gap-32 pr-32">
                        {logos.map((logo, index) => (
                            <div key={`logo-1-${index}`} className="flex-shrink-0">
                                <img
                                    src={logo}
                                    alt="Partner"
                                    className="h-10 md:h-14 w-auto object-contain grayscale opacity-30 contrast-125"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Seamless Duplicate */}
                    <div className="flex items-center gap-32 pr-32">
                        {logos.map((logo, index) => (
                            <div key={`logo-2-${index}`} className="flex-shrink-0">
                                <img
                                    src={logo}
                                    alt="Partner"
                                    className="h-10 md:h-14 w-auto object-contain grayscale opacity-30 contrast-125"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
