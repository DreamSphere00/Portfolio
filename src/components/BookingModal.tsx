"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Bot,
  Phone,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

interface TimeSlot {
  start: string;
  end: string;
  label: string;
}

interface BookingResult {
  status: "confirmed" | "unavailable" | "error";
  eventId?: string;
  date?: string;
  time?: string;
  clientName?: string;
  clientEmail?: string;
  message?: string;
  alternativeSlots?: TimeSlot[];
}

const SERVICES = [
  { value: "Free AI Receptionist Audit", label: "Free AI Receptionist Audit" },
  { value: "Custom AI Automation Project", label: "Custom AI Automation Project" },
  { value: "Other / General Inquiry", label: "Other / General Inquiry" },
];

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0].value);
  const [date, setDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [challenge, setChallenge] = useState("");

  // UI state
  const [step, setStep] = useState<"form" | "loading" | "success" | "error">("form");
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [slotsMessage, setSlotsMessage] = useState("");
  const [result, setResult] = useState<BookingResult | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Lock body scroll when open
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

  // Reset form on close
  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => {
      setStep("form");
      setName("");
      setEmail("");
      setPhone("");
      setService(SERVICES[0].value);
      setDate("");
      setSelectedSlot(null);
      setChallenge("");
      setAvailableSlots([]);
      setSlotsMessage("");
      setResult(null);
      setErrorMessage("");
    }, 300);
  }, [onClose]);

  // Fetch available slots when date changes
  useEffect(() => {
    if (!date) {
      setAvailableSlots([]);
      setSelectedSlot(null);
      return;
    }

    const fetchSlots = async () => {
      setSlotsLoading(true);
      setSlotsMessage("");
      setSelectedSlot(null);
      try {
        const res = await fetch(`/api/book/slots?date=${date}`);
        const data = await res.json();

        if (!res.ok) {
          setSlotsMessage(data.error || "Failed to load slots");
          setAvailableSlots([]);
          return;
        }

        setAvailableSlots(data.slots || []);
        if (data.message) setSlotsMessage(data.message);
        if ((data.slots || []).length === 0 && !data.message) {
          setSlotsMessage("No slots available on this date. Try another day.");
        }
      } catch {
        setSlotsMessage("Failed to check availability. Please try again.");
        setAvailableSlots([]);
      } finally {
        setSlotsLoading(false);
      }
    };

    fetchSlots();
  }, [date]);

  // Submit booking
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !name || !email || !phone) return;

    setStep("loading");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          date,
          startTime: selectedSlot.start,
          endTime: selectedSlot.end,
          service,
          challenge: challenge || undefined,
        }),
      });

      const data: BookingResult = await res.json();
      setResult(data);

      if (data.status === "confirmed") {
        setStep("success");
      } else if (data.status === "unavailable") {
        // Show alternative slots
        if (data.alternativeSlots && data.alternativeSlots.length > 0) {
          setAvailableSlots(data.alternativeSlots);
          setSelectedSlot(null);
        }
        setErrorMessage(data.message || "Slot no longer available. Pick another.");
        setStep("form");
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        setStep("error");
      }
    } catch {
      setErrorMessage("Connection error. Please try again or call +91 9483391275.");
      setStep("error");
    }
  };

  // Min date: tomorrow
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  // Max date: 30 days from now
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split("T")[0];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#0E1A14]/70 backdrop-blur-xl" />

          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#49E29B]/8 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-[#49E29B]/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl max-h-[90vh] rounded-2xl sm:rounded-3xl overflow-hidden
                       bg-[#16251C]/60 backdrop-blur-2xl
                       border border-[#49E29B]/20
                       shadow-[0_0_80px_rgba(73,226,155,0.08),0_25px_50px_rgba(0,0,0,0.4)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#49E29B]/10 bg-[#0E1A14]/40">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#49E29B]/15 flex items-center justify-center">
                  <Bot className="text-accent" size={18} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-[family-name:var(--font-outfit)] text-text-primary">
                    {step === "success"
                      ? "Booking Confirmed! 🎉"
                      : step === "loading"
                        ? "AI Agent Working..."
                        : "Book Your Free AI Audit"}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-text-secondary">
                    {step === "loading"
                      ? "Checking availability & creating your booking"
                      : "Powered by DreamSphere AI Booking Agent"}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#49E29B]/10 flex items-center justify-center
                           hover:bg-[#49E29B]/20 hover:text-accent text-text-secondary
                           transition-all duration-200 hover:scale-105"
                aria-label="Close booking modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-65px)] p-5 sm:p-6">
              {/* ─── FORM STEP ─── */}
              {step === "form" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Error banner */}
                  {errorMessage && (
                    <div className="flex items-start gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
                      <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-red-300">{errorMessage}</p>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-medium text-text-secondary mb-1.5">
                      <User size={12} /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dr. Priya Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1A14]/60 border border-[#49E29B]/10 text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                    />
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-text-secondary mb-1.5">
                        <Mail size={12} /> Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="priya@clinic.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1A14]/60 border border-[#49E29B]/10 text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-text-secondary mb-1.5">
                        <Phone size={12} /> Phone
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1A14]/60 border border-[#49E29B]/10 text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-medium text-text-secondary mb-1.5">
                      <Bot size={12} /> Service Interested In
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1A14]/60 border border-[#49E29B]/10 text-text-primary focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm appearance-none cursor-pointer"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.value} value={s.value} className="bg-[#16251C] text-text-primary">
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date picker */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-medium text-text-secondary mb-1.5">
                      <Calendar size={12} /> Preferred Date (Mon-Fri)
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={getMinDate()}
                      max={getMaxDate()}
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1A14]/60 border border-[#49E29B]/10 text-text-primary focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm"
                    />
                  </div>

                  {/* Time slots */}
                  {date && (
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-text-secondary mb-2">
                        <Clock size={12} /> Available Time Slots
                      </label>

                      {slotsLoading ? (
                        <div className="flex items-center justify-center gap-2 py-6 rounded-xl bg-[#0E1A14]/40 border border-[#49E29B]/10">
                          <Loader2 size={16} className="text-accent animate-spin" />
                          <span className="text-sm text-text-secondary">
                            Checking availability...
                          </span>
                        </div>
                      ) : availableSlots.length > 0 ? (
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {availableSlots.map((slot) => (
                            <button
                              key={slot.start}
                              type="button"
                              onClick={() => setSelectedSlot(slot)}
                              className={`px-2 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer border ${
                                selectedSlot?.start === slot.start
                                  ? "bg-[#49E29B]/20 border-accent text-accent"
                                  : "bg-[#0E1A14]/60 border-[#49E29B]/10 text-text-secondary hover:border-[#49E29B]/30 hover:text-text-primary"
                              }`}
                            >
                              {slot.label.split("–")[0].trim()}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 py-4 px-4 rounded-xl bg-[#0E1A14]/40 border border-[#49E29B]/10">
                          <AlertCircle size={14} className="text-text-secondary shrink-0" />
                          <span className="text-xs text-text-secondary">
                            {slotsMessage || "No slots available. Pick another date."}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Challenge textarea */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-medium text-text-secondary mb-1.5">
                      <MessageSquare size={12} /> What&apos;s your biggest challenge? (optional)
                    </label>
                    <textarea
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      rows={2}
                      placeholder="e.g., Missed calls after hours, no online booking system, staff overload..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0E1A14]/60 border border-[#49E29B]/10 text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!selectedSlot || !name || !email || !phone}
                    className="group w-full btn-gradient text-[#0E1A14] px-6 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(73,226,155,0.35)] transition-all duration-300 hover:scale-[1.02] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                  >
                    Book My Free AI Audit
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-[10px] text-text-secondary/50">
                    30-minute call • No commitment • No hard sell
                  </p>
                </form>
              )}

              {/* ─── LOADING STEP ─── */}
              {step === "loading" && (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-2xl bg-[#49E29B]/15 flex items-center justify-center mb-6 glow-accent"
                  >
                    <Bot size={28} className="text-accent" />
                  </motion.div>
                  <h4 className="text-lg font-bold font-[family-name:var(--font-outfit)] mb-2">
                    AI Agent Working...
                  </h4>
                  <div className="space-y-2 text-center">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0 }}
                      className="text-sm text-text-secondary"
                    >
                      🔍 Checking calendar availability...
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="text-sm text-text-secondary"
                    >
                      📅 Reserving your time slot...
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3 }}
                      className="text-sm text-text-secondary"
                    >
                      ✉️ Preparing calendar invite...
                    </motion.p>
                  </div>
                </div>
              )}

              {/* ─── SUCCESS STEP ─── */}
              {step === "success" && result && (
                <div className="flex flex-col items-center justify-center py-8 sm:py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-2xl bg-[#49E29B]/15 flex items-center justify-center mb-6 glow-accent-strong"
                  >
                    <CheckCircle2 size={32} className="text-accent" />
                  </motion.div>

                  <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] mb-2 text-center">
                    You&apos;re All Set! 🎉
                  </h4>
                  <p className="text-sm text-text-secondary text-center mb-6 max-w-sm">
                    {result.message || "Your AI Receptionist Audit has been booked. Check your email for the calendar invite."}
                  </p>

                  {/* Booking details card */}
                  <div className="w-full max-w-sm rounded-xl bg-[#0E1A14]/60 border border-[#49E29B]/15 p-4 space-y-3 mb-6">
                    {result.date && (
                      <div className="flex items-center gap-3">
                        <Calendar size={14} className="text-accent shrink-0" />
                        <span className="text-sm text-text-primary">{result.date}</span>
                      </div>
                    )}
                    {result.time && (
                      <div className="flex items-center gap-3">
                        <Clock size={14} className="text-accent shrink-0" />
                        <span className="text-sm text-text-primary">{result.time}</span>
                      </div>
                    )}
                    {result.clientEmail && (
                      <div className="flex items-center gap-3">
                        <Mail size={14} className="text-accent shrink-0" />
                        <span className="text-sm text-text-secondary">Invite sent to {result.clientEmail}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleClose}
                    className="btn-gradient text-[#0E1A14] px-8 py-3 rounded-xl text-sm font-bold hover:shadow-[0_0_30px_rgba(73,226,155,0.35)] transition-all duration-300 cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}

              {/* ─── ERROR STEP ─── */}
              {step === "error" && (
                <div className="flex flex-col items-center justify-center py-8 sm:py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-2xl bg-red-500/15 flex items-center justify-center mb-6"
                  >
                    <AlertCircle size={32} className="text-red-400" />
                  </motion.div>

                  <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] mb-2 text-center">
                    Oops, Something Went Wrong
                  </h4>
                  <p className="text-sm text-text-secondary text-center mb-6 max-w-sm">
                    {errorMessage}
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setStep("form");
                        setErrorMessage("");
                      }}
                      className="px-6 py-3 rounded-xl text-sm font-semibold border border-[#49E29B]/30 text-text-primary hover:border-accent hover:bg-[#49E29B]/5 transition-all duration-300 cursor-pointer"
                    >
                      Try Again
                    </button>
                    <a
                      href="tel:+919483391275"
                      className="btn-gradient text-[#0E1A14] px-6 py-3 rounded-xl text-sm font-bold hover:shadow-[0_0_30px_rgba(73,226,155,0.35)] transition-all duration-300"
                    >
                      Call Us Instead
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
