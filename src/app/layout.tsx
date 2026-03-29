import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamsphere.online"),
  title: {
    default: "DreamSphere — AI Receptionist Agency India | 24/7 AI Voice & Chat Agents for SMBs",
    template: "%s | DreamSphere — AI Automation Agency India",
  },
  description:
    "DreamSphere installs 24/7 AI Receptionist Agents that answer calls, qualify leads, and book appointments on WhatsApp for Indian SMBs — dentists, clinics, gyms, salons, coaches & more. Cut no-shows by 40%, capture every lead, and grow revenue while you sleep. Built with LangGraph, Python & NLP by expert AI engineers in Bengaluru.",
  keywords: [
    "AI receptionist India",
    "AI voice agent for clinics",
    "AI chatbot for dentists",
    "WhatsApp booking bot India",
    "AI automation agency India",
    "AI receptionist for small business",
    "24/7 AI answering service",
    "automated appointment booking",
    "WhatsApp appointment reminder bot",
    "AI lead qualification chatbot",
    "voice AI agent India",
    "LangGraph automation agency",
    "Python AI automation",
    "NLP chatbot India",
    "AI for gyms India",
    "AI for salons India",
    "AI for real estate agents India",
    "AI for lawyers India",
    "AI for coaches India",
    "reduce no-shows AI",
    "missed call recovery AI",
    "AI automation Bengaluru",
    "DreamSphere",
    "DreamSphere agency",
    "dreamsphere.online",
    "web development company India",
    "custom AI solutions India",
    "full stack development agency",
  ],
  authors: [{ name: "DreamSphere", url: "https://dreamsphere.online" }],
  creator: "DreamSphere",
  publisher: "DreamSphere",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dreamsphere.online",
    siteName: "DreamSphere",
    title: "DreamSphere — Never Miss Another Customer Call | AI Receptionist Agency India",
    description:
      "We install 24/7 AI Receptionists that answer calls, qualify leads & book appointments on WhatsApp. Cut no-shows by 40%. Built by expert AI engineers in Bengaluru. Book your free 15-min AI audit.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DreamSphere — AI Receptionist Agency India | 24/7 Voice & Chat AI Agents",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamSphere — AI Receptionist Agency India | Never Miss Another Call",
    description:
      "24/7 AI Voice & Chat Receptionists for Indian SMBs. Answer calls, qualify leads, book on WhatsApp. Cut no-shows 40%. Book free 15-min AI audit.",
    images: ["/og-image.png"],
    creator: "@dreamsphere",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dreamsphere.online",
  },
  category: "technology",
  verification: {
    google: "LuWVy2C7EWNJxupUoUB3lmQ5YaOKMwGBU5KCx5EVP78",
  },
};

// JSON-LD: Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://dreamsphere.online/#organization",
  name: "DreamSphere",
  alternateName: "DreamSphere AI Automation Agency",
  url: "https://dreamsphere.online",
  logo: "https://dreamsphere.online/icon.svg",
  description:
    "India's #1 AI Receptionist Agency. We install 24/7 AI voice and chat receptionists that answer calls, qualify leads, and book appointments for small-medium businesses. Built with LangGraph, Python, and NLP.",
  email: "support@dreamsphere.online",
  telephone: "+919483391275",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9716",
    longitude: "77.5946",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
  ],
  sameAs: [
    "https://github.com/Abhich05",
    "https://calendly.com/dreamsphere00/30min",
    "https://www.youtube.com/@DreamSphere-1",
    "https://www.linkedin.com/in/akshaykumarhullalli/",
  ],
  foundingDate: "2025",
  foundingLocation: "Bengaluru, Karnataka, India",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 3,
  },
  knowsAbout: [
    "AI Voice Agents", "AI Chatbots", "NLP", "LangGraph", "Python",
    "Workflow Automation", "WhatsApp Integration", "Google Calendar API",
    "Next.js", "React", "Full Stack Development", "Cloud Deployment",
    "AWS", "Machine Learning", "Conversational AI",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "AI Receptionist Agent",
      description: "24/7 AI voice and chat receptionist that answers calls, qualifies leads, books appointments via WhatsApp and Google Calendar. Custom-built for your business in 7-14 days.",
      price: "199000",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "39900",
        priceCurrency: "INR",
        unitCode: "MON",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON",
        },
      },
      itemOffered: {
        "@type": "Service",
        name: "AI Receptionist Agent — Full Package",
        description: "Custom AI voice + chat receptionist, WhatsApp Business integration, Google Calendar auto-booking, lead qualification, automated reminders, monthly reports, 24/7 monitoring.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom AI Chatbot Development",
        description: "Intelligent conversational AI chatbots powered by NLP and machine learning for customer support automation and lead engagement.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Workflow Automation",
        description: "End-to-end business process automation using LangGraph and Python to eliminate repetitive tasks and integrate tools.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Web Application Development",
        description: "High-performance web applications built with React, Next.js, and modern full-stack technologies.",
      },
    },
  ],
};

