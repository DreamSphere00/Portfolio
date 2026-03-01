"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Palette, Code2 } from "lucide-react";

const pillars = [
    {
        icon: Target,
        title: "Strategy",
        description:
            "Data-driven strategies that align with your business goals and maximize ROI across every digital touchpoint.",
    },
    {
        icon: Palette,
        title: "Design",
        description:
            "Pixel-perfect interfaces crafted with user psychology in mind, delivering beautiful and intuitive experiences.",
    },
    {
        icon: Code2,
        title: "Engineering",
        description:
            "Robust, scalable solutions built with cutting-edge technologies that stand the test of time and traffic.",
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="about" className="relative py-16 sm:py-24 md:py-28 lg:py-36 bg-gradient-main">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest">
                        Who We Are
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 font-[family-name:var(--font-outfit)]">
                        Crafting <span className="text-gradient">Digital Excellence</span>
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                        We&apos;re a passionate team of three engineers in Bengaluru, India who believe
                        that great digital products are born at the intersection of strategy, design,
                        and cutting-edge technology. We don&apos;t just build websites — we build
                        high-converting web applications, AI-powered automation, and cloud-native solutions.
                    </p>
                </motion.div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-card border border-[#49E29B]/10 hover:border-[#49E29B]/30 transition-all duration-300 hover:-translate-y-2 ${index === 2 ? "sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none" : ""
                                }`}
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-[#49E29B]/0 group-hover:bg-[#49E29B]/[0.03] transition-all duration-300" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#49E29B]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#49E29B]/20 transition-colors duration-300">
                                    <pillar.icon className="text-accent" size={24} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-[family-name:var(--font-outfit)]">
                                    {pillar.title}
                                </h3>
                                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
