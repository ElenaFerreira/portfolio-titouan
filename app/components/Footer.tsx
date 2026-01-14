"use client";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/titouan-françois/",
    image: "/images/social/Linkedin.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/iamtickev/",
    image: "/images/social/Instagram.svg",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@tickev?is_from_webapp=1&sender_device=pc",
    image: "/images/social/TikTok.svg",
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-lighter px-4 py-12">
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex size-13 items-center justify-center rounded-xl bg-primary">
              <Image src="/images/logo.svg" alt="Logo" width={24} height={24} />
            </div>
            <p className="text-sm text-gray max-w-xs">
              Créons ensemble des designs moderne
              <br />
              qui rendent vos projets uniques
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
                aria-label={social.name}
              >
                <Image src={social.image} alt={social.name} width={44} height={44} />
              </Link>
            ))}
          </div>
        </div>

        <div className="h-px bg-border my-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-gray">
          <p>©2025 Titouan F. Tous droits réservés</p>

          <Link href="/mentions-legales" className="hover:text-dark transition-colors">
            Mentions légales
          </Link>

          <p>
            Développé par{" "}
            <Link
              href="https://www.elenaferreira.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-dark transition-colors"
            >
              Elena Ferreira
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
