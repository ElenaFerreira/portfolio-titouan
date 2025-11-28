"use client";

import { Folder } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

type ProjectCategory = "uiux" | "web" | "video";

const FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: "uiux", label: "UI/UX Design" },
  { id: "web", label: "Développement Web" },
  { id: "video", label: "Montage vidéo" },
];

export function Project() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("uiux");

  return (
    <section id="projects" className="flex flex-col items-center px-4 py-16 text-center">
      {/* Tag */}
      <div className="inline-flex items-center gap-2 rounded-full bg-gray-lighter border border-gray-light px-4 py-2">
        <Folder className="size-4 text-dark" />
        <span className="text-xs font-semibold text-dark">Mes projets</span>
      </div>

      {/* Titre */}
      <h2 className="mt-6 text-3xl font-bold leading-tight text-dark md:text-4xl">Découvrez mes projets</h2>

      {/* Sous-titre */}
      <p className="mt-3 max-w-xl text-sm font-medium text-gray md:text-base">
        Plongez dans mon univers à travers des projets concrets, pensés pour répondre à des besoins réels.
      </p>

      {/* Filtres */}
      <div className="flex items-center mt-8 gap-3 rounded-full bg-gray-lighter p-2">
        {FILTERS.map((filter) => {
          const isActive = filter.id === activeFilter;

          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-2 text-md font-semibold transition ${
                isActive ? "bg-dark text-white" : "bg-white text-dark hover:bg-white/70"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-8 max-w-[1040px] mx-auto">
        <ProjectCard
          coverSrc="/images/project/wapycloud.png"
          coverAlt="Site WapyCloud"
          brandLabel="WAPYCLOUD"
          title="Site d’entreprise WapyCloud"
          subtitle="Design & Prototypage"
          dateLabel="Juin 2025"
          bgFrom="#FF840A"
          bgTo="#FFD4A9"
          description="Wapycloud est une plateforme SaaS clé en main qui permet aux particuliers et entreprises de commander un site web designé à la main et développé sur mesure."
          designText="Le design est moderne et épuré, pensé pour séduire un large public grâce à une palette claire et vive, avec des appels à l’action dynamiques qui encouragent l’engagement. L’ensemble repose sur une mise en page aérée et responsive, valorisant la simplicité et la performance."
          designHighlights={["moderne", "épuré", "l'engagement", "aérée", "simplicité", "performance"]}
          tools={[
            { name: "Figma", iconSrc: "/images/tools/figma.svg" },
            { name: "Dribbble", iconSrc: "/images/tools/dribbble.svg" },
            { name: "ChatGPT", iconSrc: "/images/tools/openai.svg" },
          ]}
          projectUrl="https://ton-lien-wapycloud.com"
        />

        <ProjectCard
          coverSrc="/images/project/wapycloud.png"
          coverAlt="Site d’anglais Babel Master"
          brandLabel="Babel master"
          title="Site d’anglais Babel Master"
          subtitle="Design & Intégration"
          dateLabel="Mai 2025"
          bgFrom="#F73859"
          bgTo="#FFCFD7"
          description="Babel Masters est un site dédié aux particuliers souhaitant prendre des cours d’anglais à Nanterre, en visio ou en présentiel, avec des professeurs qualifiés."
          designText="Le design de Babel Masters allie clarté, modernité et professionnalisme, avec une palette bleu/rose pensée pour inspirer confiance tout en captant l’attention. La structure aérée et les appels à l’action visibles facilitent la navigation et encouragent la prise de contact."
          designHighlights={["clarté", "modernité", "professionnalisme", "confiance", "navigation", "contact"]}
          tools={[
            { name: "Figma", iconSrc: "/images/tools/figma.svg" },
            { name: "Dribbble", iconSrc: "/images/tools/dribbble.svg" },
            { name: "ChatGPT", iconSrc: "/images/tools/openai.svg" },
            { name: "Wordpress", iconSrc: "/images/tools/wordpress.svg" },
          ]}
          projectUrl="https://ton-lien-wapycloud.com"
        />

        <ProjectCard
          coverSrc="/images/project/wapycloud.png"
          coverAlt="Refonte Parc André Malraux"
          brandLabel="PARC ANDRÉ MALRAUX"
          title="Refonte Parc André Malraux"
          subtitle="Design & Prototypage & Intégration"
          dateLabel="Mai 2025"
          isGroup
          bgFrom="#295700"
          bgTo="#BEEE62"
          groupAvatars={["/images/client1.jpeg", "/images/client2.jpeg", "/images/profile.png"]}
          description=" "
          designText=" "
          tools={[{ name: "Figma", iconSrc: "/images/tools/figma.svg" }]}
          projectUrl="https://ton-lien-wapycloud.com"
        />

        <ProjectCard
          coverSrc="/images/project/wapycloud.png"
          coverAlt="Site de jumeaux numérique"
          brandLabel="ugetwin"
          title="Site de jumeaux numérique"
          subtitle="Design & Intégration"
          dateLabel="Juin 2023"
          bgFrom="#EE1729"
          bgTo="#190101"
          description=" "
          designText=" "
          tools={[{ name: "Figma", iconSrc: "/images/tools/figma.svg" }]}
          projectUrl="https://ton-lien-wapycloud.com"
        />

        <ProjectCard
          coverSrc="/images/project/wapycloud.png"
          coverAlt="Site de gestion de cours"
          brandLabel="OTK COURS"
          title="Site de gestion de cours"
          subtitle="Design"
          dateLabel="Janvier 2023"
          bgFrom="#4AB2DB"
          bgTo="#161616"
          description=" "
          designText=" "
          tools={[{ name: "Figma", iconSrc: "/images/tools/figma.svg" }]}
          projectUrl="https://ton-lien-wapycloud.com"
        />
      </div>
    </section>
  );
}
