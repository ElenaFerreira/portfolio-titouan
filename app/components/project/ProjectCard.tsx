"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";

type Tool = {
  name: string;
  iconSrc: string;
};

type ProjectCardProps = {
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
  // Props pour la modale
  description: string;
  designTitle?: string;
  designText: string;
  designHighlights?: string[];
  tools: Tool[];
  projectUrl?: string;
};

export function ProjectCard({
  coverSrc,
  coverAlt,
  brandLabel,
  title,
  subtitle,
  dateLabel,
  isGroup = false,
  bgFrom,
  bgTo,
  soloAvatarSrc = "/images/profile.png",
  groupAvatars = ["/images/client1.jpeg", "/images/client2.jpeg", "/images/client3.jpeg"],
  description,
  designTitle = "Design",
  designText,
  designHighlights = [],
  tools,
  projectUrl,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!isOpen) return;

    // 1) Bloquer le scroll du body
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 2) Fermer la modale avec Échap
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup quand on ferme la modale / démonte le composant
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function highlightText(text: string, highlights: string[], color: string) {
    if (!highlights.length) return text;

    const pattern = new RegExp(`(${highlights.join("|")})`, "gi");
    const parts = text.split(pattern);

    return parts.map((part, index) => {
      const match = highlights.find((h) => h.toLowerCase() === part.toLowerCase());

      if (match) {
        return (
          <span key={index} className="font-semibold" style={{ color }}>
            {part}
          </span>
        );
      }

      return <span key={index}>{part}</span>;
    });
  }

  return (
    <>
      {/* CARD */}
      <article
        className="group flex size-[324px] flex-col overflow-hidden rounded-3xl border border-gray-light bg-white p-2 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Top: gradient + cover */}
        <div
          className="relative flex h-[190px] w-full flex-col items-center justify-end rounded-2xl"
          style={{
            background: `linear-gradient(180deg, ${bgFrom} 0%, ${bgTo} 100%)`,
          }}
        >
          <div className="transition-transform duration-300 group-hover:scale-105">
            <div className="mt-3 text-sm font-semibold uppercase text-white">{brandLabel}</div>

            <div className="relative mt-3 h-[130px] w-60 overflow-hidden rounded-t-xl bg-white">
              <Image src={coverSrc} alt={coverAlt} fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-1 flex-col justify-between bg-white px-4 pb-4 pt-3 text-left text-dark">
          <div>
            <h3 className="text-md font-semibold text-dark">{title}</h3>
            <p className="text-sm font-medium text-gray">{subtitle}</p>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-gray-light pt-3">
            {/* Auteur / groupe */}
            <div className="flex items-center gap-2">
              {isGroup ? (
                <div className="flex -space-x-2">
                  {groupAvatars.map((src, index) => (
                    <Avatar key={index} src={src} alt={`Membre ${index + 1}`} />
                  ))}
                </div>
              ) : (
                <Avatar src={soloAvatarSrc} alt="Titouan" />
              )}

              <span className="text-md font-semibold text-dark">{isGroup ? "Groupe" : "Titouan"}</span>
            </div>

            {/* Date */}
            <span className="rounded-full border border-gray-light bg-gray-lighter px-3 py-1 text-sm font-semibold text-dark">{dateLabel}</span>
          </div>
        </div>
      </article>

      {/* MODALE */}
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60" onClick={() => setIsOpen(false)}>
          {/* Conteneur de la modale */}
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Contenu scrollable */}
            <div className="relative max-h-[90vh] overflow-y-auto p-8">
              {/* Bouton close */}
              <button
                className="absolute right-5 top-5 inline-flex size-8 items-center justify-center rounded-full text-dark cursor-pointer"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer"
              >
                <X className="size-8" />
              </button>

              {/* Titre + description courte */}
              <div className="text-left">
                <h2 className="text-2xl font-bold text-dark">{title}</h2>
                <p className="text-md font-medium text-gray">{description}</p>
              </div>

              {/* Visuel principal dans le gradient */}
              <div
                className="mt-8 rounded-3xl pt-16 px-20"
                style={{
                  background: `linear-gradient(180deg, ${bgFrom} 0%, ${bgTo} 100%)`,
                }}
              >
                <div className="relative mx-auto h-[350px] max-w-[640px] overflow-hidden rounded-t-3xl bg-white">
                  <Image src={coverSrc} alt={coverAlt} fill className="object-cover" />
                </div>
              </div>

              {/* Section Design */}
              <div className="mt-8  text-md text-dark text-left">
                <h3 className="font-semibold">{designTitle}</h3>
                <p className="font-medium text-gray">{highlightText(designText, designHighlights, bgFrom)}</p>
              </div>

              {/* Footer : outils + lien */}
              <div className="mt-4">
                <div className="flex flex-col items-start gap-2">
                  <span className="text-md font-semibold text-dark">Outils utilisés</span>

                  {/* Ligne tags + lien */}
                  <div className="flex w-full flex-wrap items-center justify-between gap-2">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool) => (
                        <span
                          key={tool.name}
                          className="inline-flex items-center gap-1 rounded-sm border border-gray-light bg-gray-lighter px-3 py-1 text-xs font-semibold text-dark"
                        >
                          {tool.iconSrc && <Image src={tool.iconSrc} alt={tool.name} width={16} height={16} className="object-contain" />}
                          {tool.name}
                        </span>
                      ))}
                    </div>

                    {/* Lien projet */}
                    {projectUrl && (
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 text-md font-semibold text-primary hover:underline"
                      >
                        Voir le projet
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative size-8 overflow-hidden rounded-full border-2 border-white">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
