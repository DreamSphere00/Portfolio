"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot as BotIcon, X, Send, Sparkles, User } from "lucide-react";

interface Message {
    role: "user" | "model";
    content: string;
}

const SUGGESTED_QUESTIONS = [
    "What services do you offer?",
    "Tell me about your team",
    "How can I book a consultation?",
    "Show me your projects",
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-show greeting tooltip after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGreeting(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    // Hide greeting when chat opens
    useEffect(() => {
        if (isOpen) setShowGreeting(false);
    }, [isOpen]);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const sendMessage = async (text?: string) => {
        const messageText = text || input.trim();
        if (!messageText || isLoading) return;

        const userMessage: Message = { role: "user", content: messageText };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessages((prev) => [
                    ...prev,
                    { role: "model", content: data.message },
                ]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "model",
                        content: data.error || "Sorry, something went wrong. Please try again!",
                    },
                ]);
            }
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: "model",
                    content: "Connection error. Please check your internet and try again.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // Simple markdown-like rendering for bold text and line breaks
    const renderContent = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return (
                    <strong key={i} className="font-semibold text-accent">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            // Handle line breaks
            return part.split("\n").map((line, j) => (
                <span key={`${i}-${j}`}>
                    {j > 0 && <br />}
                    {line}
                </span>
            ));
        });
    };

    return (
        <>
            {/* Floating chat button + greeting above */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="fixed bottom-6 right-6 z-[9998]"
                        onMouseEnter={() => { setShowGreeting(true); setIsHovered(true); }}
                        onMouseLeave={() => { setShowGreeting(false); setIsHovered(false); }}
                    >
                        {/* Greeting text above the button */}
                        <AnimatePresence>
                            {showGreeting && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute bottom-full right-0 mb-3
                                               px-4 py-2 rounded-full bg-[#16251C]/80 backdrop-blur-lg
                                               border border-[#49E29B]/15 shadow-lg
                                               cursor-pointer whitespace-nowrap"
                                    onClick={() => { setShowGreeting(false); setIsOpen(true); }}
                                >
                                    <p className="text-xs sm:text-sm text-text-primary">
                                        Hi, I&apos;m <strong className="text-accent">Orbi</strong>
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Waving hand on hover */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute -top-3 -left-2 z-10 text-xl"
                                    style={{ animation: "wave 0.5s ease-in-out infinite alternate" }}
                                >
                                    👋
                                </motion.span>
                            )}
                        </AnimatePresence>

                        {/* Bot button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full
                                   btn-gradient text-[#0E1A14]
                                   flex items-center justify-center
                                   shadow-[0_0_40px_rgba(73,226,155,0.3)]
                                   hover:shadow-[0_0_60px_rgba(73,226,155,0.5)]
                                   hover:scale-110 transition-all duration-300 cursor-pointer"
                            aria-label="Open Orbi Chat"
                        >
                            <BotIcon size={24} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]
                                   w-[calc(100vw-2rem)] sm:w-[420px] h-[min(600px,85vh)]
                                   rounded-2xl sm:rounded-3xl overflow-hidden
                                   bg-[#16251C]/80 backdrop-blur-2xl
                                   border border-[#49E29B]/20
                                   shadow-[0_0_80px_rgba(73,226,155,0.08),0_25px_50px_rgba(0,0,0,0.5)]
                                   flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-[#49E29B]/10 bg-[#0E1A14]/60">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg btn-gradient flex items-center justify-center">
                                    <Sparkles size={18} className="text-[#0E1A14]" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                                        Orbi
                                    </h3>
                                    <p className="text-[10px] text-accent/70 font-medium">
                                        by DreamSphere • Always online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-lg bg-[#49E29B]/10 flex items-center justify-center
                                           hover:bg-[#49E29B]/20 hover:text-accent text-text-secondary
                                           transition-all duration-200"
                                aria-label="Close chat"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Messages area */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
                            {/* Welcome message */}
                            {messages.length === 0 && (
                                <div className="space-y-4">
                                    <div className="flex gap-2.5">
                                        <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                                            <BotIcon size={14} className="text-accent" />
                                        </div>
                                        <div className="bg-[#0E1A14]/60 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%] border border-[#49E29B]/10">
                                            <p className="text-sm text-text-primary leading-relaxed">
                                                👋 Hey! I&apos;m <strong className="text-accent">Orbi</strong>, your DreamSphere assistant. I can help you learn about our services, team, projects, and how to get started. What would you like to know?
                                            </p>
                                        </div>
                                    </div>

                                    {/* Suggested questions */}
                                    <div className="flex flex-wrap gap-2 pl-9">
                                        {SUGGESTED_QUESTIONS.map((q) => (
                                            <button
                                                key={q}
                                                onClick={() => sendMessage(q)}
                                                className="text-xs px-3 py-1.5 rounded-full
                                                           bg-[#49E29B]/10 text-accent/80 border border-[#49E29B]/15
                                                           hover:bg-[#49E29B]/20 hover:text-accent hover:border-[#49E29B]/30
                                                           transition-all duration-200 cursor-pointer"
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Message bubbles */}
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                                >
                                    {/* Avatar */}
                                    <div
                                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${msg.role === "user"
                                            ? "bg-accent/20"
                                            : "bg-accent/15"
                                            }`}
                                    >
                                        {msg.role === "user" ? (
                                            <User size={14} className="text-accent" />
                                        ) : (
                                            <BotIcon size={14} className="text-accent" />
                                        )}
                                    </div>

                                    {/* Bubble */}
                                    <div
                                        className={`rounded-2xl px-4 py-3 max-w-[85%] text-sm leading-relaxed ${msg.role === "user"
                                            ? "bg-accent/15 text-text-primary rounded-tr-md border border-accent/20"
                                            : "bg-[#0E1A14]/60 text-text-primary rounded-tl-md border border-[#49E29B]/10"
                                            }`}
                                    >
                                        {renderContent(msg.content)}
                                    </div>
                                </div>
                            ))}

                            {/* Loading indicator */}
                            {isLoading && (
                                <div className="flex gap-2.5">
                                    <div className="w-7 h-7 rounded-lg bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                                        <BotIcon size={14} className="text-accent" />
                                    </div>
                                    <div className="bg-[#0E1A14]/60 rounded-2xl rounded-tl-md px-4 py-3 border border-[#49E29B]/10">
                                        <div className="flex gap-1.5 items-center">
                                            <div className="w-2 h-2 rounded-full bg-accent/60 animate-bounce [animation-delay:-0.3s]" />
                                            <div className="w-2 h-2 rounded-full bg-accent/60 animate-bounce [animation-delay:-0.15s]" />
                                            <div className="w-2 h-2 rounded-full bg-accent/60 animate-bounce" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input area */}
                        <div className="px-4 py-3 border-t border-[#49E29B]/10 bg-[#0E1A14]/40">
                            <div className="flex items-center gap-2 bg-[#16251C] rounded-xl border border-[#49E29B]/10 focus-within:border-accent/30 transition-colors duration-200">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask about DreamSphere..."
                                    disabled={isLoading}
                                    className="flex-1 bg-transparent px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 outline-none disabled:opacity-50"
                                />
                                <button
                                    onClick={() => sendMessage()}
                                    disabled={!input.trim() || isLoading}
                                    className="w-9 h-9 mr-1.5 rounded-lg btn-gradient flex items-center justify-center
                                               text-[#0E1A14] disabled:opacity-30 disabled:cursor-not-allowed
                                               hover:shadow-[0_0_20px_rgba(73,226,155,0.35)]
                                               transition-all duration-200 cursor-pointer shrink-0"
                                    aria-label="Send message"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                            <p className="text-[10px] text-text-secondary/40 text-center mt-2">
                                Powered by Gemini AI • Orbi by DreamSphere
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
