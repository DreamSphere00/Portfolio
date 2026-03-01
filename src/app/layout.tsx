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
  title: "DreamSphere | We Build Digital Experiences That Convert",
  description:
    "DreamSphere is a premium digital agency specializing in web development, UI/UX design, backend systems, chatbot integration, and automation. We craft high-converting digital experiences.",
  keywords: [
    "digital agency",
    "web development",
    "UI/UX design",
    "chatbot integration",
    "automation",
    "backend systems",
  ],
  openGraph: {
    title: "DreamSphere | We Build Digital Experiences That Convert",
    description:
      "Premium digital agency crafting high-converting digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
