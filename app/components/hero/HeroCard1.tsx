"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const tasks = [
  { label: "Terminer le wireframe pour la V.1", state: "default" as const },
  { label: "Revoir le travail pour le client", state: "done" as const },
  { label: "Assigner les tâches aux membres", state: "default" as const },
  { label: "Assister à l’appel du lancement", state: "done" as const },
];

export function HeroCard1() {
  return (
    <div className="absolute top-16 left-16 -rotate-8">
      {/* Épingle */}
      <div className="absolute -top-3 right-1/3 z-10 -translate-x-1/2">
        <div className="flex h-6 w-6 items-center justify-center">
          <Image src="/images/pin.png" alt="Pin" width={30} height={30} />
        </div>
      </div>

      {/* Carte */}
      <div className="w-[260px] rounded-2xl border border-gray-light bg-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="flex items-center p-4 gap-2 bg-gray-lighter">
          <Star className="h-4 w-4" color="#38A1F7" fill="#38A1F7" />
          <h3 className="text-sm font-semibold text-dark">Tâches du jour</h3>
        </div>

        {/* Liste des tâches */}
        <ul>
          {tasks.map((task) => (
            <li key={task.label} className="flex items-center p-3 gap-2 border-b border-gray-light last:border-0">
              <RadioBullet state={task.state} />
              <span className={task.state === "done" ? "text-xs font-semibold text-gray line-through" : "text-xs font-medium text-dark"}>
                {task.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type BulletState = "default" | "done";

function RadioBullet({ state }: { state: BulletState }) {
  if (state === "done") {
    return (
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border-[1.5px] border-primary">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
      </span>
    );
  }
  return <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-light bg-transparent" />;
}
