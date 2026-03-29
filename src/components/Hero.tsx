"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, PhoneCall, Calendar, MessageSquare, TrendingUp } from "lucide-react";
import BookingModal from "./BookingModal";

const ROTATING_WORDS = ["Call", "Lead", "Booking", "Customer", "Sale"];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [showBooking, setShowBooking] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section
                id="hero"
                aria-label="DreamSphere — AI Receptionist Agency India"
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-main"
            >
                {/* Animated background glow orbs */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.15, 0.25, 0.15],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#49E29B]/10 blur-[80px] sm:blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#6EF2B3]/8 blur-[100px] sm:blur-[140px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.08, 0.15, 0.08],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#5FF0A5]/10 blur-[60px] sm:blur-[100px]"
                    />
                </div>

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#49E29B 1px, transparent 1px), linear-gradient(90deg, #49E29B 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:py-32 text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center mb-6 sm:mb-8"
                    >
                        <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#49E29B]/20 bg-[#49E29B]/5">
                            <span className="text-base">🤖</span>
                            <span className="text-xs sm:text-sm text-accent font-medium">
                                India&apos;s #1 AI Receptionist Agency
                            </span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] sm:leading-tight tracking-tight font-[family-name:var(--font-outfit)] mb-4 sm:mb-6"
                    >
                        Never Miss Another{" "}
                        <span className="inline-flex overflow-hidden align-bottom h-[1.15em] sm:h-[1.2em] relative" style={{ perspective: "500px" }}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={ROTATING_WORDS[wordIndex]}
                                    initial={{ rotateX: 90, opacity: 0 }}
                                    animate={{ rotateX: 0, opacity: 1 }}
                                    exit={{ rotateX: -90, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-gradient inline-block origin-bottom"
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    {ROTATING_WORDS[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        .
                        <br />
                        <span className="text-gradient">Ever.</span>
                        <span className="sr-only"> — 24/7 AI Voice &amp; Chat Receptionist Agents for Indian SMBs</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-text-secondary max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
                    >
                        We install <span className="text-text-primary font-semibold">24/7 AI Receptionists</span> that answer calls,
                        qualify leads, and book appointments on WhatsApp —{" "}
                        <span className="text-accent font-semibold">so you make money while you sleep.</span>
                        <br className="hidden sm:block" />
                        <span className="text-text-secondary/80 text-sm sm:text-base mt-1 inline-block">
                            Trusted by forward-thinking Indian businesses. Built with LangGraph & Python.
                        </span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
                    >
                        <button
                            onClick={() => setShowBooking(true)}
                            className="group w-full sm:w-auto btn-gradient text-[#0E1A14] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-[0_0_30px_rgba(73,226,155,0.4)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            Book Your Free 15-Min AI Audit
                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                        <a
                            href="#how-it-works"
                            className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold border border-[#49E29B]/30 text-text-primary hover:border-accent hover:bg-[#49E29B]/5 transition-all duration-300 flex items-center justify-center gap-2 text-center"
                        >
                            <Play size={16} className="text-accent" />
                            Watch 60-Second Demo
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto"
                    >
                        {[
                            { icon: PhoneCall, value: "24/7", label: "Always Answering" },
                            { icon: TrendingUp, value: "40%", label: "Fewer No-Shows" },
                            { icon: MessageSquare, value: "3x", label: "Faster Response" },
                            { icon: Calendar, value: "100%", label: "Call Coverage" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="flex items-center justify-center mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-[#49E29B]/10 flex items-center justify-center group-hover:bg-[#49E29B]/20 transition-colors duration-300">
                                        <stat.icon size={16} className="text-accent" />
                                    </div>
                                </div>
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient font-[family-name:var(--font-outfit)]">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-text-secondary mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-[#0E1A14] to-transparent" />
            </section>

            <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
        </>
    );
}
