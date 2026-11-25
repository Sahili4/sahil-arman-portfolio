"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { TechIcon } from "@/components/ui/TechIcons";
import { formatTimeIST } from "@/lib/utils";
import {
  ArrowUpRight,
  Terminal,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

export function Hero() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Schedule update asynchronously to prevent cascading synchronous renders
    const timer = setTimeout(() => {
      setCurrentTime(formatTimeIST());
    }, 0);

    const interval = setInterval(() => {
      setCurrentTime(formatTimeIST());
    }, 30000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const heroTechPills = [
    { name: "Laravel", icon: "laravel" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React Native", icon: "reactnative" },
    { name: "PostgreSQL", icon: "postgresql" },
  ];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide bg-violet-500/10 text-violet-300 border border-violet-500/30 mb-6 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>AVAILABLE FOR INTERNATIONAL FREELANCE PROJECTS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F4F5] leading-[1.12]">
              Building Digital Products{" "}
              <span className="gradient-text-accent block sm:inline">
                That Scale.
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="mt-6 text-base sm:text-lg text-[#A1A1AA] max-w-2xl leading-relaxed">
              I&apos;m <span className="text-[#F4F4F5] font-semibold">Sahil Arman</span>, a Full-Stack Developer with 5+ years of experience building scalable SaaS platforms, web applications, backend systems and mobile solutions.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Let&apos;s Work Together
              </Button>
              <Button
                href="#projects"
                variant="secondary"
                size="lg"
              >
                Explore My Work
              </Button>
            </div>

            {/* Metadata Info Ticker */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#71717A] font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Local Time: {currentTime || "IST (UTC+5:30)"}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>USA • UK • Canada • Australia</span>
              </div>
            </div>

            {/* Tech Stack Highlights */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] mr-2">
                Core Stack:
              </span>
              {heroTechPills.map((tech) => (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#151519] border border-white/5 text-xs font-mono text-[#D4D4D8] hover:border-violet-500/40 transition-colors"
                >
                  <TechIcon name={tech.icon} className="w-3.5 h-3.5 text-violet-400" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Abstract Technical Architecture Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 to-indigo-600/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Terminal / Code Visual Window */}
              <div className="relative rounded-2xl bg-[#111114] border border-white/10 shadow-2xl overflow-hidden">
                {/* Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#151519] border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-xs font-mono text-[#71717A] flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-violet-400" />
                    <span>system-architect.ts</span>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    LIVE
                  </div>
                </div>

                {/* Code / Visual Architecture Body */}
                <div className="p-5 font-mono text-xs text-[#D4D4D8] space-y-3.5 overflow-x-auto">
                  <div className="text-[#71717A]">
                    {`// Production-grade engineering configuration`}
                  </div>
                  <div>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-amber-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    name: <span className="text-emerald-300">&quot;Sahil Arman&quot;</span>,
                  </div>
                  <div className="pl-4">
                    role: <span className="text-emerald-300">&quot;Senior Full-Stack Developer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    experience: <span className="text-sky-300">&quot;5+ Years&quot;</span>,
                  </div>
                  <div className="pl-4">
                    specializations: [
                  </div>
                  <div className="pl-8 text-emerald-300">
                    &quot;SaaS Architecture&quot;,
                  </div>
                  <div className="pl-8 text-emerald-300">
                    &quot;Laravel &amp; Node.js APIs&quot;,
                  </div>
                  <div className="pl-8 text-emerald-300">
                    &quot;React, Next.js &amp; Mobile&quot;,
                  </div>
                  <div className="pl-8 text-emerald-300">
                    &quot;Stripe &amp; Payment Workflows&quot;,
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    uptimeMindset: <span className="text-violet-400">true</span>,
                  </div>
                  <div className="pl-4">
                    internationalContractReady: <span className="text-emerald-400">true</span>,
                  </div>
                  <div>&#125;;</div>

                  {/* Micro system status pills */}
                  <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-[#151519] border border-white/5 flex items-center justify-between">
                      <span className="text-[#71717A]">Architecture:</span>
                      <span className="text-violet-300 font-semibold">Modular Clean</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#151519] border border-white/5 flex items-center justify-between">
                      <span className="text-[#71717A]">Target Uptime:</span>
                      <span className="text-emerald-400 font-semibold">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
