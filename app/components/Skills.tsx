"use client";

import {
  Brain,
  UserRoundSearch,
  Settings,
  ChartColumnIncreasing,
  TriangleRight,
  Accessibility,
  CirclePlay,
  Puzzle,
  Smartphone,
  Heart,
  Search,
  Microscope,
  GraduationCap,
  ChevronsUp,
  Compass,
  Cpu,
} from "lucide-react";
import { SectionTag } from "./ui/SectionTag";
import { IconTag } from "./ui/IconTag";

interface Tool {
  name: string;
  icon?: string;
  lucideIcon?: React.ReactNode;
}

const tools: Tool[] = [
  { name: "HTML", icon: "/images/tools/html.svg" },
  { name: "CSS", icon: "/images/tools/css.svg" },
  { name: "JS", icon: "/images/tools/javascript.svg" },
  { name: "SQL", icon: "/images/tools/sql.svg" },
  { name: "Symfony", icon: "/images/tools/symfony.svg" },
  { name: "ChatGPT", icon: "/images/tools/openai.svg" },
  { name: "Première Pro", icon: "/images/tools/Adobe_Premiere_Pro.svg" },
  { name: "After Effect", icon: "/images/tools/after-effect.svg" },
  { name: "Adobe XD", icon: "/images/tools/Adobe_xd.svg" },
  { name: "Illustrator", icon: "/images/tools/Adobe_Illustrator.svg" },
  { name: "Git", icon: "/images/tools/git.svg" },
  { name: "Docker", icon: "/images/tools/docker.svg" },
  { name: "Figma", icon: "/images/tools/figma.svg" },
  { name: "Photoshop", icon: "/images/tools/Adobe_Photoshop.svg" },
  { name: "Miro", icon: "/images/tools/miro.svg" },
  { name: "Monday", icon: "/images/tools/monday.svg" },
  { name: "Dribbble", icon: "/images/tools/dribbble.svg" },
  { name: "Framer", icon: "/images/tools/framer.svg" },
  { name: "Wordpress", icon: "/images/tools/wordpress.svg" },
];

const uxSkillsList = [
  { name: "Réflexion stratégique", icon: <Brain className="size-4" /> },
  { name: "Recherche utilisateur", icon: <UserRoundSearch className="size-4" /> },
  { name: "Prototypage", icon: <Settings className="size-4" /> },
  { name: "Tests d'utilisabilité", icon: <ChartColumnIncreasing className="size-4" /> },
  { name: "Wireframing", icon: <TriangleRight className="size-4" /> },
  { name: "Accessibilité", icon: <Accessibility className="size-4" /> },
  { name: "Animation", icon: <CirclePlay className="size-4" /> },
  { name: "Design system", icon: <Puzzle className="size-4" /> },
  { name: "Responsive design", icon: <Smartphone className="size-4" /> },
];

const softSkillsList = [
  { name: "Empathie", icon: <Heart className="size-4" /> },
  { name: "Curiosité", icon: <Search className="size-4" /> },
  { name: "Sens du détail", icon: <Microscope className="size-4" /> },
  { name: "Pédagogie", icon: <GraduationCap className="size-4" /> },
  { name: "Initiative", icon: <ChevronsUp className="size-4" /> },
  { name: "Autonomie", icon: <Compass className="size-4" /> },
];

export function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center px-4 py-16 bg-white">
      <div className="text-center w-full max-w-[1040px] mx-auto">
        {/* Tag */}
        <div className="flex justify-center">
          <SectionTag icon={Cpu} label="Compétences" variant="light" />
        </div>

        {/* Titre */}
        <h2 className="mt-6 text-3xl font-bold leading-tight text-dark md:text-4xl">Mes compétences</h2>

        {/* Sous-titre */}
        <p className="mt-3 mx-auto max-w-md text-sm font-medium text-dark md:text-base">
          Passez en revue mes compétences, ainsi que mes nombreux savoir-être et savoir-faire.
        </p>
      </div>

      {/* Outils */}
      <div className="w-full max-w-[1040px] mx-auto mt-10">
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <IconTag key={tool.name} label={tool.name} imageSrc={tool.icon} icon={tool.lucideIcon} />
          ))}
        </div>
      </div>

      {/* Séparateur */}
      <div className="w-full max-w-[600px] mx-auto mt-8">
        <div className="border-t border-gray-light"></div>
      </div>

      {/* Compétences UX */}
      <div className="w-full max-w-[1040px] mx-auto mt-8">
        <div className="flex flex-wrap justify-center gap-3">
          {uxSkillsList.map((skill) => (
            <IconTag key={skill.name} label={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>

      {/* Séparateur */}
      <div className="w-full max-w-[600px] mx-auto mt-8">
        <div className="border-t border-gray-light"></div>
      </div>

      {/* Soft skills */}
      <div className="w-full max-w-[1040px] mx-auto mt-8">
        <div className="flex flex-wrap justify-center gap-3">
          {softSkillsList.map((skill) => (
            <IconTag key={skill.name} label={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
