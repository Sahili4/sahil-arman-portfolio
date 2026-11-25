import React from "react";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Layers, Smartphone, TrendingUp } from "lucide-react";

export function About() {
  const coreStrengths = [
    {
      title: "Backend & System Resilience",
      description:
        "Designing structured REST APIs, event-driven queues, and microservices in Laravel and Node.js that ensure transactional reliability under load.",
      icon: <ServerIcon className="w-5 h-5 text-violet-400" />,
    },
    {
      title: "Frontend & Performance UX",
      description:
        "Crafting snappy, SEO-optimized user interfaces in React and Next.js with sub-second page loads and zero layout shifts.",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: "Cross-Platform Mobile",
      description:
        "Developing iOS and Android applications with React Native and Expo, featuring offline synchronization and hardware integrations.",
      icon: <Smartphone className="w-5 h-5 text-sky-400" />,
    },
    {
      title: "Pragmatic Business Alignment",
      description:
        "Translating commercial goals into modular software milestones, prioritizing scalable architecture that supports long-term ROI.",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="01 // BACKGROUND & PHILOSOPHY"
          title="Engineering Solutions."
          highlight="Creating Impact."
          subtitle="My approach combines rigorous technical engineering with practical business understanding to build software that scales predictably."
        />

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-[#A1A1AA] text-base leading-relaxed">
            {personalInfo.bioParagraphs.map((para, idx) => (
              <p key={idx} className="text-base sm:text-lg text-[#D4D4D8]">
                {para}
              </p>
            ))}

            {/* Philosophy Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#151519] border-l-4 border-violet-500 border-white/5 mt-6 shadow-sm">
              <div className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-2">
                Development Philosophy
              </div>
              <p className="text-sm sm:text-base text-[#F4F4F5] italic leading-relaxed">
                &quot;{personalInfo.philosophy}&quot;
              </p>
            </div>
          </div>

          {/* Metric Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-2xl bg-[#151519] border border-white/5 hover:border-violet-500/30 transition-all flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F4F4F5] tracking-tight">
                  {metric.value}
                </div>
                <div className="mt-3">
                  <div className="text-xs font-mono font-semibold uppercase text-violet-400 tracking-wide">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-xs text-[#71717A] leading-normal">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Strengths Pillar Grid */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
              Architectural Pillars
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F5] mt-1">
              How I Deliver Predictable Software Quality
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreStrengths.map((strength) => (
              <div
                key={strength.title}
                className="p-5 rounded-xl bg-[#151519] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#111114] border border-white/10 flex items-center justify-center mb-4">
                    {strength.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-[#F4F4F5] mb-2">
                    {strength.title}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}
