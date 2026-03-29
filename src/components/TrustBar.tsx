"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield } from "lucide-react";

const clients = [
    { name: "CyberWarFare Labs", highlight: "Cybersecurity Platform" },
    { name: "Court Booking System", highlight: "Concurrency at Scale" },
    { name: "Saaro Health", highlight: "Healthcare Tech" },
];

export default function TrustBar() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <section className="relative py-8 sm:py-12 bg-[#0E1A14] border-y border-[#49E29B]/5" ref={ref}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <p className="text-center text-text-secondary text-xs sm:text-sm font-medium uppercase tracking-widest mb-6 sm:mb-8 flex items-center justify-center gap-2">
                    <Shield size={14} className="text-accent/60" />
                    Previously Delivered For
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
                            className="group flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#16251C]/60 border border-[#49E29B]/8 hover:border-[#49E29B]/25 transition-all duration-300"
                        >
                            <div className="w-8 h-8 rounded-lg bg-[#49E29B]/10 flex items-center justify-center text-accent font-bold text-xs font-[family-name:var(--font-outfit)] group-hover:bg-[#49E29B]/20 transition-colors duration-300">
                                {client.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
                                    {client.name}
                                </p>
                                <p className="text-[10px] sm:text-xs text-text-secondary">
                                    {client.highlight}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
