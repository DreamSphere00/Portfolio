"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "Pricing", href: "#pricing" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
];

function AnimatedLogo() {
    const fullText = "DreamSphere";
    const [displayCount, setDisplayCount] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayCount < fullText.length) {
                    setDisplayCount(displayCount + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (displayCount > 0) {
                    setDisplayCount(displayCount - 1);
                } else {
                    setTimeout(() => setIsDeleting(false), 500);
                }
            }
        }, isDeleting ? 60 : 120);

        return () => clearTimeout(timeout);
    }, [displayCount, isDeleting]);

    const visibleText = fullText.slice(0, displayCount);
    const dreamPart = visibleText.slice(0, Math.min(displayCount, 5));
    const spherePart = displayCount > 5 ? visibleText.slice(5) : "";

    return (
        <a href="#" className="flex items-center gap-2 group">
            <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl btn-gradient flex items-center justify-center font-bold text-[#0E1A14] text-sm sm:text-lg relative overflow-hidden"
            >
                DS
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                    animate={{ x: ["-150%", "250%"] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            <span className="text-lg sm:text-xl font-bold font-[family-name:var(--font-outfit)] min-w-[130px] sm:min-w-[155px]">
                <span className="text-text-primary">{dreamPart}</span>
                <span className="text-gradient">{spherePart}</span>
                <span className="inline-block w-[2px] h-[1.1em] bg-accent align-middle ml-[1px] animate-pulse" />
            </span>
        </a>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#0E1A14]/90 backdrop-blur-xl border-b border-[#49E29B]/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <AnimatedLogo />

                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm font-medium relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="#pricing"
                            className="btn-gradient text-[#0E1A14] px-5 xl:px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-[0_0_20px_rgba(73,226,155,0.4)] transition-all duration-300 hover:scale-105"
                        >
                            Book Free Audit
                        </a>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-text-primary p-2 -mr-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-[#0E1A14]/98 backdrop-blur-xl border-b border-[#49E29B]/10"
                    >
                        <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="text-text-secondary hover:text-accent hover:bg-[#49E29B]/5 transition-all duration-300 text-base py-3 px-3 rounded-xl"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <a
                                href="#pricing"
                                onClick={() => setIsOpen(false)}
                                className="btn-gradient text-[#0E1A14] px-6 py-3 rounded-full text-sm font-semibold text-center hover:shadow-[0_0_20px_rgba(73,226,155,0.4)] transition-all duration-300 mt-3"
                            >
                                Book Free Audit
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
