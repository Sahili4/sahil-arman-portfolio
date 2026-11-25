import { PersonalInfo } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Sahil Arman",
  title: "Senior Full-Stack Developer",
  experienceYears: "5+",
  location: "Jaipur, India",
  timezone: "IST (UTC+5:30)",
  availability: "Available for Q1/Q2 International Contracts",
  targetRegions: ["United States", "United Kingdom", "Canada", "Australia"],
  workType: "International Freelance, Contract & Remote Engineering",
  positioning:
    "I build scalable web applications, SaaS platforms, backend systems and mobile experiences that help businesses turn ideas into reliable digital products.",
  bioParagraphs: [
    "I'm a Full-Stack Developer passionate about transforming complex business requirements into reliable digital products.",
    "With 5+ years of development experience, I work across backend engineering, frontend development, API architecture, database design and mobile application development.",
    "I focus on writing maintainable code, designing scalable systems and delivering software that solves real-world problems. My approach combines technical engineering with practical business understanding.",
  ],
  philosophy:
    "Engineering excellence isn't just about writing code—it's about designing resilient architectures, eliminating failure modes, and creating software that moves your business forward predictably.",
  // PLACEHOLDER CONFIGURATION: Update with your real contact details or configure via environment variables
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact.sahilarman@example.com",
  socials: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/sahilarman-placeholder",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/sahilarman-placeholder",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/sahilarman-placeholder",
  },
  metrics: [
    {
      label: "Years Experience",
      value: "5+",
      description: "Delivering full-stack web, mobile, and API systems",
    },
    {
      label: "Production Deployments",
      value: "20+",
      description: "Robust architectures built for scalability and zero-downtime",
    },
    {
      label: "International Clients",
      value: "4+",
      description: "Targeted coverage across USA, UK, Canada & Australia",
    },
    {
      label: "API Reliability",
      value: "99.9%",
      description: "High-performance REST APIs & transaction-safe webhooks",
    },
  ],
};