// JSON-LD: WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dreamsphere.online/#website",
  name: "DreamSphere",
  url: "https://dreamsphere.online",
  description: "India's #1 AI Receptionist Agency — 24/7 AI voice and chat agents for small-medium businesses.",
  publisher: { "@id": "https://dreamsphere.online/#organization" },
  inLanguage: "en-IN",
};

// JSON-LD: LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://dreamsphere.online/#localbusiness",
  name: "DreamSphere — AI Automation Agency",
  image: "https://dreamsphere.online/icon.svg",
  url: "https://dreamsphere.online",
  telephone: "+919483391275",
  email: "support@dreamsphere.online",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9716",
    longitude: "77.5946",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "2",
  },
};

// JSON-LD: FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI Receptionist and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI Receptionist is an intelligent voice and chat agent that answers your business phone calls and WhatsApp messages 24/7. It greets callers naturally, answers FAQs, qualifies leads by asking relevant questions, and books appointments directly into your Google Calendar — all without any human intervention.",
      },
    },
    {
      "@type": "Question",
      name: "How much does DreamSphere's AI Receptionist cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI Receptionist Agent has a one-time setup fee of ₹1,99,000 (includes custom AI training, WhatsApp/Google Calendar integrations, testing & launch) and a monthly fee of ₹39,900 (covers hosting, monitoring, updates, and performance reports). Most clients see ROI within 30-45 days.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to set up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build and deploy your custom AI Receptionist in 7-14 days. This includes training the AI on your specific services, pricing, FAQs, and business rules, plus integrating with WhatsApp and Google Calendar.",
      },
    },
    {
      "@type": "Question",
      name: "Which businesses benefit most from AI Receptionists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small-medium businesses in India that rely on appointments and phone inquiries — dentists, clinics, gyms, coaches, real estate agents, lawyers, and salons. Any business losing revenue to missed calls, manual bookings, or no-shows benefits significantly.",
      },
    },
    {
      "@type": "Question",
      name: "Does the AI work on WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our AI Receptionist integrates with WhatsApp Business API for automated chat, appointment booking confirmations, and reminder messages (24hrs + 1hr before appointments). It also handles voice calls and website chat.",
      },
    },
  ],
};

// JSON-LD: BreadcrumbList
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://dreamsphere.online/" },
    { "@type": "ListItem", position: 2, name: "How It Works", item: "https://dreamsphere.online/#how-it-works" },
    { "@type": "ListItem", position: 3, name: "Benefits", item: "https://dreamsphere.online/#benefits" },
    { "@type": "ListItem", position: 4, name: "Pricing", item: "https://dreamsphere.online/#pricing" },
    { "@type": "ListItem", position: 5, name: "Portfolio", item: "https://dreamsphere.online/#portfolio" },
    { "@type": "ListItem", position: 6, name: "Contact", item: "https://dreamsphere.online/#contact" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" dir="ltr">
      <head>
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        <meta name="theme-color" content="#0E1A14" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="DreamSphere" />
        <link rel="canonical" href="https://dreamsphere.online" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
