"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, MessageSquareMore, Zap, MessageCircle, Globe, Cloud } from "lucide-react";

const services = [
    {
        icon: PhoneCall,
        title: "AI Voice Agents",
        description:
            "Intelligent voice-based AI receptionists that answer calls, understand context, qualify leads, and book appointments — sounding natural and professional 24/7.",
    },
    {
        icon: MessageSquareMore,
        title: "AI Chatbots (NLP/ML)",
        description:
            "Conversational AI chatbots powered by NLP and machine learning for website, WhatsApp, and social channels. Automate customer support and boost engagement around the clock.",
    },
    {
        icon: Zap,
        title: "Workflow Automation",
        description:
            "End-to-end business process automation using LangGraph and Python. Eliminate repetitive tasks, connect your tools, and let AI handle the busywork at scale.",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp Integration",
        description:
            "Seamless WhatsApp Business API integration for automated appointment reminders, lead follow-ups, booking confirmations, and customer nurturing sequences.",
    },
    {
        icon: Globe,
        title: "Custom Web Applications",
        description:
            "High-performance, conversion-optimized web apps built with React, Next.js, and modern full-stack technologies. From landing pages to complex dashboards.",
    },
    {
        icon: Cloud,
        title: "Cloud & Deployment",
        description:
            "Production-grade deployment on AWS, GCP, and Azure with Docker, CI/CD pipelines, and 99.9% uptime monitoring. We handle the infrastructure so you don't have to.",
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
                        What We Build
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 font-[family-name:var(--font-outfit)]">
                        AI Solutions That{" "}
                        <span className="text-gradient">Drive Revenue</span>
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                        Beyond AI Receptionists — we build the full stack of AI automation
                        your business needs to grow without growing your headcount.
                    </p>
                </motion.div>

                {/* Services Grid */}
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
