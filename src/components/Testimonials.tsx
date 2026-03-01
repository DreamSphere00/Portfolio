"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "David Mitchell",
        company: "CEO, FinVault Inc.",
        rating: 5,
        text: "DreamSphere transformed our entire digital presence. Their team delivered a fintech dashboard that exceeded our expectations and our users love it. The attention to detail and technical expertise was remarkable.",
    },
    {
        name: "Dr. Ananya Rao",
        company: "Founder, MediConnect",
        rating: 5,
        text: "Working with DreamSphere was a game-changer. They understood our healthcare domain deeply and built a platform that's both HIPAA-compliant and beautifully designed. Our patient engagement doubled within months.",
    },
    {
        name: "James O'Sullivan",
        company: "CTO, ShopSphere",
        rating: 5,
        text: "The e-commerce redesign DreamSphere delivered increased our conversion rate by 45%. Their design sensibility combined with solid engineering made all the difference. Highly recommend their team.",
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="testimonials"
            className="relative py-16 sm:py-24 md:py-28 lg:py-36 bg-gradient-main"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest">
                        Testimonials
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 font-[family-name:var(--font-outfit)]">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                </motion.div>

                {/* Testimonial Cards — Desktop grid (sm+), Mobile slider */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
                            className={`relative p-6 sm:p-7 lg:p-8 rounded-2xl bg-gradient-card border border-[#49E29B]/10 hover:border-[#49E29B]/20 transition-all duration-300 ${index === 2 ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none" : ""
                                }`}
                        >
                            <Quote size={28} className="text-accent/20 mb-3 sm:mb-4" />
                            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-1 mb-3 sm:mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className="text-accent fill-accent"
                                    />
                                ))}
                            </div>
                            <div>
                                <p className="font-bold text-sm">{testimonial.name}</p>
                                <p className="text-text-secondary text-xs mt-1">
                                    {testimonial.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Slider (shown only on mobile <640px) */}
                <div className="sm:hidden">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="relative p-5 rounded-2xl bg-gradient-card border border-[#49E29B]/10"
                    >
                        <Quote size={24} className="text-accent/20 mb-3" />
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                            &ldquo;{testimonials[activeIndex].text}&rdquo;
                        </p>
                        <div className="flex items-center gap-1 mb-3">
                            {Array.from({ length: testimonials[activeIndex].rating }).map(
                                (_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className="text-accent fill-accent"
                                    />
                                )
                            )}
                        </div>
                        <div>
                            <p className="font-bold text-sm">
                                {testimonials[activeIndex].name}
                            </p>
                            <p className="text-text-secondary text-xs mt-1">
                                {testimonials[activeIndex].company}
                            </p>
                        </div>
                    </motion.div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-5">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${i === activeIndex
                                        ? "bg-accent w-8"
                                        : "bg-accent/30 hover:bg-accent/50 w-2.5"
                                    }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
