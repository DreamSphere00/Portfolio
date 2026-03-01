"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "FinVault — Fintech Dashboard",
        category: "Web App • UI/UX • Backend",
        description:
            "A comprehensive fintech dashboard enabling real-time portfolio tracking, analytics, and automated reporting for 10,000+ active users.",
        image: "/projects/fintech.webp",
        link: "#",
    },
    {
        title: "MediConnect — Healthcare Platform",
        category: "Full Stack • Automation",
        description:
            "End-to-end telemedicine platform with AI-powered symptom analysis, appointment scheduling, and secure patient record management.",
        image: "/projects/healthcare.webp",
        link: "#",
    },
    {
        title: "ShopSphere — E-Commerce Redesign",
        category: "UI/UX • Web Development",
        description:
            "Complete e-commerce platform redesign that increased conversion rates by 45% through optimized UX flows and modern visual design.",
        image: "/projects/ecommerce.webp",
        link: "#",
    },
];

export default function Portfolio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="portfolio" className="relative py-16 sm:py-24 md:py-28 lg:py-36 bg-[#0E1A14]">
            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#49E29B]/5 rounded-full blur-[120px] sm:blur-[200px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest">
                        Our Work
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 font-[family-name:var(--font-outfit)]">
                        Featured <span className="text-gradient">Case Studies</span>
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                        Real projects, real results. Here&apos;s a glimpse of the digital
                        experiences we&apos;ve crafted for our clients.
                    </p>
                </motion.div>

                {/* Projects Grid — 1 col mobile, 2 col md, 3 col lg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
                            className={`group relative rounded-2xl bg-gradient-card border border-[#49E29B]/10 hover:border-[#49E29B]/30 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(73,226,155,0.1)] ${index === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-video overflow-hidden bg-[#1a2f22]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#16251C]/80 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6 lg:p-8">
                                <span className="text-accent/80 text-xs font-medium uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <h3 className="text-lg sm:text-xl font-bold mt-2 font-[family-name:var(--font-outfit)]">
                                    {project.title}
                                </h3>
                                <p className="text-text-secondary text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-accent font-semibold text-sm group/btn hover:gap-3 transition-all duration-300"
                                >
                                    View Case Study
                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                                    />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
