"use client";

import Image from "next/image";
import { LayoutTemplate } from "lucide-react";

export function HeroCard4() {
  return (
    <div className="absolute top-110 right-10 -rotate-7">
      {/* Épingle */}
      <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rotate-30">
        <div className="flex size-6 items-center justify-center">
          <Image src="/images/pin.svg" alt="Pin" width={30} height={30} />
        </div>
      </div>

      {/* Carte */}
      <div className="w-60 rounded-2xl bg-white px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        {/* Ligne du haut : icône + numéro */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-light">
            <LayoutTemplate className="h-4 w-4 text-primary" />
          </div>

          <span className="text-lg font-bold text-primary opacity-70">01</span>
        </div>

        {/* Texte */}
        <h3 className="text-sm font-semibold text-dark">Simplicité</h3>
        <p className="mt-1 text-xs font-medium text-gray">On s’occupe de tout, du design à la mise en ligne.</p>
      </div>
    </div>
  );
}
