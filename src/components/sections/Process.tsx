import React from "react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work Methodology"
          title="From Concept to"
          highlight="Production Reality."
          subtitle="A structured, transparent engineering process focused on clear communication, risk mitigation, and high-velocity delivery."
        />

        {/* Process Cards Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between p-5 rounded-2xl bg-[#151519] border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Connector line for large screens */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-8 w-4 h-[1px] bg-white/10 z-10" />
              )}

              <div>
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-extrabold text-violet-400/90 group-hover:text-violet-300 transition-colors">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-violet-500/40 group-hover:bg-violet-400 group-hover:shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#F4F4F5] mb-2 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                  {step.shortDescription}
                </p>

                {/* Key activities */}
                <ul className="space-y-1.5 pt-3 border-t border-white/5">
                  {step.details.slice(0, 2).map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#D4D4D8]">
                      <Check className="w-3 h-3 text-violet-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverable tag */}
              <div className="mt-5 pt-3 border-t border-white/5 text-[10px] font-mono text-violet-300/80">
                Key: {step.deliverables.split(",")[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
