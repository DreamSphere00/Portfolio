"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Server, Figma, MessageSquareMore, Zap, Cloud } from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Web Development",
        description:
            "High-performance, responsive websites and web applications built with modern frameworks like React, Next.js, and Vue.js that deliver exceptional user experiences.",
    },
    {
        icon: Server,
        title: "Backend Systems",
        description:
            "Scalable, secure server-side architectures using Spring Boot, Node.js, Python, and cloud infrastructure that power your applications with reliability and speed.",
    },
    {
        icon: Figma,
        title: "UI/UX Design",
        description:
            "Research-driven design systems and interfaces that balance aesthetics with usability, turning complex workflows into intuitive digital experiences.",
    },
    {
        icon: MessageSquareMore,
        title: "Chatbot Integration",
        description:
            "Intelligent conversational AI solutions powered by NLP and machine learning that automate customer support and boost engagement 24/7.",
    },
    {
        icon: Zap,
        title: "Automation",
        description:
            "End-to-end workflow automation that eliminates repetitive tasks, integrates your tools, and accelerates your business processes at scale.",
    },
    {
        icon: Cloud,
        title: "Cloud Deployment",
        description:
            "Seamless deployment and scaling on AWS, GCP, and Azure. CI/CD pipelines, containerization with Docker, and infrastructure management for production-grade apps.",
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="services"
            className="relative py-16 sm:py-24 md:py-28 lg:py-36 bg-[#0E1A14]"
        >
            {/* Subtle background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#49E29B]/5 rounded-full blur-[120px] sm:blur-[200px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest">
                        What We Do
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 font-[family-name:var(--font-outfit)]">
                        Services That <span className="text-gradient">Drive Results</span>
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                        From frontend to backend, design to deployment — we offer a complete
                        suite of digital services to bring your vision to life.
                    </p>
                </motion.div>

                {/* Services Grid — 1 col mobile, 2 col sm/md, 3 col lg */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-card border border-[#49E29B]/10 hover:border-[#49E29B]/30 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(73,226,155,0.1)]"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-[#49E29B]/0 group-hover:bg-[#49E29B]/[0.03] transition-all duration-300" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#49E29B]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#49E29B]/20 transition-colors duration-300">
                                    <service.icon className="text-accent" size={24} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-[family-name:var(--font-outfit)]">
                                    {service.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
