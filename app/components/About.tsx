"use client";

import { CircleUserRound, Check } from "lucide-react";
import Image from "next/image";
import { SectionTag } from "./ui/SectionTag";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ui/ScrollReveal";

export function About() {
  return (
    <section id="about" className="flex flex-col items-center px-4 py-16 bg-white">
      {/* Contenu principal */}
      <div className="w-full max-w-[1040px] mx-auto mt-8">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Image de profil */}
          <ScrollReveal variant="fade-left" className="w-full md:w-1/2">
            <div className="relative w-full h-80 md:h-full">
              {/* Scotch en haut à gauche */}
              <Image src="/images/scotch.png" alt="" width={300} height={300} className="absolute -top-2 -left-2 z-10 size-10 hidden md:block" />

              {/* Photo de profil */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/profile2.png"
                  alt="Photo de profil"
                  fill
                  className="object-cover scale-130 object-top"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Scotch en bas à droite */}
              <Image
                src="/images/scotch.png"
                alt=""
                width={300}
                height={300}
                className="absolute -bottom-2 -right-2 z-10 rotate-150 size-10 hidden md:block"
              />
            </div>
          </ScrollReveal>

          {/* Contenu texte */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
            <StaggerContainer staggerDelay={0.1} className="text-left">
              {/* Tag */}
              <StaggerItem>
                <SectionTag icon={CircleUserRound} label="À propos" variant="light" />
              </StaggerItem>

              {/* Titre */}
              <StaggerItem>
                <h2 className="mt-6 text-3xl font-bold leading-tight text-dark md:text-4xl">À mon propos</h2>
              </StaggerItem>

              {/* Sous-titre */}
              <StaggerItem>
                <p className="mt-3 max-w-xl text-sm font-medium text-dark md:text-base">
                  Découvrez la personne que je suis, ce qui m'anime au quotidien et ce qui oriente mes choix.
                </p>
              </StaggerItem>
            </StaggerContainer>

            <ScrollReveal variant="fade-right" delay={0.3}>
              <div className="space-y-4">
                <p className="text-gray">
                  <span className="text-primary font-semibold">UI/UX designer</span> spécialisé dans la création d'interfaces claires, cohérentes et
                  centrées utilisateur.
                </p>

                <p className="text-gray">
                  Formé au développement web (BUT MMI), je conçois sur <span className="text-primary font-semibold">Figma</span> des designs{" "}
                  <span className="text-primary font-semibold">accessibles et efficaces</span>, avec une attention particulière à la hiérarchie visuelle
                  et aux micro-interactions.
                </p>

                <p className="text-gray">
                  Passionné de jeux vidéo, séries et data, je m'inspire de ces univers pour mieux comprendre les usages et les{" "}
                  <span className="text-primary font-semibold">comportements utilisateurs</span>.
                </p>
              </div>
            </ScrollReveal>

            {/* Points clés avec checkmarks */}
            <StaggerContainer staggerDelay={0.15} className="flex flex-col sm:flex-row gap-4 mt-4">
              <StaggerItem variant="fade-up">
                <div className="flex w-fit items-center gap-3 rounded-full border border-border p-1 pr-2">
                  <div className="flex size-6 items-center justify-center rounded-full bg-primary">
                    <Check className="size-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-dark">Basé dans l'Oise</span>
                </div>
              </StaggerItem>

              <StaggerItem variant="fade-up">
                <div className="flex w-fit items-center gap-3 rounded-full border border-border p-1 pr-2">
                  <div className="flex size-6 items-center justify-center rounded-full bg-primary">
                    <Check className="size-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-dark">3 ans d'expérience en design</span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
