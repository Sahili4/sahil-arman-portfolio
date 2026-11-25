import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundGlow } from "@/components/ui/BackgroundGlow";
import { personalInfo } from "@/data/personal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sahilarman.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sahil Arman | Senior Full-Stack Developer",
    template: "%s | Sahil Arman",
  },
  description:
    "Full-Stack Developer specializing in Laravel, Node.js, React, Next.js, SaaS platforms and mobile application development. Available for international freelance projects in USA, UK, Canada & Australia.",
  keywords: [
    "Sahil Arman",
    "Full-Stack Developer",
    "Senior Full-Stack Developer",
    "Laravel Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript",
    "SaaS Architecture",
    "Freelance Developer India",
    "International Contract Developer",
  ],
  authors: [{ name: "Sahil Arman", url: siteUrl }],
  creator: "Sahil Arman",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Sahil Arman | Senior Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Laravel, Node.js, React, Next.js, SaaS platforms and mobile application development.",
    siteName: "Sahil Arman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Arman | Senior Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Laravel, Node.js, React, Next.js, SaaS platforms and mobile application development.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  description: personalInfo.positioning,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "India",
  },
  url: siteUrl,
  sameAs: [personalInfo.socials.github, personalInfo.socials.linkedin],
  knowsAbout: [
    "PHP",
    "Laravel",
    "Node.js",
    "TypeScript",
    "React.js",
    "Next.js",
    "React Native",
    "PostgreSQL",
    "MySQL",
    "Prisma ORM",
    "Stripe Payment Gateway",
    "SaaS System Architecture",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090B] text-[#F4F4F5] antialiased flex flex-col selection:bg-violet-600/30 selection:text-white">
        <BackgroundGlow />
        <Navbar />
        <main className="flex-1 z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
