"use client";

import { Briefcase, CalendarDays } from "lucide-react";
import Image from "next/image";
import { SectionTag } from "./ui/SectionTag";
import { IconTag } from "./ui/IconTag";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

interface JobExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  logo: string;
}

const experiences: JobExperience[] = [
  {
    id: 1,
    title: "Webdesigner UI / UX",
    company: "Youdge",
    period: "Sept. 2023 - Aujourd'hui",
    description:
      "Maintenance du site : création de newsletters et de designs web, intégration front-end (Symfony, PHP, HTML, CSS, JS) et mise en place continue de nouvelle page et de nouveaux designs.",
    logo: "/images/jobs/Youdge.svg",
  },
  {
    id: 2,
    title: "Développeur Web",
    company: "uGetWin",
    period: "Mai 2023 - Juill. 2023",
    description:
      "Redesign d'un site web : conception de maquettes UI/UX, développement du site avec les languages HTML, CSS, PHP, JS et debbugage d'une application Android (Java/Kotlin).",
    logo: "/images/jobs/uGetWin.svg",
  },
  {
    id: 3,
    title: "Communication & Marketing",
    company: "RER Restauration",
    period: "Juin 2022 - Juill. 2022",
    description:
      "Participation à la création de supports de communication : réalisation de flyers promotionnels, gestion et animation des réseaux sociaux de l'entreprise, ainsi que conception d'une affiche publicitaire pour une nouvelle gamme de glaces.",
    logo: "/images/jobs/RER_Restauration.svg",
  },
];

export function Jobs() {
  return (
    <section id="jobs" className="flex flex-col items-center px-4 py-16 bg-gray-lighter">
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-[1040px] mx-auto">
        {/* Header animé */}
        <StaggerContainer staggerDelay={0.12}>
          {/* Tag */}
          <StaggerItem>
            <SectionTag icon={Briefcase} label="Parcours" variant="white" />
          </StaggerItem>

          {/* Titre */}
          <StaggerItem>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-dark md:text-4xl">Mon parcours</h2>
          </StaggerItem>

          {/* Sous-titre */}
          <StaggerItem>
            <p className="mt-3 max-w-xl text-sm font-medium text-dark md:text-base">
              Initialement développeur web, j'ai orienté mon profil vers l'UI/UX design, afin de créer des expériences à la fois utiles et cohérentes.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-[1040px] mx-auto mt-12">
        <div className="relative">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-light ml-[7px]" />

          {/* Expériences */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ScrollReveal key={experience.id} variant="fade-left" delay={index * 0.15} className="relative pl-12">
                {/* Point de la timeline */}
                <ScrollReveal variant="scale-in" delay={index * 0.15 + 0.1} className="absolute left-0 top-6">
                  <div className="size-4 rounded-full bg-primary border-3 border-white shadow-md" />
                </ScrollReveal>

                {/* Carte d'expérience */}
                <div className="bg-white rounded-2xl p-6 border border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  {/* En-tête avec logo, titre, compagnie et date */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-4">
                    {/* Contenu gauche */}
                    <div className="flex gap-4 items-center flex-1">
                      {/* Logo */}
                      <div className="flex size-10 items-center justify-center rounded-xl text-2xl shrink-0">
                        {experience.logo.startsWith("/") ? (
                          <Image src={experience.logo} alt={experience.company} width={24} height={24} className="object-contain" />
                        ) : (
                          experience.logo
                        )}
                      </div>

                      {/* Informations */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-dark">{experience.title}</h3>
                        <p className="text-sm font-medium text-gray mt-1">{experience.company}</p>
                      </div>
                    </div>

                    {/* Date à droite */}
                    <IconTag label={experience.period} icon={<CalendarDays className="size-4" />} className="shrink-0 w-fit md:mt-1" />
                  </div>

                  {/* Bordure de séparation */}
                  <div className="border-t border-border"></div>

                  {/* Description */}
                  <div className="pt-4">
                    <p className="text-sm text-gray leading-relaxed">{experience.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
