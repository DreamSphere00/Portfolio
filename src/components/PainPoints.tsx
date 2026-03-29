"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneOff, Users, TrendingDown } from "lucide-react";

const pains = [
    {
        icon: PhoneOff,
        emoji: "📞",
        title: "Missed Calls After Hours = Lost Revenue",
        description:
            "Every unanswered call is a patient going to your competitor. Studies show 62% of calls to small businesses go unanswered — that's lakhs in lost revenue every month.",
        stat: "62%",
        statLabel: "calls go unanswered",
    },
    {
        icon: Users,
        emoji: "😩",
        title: "Staff Overwhelmed With Repetitive Calls",
        description:
            "Your receptionist spends 4+ hours daily answering the same questions: timings, pricing, availability. That's ₹15,000+/month in wasted salary on robotic tasks.",
        stat: "4+ hrs",
        statLabel: "wasted daily",
    },
    {
        icon: TrendingDown,
        emoji: "📉",
        title: "30-50% No-Show Rate Eating Your Profits",
        description:
            "Patients book and forget. Without automated reminders on WhatsApp, you're losing 30-50% of your booked appointments to no-shows — every single week.",
        stat: "30-50%",
        statLabel: "appointments no-show",
    },
];

export default function PainPoints() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="problem" className="relative py-16 sm:py-24 md:py-28 lg:py-36 bg-gradient-main">
            {/* Subtle red/orange glow for "problem" feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-red-500/[0.03] rounded-full blur-[150px] sm:blur-[200px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <span className="text-red-400/80 text-xs sm:text-sm font-semibold uppercase tracking-widest">
                        The Problem
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 font-[family-name:var(--font-outfit)]">
                        Is This Your Business{" "}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                            Right Now?
                        </span>
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                        If you&apos;re a dentist, clinic, gym, salon, or coach in India — you&apos;re
                        probably losing money to these problems every single day.
                    </p>
                </motion.div>

                {/* Pain Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={pain.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-card border border-red-500/10 hover:border-red-400/25 transition-all duration-300 hover:-translate-y-2 ${
                                index === 2
                                    ? "sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none"
                                    : ""
                            }`}
                        >
                            <div className="absolute inset-0 rounded-2xl bg-red-500/0 group-hover:bg-red-500/[0.02] transition-all duration-300" />

                            <div className="relative z-10">
                                {/* Icon + Stat */}
                                <div className="flex items-center justify-between mb-4 sm:mb-6">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/15 transition-colors duration-300">
                                        <pain.icon className="text-red-400" size={24} />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xl sm:text-2xl font-bold text-red-400 font-[family-name:var(--font-outfit)]">
                                            {pain.stat}
                                        </div>
                                        <div className="text-[10px] sm:text-xs text-text-secondary">
                                            {pain.statLabel}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-[family-name:var(--font-outfit)]">
                                    {pain.title}
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {pain.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom urgency line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="text-center mt-10 sm:mt-14 text-sm sm:text-base text-text-secondary italic"
                >
                    Your competitors are already automating.{" "}
                    <span className="text-accent font-semibold not-italic">
                        Your customers expect instant responses.
                    </span>
                </motion.p>
            </div>
        </section>
    );
}
