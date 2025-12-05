"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { SectionTag } from "./ui/SectionTag";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  bgColor: string;
  companyLogo: string;
  quote: string;
  testimonial: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elena Ferreira",
    role: "Développeuse full-stack",
    image: "/images/testimonials/Elena.png",
    bgColor: "#FE8E8E",
    companyLogo: "/images/testimonials/ecole-futee.svg",
    quote: "Un designer passionné",
    testimonial: [
      "Un UI/UX designer passionné, ultra attentif aux détails, et toujours investi à 100 %. Il apporte à chaque projet des idées pertinentes, des conseils avisés, et reste toujours à l'écoute.",
      "Ouvert d'esprit et impliqué, c'est quelqu'un sur qui on peut vraiment compter.",
    ],
  },
  {
    id: 2,
    name: "Tristan Habert",
    role: "Ingénieur système & réseaux",
    image: "/images/testimonials/Tristan.png",
    bgColor: "#FECA8E",
    companyLogo: "/images/testimonials/eurofiber.png",
    quote: "Humain et professionnel",
    testimonial: [
      "Titouan est quelqu’un de très humain et professionnel. Il cherche vraiment à comprendre votre projet et vos ambitions pour réaliser un design qui vous correspond.",
      "Je vous le recommande vivement !",
    ],
  },
  {
    id: 3,
    name: "Ambre Lardry",
    role: "UI / UX Designer",
    image: "/images/testimonials/Ambre.png",
    bgColor: "#8EFECA",
    companyLogo: "/images/testimonials/open-sezam.svg",
    quote: "Une personne motivée et impliquée",
    testimonial: [
      "J’ai eu l’occasion de collaborer avec Titouan sur plusieurs projets, et je peux affirmer qu’il s’agit d’une personne motivée, impliquée et toujours prête à relever de nouveaux défis.",
      "Il donne systématiquement le meilleur de lui-même pour fournir un travail de qualité.",
    ],
  },
];

export function Testimonials() {
  const [activeId, setActiveId] = useState<number>(1);

  const activeTestimonial = testimonials.find((t) => t.id === activeId);

  return (
    <section id="testimonials" className="flex flex-col items-center px-4 py-16 bg-gray-lighter">
      <div className="w-full max-w-[1040px] mx-auto">
        {/* Header aligné à gauche comme About */}
        <div className="text-left">
          <SectionTag icon={Star} label="Témoignages" variant="white" />

          <h2 className="mt-6 text-3xl font-bold leading-tight text-dark md:text-4xl">Ils donnent leur avis</h2>

          <p className="mt-3 max-w-md text-sm font-medium text-dark md:text-base">
            Quelques avis des personnes avec qui je travaille au quotidien et qui apprécie mon travail
          </p>
        </div>

        {/* Contenu : liste des personnes + témoignage */}
        <div className="mt-12 flex flex-col md:flex-row gap-40">
          {/* Liste des personnes à gauche */}
          <div className="flex flex-col gap-2">
            <div className="relative pl-6">
              {/* Barre grise de fond */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border rounded-full" />

              {/* Barre bleue animée */}
              <div
                className="absolute left-0 w-[2px] bg-primary rounded-full transition-all duration-300 ease-out"
                style={{
                  height: "56px",
                  top: `${(activeId - 1) * 72 + 8}px`,
                }}
              />

              <div className="flex flex-col gap-4">
                {testimonials.map((person) => (
                  <button
                    key={person.id}
                    onClick={() => setActiveId(person.id)}
                    className={`flex items-center gap-4 text-left transition-all duration-300 p-2 rounded-lg hover:-translate-y-1 ${
                      activeId === person.id ? "opacity-100" : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <div
                      className="relative size-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: person.bgColor }}
                    >
                      <Image src={person.image} alt={person.name} height={32} width={23} className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">{person.name}</p>
                      <p className="text-sm text-gray">{person.role}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Témoignage à droite */}
          <div className="flex-1 flex items-start">
            {activeTestimonial && (
              <div key={activeTestimonial.id} className="animate-fade-in-up">
                {/* Logo de l'entreprise */}
                <div className="relative h-6 w-40">
                  <Image src={activeTestimonial.companyLogo} alt="Logo entreprise" fill className="object-contain object-left" />
                </div>

                {/* Citation */}
                <h3 className="mt-6 text-2xl font-semibold text-dark">"{activeTestimonial.quote}"</h3>

                {/* Texte du témoignage */}
                <div className="mt-6 space-y-4">
                  {activeTestimonial.testimonial.map((paragraph, index) => (
                    <p key={index} className="text-gray leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
