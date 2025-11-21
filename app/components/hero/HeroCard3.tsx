"use client";

import Image from "next/image";
import { Paperclip } from "lucide-react";

export function HeroCard3() {
  return (
    <div className="absolute top-10 right-0 rotate-8">
      {/* Trombones */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-8 z-10">
        <div className="h-6 w-6 flex items-center justify-center -rotate-25">
          <Paperclip className="size-8 text-primary" />
        </div>
        <div className="h-6 w-6 flex items-center justify-center rotate-6 scale-x-[-1]">
          <Paperclip className="size-8 text-primary" />
        </div>
      </div>

      {/* Carte */}
      <div className="flex flex-col size-60 rounded-2xl p-4 bg-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        {/* Graphique */}
        <div className="flex-1 relative w-full mb-2">
          <Image src="/images/chart.svg" alt="Chart" fill className="object-cover" />
        </div>

        {/* Texte */}
        <div>
          <h3 className="text-sm font-semibold text-dark">Maintenance et évolutivité</h3>

          <p className="mt-1 text-xs font-medium text-gray">
            On ne vous laisse pas seul
            <br />
            après la livraison.
          </p>
        </div>
      </div>
    </div>
  );
}
