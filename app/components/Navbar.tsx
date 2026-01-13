// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

// Filtre SVG pour l'effet liquid glass (version complète)
function GlassDistortionFilter() {
  return (
    <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}>
      <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" seed="5" result="turbulence" />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
        <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
        <feDisplacementMap in="SourceGraphic" in2="softMap" scale="60" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <GlassDistortionFilter />
      <header className="fixed top-0 left-0 w-full z-60 flex justify-center px-4">
        {/* Navbar avec effet Liquid Glass */}
        <nav className="liquid-glass-wrapper mt-4 h-16 w-full max-w-4xl rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.15),0_0_24px_rgba(0,0,0,0.08)]">
          {/* Layers de l'effet liquid glass */}
          <div className="liquid-glass-effect rounded-full" />
          <div className="liquid-glass-tint rounded-full" />
          <div className="liquid-glass-shine" />

          {/* Contenu de la navbar */}
          <div className="liquid-glass-content flex h-full w-full items-center justify-between px-3">
            {/* Bloc gauche : avatar + nom */}
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <a href="#">
                  <Image src="/images/profile.png" alt="Titouan François" fill className="object-cover" />
                </a>
              </div>

              <a href="#" className="font-bold text-dark">
                Titouan François
              </a>
            </div>

            {/* Liens centraux - Desktop */}
            <ul className="hidden md:flex items-center gap-5 text-dark">
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
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
          </div>
        </nav>

        {/* Menu Mobile avec effet Liquid Glass */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-24 left-4 right-4 liquid-glass-wrapper rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.15),0_0_24px_rgba(0,0,0,0.08)] animate-fade-in-up">
            <div className="liquid-glass-effect rounded-2xl" />
            <div className="liquid-glass-tint rounded-2xl" />
            <div className="liquid-glass-shine rounded-2xl" />

            <div className="liquid-glass-content p-6 w-full">
              <ul className="flex flex-col gap-4 text-dark mb-6">
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
          </div>
        )}
      </header>
    </>
  );
}
