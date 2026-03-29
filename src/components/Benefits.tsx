"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CalendarCheck, Target, TrendingDown, MessageCircle, Flag } from "lucide-react";

const benefits = [
    {
        icon: Clock,
        title: "24/7 Availability",
        description:
            "Your AI Receptionist never sleeps, never calls in sick, and never takes a lunch break. Every call answered, every lead captured — even at 3 AM.",
    },
    {
        icon: CalendarCheck,
        title: "Smart Booking Engine",
        description:
            "Automatically books appointments into Google Calendar and sends WhatsApp confirmations + reminders. Zero manual work for your staff.",
    },
    {
        icon: Target,
        title: "Lead Qualification",
        description:
            "Qualifies every lead before it reaches you — asks the right questions, collects details, and routes hot leads to your phone instantly.",
    },
    {
        icon: TrendingDown,
        title: "Cut No-Shows by 40%",
        description:
            "Automated WhatsApp reminders 24hrs + 1hr before appointments dramatically reduce no-shows. More patients show up, more revenue stays.",
    },
    {
        icon: MessageCircle,
        title: "Voice + Chat + WhatsApp",
        description:
            "Works on every channel your customers already use. Phone calls, WhatsApp messages, website chat — one AI handles them all seamlessly.",
    },
    {
        icon: Flag,
        title: "Built by Indian Engineers",
        description:
            "A Bengaluru-based elite team with deep expertise in LangGraph, Python, and production AI. Local support, fast iterations, and we understand your market.",
    },
];

export default function Benefits() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="benefits" className="relative py-16 sm:py-24 md:py-28 lg:py-36 bg-gradient-main">
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
                        Why Choose Us
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 font-[family-name:var(--font-outfit)]">
                        Your AI Receptionist{" "}
                        <span className="text-gradient">Works Harder</span> Than Anyone
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                        Not just another chatbot. A fully trained, voice-enabled AI agent
                        that knows your business inside out and converts callers into customers.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-card border border-[#49E29B]/10 hover:border-[#49E29B]/30 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(73,226,155,0.1)]"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-[#49E29B]/0 group-hover:bg-[#49E29B]/[0.03] transition-all duration-300" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#49E29B]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#49E29B]/20 transition-colors duration-300">
                                    <benefit.icon className="text-accent" size={24} />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-[family-name:var(--font-outfit)]">
                                    {benefit.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
