"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const team = [
    {
        name: "Arjun Mehta",
        role: "CEO & Founder",
        bio: "Visionary leader with 10+ years in digital strategy, driving DreamSphere's mission to transform businesses through technology.",
        image: "/team/ceo.webp",
        linkedin: "#",
    },
    {
        name: "Priya Sharma",
        role: "Lead Developer",
        bio: "Full-stack architect specializing in React and Node.js ecosystems. Passionate about clean code and scalable systems.",
        image: "/team/lead-dev.webp",
        linkedin: "#",
    },
    {
        name: "Kira Nakamura",
        role: "UI/UX Designer",
        bio: "Award-winning designer with an eye for detail. Creates intuitive interfaces that users love and businesses trust.",
        image: "/team/designer.webp",
        linkedin: "#",
    },
    {
        name: "Rahul Patel",
        role: "Backend Engineer",
        bio: "Cloud infrastructure expert and API craftsman. Builds the robust backends that power our clients' success.",
        image: "/team/backend.webp",
        linkedin: "#",
    },
    {
        name: "Sarah Chen",
        role: "Marketing Head",
        bio: "Growth strategist and data storyteller. Turns analytics into actionable campaigns that drive real conversions.",
        image: "/team/marketing.webp",
        linkedin: "#",
    },
];

export default function Team() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="team" className="relative py-16 sm:py-24 md:py-28 lg:py-36 bg-gradient-main">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest">
                        Our Team
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 font-[family-name:var(--font-outfit)]">
                        Meet the <span className="text-gradient">Dreamers</span>
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                        Five passionate experts dedicated to delivering world-class digital
                        experiences. Together, we turn bold ideas into reality.
                    </p>
                </motion.div>

                {/* Team Grid — 1→2→3→5 responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            className={`group relative rounded-2xl bg-gradient-card border border-[#49E29B]/10 hover:border-[#49E29B]/30 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(73,226,155,0.12)] ${
                                /* Center the last 2 cards on sm (2-col) and last 2 on md (3-col) */
                                index === 3 ? "sm:col-start-1 md:col-start-auto" :
                                    index === 4 ? "sm:col-start-2 md:col-start-auto" : ""
                                }`}
                        >
                            {/* Avatar */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-[#1a2f22]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#16251C] via-transparent to-transparent" />

                                {/* LinkedIn overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0E1A14]/40">
                                    <a
                                        href={member.linkedin}
                                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent/90 flex items-center justify-center hover:bg-accent transition-colors duration-200 hover:scale-110"
                                        aria-label={`${member.name}'s LinkedIn`}
                                    >
                                        <Linkedin size={18} className="text-[#0E1A14]" />
                                    </a>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4 sm:p-5 lg:p-6">
                                <h3 className="text-base sm:text-lg font-bold font-[family-name:var(--font-outfit)]">
                                    {member.name}
                                </h3>
                                <p className="text-accent text-xs sm:text-sm font-medium mt-1">
                                    {member.role}
                                </p>
                                <p className="text-text-secondary text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
