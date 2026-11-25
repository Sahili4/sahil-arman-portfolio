"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { Info } from "lucide-react";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenCaseStudy = (project: Project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Case Studies"
          title="Architectural Work."
          highlight="Proven Systems."
          subtitle="A selection of high-concurrency SaaS applications, enterprise dashboards, and mobile platforms engineered with scalable foundations."
        />

        {/* Notice pill explaining demonstrative case studies */}
        <div className="mb-10 max-w-2xl mx-auto p-3.5 rounded-xl bg-violet-500/5 border border-violet-500/15 flex items-center gap-3 text-xs text-[#A1A1AA]">
          <Info className="w-4 h-4 text-violet-400 shrink-0" />
          <span>
            Demonstration project blueprints showcasing core technical architecture, workflows, and solutions. Proprietary client data is preserved.
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={handleOpenCaseStudy}
            />
          ))}
        </div>

        {/* Detailed Case Study Modal */}
        <ProjectModal
          project={activeProject}
          isOpen={modalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
