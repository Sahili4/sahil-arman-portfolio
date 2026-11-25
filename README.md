# Sahil Arman — Senior Full-Stack Developer Portfolio

A production-ready, personal portfolio designed for international freelance, contract, and remote engineering opportunities across the USA, UK, Canada, and Australia.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React.

---

## ⚡ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack, Server Components)
- **Language**: TypeScript (strict type checking)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React & optimized custom SVG technology icons
- **Forms**: React Hook Form with client-side validation & spam honeypot
- **SEO**: Dynamic Metadata, Open Graph, Twitter Cards, Sitemap, Robots.txt & Person JSON-LD structured data

---

## 📂 Project Architecture

```
sahil-arman-portfolio/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   # Contact endpoint with honeypot & webhook/email delivery
│   │   ├── globals.css            # Dark theme system, tokens & subtle glow utilities
│   │   ├── layout.tsx             # Root layout with SEO metadata & Person JSON-LD
│   │   ├── not-found.tsx          # Custom 404 page
│   │   ├── page.tsx               # Main page assembling all portfolio sections
│   │   ├── robots.ts              # SEO crawler directives
│   │   └── sitemap.ts             # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx         # Responsive footer with social links & back-to-top
│   │   │   └── Navbar.tsx         # Sticky glassmorphic navbar with active scroll spy
│   │   ├── sections/
│   │   │   ├── About.tsx          # Background, philosophy & engineering pillars
│   │   │   ├── Contact.tsx        # Contact section with interactive email copy
│   │   │   ├── Expertise.tsx      # Technology categories with interactive filters
│   │   │   ├── Hero.tsx           # Hero section with live local time clock
│   │   │   ├── Process.tsx        # 5-step engineering methodology timeline
│   │   │   ├── Projects.tsx       # Featured project case studies
│   │   │   └── Services.tsx       # 4 core service cards with deliverables
│   │   └── ui/
│   │       ├── BackgroundGlow.tsx # Ambient lighting & grid textures
│   │       ├── Button.tsx         # Reusable button with variants & states
│   │       ├── ContactForm.tsx    # React Hook Form with validation & honeypot
│   │       ├── ProjectCard.tsx    # Case study card with engineering highlights
│   │       ├── ProjectModal.tsx   # Detailed architecture & solutions modal
│   │       ├── SectionHeading.tsx # Standardized section title with badges
│   │       ├── TechCard.tsx       # Real icon technology card
│   │       └── TechIcons.tsx      # Custom SVGs for Laravel, Node, React, etc.
│   ├── data/
│   │   ├── navigation.ts          # Nav links configuration
│   │   ├── personal.ts            # Personal bio, metrics, socials & placeholders
│   │   ├── process.ts             # 5 development stages & deliverables
│   │   ├── projects.ts            # Project case studies & architecture details
│   │   ├── services.ts            # 4 core services & capabilities
│   │   └── technologies.ts        # Grouped technology stacks & descriptions
│   ├── lib/
│   │   └── utils.ts               # clsx + twMerge helper & IST time formatter
│   └── types/
│       └── index.ts               # Full TypeScript type definitions
├── .env.example                   # Environment variables template
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites

- Node.js 18.18+ or Node.js 20+ (Node.js 24 is fully supported)
- npm or pnpm

### 2. Installation

```bash
# Clone or navigate to the directory
cd sahil-arman-portfolio

# Install dependencies
npm install
```

### 3. Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Customizing Your Portfolio

All personal and technical content is isolated in `src/data/`:

| File | Purpose | What to Update |
| :--- | :--- | :--- |
| `src/data/personal.ts` | Personal Info & Links | Email, GitHub, LinkedIn, bio, location, metrics |
| `src/data/projects.ts` | Case Studies | Add real client case studies, URLs, architecture notes |
| `src/data/services.ts` | Offerings | Tailor services, capabilities, and deliverables |
| `src/data/technologies.ts` | Tech Stacks | Add or remove specific technologies and descriptions |
| `src/data/process.ts` | Workflow Steps | Customize your delivery process steps |

---

## 📬 Contact Form Configuration

The contact form is located at `/api/contact` and provides client-side validation, spam protection via a hidden honeypot field, and flexible delivery options.

### Option 1: Webhook Delivery (Slack, Discord, Zapier, Make)
Set `CONTACT_WEBHOOK_URL` in your `.env.local`:
```bash
CONTACT_WEBHOOK_URL=https://hooks.slack.com/services/...
```

### Option 2: Resend Email Delivery
Sign up at [resend.com](https://resend.com) and add:
```bash
RESEND_API_KEY=re_123456789...
CONTACT_NOTIFICATION_EMAIL=your-real-email@domain.com
```

In development mode without API keys, submissions are safely logged to the server console with full success responses.

---

## 📦 Production Build & Testing

Run the production build:
```bash
npm run build
```

Run linting:
```bash
npm run lint
```

---

## 🚢 Deploying to GitHub and Vercel

### Step 1: Initialize Git and Commit

```bash
git add .
git commit -m "feat: complete production-ready developer portfolio for Sahil Arman"
```

### Step 2: Push to GitHub

Create a new repository on [GitHub](https://github.com/new) named `sahil-arman-portfolio`, then run:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/sahil-arman-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Via Vercel Web Dashboard (Recommended):
1. Go to [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and import `sahil-arman-portfolio`.
3. Under **Environment Variables**, add any custom variables from `.env.example` (such as `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`).
4. Click **Deploy**.

#### Via Vercel CLI:
```bash
npx vercel
# For production deployment:
npx vercel --prod
```
