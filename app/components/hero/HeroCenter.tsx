"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroCenter() {
  return (
    <div className="flex flex-col items-center text-center gap-8 pt-15 pb-16 z-50 backdrop-blur-xs">
      {/* Logo carré bleu */}
      <div className="flex size-14 items-center justify-center rounded-2xl bg-primary">
        <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
      </div>

      {/* Pill confiance */}
      <div className="flex items-center gap-4 rounded-full border border-gray-light bg-white px-4 py-2">
        {/* Avatars + texte */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <Avatar src="/images/client1.jpg" alt="Client 1" />
            <Avatar src="/images/client2.png" alt="Client 2" />
            <Avatar src="/images/client3.png" alt="Client 3" />
          </div>
          <p className="text-xs font-semibold text-gray-dark">Ils me font confiance</p>
        </div>

        {/* Bouton Me contacter */}
        <button className="flex items-center gap-1 rounded-full bg-blue-light px-4 py-1.5 text-xs font-semibold text-primary shadow-md cursor-pointer">
          Me contacter
          <ArrowRight className="size-3.5" />
        </button>
      </div>

      {/* Titre principal */}
      <div className="space-y-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <span className="block">
            D’une idée abstraite <br /> à une{" "}
            <span className="text-transparent bg-clip-text font-extrabold bg-linear-to-r from-primary to-blue-dark">interface concrète</span>
          </span>
        </h1>
      </div>

      {/* Texte descriptif */}
      <p className="max-w-2xl text-sm md:text-base font-medium text-gray">
        Étudiant en UI/UX Design, je crée des interfaces simples, efficaces et centrées sur l’humain. Un seul objectif : rendre chaque interaction
        agréable à travers des designs modernes et intuitifs.
      </p>

      {/* CTA principal */}
      <button className="rounded-xl bg-primary px-8 py-3 text-xl text-white hover:brightness-110 transition cursor-pointer">Découvrir</button>
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
