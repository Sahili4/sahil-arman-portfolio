"use client";

import React, { useEffect } from "react";
import { Project } from "@/types";
import { X, CheckCircle2, AlertTriangle, Layers, ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";
  const hasGithubUrl = project.githubUrl && project.githubUrl !== "#";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#151519] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-[#F4F4F5]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500/50 cursor-pointer"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-3">
                {project.category}
              </span>
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F5]">
                {project.title}
              </h3>
              <p className="mt-3 text-base text-[#A1A1AA] leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Architecture Overview */}
            <div className="mt-6 p-4 rounded-xl bg-[#111114] border border-white/5">
              <div className="flex items-center gap-2 text-sm font-semibold text-violet-400 mb-2">
                <Layers className="w-4 h-4" />
                <span>Architecture & Engineering Strategy</span>
              </div>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                {project.architectureOverview}
              </p>
            </div>

            {/* Technical Contributions */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#A1A1AA] mb-3">
                Key Technical Contributions
              </h4>
              <ul className="space-y-2.5">
                {project.keyContributions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#A1A1AA] mb-3">
                  Technical Challenges & Solutions
                </h4>
                <div className="space-y-3">
                  {project.challengesAndSolutions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-[#D4D4D8] leading-relaxed"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>{item}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-3">
                Technologies & Architecture Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-[#1C1C22] text-[#E4E4E7] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions & Links */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {hasLiveUrl && (
                  <Button
                    variant="primary"
                    size="sm"
                    href={project.liveUrl}
                    rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Live Application
                  </Button>
                )}
                {hasGithubUrl && (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={project.githubUrl}
                    leftIcon={<GithubIcon className="w-3.5 h-3.5" />}
                  >
                    GitHub Repository
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  href="#contact"
                  onClick={onClose}
                >
                  Inquire About Similar Build
                </Button>
                <Button variant="ghost" size="sm" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
