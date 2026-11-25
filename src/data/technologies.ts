import { Technology } from "@/types";

export const technologies: Technology[] = [
  // Backend
  {
    name: "PHP",
    category: "backend",
    description: "Modern PHP 8.x development, type safety, OPcache optimization, and microservice backends.",
    iconName: "php",
    highlight: true,
  },
  {
    name: "Laravel",
    category: "backend",
    description: "Enterprise MVC architecture, Eloquent ORM, queued jobs, events, Sanctum/Passport auth.",
    iconName: "laravel",
    highlight: true,
  },
  {
    name: "Node.js",
    category: "backend",
    description: "High-throughput asynchronous runtimes, worker threads, stream processing, and serverless APIs.",
    iconName: "nodejs",
    highlight: true,
  },
  {
    name: "TypeScript",
    category: "backend",
    description: "Strict typing across runtime layers, shared DTO contracts, and resilient domain modeling.",
    iconName: "typescript",
    highlight: true,
  },
  {
    name: "Express.js",
    category: "backend",
    description: "Lightweight REST API services, robust middleware chains, and rapid microservice routing.",
    iconName: "express",
  },

  // Frontend
  {
    name: "React.js",
    category: "frontend",
    description: "Component architecture, modern hooks, concurrent features, and deterministic state management.",
    iconName: "react",
    highlight: true,
  },
  {
    name: "Next.js",
    category: "frontend",
    description: "App Router, Server Components (RSC), Turbopack, dynamic routing, and Core Web Vitals mastery.",
    iconName: "nextjs",
    highlight: true,
  },
  {
    name: "JavaScript",
    category: "frontend",
    description: "Modern ECMAScript (ES2024+), closures, event loop mechanics, and DOM performance optimization.",
    iconName: "javascript",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    description: "Custom design systems, fluid responsive layouts, CSS variables, and modern dark mode styling.",
    iconName: "tailwind",
    highlight: true,
  },

  // Mobile
  {
    name: "React Native",
    category: "mobile",
    description: "Cross-platform iOS and Android apps with native bridge execution and 60fps UI threads.",
    iconName: "reactnative",
    highlight: true,
  },
  {
    name: "Expo",
    category: "mobile",
    description: "Expo Router, EAS build pipelines, push notification channels, and OTA seamless updates.",
    iconName: "expo",
    highlight: true,
  },

  // Database
  {
    name: "PostgreSQL",
    category: "database",
    description: "Relational modeling, indexing strategies, JSONB operations, window queries, and connection pooling.",
    iconName: "postgresql",
    highlight: true,
  },
  {
    name: "MySQL",
    category: "database",
    description: "High-performance InnoDB tuning, replication, ACID transaction guarantees, and complex joins.",
    iconName: "mysql",
    highlight: true,
  },
  {
    name: "Prisma ORM",
    category: "database",
    description: "Type-safe database client, schema migrations, relationship mapping, and nested transactions.",
    iconName: "prisma",
    highlight: true,
  },

  // Tools & Integrations
  {
    name: "REST APIs",
    category: "tools",
    description: "Clean RESTful standards, OpenAPI/Swagger specifications, versioning, and rate-limiting.",
    iconName: "api",
    highlight: true,
  },
  {
    name: "Stripe",
    category: "tools",
    description: "Subscriptions, Checkout sessions, idempotency, webhook event processing, and dispute handling.",
    iconName: "stripe",
    highlight: true,
  },
  {
    name: "Razorpay",
    category: "tools",
    description: "Multi-currency checkouts, automated payout systems, webhooks, and recurring mandate compliance.",
    iconName: "razorpay",
  },
  {
    name: "Webhooks",
    category: "tools",
    description: "Signature verification, idempotency keys, retry backoff queues, and asynchronous event delivery.",
    iconName: "webhook",
    highlight: true,
  },
  {
    name: "Authentication Systems",
    category: "tools",
    description: "OAuth2, JWT with secure rotation, session cookies, RBAC permissions, and MFA security.",
    iconName: "auth",
    highlight: true,
  },
  {
    name: "Git & GitHub",
    category: "tools",
    description: "Branching strategies, CI/CD GitHub Actions pipelines, code review discipline, and release tagging.",
    iconName: "git",
  },
];

export const categoryLabels: Record<Technology["category"], string> = {
  backend: "Backend & Systems",
  frontend: "Frontend & Web",
  mobile: "Mobile (iOS & Android)",
  database: "Databases & ORM",
  tools: "APIs & Integrations",
};
