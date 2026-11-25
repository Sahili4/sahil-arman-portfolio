import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    shortDescription: "Understand the business, requirements and objectives.",
    details: [
      "Deep dive into product goals, business model, and user journeys",
      "Analysis of technical constraints, target audience, and scale requirements",
      "Identification of key integrations (payments, auth, third-party APIs)",
      "Alignment on communication channels, timelines, and milestones",
    ],
    deliverables: "Discovery Summary, Project Scope Document & Milestone Roadmap",
  },
  {
    step: "02",
    title: "Planning",
    shortDescription: "Define architecture, technology and milestones.",
    details: [
      "Database schema modeling, relationship mapping, and indexing design",
      "API contract specifications and authentication protocols",
      "Selecting optimal frameworks, libraries, and hosting environments",
      "Sprint breakdowns with transparent milestone checkpoints",
    ],
    deliverables: "System Architecture Blueprint, Database ERD & API Specifications",
  },
  {
    step: "03",
    title: "Development",
    shortDescription: "Build scalable, maintainable software.",
    details: [
      "Writing clean, modular, type-safe code following best practices",
      "Regular sprint updates and staging environment demos for review",
      "Continuous integration and automated build verification",
      "Focus on responsive UX, optimal performance, and security hardening",
    ],
    deliverables: "Iterative Staging Deployments, Code Reviews & Progress Reports",
  },
  {
    step: "04",
    title: "Testing",
    shortDescription: "Validate functionality, integrations and reliability.",
    details: [
      "End-to-end user journey verification across devices and screen sizes",
      "Edge case handling, error boundary recovery, and network latency testing",
      "Payment gateway webhook simulation and race condition verification",
      "Security audit for SQL injection, CSRF, and permission elevation",
    ],
    deliverables: "QA Test Matrix, Performance Report & Security Verification",
  },
  {
    step: "05",
    title: "Delivery",
    shortDescription: "Deploy, document and hand over the solution.",
    details: [
      "Production deployment to Vercel, AWS, or custom cloud infrastructure",
      "Environment variable configuration, SSL certification, and monitoring",
      "Comprehensive handover documentation and walk-through walkthroughs",
      "Post-launch warranty support and maintenance readiness",
    ],
    deliverables: "Production Live Release, Repository Handover & Documentation",
  },
];
