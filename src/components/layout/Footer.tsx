"use client";

import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { navItems } from "@/data/navigation";
import { ArrowUp, Mail, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#09090B] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          {/* Brand & Positioning */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center font-mono font-bold text-white text-sm shadow-md shadow-violet-600/30">
                  SA
                </div>
                <span className="text-base font-bold tracking-wider text-[#F4F4F5] uppercase">
                  {personalInfo.name}
                </span>
              </div>
              <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed mb-6">
                Senior Full-Stack Developer specializing in scalable web applications, SaaS platforms, robust backend systems, and cross-platform mobile solutions.
              </p>
            </div>

            {/* Target Regions Pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#71717A]">
              <Globe className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Available for clients in USA, UK, Canada & Australia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F4F5] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#A1A1AA] hover:text-violet-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F4F5] mb-4">
                Connect & Inquire
              </h4>
              <p className="text-sm text-[#A1A1AA] mb-4">
                Open for technical architecture reviews, contracts, and freelance projects.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#151519] border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-violet-500/50 hover:bg-violet-600/10 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#151519] border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-violet-500/50 hover:bg-violet-600/10 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                {personalInfo.socials.twitter && (
                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#151519] border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-violet-500/50 hover:bg-violet-600/10 transition-colors"
                    aria-label="Twitter / X Profile"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-lg bg-[#151519] border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-violet-500/50 hover:bg-violet-600/10 transition-colors"
                  aria-label="Send direct email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Timezone info */}
            <div className="mt-6 text-xs text-[#71717A]">
              Based in {personalInfo.location} • Working with global teams across UTC-8 to UTC+10
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© 2026 Sahil Arman. Engineered with Next.js & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151519] border border-white/10 text-[#A1A1AA] hover:text-[#F4F4F5] hover:border-white/20 transition-colors focus:outline-none focus:ring-1 focus:ring-violet-500 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
