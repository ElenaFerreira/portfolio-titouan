// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4">
      <nav className="mt-4 flex h-16 w-full max-w-4xl items-center justify-between rounded-full bg-white/95 px-3 border border-gray-light">
        {/* Bloc gauche : avatar + nom */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src="/images/profile.png" alt="Titouan François" fill className="object-cover" />
          </div>

          <span className="font-bold">Titouan François</span>
        </div>

        {/* Liens centraux */}
        <ul className="hidden md:flex items-center gap-5 text-black">
          <li>
            <a href="#projects" className="hover:text-black">
              Projets
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-black">
              À propos
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-black">
              Compétences
            </a>
          </li>
        </ul>

        {/* Bouton CV */}
        <Link
          href="/cv.pdf"
          download
          className="flex items-center gap-2 rounded-full bg-primary-button px-5 py-2.5 text-white text-sm font-medium shadow-[0_2px_6px_rgba(0,0,0,0.2)] hover:brightness-105 transition"
        >
          <Download className="h-4 w-4" />
          Télécharger mon CV
        </Link>
      </nav>
    </header>
  );
}
