import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "spotiq-advertiser-platform",
    title: "SpotIQ Advertiser Portal",
    category: "B2B SaaS / AdTech Marketplace",
    shortDescription:
      "A programmatic Out-Of-Home (OOH) media planning and ad space booking platform enabling brand advertisers to discover billboard inventories, plan multi-city campaigns, and complete instant slot checkouts.",
    fullDescription:
      "A modern programmatic Out-Of-Home (OOH) media planning and ad space booking platform. It enables brand advertisers and media agencies to discover premium billboard inventories, transit media, and DOOH screens on an interactive GIS map, plan hyper-targeted multi-city ad campaigns, validate creative artwork dimensions, and complete digital slot bookings with instant Razorpay checkout.",
    keyContributions: [
      "Engineered interactive Google Maps GIS discovery with custom pin clustering, bounding-box queries, and radius search.",
      "Built an end-to-end campaign flight date scheduler and slot reservation engine preventing overlapping reservations.",
      "Constructed a multi-asset cart system with automated GST taxation calculations, proforma invoicing, and transaction summaries.",
      "Created an automated creative artwork upload pipeline featuring server-side aspect ratio and DPI resolution verification.",
      "Integrated Razorpay payment gateway with real-time webhook reconciliation, payment signature validation, and failure retries.",
    ],
    technologies: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript",
      "Ant Design 6",
      "Redux Toolkit",
      "Google Maps API",
      "Auth0",
      "Razorpay",
      "Axios",
    ],
    architectureOverview:
      "Built on Next.js 15 App Router with Redux Toolkit for complex client state (cart, flight date ranges, map bounds). Securely authenticates users via Auth0 Universal Login, querying high-performance REST APIs with optimistic client updates.",
    challengesAndSolutions: [
      "Challenge: Rendering thousands of geospatial billboard markers simultaneously without causing browser frame drops. Solution: Implemented bounding-box GIS viewport queries combined with marker clustering, rendering only visible viewport coordinates.",
      "Challenge: Race conditions during simultaneous booking slot checkouts. Solution: Designed a distributed reservation lock with expiry timeouts in the backend before routing to payment gateways.",
    ],
    liveUrl: "https://myspotiq.in",
    githubUrl: "https://github.com/myspotiq/AdvertiserPanel",
    isFeatured: true,
  },
  {
    id: "myspotiq-asset-owner-app",
    title: "MySpotIQ — Asset Owner Mobile App",
    category: "Cross-Platform Mobile App (iOS & Android)",
    shortDescription:
      "A native mobile app for outdoor media owners and commercial landlords to list, geotag, and monetize advertising real estate with real-time occupancy and payout tracking.",
    fullDescription:
      "A cross-platform mobile application designed for outdoor media owners, hoarding contractors, and commercial landlords to list, manage, and monetize outdoor advertising real estate. Owners can register physical spots with high-precision GPS geotagging, customize rental rate cards, track real-time booking occupancies, and monitor monthly payout earnings.",
    keyContributions: [
      "Developed an intuitive multi-step onboarding wizard with Google OAuth and Passwordless SMS OTP verification.",
      "Engineered interactive billboard registration with native GPS location tagging, camera capture, and AWS S3 multipart image uploads.",
      "Built an earnings dashboard with wallet balance tracking, transaction histories, and bank account (IFSC / UPI) payout configuration.",
      "Configured push notifications via Firebase Cloud Messaging (FCM) for real-time booking alerts, RFQ offers, and settlement disbursements.",
      "Implemented strict Apple App Store and Google Play Store compliance, including privacy disclosures, account deletion, and data rights.",
    ],
    technologies: [
      "React Native (0.85)",
      "React 19",
      "TypeScript",
      "React Navigation 7",
      "Redux Toolkit",
      "Auth0 Mobile SDK",
      "Firebase Cloud Messaging (FCM)",
      "AWS S3",
      "Geolocation",
    ],
    architectureOverview:
      "Clean architecture with React Navigation 7 stack and tab navigators. State managed through Redux Toolkit with persistent local storage. Handles offline sync and image compression prior to background AWS S3 uploads.",
    challengesAndSolutions: [
      "Challenge: Large media photo uploads on low-bandwidth 3G/4G field connections. Solution: Integrated client-side image compression and resumable multipart background upload workers.",
      "Challenge: Complex multi-tier rate cards for static vs digital screens. Solution: Architected dynamic form schemas validating pricing tiers and dimension ratios before submission.",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.myspotiq",
    githubUrl: "https://github.com/myspotiq/AssetOwnerApp",
    isFeatured: true,
  },
  {
    id: "spotiq-field-ops-app",
    title: "SpotIQField — Field-Force Operations App",
    category: "On-Demand Gig & Operations Mobile App",
    shortDescription:
      "A dedicated mobile app connecting ground mounting teams, flex printers, and technicians with campaign installation jobs featuring radius job radar and photo proof verification.",
    fullDescription:
      "A dedicated mobile application connecting ground technicians, flex printers, wall painters, mounting teams, and electrical auditors with campaign installation jobs. Features proximity-based job discovery, custom quotation bidding, operational lifecycle tracking, and geo-tagged photo proof verification before campaign payouts are released.",
    keyContributions: [
      "Created a radius-based job radar feed (10 km – 100 km) dynamically filtered by technician trade specializations.",
      "Architected a custom quotation submission engine with itemized labor/printing costs, milestone breakdowns, and validity timers.",
      "Engineered a strict state machine governing the operational job pipeline: OPEN → ASSIGNED → IN_PROGRESS → COMPLETED.",
      "Implemented mandatory Proof-of-Performance photo capture (Day view, Night illumination, Long-distance framing) with GPS timestamp watermarking.",
      "Constructed a technician wallet ledger with itemized transaction logs and payout withdrawal requests.",
    ],
    technologies: [
      "React Native (0.86)",
      "React 19",
      "TypeScript",
      "Context API",
      "Native Camera APIs",
      "Image Picker",
      "Geolocation Services",
      "Auth0 SMS OTP",
      "Firebase Cloud Messaging",
    ],
    architectureOverview:
      "Modular mobile architecture optimized for low-end Android and iOS devices. Employs lightweight Context API for job state, native hardware camera bridges for proof watermarking, and FCM sockets for instant dispatch alerts.",
    challengesAndSolutions: [
      "Challenge: Fraudulent installation proofs submitted by third-party field contractors. Solution: Enforced hardware camera capture (gallery upload disabled) with device GPS coordinates and server timestamp verification.",
      "Challenge: High battery drain from frequent GPS location tracking. Solution: Adopted event-driven location triggers upon job action checkpoints rather than continuous background location polling.",
    ],
    githubUrl: "https://github.com/myspotiq/ServiceProviderApp",
    isFeatured: true,
  },
  {
    id: "spotiq-admin-crm",
    title: "SpotIQ Admin Command Center & Operations CRM",
    category: "Enterprise Operations & Governance Dashboard",
    shortDescription:
      "A mission-critical central operations dashboard powering billboard compliance approvals, automated job dispatching, quotation review, and financial settlement audits.",
    fullDescription:
      "A mission-critical central operations dashboard and CRM engineered for SpotIQ platform administrators. It powers billboard compliance approvals, automated job dispatching to field technicians, quotation review, financial settlement audits, lead pipeline management, and system-wide dispute resolution.",
    keyContributions: [
      "Architected billboard and asset approval workflows with municipal compliance boundaries and legal property document review.",
      "Designed an Autonomous Job Dispatch Engine that matches approved advertiser campaigns to proximate mounting contractors.",
      "Constructed quotation and tender management modules enabling side-by-side vendor bidding comparison and approval controls.",
      "Engineered a full CRM system with lead lifecycle tracking, follow-up reminders, activity logs, and PDF sales quotation generation.",
      "Implemented a financial reconciliation suite for escrow management, platform commission splits, and settlement ledgers.",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Ant Design 6",
      "Tailwind CSS",
      "Leaflet GIS Mapping",
      "Redux Toolkit",
      "Axios",
      "Command Palette",
    ],
    architectureOverview:
      "Enterprise admin portal with role-based views (Super Admin, Operations Manager, Finance Auditor). Uses Leaflet for administrative boundary mapping and keyboard-driven command palette for rapid record lookup.",
    challengesAndSolutions: [
      "Challenge: Managing hundreds of simultaneous vendor quotations and booking approvals without UI sluggishness. Solution: Implemented server-side pagination with debounced query filters and cached Redux store slices.",
      "Challenge: Complex escrow calculation across multiple vendors per campaign. Solution: Designed an automated double-entry ledger calculation view with exportable audit logs.",
    ],
    githubUrl: "https://github.com/myspotiq/AdminPanel",
    isFeatured: true,
  },
  {
    id: "spotiq-core-backend",
    title: "SpotIQ Core Backend & Distributed API Gateway",
    category: "Scalable REST Microservices & Financial Ledger",
    shortDescription:
      "The high-concurrency backend architecture powering all SpotIQ web platforms and mobile apps, featuring multi-tenant RBAC, PostGIS queries, BullMQ job queues, and payment webhooks.",
    fullDescription:
      "The high-concurrency backend architecture powering all SpotIQ web panels and mobile clients. Features multi-tenant RBAC authorization, double-entry financial accounting, post-GIS geospatial radius queries, Redis job queues, and asynchronous webhook handling.",
    keyContributions: [
      "Architected a high-throughput REST API gateway with centralized middleware validation, CORS security, and rate limiting.",
      "Designed PostGIS geospatial bounding box and radius queries for ultra-fast billboard inventory lookups across India.",
      "Engineered a transaction-safe double-entry financial ledger and escrow settlement engine preventing balance discrepancies.",
      "Implemented BullMQ Redis asynchronous job queues for email dispatches, FCM notifications, and media optimization.",
      "Constructed a multi-webhook reconciliation engine with signature verification for Razorpay payment captures and refunds.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Redis (BullMQ)",
      "Auth0 Management API",
      "AWS S3",
      "Razorpay API",
      "Winston",
      "Jest",
    ],
    architectureOverview:
      "Stateless microservices architecture with PostgreSQL as primary data store via Prisma ORM. Redis provides high-speed caching and powers BullMQ background workers for long-running batch operations.",
    challengesAndSolutions: [
      "Challenge: Processing Razorpay payment webhooks arriving out-of-order during network retries. Solution: Implemented strict idempotency key checks with database unique constraints and state-machine transitions.",
      "Challenge: High-latency geospatial distance queries on unindexed coordinate tables. Solution: Implemented PostGIS spatial GiST indexing and spatial partitioning for millisecond response times.",
    ],
    liveUrl: "https://server.myspotiq.in/api/v1",
    githubUrl: "https://github.com/myspotiq/NodejsBackend",
    isFeatured: true,
  },
];
