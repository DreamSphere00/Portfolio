"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-main"
        >
            {/* Animated background glow orbs — smaller on mobile */}
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
                        <Sparkles size={14} className="text-accent" />
                        <span className="text-xs sm:text-sm text-accent font-medium">
                            Premium Digital Agency
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
                    We Build Digital
                    <br />
                    <span className="text-gradient">Experiences</span> That{" "}
                    <span className="text-gradient">Convert</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl text-text-secondary max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
                >
                    We are a team of strategists, designers, and engineers who craft
                    stunning digital products that drive real business results. From
                    concept to launch, we deliver excellence.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
                >
                    <a
                        href="#contact"
                        className="group w-full sm:w-auto btn-gradient text-[#0E1A14] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-[0_0_30px_rgba(73,226,155,0.4)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                        Start Your Project
                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                    <a
                        href="#portfolio"
                        className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold border border-[#49E29B]/30 text-text-primary hover:border-accent hover:bg-[#49E29B]/5 transition-all duration-300 text-center"
                    >
                        View Our Work
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
                        { value: "2+", label: "Projects Delivered" },
                        { value: "100%", label: "Client Satisfaction" },
                        { value: "1+", label: "Years Experience" },
                        { value: "24/7", label: "Support Available" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
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
    );
}
