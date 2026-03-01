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
    default: "DreamSphere — #1 Digital Agency in Bengaluru | Web Development, AI & Cloud Solutions",
    template: "%s | DreamSphere — Digital Agency Bengaluru",
  },
  description:
    "DreamSphere is a top-rated digital agency in Bengaluru, India specializing in full-stack web development (MERN, Next.js, Spring Boot), AI/ML automation with LangGraph, cloud deployment on AWS/GCP/Azure, UI/UX design, and chatbot integration. We build high-converting digital experiences for startups and enterprises. Contact us for a free consultation.",
  keywords: [
    "digital agency Bengaluru",
    "web development company Bengaluru",
    "web development company India",
    "best digital agency in Bangalore",
    "MERN stack development company",
    "Next.js development agency India",
    "Spring Boot development services",
    "Java Spring Boot developer Bengaluru",
    "React development company India",
    "full stack development agency",
    "UI/UX design agency Bengaluru",
    "UI UX design company India",
    "AI automation services Bengaluru",
    "machine learning solutions India",
    "LangGraph automation",
    "Python ML development company",
    "cloud deployment services India",
    "AWS GCP Azure deployment",
    "chatbot integration services",
    "Firebase development company",
    "Kafka microservices development",
    "MongoDB MySQL database development",
    "startup tech agency India",
    "web app development Bengaluru",
    "custom software development India",
    "ecommerce website development",
    "SaaS development company",
    "mobile responsive web design",
    "SEO friendly website development",
    "progressive web app development",
    "DreamSphere",
    "DreamSphere agency",
    "dreamsphere.online",
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
    title: "DreamSphere — Best Digital Agency in Bengaluru | Web, AI & Cloud",
    description:
      "Top-rated digital agency in Bengaluru crafting high-converting web apps, AI-powered automation, and cloud-native solutions. Expert in MERN, Next.js, Spring Boot, Python ML, AWS, GCP & more. Free consultation available.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DreamSphere — Premium Digital Agency in Bengaluru, India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamSphere — #1 Digital Agency Bengaluru | Web, AI & Cloud",
    description:
      "Bengaluru-based agency building high-converting digital experiences. MERN, Next.js, Spring Boot, AI/ML, LangGraph, AWS/GCP/Azure. Book a free 30-min consultation.",
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
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

// JSON-LD: Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://dreamsphere.online/#organization",
  name: "DreamSphere",
  alternateName: "DreamSphere Digital Agency",
  url: "https://dreamsphere.online",
  logo: "https://dreamsphere.online/icon.svg",
  description:
    "Top-rated digital agency in Bengaluru specializing in full-stack web development, AI/ML automation, cloud deployment, UI/UX design, and chatbot integration.",
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
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  sameAs: [
    "https://github.com/Abhich05",
    "https://calendly.com/dreamsphere00/30min",
  ],
  foundingDate: "2025",
  foundingLocation: "Bengaluru, Karnataka, India",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 3,
  },
  knowsAbout: [
    "Web Development", "MERN Stack", "Next.js", "Spring Boot", "Java",
    "Python", "Machine Learning", "LangGraph", "Cloud Deployment", "AWS",
    "GCP", "Azure", "Docker", "CI/CD", "UI/UX Design", "Chatbot Integration",
    "Firebase", "MongoDB", "MySQL", "Kafka", "React", "Node.js",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Full-Stack Web Development",
        description: "Custom web application development with React, Next.js, MERN stack, and Spring Boot for startups and enterprises",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AI & ML Automation",
        description: "Intelligent automation solutions using Python, Machine Learning, LangGraph, and NLP for business process optimization",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cloud Deployment & DevOps",
        description: "Production deployment on AWS, GCP, Azure with Docker containerization, CI/CD pipelines, and infrastructure management",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "UI/UX Design",
        description: "Research-driven user interface and experience design creating intuitive, conversion-optimized digital products",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Chatbot Integration",
        description: "AI-powered conversational chatbot solutions for customer support automation and engagement",
      },
    },
  ],
};

// JSON-LD: WebSite Schema with SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dreamsphere.online/#website",
  name: "DreamSphere",
  url: "https://dreamsphere.online",
  description: "Premium digital agency in Bengaluru building high-converting web apps, AI automation, and cloud solutions.",
  publisher: { "@id": "https://dreamsphere.online/#organization" },
  inLanguage: "en-IN",
};

// JSON-LD: LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://dreamsphere.online/#localbusiness",
  name: "DreamSphere — Digital Agency",
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

// JSON-LD: FAQ Schema (boosts rich results)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does DreamSphere offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DreamSphere offers full-stack web development (MERN, Next.js, Spring Boot), AI/ML automation with Python and LangGraph, cloud deployment on AWS/GCP/Azure, UI/UX design, and chatbot integration. We serve startups and enterprises across India and globally.",
      },
    },
    {
      "@type": "Question",
      name: "Where is DreamSphere located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DreamSphere is a digital agency based in Bengaluru, Karnataka, India. We work with clients worldwide and offer both on-site and remote collaboration.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does DreamSphere use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our tech stack includes React, Next.js, Node.js, Spring Boot, Java, Python, MongoDB, MySQL, Kafka, Firebase, Docker, AWS, GCP, Azure, and AI/ML frameworks like LangGraph and TensorFlow.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book a consultation with DreamSphere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a free 30-minute consultation through our Calendly link at https://calendly.com/dreamsphere00/30min, email us at support@dreamsphere.online, or call us at +91 9483391275.",
      },
    },
    {
      "@type": "Question",
      name: "Does DreamSphere build mobile-responsive websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our websites and web applications are built with a mobile-first approach, ensuring they are fully responsive and optimized for all devices including phones, tablets, and desktops.",
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
    { "@type": "ListItem", position: 2, name: "About", item: "https://dreamsphere.online/#about" },
    { "@type": "ListItem", position: 3, name: "Services", item: "https://dreamsphere.online/#services" },
    { "@type": "ListItem", position: 4, name: "Team", item: "https://dreamsphere.online/#team" },
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
      </body>
    </html>
  );
}
