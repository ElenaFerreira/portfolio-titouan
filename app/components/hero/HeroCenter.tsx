"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";

const tools = [
  { name: "Adobe Illustrator", src: "/images/tools/Adobe_Illustrator.svg" },
  { name: "Adobe Photoshop", src: "/images/tools/Adobe_Photoshop.svg" },
  { name: "Adobe Premiere Pro", src: "/images/tools/Adobe_Premiere_Pro.svg" },
  { name: "Canva", src: "/images/tools/canva.svg" },
  { name: "Figma", src: "/images/tools/figma.svg" },
  { name: "Monday", src: "/images/tools/monday.svg" },
  { name: "Notion", src: "/images/tools/Notion.svg" },
  { name: "ChatGPT", src: "/images/tools/openai.svg" },
  { name: "Slack", src: "/images/tools/slack.svg" },
  { name: "VS Code", src: "/images/tools/VScode.svg" },
  { name: "Wordpress", src: "/images/tools/wordpress.svg" },
];

export function HeroCenter() {
  return (
    <div className="z-50 flex flex-col items-center gap-8 pb-16 pt-15 text-center">
      {/* Logo carré bleu */}
      <div className="flex size-14 items-center justify-center rounded-2xl bg-primary">
        <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
      </div>

      {/* Pill confiance */}
      <div className="flex items-center gap-4 rounded-full border border-gray-light bg-white p-2">
        {/* Avatars + texte */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <Avatar src="/images/client1.jpeg" alt="Client 1" />
            <Avatar src="/images/client2.jpeg" alt="Client 2" />
            <Avatar src="/images/client3.jpeg" alt="Client 3" />
          </div>
          <p className="text-xs font-semibold text-gray-dark">Ils me font confiance</p>
        </div>

        {/* Bouton Me contacter */}
        <button className="flex cursor-pointer items-center gap-1 rounded-full bg-blue-light px-4 py-1.5 text-xs font-semibold text-primary shadow-md">
          Me contacter
          <ArrowRight className="size-3.5" />
        </button>
      </div>

      {/* Titre principal */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          <span className="block">
            D’une idée abstraite <br /> à une
            <span className="bg-linear-to-r from-primary to-blue-dark bg-clip-text font-extrabold text-transparent">interface concrète</span>
          </span>
        </h1>
      </div>

      {/* Texte descriptif */}
      <p className="max-w-2xl text-sm font-medium text-gray md:text-base">
        Étudiant en UI/UX Design, je crée des interfaces simples, efficaces et centrées sur l’humain. Un seul objectif : rendre chaque interaction
        agréable à travers des designs modernes et intuitifs.
      </p>

      {/* CTA principal */}
      <button className="cursor-pointer rounded-xl bg-primary px-8 py-3 text-xl text-white transition hover:brightness-110">Découvrir</button>

      {/* Slider de logos */}
      <div className="mt-8 w-full max-w-140 mx-auto">
        <p className="mb-6 text-sm font-semibold text-dark">Mes logiciels les plus utilisés</p>

        <div className="relative h-14 overflow-hidden">
          <Marquee
            speed={60}
            gradient={false}
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            {tools.map((tool, i) => (
              <div key={i} className="mx-10 flex items-center justify-center">
                <Image src={tool.src} alt={tool.name} width={38} height={38} className="object-contain shrink-0" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative size-8 overflow-hidden rounded-full border-2 border-white">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
