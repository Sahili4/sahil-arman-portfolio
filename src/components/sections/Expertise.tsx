"use client";

import { useState } from "react";
import { technologies } from "@/data/technologies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechCard } from "@/components/ui/TechCard";
import { Technology } from "@/types";
import { cn } from "@/lib/utils";

type FilterCategory = "all" | Technology["category"];

export function Expertise() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");

  const categories: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "Full Ecosystem" },
    { key: "backend", label: "Backend Systems" },
    { key: "frontend", label: "Frontend & Web" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "database", label: "Databases & ORM" },
    { key: "tools", label: "Integrations & APIs" },
  ];

  const filteredTechnologies =
    selectedCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === selectedCategory);

  return (
    <section id="expertise" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Tech Stack"
          title="Battle-Tested"
          highlight="Expertise."
          subtitle="Specialized technology stacks built for high-concurrency web applications, transaction-safe backends, and responsive mobile platforms."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25 border border-violet-400/30"
                    : "bg-[#151519] text-[#A1A1AA] hover:text-[#F4F4F5] border border-white/5 hover:border-white/10"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredTechnologies.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>

        {/* Engineering Standard Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#111114] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold text-[#F4F4F5]">
              Strict Engineering Standards
            </h4>
            <p className="text-xs text-[#A1A1AA] mt-1 max-w-xl">
              Clean architecture principles, centralized error handling, static type safety, and comprehensive API documentation are built into every delivery.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Zero Fake Ratings • Real Architectural Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
