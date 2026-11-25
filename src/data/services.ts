import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "saas-web-development",
    title: "SaaS & Web Application Development",
    shortDescription:
      "Building scalable, customized web platforms for startups and businesses with clean architectures and exceptional performance.",
    detailedDescription:
      "From MVP conception to enterprise scaling, I architect full-stack web applications with modern Next.js and robust backend foundations. I ensure your platform is built on modular code, reliable databases, and seamless user experiences that convert visitors into loyal customers.",
    capabilities: [
      "Multi-tenant SaaS Architecture",
      "Next.js App Router & Server Components",
      "Stripe & Payment Gateway Subscriptions",
      "User Authentication, RBAC & Teams",
      "Responsive, High-Performance UI/UX",
      "Core Web Vitals & SEO Optimization",
    ],
    deliverables: [
      "Production-ready Web Application",
      "Database Schema & Migrations",
      "Automated CI/CD Deployment Pipeline",
      "Technical Documentation & Architecture Guide",
    ],
    bestFor: "Early-stage startups and established businesses launching new software products.",
    iconName: "globe",
    contactProjectType: "SaaS & Web Application",
  },
  {
    id: "backend-api-development",
    title: "Backend & API Development",
    shortDescription:
      "Secure backend systems, REST APIs, database architecture, and resilient third-party integrations built for zero downtime.",
    detailedDescription:
      "I design robust backend engines in Laravel (PHP) and Node.js / TypeScript that handle heavy transactional loads safely. Whether you need a fresh RESTful API, database optimization, or third-party integrations, I deliver secure, auditable, and easily maintainable services.",
    capabilities: [
      "RESTful API Design & OpenAPI/Swagger Docs",
      "PHP/Laravel & Node.js/TypeScript Microservices",
      "Relational Database Architecture (PostgreSQL, MySQL)",
      "Webhook Ingestion & Idempotent Event Processing",
      "Payment Gateway Integration (Stripe, Razorpay)",
      "Data Caching, Redis Queues & Rate Limiting",
    ],
    deliverables: [
      "Secure, Versioned REST APIs",
      "Optimized Database Models & Indices",
      "Interactive Swagger/Postman API Collections",
      "Error Handling & Structured Logging Setup",
    ],
    bestFor: "Platforms requiring reliable backend infrastructure, complex logic, or external integrations.",
    iconName: "server",
    contactProjectType: "Backend & API Architecture",
  },
  {
    id: "crm-business-automation",
    title: "CRM & Business Automation",
    shortDescription:
      "Custom dashboards, management portals, and workflow automation that eliminate manual work and streamline operations.",
    detailedDescription:
      "Replace tangled spreadsheets and manual data entry with purpose-built internal tools. I build intuitive operations consoles, customer relationship systems, and business automation pipelines that empower your team to operate efficiently.",
    capabilities: [
      "Role-Based Access Control (Admin, Manager, Member)",
      "Interactive Data Dashboards & Custom Filters",
      "Automated Workflow Triggers & Notification Queues",
      "Third-Party Marketing & CRM Webhook Sync",
      "Automated PDF Invoicing & CSV Export Engines",
      "Comprehensive Audit Logging & Compliance Trails",
    ],
    deliverables: [
      "Custom Admin Dashboard & Staff Portal",
      "Automated Integration Connectors",
      "Data Export & Analytics Reporting Views",
      "User Management & Permission Matrix",
    ],
    bestFor: "Companies scaling operations, managing field teams, or automating internal business workflows.",
    iconName: "layout-dashboard",
    contactProjectType: "CRM & Operations Dashboard",
  },
  {
    id: "mobile-app-development",
    title: "Mobile Application Development",
    shortDescription:
      "Cross-platform Android and iOS applications using React Native and Expo with native performance and polished UX.",
    detailedDescription:
      "I create responsive, fluid mobile applications that run seamlessly on both iOS and Android from a unified codebase. With Expo and React Native, you get faster development cycles, consistent UI, and straightforward updates without sacrificing native capabilities.",
    capabilities: [
      "Cross-Platform iOS & Android Apps",
      "Expo Router & EAS Automated Builds",
      "Offline-First SQLite Caching & Auto-Sync",
      "Location Services, GPS & Geofencing",
      "Push Notifications & Biometric Authentication",
      "Native Device Hardware & Camera Integrations",
    ],
    deliverables: [
      "Production iOS & Android Application Packages",
      "App Store & Google Play Submission Support",
      "Configured EAS Cloud Build Pipeline",
      "Cross-Platform Component Library",
    ],
    bestFor: "Founders and businesses requiring a high-quality mobile presence on both platforms simultaneously.",
    iconName: "smartphone",
    contactProjectType: "Mobile App (iOS & Android)",
  },
];
