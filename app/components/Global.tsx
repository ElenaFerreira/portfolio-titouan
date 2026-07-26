"use client";

import { FlaskConical, Laptop2, Paintbrush } from "lucide-react";
import Image from "next/image";
import { SectionTag } from "./ui/SectionTag";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

export function Global() {
  return (
    <section id="projects" className="flex flex-col items-center px-4 py-16 text-center bg-gray-lighter">
      {/* Header animé */}
      <StaggerContainer staggerDelay={0.12} className="flex flex-col items-center">
        {/* Tag */}
        <StaggerItem>
          <SectionTag icon={FlaskConical} label="Vue d'ensemble" variant="white" />
        </StaggerItem>

        {/* Titre */}
        <StaggerItem>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-dark md:text-4xl">Ma vision du design</h2>
        </StaggerItem>

        {/* Sous-titre */}
        <StaggerItem>
          <p className="mt-3 max-w-xl text-sm font-medium text-drak md:text-base">
            Découvrez ma vision du design, comment je l'imagine et le conçois dans ma vie de tous les jours
          </p>
        </StaggerItem>
      </StaggerContainer>

      {/* Cartes vidéos */}
      <div className="w-full max-w-[1040px] flex flex-col mx-auto mt-8">
        {/* Ligne 1 */}
        <div className="w-full flex flex-col md:flex-row gap-2">
          {/* Carte 1 : UX & UI (2/3) */}
          <ScrollReveal variant="scale-in" delay={0.1} className="w-full md:w-3/5 py-2">
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-white p-6 text-left border border-border md:flex-row md:items-center h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Vidéo */}
              <div className="relative mb-4 h-40 w-full overflow-hidden rounded-2xl md:mb-0 md:h-44 md:w-56 md:shrink-0">
                <video src="/videos/video1.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
              </div>

              {/* Contenu texte */}
              <div className="md:ml-6 flex flex-col gap-3">
                <div className="flex size-13 items-center justify-center rounded-full bg-primary shadow-gray shadow-lg">
                  <Image className="size-7 text-white" src={"/images/tools/figma2.svg"} height={27} width={18} alt="figma" />
                </div>
                <h3 className="text-lg font-semibold text-dark">UX &amp; UI</h3>

                <p className="text-sm text-gray text-balance">
                  Conception d'interfaces fluides et intuitives, pensées pour favoriser l'engagement et offrir une expérience réellement utilisable.
                </p>
              </div>
            </article>
          </ScrollReveal>

          {/* Carte 2 : Développement Wordpress (1/3) */}
          <ScrollReveal variant="scale-in" delay={0.25} className="w-full md:w-2/5 py-2">
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-white p-6 text-left h-full border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Contenu texte */}
              <div className="flex flex-col gap-3">
                <div className="flex size-13 items-center justify-center rounded-full bg-primary shadow-gray shadow-lg">
                  <Image className="size-7 text-white" src={"/images/tools/wordpress2.svg"} height={27} width={18} alt="figma" />
                </div>
                <h3 className="text-lg font-semibold text-dark">Développement Wordpress</h3>

                <p className="text-sm text-gray text-balance">
                  Création de sites web interactifs et performants grâce aux puissants outils de design et de développement de Wordpress, pour une
                  expérience utilisateur fluide.
                </p>
              </div>
            </article>
          </ScrollReveal>
        </div>

        {/* Ligne 2 */}
        <div className="w-full flex flex-col md:flex-row gap-2">
          {/* Carte 3 : Expériences Web Interactives (1/3) */}
          <ScrollReveal variant="scale-in" delay={0.1} className="w-full md:w-2/5 py-2">
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-white p-6 text-left h-full border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Contenu texte */}
              <div className="flex flex-col gap-3">
                <div className="flex size-13 items-center justify-center rounded-full bg-primary shadow-gray shadow-lg">
                  <Laptop2 className="size-7 text-white" fill="white" />
                </div>
                <h3 className="text-lg font-semibold text-dark">Expériences Web Interactives</h3>

                <p className="text-sm text-gray text-balance">
                  L'interaction est au cœur de mes interfaces, pour transformer la navigation en une expérience fluide, engageante et cohérente.
                  Chaque détail a son importance.
                </p>
              </div>
            </article>
          </ScrollReveal>

          {/* Carte 4 : Design & Créativité (2/3) */}
          <ScrollReveal variant="scale-in" delay={0.25} className="w-full md:w-3/5 py-2">
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-white p-6 text-left md:flex-row md:items-center h-full border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Vidéo */}
              <div className="relative mb-4 h-40 w-full overflow-hidden rounded-2xl bg-gray-100 md:mb-0 md:h-44 md:w-56 md:shrink-0">
                <video src="/videos/video2.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
              </div>

              {/* Contenu texte */}
              <div className="md:ml-6 flex flex-col gap-3">
                <div className="flex size-13 items-center justify-center rounded-full bg-primary shadow-gray shadow-lg">
                  <Paintbrush className="size-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-dark">Design &amp; Créativité</h3>

                <p className="text-sm text-gray text-balance">
                  Je conçois des designs créatifs et impactants, alignés avec votre identité de marque et les attentes de votre audience.
                </p>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
