"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

const team = [
    {
        name: "Vinay D",
        role: "Backend Engineer",
        bio: "Backend specialist building robust systems with Java, Spring Boot, Kafka, MySQL, and MongoDB. Passionate about scalable architectures and event-driven design.",
        initials: "VD",
        color: "from-emerald-500 to-teal-600",
        linkedin: "https://www.linkedin.com/in/vinaydupad/",
        skills: ["Java", "Spring Boot", "Kafka", "MySQL", "MongoDB"],
    },
    {
        name: "Abhishek C H",
        role: "Full Stack Developer",
        bio: "Full-stack craftsman proficient in the MERN stack, Python, and Firebase. Builds end-to-end web applications from idea to deployment.",
        initials: "AC",
        color: "from-cyan-500 to-blue-600",
        linkedin: "https://www.linkedin.com/in/errorwithabhich/",
        skills: ["MERN", "PERN", "Python", "Firebase", "IoT"],
    },
    {
        name: "Akshaykumar",
        role: "AI & Automation Engineer",
        bio: "AI engineer specializing in Python, Machine Learning, workflow automation, and LangGraph. Builds intelligent systems that automate and scale.",
        initials: "AK",
        color: "from-violet-500 to-purple-600",
        linkedin: "https://www.linkedin.com/in/akshaykumarhullalli/",
        skills: ["Python", "ML", "Automation", "LangGraph"],
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
                        Three passionate engineers dedicated to delivering world-class digital
                        experiences. Together, we turn bold ideas into reality.
                    </p>
                </motion.div>

                {/* Team Grid — 1→2→3 responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
                            className={`group relative rounded-2xl bg-gradient-card border border-[#49E29B]/10 hover:border-[#49E29B]/30 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(73,226,155,0.12)] ${index === 2 ? "sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto lg:max-w-none" : ""
                                }`}
                        >
                            {/* Avatar with initials */}
                            <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden bg-[#1a2f22]">
                                <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg`}>
                                    <span className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-outfit)]">
                                        {member.initials}
                                    </span>
                                </div>
                                {/* Decorative rings */}
                                <div className={`absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-[#49E29B]/10`} />
                                <div className={`absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-[#49E29B]/5`} />

                                {/* LinkedIn overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0E1A14]/50">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
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
                                {/* Skills */}
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {member.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-[#49E29B]/10 text-accent/80 font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
