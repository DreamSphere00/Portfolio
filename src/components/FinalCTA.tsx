"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, PhoneOff } from "lucide-react";
import BookingModal from "./BookingModal";

export default function FinalCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [showBooking, setShowBooking] = useState(false);

    return (
        <>
            <section className="relative py-16 sm:py-24 md:py-28 lg:py-36 bg-gradient-main overflow-hidden">
                {/* Large glow orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-[#49E29B]/6 rounded-full blur-[200px] sm:blur-[300px]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
                    {/* Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                        className="flex items-center justify-center mb-6 sm:mb-8"
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#49E29B]/10 flex items-center justify-center glow-accent-strong">
                            <PhoneOff size={32} className="text-accent" />
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-outfit)] mb-4 sm:mb-6"
                    >
                        Stop Losing{" "}
                        <span className="text-gradient">₹50,000+</span>{" "}
                        Per Month
                        <br className="hidden sm:block" />
                        to Missed Calls
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
                    >
                        Book your free 15-minute AI Receptionist audit. We&apos;ll analyze your
                        call flow and show you exactly how much revenue you&apos;re leaving on the
                        table — with no commitment and no hard sell. Just data.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <button
                            onClick={() => setShowBooking(true)}
                            className="group btn-gradient text-[#0E1A14] px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold flex items-center gap-3 hover:shadow-[0_0_50px_rgba(73,226,155,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                            Book Your Free AI Audit — It&apos;s 15 Minutes
                            <ArrowRight
                                size={22}
                                className="transition-transform duration-300 group-hover:translate-x-1.5"
                            />
                        </button>

                        <p className="text-text-secondary/60 text-xs sm:text-sm">
                            No commitment • No hard sell • Just data
                        </p>
                    </motion.div>
                </div>
            </section>

            <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
        </>
    );
}
