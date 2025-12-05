"use client";

import { CircleUserRound, Check } from "lucide-react";
import Image from "next/image";
import { SectionTag } from "./ui/SectionTag";

export function About() {
  return (
    <section id="about" className="flex flex-col items-center px-4 py-16 bg-white">
      {/* Contenu principal */}
      <div className="w-full max-w-[1040px] mx-auto mt-8">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Image de profil */}
          <div className="w-1/2">
            <div className="relative w-full h-full overflow-hidden rounded-3xl">
              <Image src="/images/profile2.png" alt="Photo de profil" fill className="object-cover" priority />
            </div>
          </div>

          {/* Contenu texte */}
          <div className="w-1/2 flex flex-col gap-6 text-left">
            <div className="text-left">
              {/* Tag */}
              <SectionTag icon={CircleUserRound} label="À propos" variant="light" />

              {/* Titre */}
              <h2 className="mt-6 text-3xl font-bold leading-tight text-dark md:text-4xl">À mon propos</h2>

              {/* Sous-titre */}
              <p className="mt-3 max-w-xl text-sm font-medium text-dark md:text-base">
                Découvrez la personne que je suis, ce qui m'anime au quotidien et ce qui oriente mes choix.
              </p>
            </div>

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

            {/* Points clés avec checkmarks */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex items-center gap-3 rounded-full border border-gray-light py-1 px-2">
                <div className="flex size-6 items-center justify-center rounded-full bg-primary">
                  <Check className="size-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-dark">Basé dans l'Oise</span>
              </div>

              <div className="flex items-center gap-3 rounded-full border border-gray-light py-1 px-2">
                <div className="flex size-6 items-center justify-center rounded-full bg-primary">
                  <Check className="size-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-dark">2 ans d'expérience en design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
