import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "saas-marketplace-platform",
    title: "Multi-Tenant SaaS & Booking Marketplace",
    category: "SaaS & Marketplace Platform",
    shortDescription:
      "A scalable multi-tenant platform featuring custom tenant provisioning, scheduling engines, automated business workflows, and unified payment processing.",
    fullDescription:
      "Engineered an end-to-end multi-tenant marketplace platform designed for high concurrency and zero cross-tenant data leakage. The platform unifies service scheduling, automated business workflows, customer notifications, and automated recurring billing across regional jurisdictions.",
    keyContributions: [
      "Architected clean multi-tenant schema isolation using PostgreSQL row-level security and tenant identification middleware.",
      "Designed resilient RESTful APIs with transactional consistency, cursor-based pagination, and OpenAPI documentation.",
      "Implemented automated booking workflows handling timezone conversions, conflict resolution, and calendar sync.",
      "Integrated Stripe Connect for automated split payments, platform commissions, escrow handling, and webhook reconciliation.",
      "Optimized query performance through composite indexing, query caching, and connection pooling for heavy traffic periods.",
    ],
    technologies: ["Laravel", "PHP 8.2", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS", "Stripe Connect", "Docker"],
    architectureOverview:
      "Decoupled architecture featuring a high-performance REST API backend handling business logic and transactions, coupled with an SSR Next.js frontend. Queue workers asynchronously process email/SMS notifications and webhook ingestion.",
    challengesAndSolutions: [
      "Challenge: Race conditions during simultaneous booking slots across multiple timezones. Solution: Implemented atomic database transactions with pessimistic row locking and Redis mutex guards.",
      "Challenge: Multi-tier subscription billing with webhooks. Solution: Built an idempotent event processing pipeline that logs every webhook payload with replay capabilities.",
    ],
    liveUrl: "#",
    githubUrl: "#",
    isFeatured: true,
  },
  {
    id: "crm-business-automation",
    title: "Enterprise CRM & Operations Dashboard",
    category: "CRM & Business Management Platform",
    shortDescription:
      "An internal operations and customer relationship platform with granular role-based permissions, automated task triggers, and analytical reporting.",
    fullDescription:
      "Built a unified business operations hub providing role-based admin consoles, sales pipeline tracking, customer interaction audit trails, automated lead assignment rules, and exportable business reporting dashboards.",
    keyContributions: [
      "Architected hierarchical Role-Based Access Control (RBAC) supporting granular department permissions and audit logs.",
      "Engineered custom dashboard query builders allowing department heads to aggregate operational metrics dynamically.",
      "Designed automated webhook ingestion pipelines to synchronize customer activities from third-party marketing tools.",
      "Built resilient background queue workers for bulk data imports, automated email sequencing, and PDF report generation.",
      "Implemented comprehensive input sanitation, CSRF validation, and session security compliance.",
    ],
    technologies: ["Node.js", "Express.js", "TypeScript", "React.js", "MySQL", "Prisma ORM", "Tailwind CSS", "Redis"],
    architectureOverview:
      "Modular service architecture with distinct domain modules (Auth, Leads, Pipelines, Reporting, Webhooks). Prisma ORM enforces type safety between the TypeScript service layer and MySQL relational database.",
    challengesAndSolutions: [
      "Challenge: Generating complex monthly aggregate reports across millions of activity logs without slowing the live dashboard. Solution: Implemented background reporting rollups with read-replica queries and cached data snapshots.",
      "Challenge: Strict audit compliance requirements. Solution: Added an immutable audit ledger logging user, IP, timestamp, old state, and new state for every record mutation.",
    ],
    liveUrl: "#",
    githubUrl: "#",
    isFeatured: true,
  },
  {
    id: "mobile-field-service-app",
    title: "Cross-Platform Mobile Field Service Suite",
    category: "Mobile Application Development",
    shortDescription:
      "A cross-platform iOS and Android mobile application enabling real-time field task tracking, geolocation check-ins, offline data sync, and instant customer approvals.",
    fullDescription:
      "Developed a robust mobile experience built with React Native and Expo for distributed field teams. The application delivers reliable offline-first data caching, GPS route coordination, digital signature capture, and instant push updates.",
    keyContributions: [
      "Implemented offline-first SQLite synchronization with automated conflict resolution upon network reconnect.",
      "Integrated device location services, geofenced job status updates, and interactive maps with minimal battery drain.",
      "Engineered secure token-based authentication with biometrics (Face ID / Fingerprint) and automatic token refresh.",
      "Constructed reusable native UI components using React Native and TypeScript maintaining 60fps animations.",
      "Configured automated EAS (Expo Application Services) CI/CD build channels for continuous staging and release management.",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "REST APIs", "SQLite", "EAS Build"],
    architectureOverview:
      "Client-side SQLite database with optimistic state updates via custom sync engine. Communicates with Node.js backend through versioned REST endpoints protected by JWT and device fingerprint validation.",
    challengesAndSolutions: [
      "Challenge: Intermittent network connectivity in remote job locations. Solution: Designed an offline queue that persists mutations locally and replays them in chronological sequence when network restores.",
      "Challenge: Native battery drain with continuous location tracking. Solution: Switched to significant-change location triggers and geofence boundary events rather than constant GPS polling.",
    ],
    liveUrl: "#",
    githubUrl: "#",
    isFeatured: true,
  },
  {
    id: "payment-webhook-gateway",
    title: "Financial Integrations & Webhook Ingestion Engine",
    category: "API & Microservices Architecture",
    shortDescription:
      "A resilient microservice gateway handling multi-provider payment processing, automated signature verification, and guaranteed delivery queue pipelines.",
    fullDescription:
      "Architected a centralized integration gateway unifying multiple payment providers (Stripe, Razorpay) with standardized checkout session management, webhook idempotency checks, and automated payout orchestration.",
    keyContributions: [
      "Created unified abstraction layer normalizing checkout sessions, refunds, and customer payment methods across providers.",
      "Engineered webhook signature verification and zero-loss ingestion queue with automatic exponential backoff retry.",
      "Implemented strict idempotency key checks preventing duplicate charges during network timeouts or provider retries.",
      "Configured comprehensive structured JSON logging and alerting for rapid payment failure diagnosis.",
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Stripe API", "Razorpay API", "Docker"],
    architectureOverview:
      "High-throughput stateless API containerized with Docker. Events are validated, deduplicated, and dispatched to domain workers with cryptographic signature verification.",
    challengesAndSolutions: [
      "Challenge: Duplicate webhook events delivered out-of-order by payment providers. Solution: Utilized unique event ID tracking with database unique constraints and state-machine transition checks.",
      "Challenge: Discrepant status codes between different payment APIs. Solution: Established a normalized status contract (PENDING, AUTHORIZED, CAPTURED, FAILED, REFUNDED) across all gateways.",
    ],
    liveUrl: "#",
    githubUrl: "#",
    isFeatured: false,
  },
];
