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
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sahildeshwali123@gmail.com",
  socials: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Sahili4",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/sahil-arman/",
  },
  metrics: [
    {
      label: "Years Experience",
      value: "5+",
      description: "Delivering full-stack web, mobile, and API systems",
    },
    {
      label: "Production Systems",
      value: "5+",
      description: "Enterprise SaaS marketplaces, mobile apps & backend gateways",
    },
    {
      label: "Global Coverage",
      value: "4+",
      description: "Targeted coverage across USA, UK, Canada & Australia",
    },
    {
      label: "Architecture Standard",
      value: "Type-Safe",
      description: "Relational data integrity, modular services & strict TypeScript",
    },
  ],
};
