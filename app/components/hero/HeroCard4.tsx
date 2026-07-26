"use client";

import Image from "next/image";
import { LayoutTemplate } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroCard4() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x: 80, rotate: -14 }}
      animate={{ opacity: 1, x: 0, rotate: -7 }}
      transition={{
        duration: 0.8,
        delay: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="absolute top-135 right-10 z-40 hidden lg:block"
    >
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

          <span className="text-2xl font-extrabold text-primary opacity-25">01</span>
        </div>

        {/* Texte */}
        <h3 className="text-sm font-semibold text-dark">Simplicité</h3>
        <p className="mt-1 text-xs font-medium text-gray">On s'occupe de tout, du design à la mise en ligne.</p>
      </div>
    </motion.div>
  );
}
