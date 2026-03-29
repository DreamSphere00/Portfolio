"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Check,
    ArrowRight,
    ShieldCheck,
    Zap,
    Calendar,
} from "lucide-react";
import BookingModal from "./BookingModal";

const included = [
    "Custom AI voice + chat receptionist",
    "WhatsApp Business integration",
    "Google Calendar auto-booking",
    "Lead qualification & routing",
    "Automated appointment reminders",
    "Monthly performance reports",
    "Dedicated account manager",
    "Unlimited AI conversations",
    "24/7 monitoring & uptime",
    "Continuous AI training & optimization",
];

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [showBooking, setShowBooking] = useState(false);

    return (
        <>
            <section id="pricing" className="relative py-16 sm:py-24 md:py-28 lg:py-36 bg-[#0E1A14]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#49E29B]/5 rounded-full blur-[150px] sm:blur-[250px]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest">
                            Investment
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 font-[family-name:var(--font-outfit)]">
                            Transparent <span className="text-gradient">Pricing</span>. No Hidden Fees.
                        </h2>
                        <p className="text-text-secondary text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                            One plan. Everything included. Your AI Receptionist, fully custom-built
                            and managed for your business.
                        </p>
                    </motion.div>

                    {/* Pricing Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="relative rounded-3xl bg-gradient-card border border-[#49E29B]/20 overflow-hidden glow-accent">
                            {/* Top badge */}
                            <div className="bg-[#49E29B]/10 border-b border-[#49E29B]/15 px-6 sm:px-8 py-3 flex items-center justify-center gap-2">
                                <Zap size={16} className="text-accent" />
                                <span className="text-sm font-semibold text-accent">
                                    AI Receptionist Agent — Full Package
                                </span>
                            </div>

                            <div className="p-6 sm:p-8 md:p-10">
                                {/* Pricing */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-8 mb-6 sm:mb-8">
                                    <div>
                                        <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                                            One-Time Setup
                                        </p>
                                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                                            ₹1,99,000
                                        </div>
                                        <p className="text-xs text-text-secondary mt-1">
                                            Custom AI training, integrations, testing & launch
                                        </p>
                                    </div>
                                    <div className="hidden sm:block w-px h-16 bg-[#49E29B]/15" />
                                    <div>
                                        <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                                            Monthly
                                        </p>
                                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] text-gradient">
                                            ₹39,900
                                            <span className="text-lg text-text-secondary font-normal">/mo</span>
                                        </div>
                                        <p className="text-xs text-text-secondary mt-1">
                                            Hosting, monitoring, updates & performance reports
                                        </p>
                                    </div>
                                </div>

                                {/* ROI note */}
                                <div className="flex items-start gap-2 mb-8 px-4 py-3 rounded-xl bg-[#49E29B]/5 border border-[#49E29B]/10">
                                    <ShieldCheck size={18} className="text-accent mt-0.5 shrink-0" />
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        <span className="text-accent font-semibold">30-day performance guarantee</span>
                                        {" "}— if we don&apos;t deliver measurable improvement, we&apos;ll optimize at no
                                        extra cost. Most clients see ROI within 30-45 days through reduced no-shows
                                        and 24/7 lead capture.
                                    </p>
                                </div>

                                {/* What's included */}
                                <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                                    Everything Included:
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8">
                                    {included.map((item) => (
                                        <div key={item} className="flex items-start gap-2.5">
                                            <Check
                                                size={16}
                                                className="text-accent mt-0.5 shrink-0"
                                            />
                                            <span className="text-sm text-text-secondary">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <button
                                    onClick={() => setShowBooking(true)}
                                    className="group w-full btn-gradient text-[#0E1A14] px-6 sm:px-8 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(73,226,155,0.35)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                                >
                                    Book Your Free 15-Min AI Audit
                                    <ArrowRight
                                        size={20}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>

                                {/* Delivery badge */}
                                <div className="flex items-center justify-center gap-4 mt-5">
                                    <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                                        <Calendar size={12} className="text-accent" />
                                        7-14 Day Delivery
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-text-secondary/30" />
                                    <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                                        <ShieldCheck size={12} className="text-accent" />
                                        White-Glove Setup
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
        </>
    );
}
