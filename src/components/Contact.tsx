"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Send,
    Mail,
    MapPin,
    Phone,
    Github,
    Twitter,
    Linkedin,
    Instagram,
    Calendar,
} from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        details: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setFormState({ name: "", email: "", details: "" });
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contact" className="relative py-16 sm:py-24 md:py-28 lg:py-36 bg-[#0E1A14]">
            <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#49E29B]/5 rounded-full blur-[120px] sm:blur-[200px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest">
                        Get In Touch
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 font-[family-name:var(--font-outfit)]">
                        Let&apos;s Build Something{" "}
                        <span className="text-gradient">Amazing</span>
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed px-2">
                        Have a project in mind? We&apos;d love to hear about it. Drop us a
                        message and we&apos;ll get back to you within 24 hours.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) =>
                                        setFormState({ ...formState, name: e.target.value })
                                    }
                                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#16251C] border border-[#49E29B]/10 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm sm:text-base"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) =>
                                        setFormState({ ...formState, email: e.target.value })
                                    }
                                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#16251C] border border-[#49E29B]/10 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm sm:text-base"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="details"
                                    className="block text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2"
                                >
                                    Project Details
                                </label>
                                <textarea
                                    id="details"
                                    required
                                    rows={4}
                                    value={formState.details}
                                    onChange={(e) =>
                                        setFormState({ ...formState, details: e.target.value })
                                    }
                                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#16251C] border border-[#49E29B]/10 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none text-sm sm:text-base"
                                    placeholder="Tell us about your project, goals, and timeline..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full btn-gradient text-[#0E1A14] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(73,226,155,0.35)] transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
                            >
                                {submitted ? (
                                    "Message Sent! ✓"
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col justify-between"
                    >
                        <div className="space-y-5 sm:space-y-8">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#49E29B]/10 flex items-center justify-center shrink-0">
                                    <Mail className="text-accent" size={18} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">Email Us</h4>
                                    <a href="mailto:support@dreamsphere.online" className="text-text-secondary text-xs sm:text-sm mt-1 hover:text-accent transition-colors duration-300 block">
                                        support@dreamsphere.online
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#49E29B]/10 flex items-center justify-center shrink-0">
                                    <Phone className="text-accent" size={18} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">Call Us</h4>
                                    <a href="tel:+919483391275" className="text-text-secondary text-xs sm:text-sm mt-1 hover:text-accent transition-colors duration-300 block">
                                        +91 9483391275
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#49E29B]/10 flex items-center justify-center shrink-0">
                                    <MapPin className="text-accent" size={18} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">Visit Us</h4>
                                    <p className="text-text-secondary text-xs sm:text-sm mt-1">
                                        Bengaluru, Karnataka
                                        <br />
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://calendly.com/dreamsphere00/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 sm:gap-4 group mt-5 sm:mt-8"
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#49E29B]/10 flex items-center justify-center shrink-0 group-hover:bg-[#49E29B]/20 transition-colors duration-300">
                                <Calendar className="text-accent" size={18} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Book a Call</h4>
                                <p className="text-text-secondary text-xs sm:text-sm mt-1 group-hover:text-accent transition-colors duration-300">
                                    Schedule a 30-min consultation
                                </p>
                            </div>
                        </a>

                        {/* Social Icons */}
                        <div className="mt-8 sm:mt-12">
                            <p className="text-sm font-semibold mb-3 sm:mb-4">Follow Us</p>
                            <div className="flex gap-3 sm:gap-4">
                                {[
                                    { icon: Github, href: "#", label: "GitHub" },
                                    { icon: Twitter, href: "#", label: "Twitter" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/akshaykumarhullalli/", label: "LinkedIn" },
                                    { icon: Instagram, href: "#", label: "Instagram" },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#49E29B]/10 flex items-center justify-center text-text-secondary hover:text-accent hover:bg-[#49E29B]/20 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
