import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    default: "DreamSphere — Digital Agency in Bengaluru | Web Development, AI & Cloud Solutions",
    template: "%s | DreamSphere",
  },
  description:
    "DreamSphere is a Bengaluru-based digital agency specializing in full-stack web development (MERN, Next.js, Spring Boot), AI/ML automation, cloud deployment (AWS, GCP, Azure), UI/UX design, and chatbot integration. We build high-converting digital experiences for startups and enterprises.",
  keywords: [
    "digital agency Bengaluru",
    "web development company India",
    "MERN stack development",
    "Next.js development agency",
    "Spring Boot development",
    "UI/UX design agency",
    "AI automation services",
    "machine learning solutions",
    "LangGraph automation",
    "cloud deployment services",
    "AWS GCP Azure deployment",
    "chatbot integration",
    "full stack development",
    "React development India",
    "Python ML development",
    "Firebase development",
    "Kafka microservices",
    "MongoDB MySQL database",
    "startup tech agency",
    "DreamSphere",
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
    title: "DreamSphere — We Build Digital Experiences That Convert",
    description:
      "Premium digital agency in Bengaluru crafting high-converting web apps, AI-powered automation, and cloud-native solutions. MERN, Next.js, Spring Boot, Python ML & more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DreamSphere — Digital Agency in Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamSphere — Digital Agency | Web, AI & Cloud Solutions",
    description:
      "Bengaluru-based agency building high-converting digital experiences with MERN, Next.js, Spring Boot, AI/ML, and cloud deployment.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dreamsphere.online",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DreamSphere",
  url: "https://dreamsphere.online",
  logo: "https://dreamsphere.online/icon.svg",
  description:
    "Premium digital agency in Bengaluru specializing in web development, AI/ML automation, cloud deployment, and UI/UX design.",
  email: "support@dreamsphere.online",
  telephone: "+919483391275",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/Abhich05",
  ],
  foundingDate: "2025",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 3,
  },
  knowsAbout: [
    "Web Development",
    "MERN Stack",
    "Next.js",
    "Spring Boot",
    "Java",
    "Python",
    "Machine Learning",
    "LangGraph",
    "Cloud Deployment",
    "AWS",
    "UI/UX Design",
    "Chatbot Integration",
    "Firebase",
    "MongoDB",
    "MySQL",
    "Kafka",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web Development",
        description: "Full-stack web development with React, Next.js, MERN, and Spring Boot",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AI & Automation",
        description: "Machine learning solutions, LangGraph workflows, and intelligent automation",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cloud Deployment",
        description: "AWS, GCP, Azure deployment with CI/CD pipelines and Docker containerization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
