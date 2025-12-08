// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-60 flex justify-center px-4">
      <nav className="mt-4 flex h-16 w-full max-w-4xl items-center justify-between rounded-full bg-white/90 px-3 border border-border backdrop-blur-xs">
        {/* Bloc gauche : avatar + nom */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <a href="#">
              <Image src="/images/profile.png" alt="Titouan François" fill className="object-cover" />
            </a>
          </div>

          <a href="#" className="font-bold">
            Titouan François
          </a>
        </div>

        {/* Liens centraux - Desktop */}
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

        {/* Bouton CV - Desktop */}
        <Link
          href="../images/cv_titouan_françois.pdf"
          download
          className="hidden md:flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-white text-sm font-medium shadow-[0_2px_6px_rgba(0,0,0,0.2)] hover:brightness-105 transition"
        >
          <Download className="h-4 w-4" />
          Télécharger mon CV
        </Link>

        {/* Bouton Hamburger - Mobile */}
        <button onClick={toggleMenu} className="md:hidden flex items-center justify-center h-10 w-10 rounded-full text-dark" aria-label="Menu">
          {isMenuOpen ? <X className="size-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-24 left-4 right-4 bg-white rounded-2xl border border-border shadow-lg p-6 animate-fade-in-up">
          <ul className="flex flex-col gap-4 text-black mb-6">
            <li>
              <a href="#projects" onClick={closeMenu} className="block py-2 font-medium hover:text-primary transition">
                Projets
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu} className="block py-2 font-medium hover:text-primary transition">
                À propos
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu} className="block py-2 font-medium hover:text-primary transition">
                Compétences
              </a>
            </li>
          </ul>

          <Link
            href="../images/cv_titouan_françois.pdf"
            download
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-5 py-3 text-white text-sm font-medium shadow-[0_2px_6px_rgba(0,0,0,0.2)] hover:brightness-105 transition"
          >
            <Download className="h-4 w-4" />
            Télécharger mon CV
          </Link>
        </div>
      )}
    </header>
  );
}
