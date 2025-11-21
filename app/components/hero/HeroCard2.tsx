"use client";

import { Paperclip } from "lucide-react";

const progresses = [
  { label: "Mathématiques", value: 75 },
  { label: "Physique", value: 41 },
];

export function HeroCard2() {
  return (
    <div className="absolute top-100 left-10 rotate-3">
      {/* Trombone */}
      <div className="absolute -top-3 right-10 z-10">
        <div className="flex h-6 w-6 items-center justify-center">
          <Paperclip className="size-8 text-primary rotate-12" />
        </div>
      </div>

      {/* Carte */}
      <div className="w-[260px] rounded-2xl border border-gray-light bg-white px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        {/* Titre */}
        <h3 className="mb-3 text-sm font-semibold text-primary">Progression journalière</h3>

        {/* Lignes de progression */}
        <div className="space-y-3">
          {progresses.map((item, index) => (
            <div className="flex items-center gap-3">
              <p className="text-xs font-medium text-dark whitespace-nowrap">{item.label}</p>

              <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-gray-lighter">
                <div className="h-full rounded-full bg-primary" style={{ width: `${item.value}%` }} />
              </div>

              <span className="w-fit text-right text-xs font-semibold text-dark">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
