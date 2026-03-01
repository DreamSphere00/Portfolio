"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        title: "CyberWarFare Labs",
        category: "MERN Stack • Full Stack",
        description:
            "A sleek cybersecurity course platform built with the MERN stack. Simulates a course marketplace with Black Friday deals, user authentication, and course subscriptions. Deployed and live!",
        github: "https://github.com/Abhich05/cyberWarFare",
        gradient: "from-red-500/20 to-orange-500/20",
    },
    {
        title: "Court Booking Platform",
        category: "Full Stack • Concurrency",
        description:
            "Production-ready platform with atomic multi-resource bookings, stacked dynamic pricing, concurrency handling, waitlist system, and a full React frontend.",
        github: "https://github.com/Abhich05/CourtBooking",
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Saaro Listing Web",
        category: "Next.js • Monorepo",
        description:
            "Saaro Health website frontend built with Next.js 15 (Pages Router + App Router for SEO and blog) in a monorepo structure with a backend placeholder for future API services.",
        github: "https://github.com/Abhich05/saaro-listing-web",
        gradient: "from-green-500/20 to-emerald-500/20",
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
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                        Real projects, real code. Here&apos;s a glimpse of what we&apos;ve
                        been building — all open source on GitHub.
                    </p>
                </motion.div>

                {/* Projects Grid */}
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
                            {/* Gradient Preview instead of image */}
                            <div className={`relative w-full aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                <div className="flex flex-col items-center gap-2">
                                    <Github size={36} className="text-text-primary/40" />
                                    <span className="text-text-primary/50 text-xs font-medium uppercase tracking-wider">
                                        Open Source
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#16251C]/90 to-transparent" />
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
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-accent font-semibold text-sm group/btn hover:gap-3 transition-all duration-300"
                                >
                                    <Github size={16} />
                                    View on GitHub
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
