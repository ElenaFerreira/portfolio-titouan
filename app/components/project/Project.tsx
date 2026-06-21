"use client";

import { Folder } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Tool } from "./ProjectModal";
import { SectionTag } from "../ui/SectionTag";
import projectsData from "@/app/data/projects.json";

type ProjectCategory = "uiux" | "web" | "video";

const FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: "uiux", label: "UI/UX Design" },
  { id: "web", label: "Développement Web" },
  { id: "video", label: "Montage vidéo" },
];

type ProjectData = {
  categories: ProjectCategory[];
  coverSrc: string;
  coverAlt: string;
  brandLabel: string;
  title: string;
  subtitle: string;
  dateLabel: string;
  isGroup?: boolean;
  bgFrom: string;
  bgTo: string;
  soloAvatarSrc?: string;
  groupAvatars?: string[];
  description: string;
  designTitle?: string;
  designText: string;
  designHighlights?: string[];
  tools: Tool[];
  projectUrl?: string;
  isNew?: boolean;
};

const PROJECTS = projectsData as ProjectData[];

export function Project() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("uiux");

  const filteredProjects = PROJECTS.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="flex flex-col items-center px-4 py-16 text-center">
      {/* Tag */}
      <SectionTag icon={Folder} label="Mes projets" />

      {/* Titre */}
      <h2 className="mt-6 text-3xl font-bold leading-tight text-dark md:text-4xl">Découvrez mes projets</h2>

      {/* Sous-titre */}
      <p className="mt-3 max-w-xl text-sm font-medium text-gray md:text-base">
        Plongez dans mon univers à travers des projets concrets, pensés pour répondre à des besoins réels.
      </p>

      {/* Filtres */}
      <div className="mt-8 max-w-full rounded-full bg-gray-lighter p-2 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-3 w-max">
          {FILTERS.map((filter) => {
            const isActive = filter.id === activeFilter;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full px-4 py-2 text-md font-semibold transition whitespace-nowrap ${
                  isActive ? "bg-dark text-white" : "bg-white text-dark hover:bg-white/70"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-8 max-w-[1040px] min-h-[680px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${project.brandLabel}-${index}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <ProjectCard
                  coverSrc={project.coverSrc}
                  coverAlt={project.coverAlt}
                  brandLabel={project.brandLabel}
                  title={project.title}
                  subtitle={project.subtitle}
                  dateLabel={project.dateLabel}
                  isGroup={project.isGroup}
                  bgFrom={project.bgFrom}
                  bgTo={project.bgTo}
                  soloAvatarSrc={project.soloAvatarSrc}
                  groupAvatars={project.groupAvatars}
                  description={project.description}
                  designTitle={activeFilter === "video" ? "Montage" : "Design"}
                  designText={project.designText}
                  designHighlights={project.designHighlights}
                  tools={project.tools}
                  projectUrl={project.projectUrl}
                  isNew={project.isNew}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
