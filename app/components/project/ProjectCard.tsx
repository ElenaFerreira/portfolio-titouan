"use client";

import { useState, useEffect, useMemo, useCallback, useRef, ReactNode } from "react";
import Image from "next/image";
import { ProjectModal, Tool } from "./ProjectModal";

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
  description: string;
  designTitle?: string;
  designText: string;
  designHighlights?: string[];
  tools: Tool[];
  projectUrl?: string;
  isNew?: boolean;
};

const DEFAULT_SOLO_AVATAR = "/images/profile.png";
const DEFAULT_GROUP_AVATARS = ["/images/client1.jpeg", "/images/client2.jpeg", "/images/client3.jpeg"];

function highlightText(text: string, highlights: string[], color: string) {
  if (!highlights.length) return text;

  const pattern = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const match = highlights.find((h) => h.toLowerCase() === part.toLowerCase());

    if (match) {
      return (
        <span key={`${match}-${index}`} className="font-semibold" style={{ color }}>
          {part}
        </span>
      );
    }

    return <span key={`text-${index}`}>{part}</span>;
  });
}

function useLockBodyScroll(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
}

function useEscapeKey(onEscape: () => void, enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEscape();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, onEscape]);
}

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
  soloAvatarSrc = DEFAULT_SOLO_AVATAR,
  groupAvatars = DEFAULT_GROUP_AVATARS,
  description,
  designTitle = "Design",
  designText,
  designHighlights = [],
  tools,
  projectUrl,
  isNew = false,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useLockBodyScroll(isOpen);
  useEscapeKey(closeModal, isOpen);

  const gradientStyle = useMemo(
    () => ({
      background: `linear-gradient(180deg, ${bgFrom} 0%, ${bgTo} 100%)`,
    }),
    [bgFrom, bgTo]
  );

  const highlightedDesignText = useMemo<ReactNode>(() => highlightText(designText, designHighlights, bgFrom), [designText, designHighlights, bgFrom]);

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal();
      }
    },
    [openModal]
  );

  return (
    <>
      <article
        ref={cardRef}
        role="button"
        tabIndex={0}
        aria-pressed={isOpen}
        className="group flex size-[324px] flex-col overflow-hidden rounded-3xl border border-border bg-white p-2 text-left transition cursor-pointer"
        onClick={openModal}
        onKeyDown={handleKeyPress}
      >
        <div className="relative flex h-[190px] w-full flex-col items-center justify-end overflow-hidden rounded-2xl" style={gradientStyle}>
          {isNew && (
            <div className="absolute right-2 top-2 z-10 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 shadow-md">
              <span className="relative flex" style={{ width: '8px', height: '8px' }}>
                <span className="absolute inline-flex rounded-full opacity-75 animate-ping" style={{ width: '100%', height: '100%', backgroundColor: '#4ade80' }}></span>
                <span className="relative inline-flex rounded-full" style={{ width: '8px', height: '8px', backgroundColor: '#22c55e' }}></span>
              </span>
              <span className="text-xs font-semibold text-dark">Nouveau</span>
            </div>
          )}
          <div className="transition-transform duration-300 group-hover:scale-105">
            <div className="mt-3 text-sm font-semibold uppercase text-white text-center">{brandLabel}</div>

            <div className="relative mt-3 h-[130px] w-60 overflow-hidden rounded-t-xl bg-white drop-shadow-xl drop-shadow-white">
              <Image src={coverSrc} alt={coverAlt} fill className="object-cover object-top" />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between bg-white px-4 pb-2 pt-3 text-left text-dark">
          <div>
            <h3 className="text-md font-semibold text-dark">{title}</h3>
            <p className="text-sm font-medium text-gray">{subtitle}</p>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <div className="flex items-center gap-2">
              {isGroup ? (
                <div className="flex -space-x-2">
                  {groupAvatars.map((src, index) => (
                    <Avatar key={src} src={src} alt={`Membre ${index + 1}`} />
                  ))}
                </div>
              ) : (
                <Avatar src={soloAvatarSrc} alt="Titouan" />
              )}

              <span className="text-md text-dark">{isGroup ? "Groupe" : "Titouan"}</span>
            </div>

            <span className="rounded-full border border-border bg-gray-lighter px-3 py-1 text-sm text-gray">{dateLabel}</span>
          </div>
        </div>
      </article>

      <ProjectModal
        isOpen={isOpen}
        onClose={closeModal}
        title={title}
        description={description}
        gradientStyle={gradientStyle}
        coverSrc={coverSrc}
        coverAlt={coverAlt}
        designTitle={designTitle}
        designContent={highlightedDesignText}
        tools={tools}
        projectUrl={projectUrl}
      />
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
