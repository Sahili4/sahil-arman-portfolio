"use client";

import React from "react";
import { Project } from "@/types";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Button } from "./Button";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-[#151519] border border-white/10 hover:border-violet-500/40 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-violet-600/10 hover:-translate-y-1">
      {/* Top Header */}
      <div>
        {/* Category Pill */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            {project.category}
          </span>
          {project.isFeatured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300/90 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F4F4F5] group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Architectural Highlights / Contributions */}
        <div className="mt-5 space-y-2">
          <div className="text-xs font-mono font-medium uppercase tracking-wider text-[#71717A]">
            Engineering Highlights
          </div>
          <ul className="space-y-1.5">
            {project.keyContributions.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                <Check className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Details */}
      <div className="mt-6 pt-5 border-t border-white/5">
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#1C1C22] text-[#A1A1AA] border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 text-[11px] font-mono rounded bg-[#1C1C22] text-[#71717A] border border-white/5">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <Button
            variant="secondary"
            size="sm"
            className="w-full justify-between group/btn hover:border-violet-500/50"
            onClick={() => onOpenCaseStudy(project)}
            rightIcon={
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-violet-400" />
            }
          >
            <span>View Architecture Case Study</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
