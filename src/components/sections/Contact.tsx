"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import {
  Mail,
  MapPin,
  Globe,
  Copy,
  Check,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Have an Idea?"
          highlight="Let's Build It Together."
          subtitle="Whether you're building a new product, improving an existing platform or looking for a reliable development partner, I'd love to hear about your project."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#F4F4F5] mb-3">
                Let&apos;s start an engineering conversation.
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                I partner with founders, CTOs, and product managers across the US, UK, Canada, and Australia to design and deliver high-reliability software.
              </p>

              {/* Direct Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-[#151519] border border-white/10 hover:border-violet-500/30 transition-all flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 truncate">
                  <div className="w-10 h-10 rounded-lg bg-[#111114] border border-white/10 flex items-center justify-center text-violet-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono uppercase text-[#71717A]">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-[#F4F4F5] hover:text-violet-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#111114] border border-white/10 text-[#A1A1AA] hover:text-white hover:border-violet-500/40 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Timezone card */}
              <div className="mt-4 p-4 rounded-xl bg-[#151519] border border-white/5 space-y-3 text-xs text-[#A1A1AA]">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>
                    Location: <strong className="text-[#F4F4F5]">{personalInfo.location}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>
                    Coverage: <strong className="text-[#F4F4F5]">USA, UK, Canada & Australia</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Contract type: International Remote / Fixed Milestones</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-3">
                Professional Profiles
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151519] border border-white/10 text-xs font-medium text-[#D4D4D8] hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-violet-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151519] border border-white/10 text-xs font-medium text-[#D4D4D8] hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-violet-400" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                {personalInfo.socials.twitter && (
                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151519] border border-white/10 text-xs font-medium text-[#D4D4D8] hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10 transition-colors"
                  >
                    <TwitterIcon className="w-3.5 h-3.5 text-violet-400" />
                    <span>Twitter / X</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
