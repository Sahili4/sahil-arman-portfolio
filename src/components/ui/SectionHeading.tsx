import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-violet-500/10 text-violet-300 border border-violet-500/25 mb-4 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F4F5] leading-tight max-w-3xl">
        {title}{" "}
        {highlight && (
          <span className="gradient-text-accent block sm:inline">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
