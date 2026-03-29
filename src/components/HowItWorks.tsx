"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Wrench, Rocket, BarChart3 } from "lucide-react";

const steps = [
    {
        icon: Search,
        number: "01",
        title: "Free AI Audit",
        description:
            "We analyze your current call flow, booking process, and customer journey. You'll get a clear report showing how much revenue you're leaving on the table.",
        duration: "15-min call",
    },
    {
        icon: Wrench,
        number: "02",
        title: "Custom Build",
        description:
            "Our engineers build your AI Receptionist — trained on your specific services, pricing, FAQs, and business rules. Integrated with WhatsApp, Google Calendar, and your existing tools.",
        duration: "7-14 days",
    },
    {
        icon: Rocket,
        number: "03",
        title: "Go Live",
        description:
            "White-glove deployment with zero downtime. We train your team, test every scenario, and ensure your AI Receptionist handles calls flawlessly from day one.",
        duration: "1-2 days",
    },
    {
        icon: BarChart3,
        number: "04",
        title: "Grow & Optimize",
        description:
            "We monitor performance, optimize responses, and send you monthly reports. Your AI gets smarter every week — and you keep growing without hiring more staff.",
        duration: "Ongoing",
    },
];

export default function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="how-it-works" className="relative py-16 sm:py-24 md:py-28 lg:py-36 bg-[#0E1A14]">
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
                        How It Works
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 font-[family-name:var(--font-outfit)]">
                        Live in <span className="text-gradient">14 Days</span> — Not Months
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                        From first call to a fully operational AI Receptionist handling your customers 24/7.
                        Here&apos;s exactly how we do it.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-5">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
                            className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-card border border-[#49E29B]/10 hover:border-[#49E29B]/30 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-[#49E29B]/0 group-hover:bg-[#49E29B]/[0.03] transition-all duration-300" />

                            <div className="relative z-10">
                                {/* Step number + icon */}
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-[#49E29B]/10 flex items-center justify-center group-hover:bg-[#49E29B]/20 transition-colors duration-300">
                                        <step.icon className="text-accent" size={22} />
                                    </div>
                                    <span className="text-3xl font-bold text-[#49E29B]/15 font-[family-name:var(--font-outfit)]">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold mb-2 font-[family-name:var(--font-outfit)]">
                                    {step.title}
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                    {step.description}
                                </p>

                                {/* Duration badge */}
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#49E29B]/8 border border-[#49E29B]/15">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    <span className="text-xs text-accent font-medium">
                                        {step.duration}
                                    </span>
                                </div>
                            </div>

                            {/* Connector line (desktop only, not on last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-[#49E29B]/20" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
