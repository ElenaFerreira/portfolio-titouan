"use client";

import { useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { IconTag } from "../ui/IconTag";

export type Tool = {
  name: string;
  iconSrc: string;
};

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  gradientStyle: { background: string };
  coverSrc: string;
  coverAlt: string;
  designTitle: string;
  designContent: ReactNode;
  tools: Tool[];
  projectUrl?: string;
};

export function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  gradientStyle,
  coverSrc,
  coverAlt,
  designTitle,
  designContent,
  tools,
  projectUrl,
}: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 px-4" onClick={onClose}>
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="relative max-h-[90vh] overflow-y-auto p-8">
          <button
            ref={closeButtonRef}
            className="absolute right-5 top-5 inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-dark focus-visible:ring-2 focus-visible:ring-primary"
            onClick={onClose}
            aria-label="Fermer"
            type="button"
          >
            <X className="size-8 transition-transform duration-300 hover:rotate-90" />
          </button>

          <div className="text-left pr-10">
            <h2 id="project-modal-title" className="text-2xl font-bold text-dark">
              {title}
            </h2>
            <p className="text-md font-medium text-gray">{description}</p>
          </div>

          <div
            className="mt-8 flex flex-col items-center justify-end rounded-2xl md:rounded-3xl h-[190px] md:h-auto md:px-20 md:pt-16"
            style={gradientStyle}
          >
            <div className="relative mt-3 md:mt-0 h-[150px] w-60 md:h-[350px] md:w-full md:max-w-[640px] overflow-hidden rounded-t-xl md:rounded-t-3xl drop-shadow-xl drop-shadow-white">
              <Image src={coverSrc} alt={coverAlt} fill className="object-cover object-top" />
            </div>
          </div>

          <div className="mt-8 text-left text-md text-dark">
            <h3 className="font-semibold">{designTitle}</h3>
            <p className="font-medium text-gray">{designContent}</p>
          </div>

          <div className="mt-4">
            <div className="flex flex-col items-start gap-2">
              <span className="text-md font-semibold text-dark">Outils utilisés</span>

              <div className="flex w-full flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <IconTag key={tool.name} label={tool.name} imageSrc={tool.iconSrc} variant="gray" />
                  ))}
                </div>

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
  );
}
