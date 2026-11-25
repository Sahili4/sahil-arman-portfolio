import React from "react";
import { Technology } from "@/types";
import { TechIcon } from "./TechIcons";
import { cn } from "@/lib/utils";

interface TechCardProps {
  tech: Technology;
}

export function TechCard({ tech }: TechCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col p-4 sm:p-5 rounded-xl bg-[#151519] border border-white/5 hover:border-violet-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-600/5",
        tech.highlight && "border-white/10"
      )}
    >
      <div className="flex items-center gap-3.5 mb-2.5">
        <div className="w-10 h-10 rounded-lg bg-[#1C1C22] border border-white/10 flex items-center justify-center text-violet-400 group-hover:text-white group-hover:bg-violet-600/20 group-hover:border-violet-500/40 transition-colors shrink-0">
          <TechIcon name={tech.iconName} className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-semibold text-[#F4F4F5] group-hover:text-white transition-colors">
            {tech.name}
          </h4>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
            {tech.category}
          </span>
        </div>
      </div>
      <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
        {tech.description}
      </p>
    </div>
  );
}
