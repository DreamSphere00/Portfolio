import { Github, Youtube, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "http://opener.one/yt/2l419h", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/akshaykumarhullalli/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/dream_tritech?igshid=NjIwNzIyMDk2Mg%3D%3D", label: "Instagram" },
];

export default function Footer() {
    return (
        <footer className="relative bg-[#0a130e] border-t border-[#49E29B]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                    {/* Logo & Description */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl btn-gradient flex items-center justify-center font-bold text-[#0E1A14] text-sm sm:text-lg">
                                DS
                            </div>
                            <span className="text-lg sm:text-xl font-bold font-[family-name:var(--font-outfit)]">
                                Dream<span className="text-gradient">Sphere</span>
                            </span>
                        </a>
                        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-sm">
                            We build digital experiences that convert. A premium agency
                            crafting strategy, design, and engineering solutions for
                            forward-thinking businesses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4 sm:mb-6 font-[family-name:var(--font-outfit)]">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-text-secondary text-xs sm:text-sm hover:text-accent transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4 sm:mb-6 font-[family-name:var(--font-outfit)]">
                            Connect With Us
                        </h4>
                        <div className="flex gap-2.5 sm:gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#49E29B]/10 flex items-center justify-center text-text-secondary hover:text-accent hover:bg-[#49E29B]/20 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                        <a href="mailto:support@dreamsphere.online" className="text-text-secondary text-xs sm:text-sm mt-4 sm:mt-6 hover:text-accent transition-colors duration-300 block">
                            support@dreamsphere.online
                        </a>
                    </div>
                </div>

                {/* Divider & Copyright */}
                <div className="border-t border-[#49E29B]/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <p className="text-text-secondary text-[10px] sm:text-xs">
                        &copy; {new Date().getFullYear()} DreamSphere. All rights reserved.
                    </p>
                    <p className="text-text-secondary text-[10px] sm:text-xs">
                        Crafted with passion by the DreamSphere team.
                    </p>
                </div>
            </div>
        </footer>
    );
}
