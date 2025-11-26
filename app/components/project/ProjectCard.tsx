"use client";

import Image from "next/image";

type ProjectCardProps = {
  coverSrc: string;
  coverAlt: string;
  brandLabel: string;
  title: string;
  subtitle: string;
  dateLabel: string;
  isGroup?: boolean;
  bgFrom: string; // ex: "#FFA53B"
  bgTo: string; // ex: "#FF6A00"
  soloAvatarSrc?: string;
  groupAvatars?: string[]; // ex: ["/images/a.png", "/images/b.png"]
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
}: ProjectCardProps) {
  return (
    <article className="flex size-[324px] flex-col overflow-hidden rounded-3xl border border-gray-light bg-white p-2">
      {/* Top: gradient + cover */}
      <div
        className="relative flex h-[190px] w-full flex-col items-center justify-end rounded-2xl"
        style={{
          background: `linear-gradient(180deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        }}
      >
        <div className="mt-3 text-sm font-semibold uppercase text-white">{brandLabel}</div>

        <div className="relative mt-3 h-[130px] w-60 overflow-hidden rounded-t-xl bg-white">
          <Image src={coverSrc} alt={coverAlt} fill className="object-cover" />
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
  );
}

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative size-8 overflow-hidden rounded-full border-2 border-white">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
