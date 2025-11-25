import Image from "next/image";

import { HeroCard1 } from "./HeroCard1";
import { HeroCard2 } from "./HeroCard2";
import { HeroCard3 } from "./HeroCard3";
import { HeroCard4 } from "./HeroCard4";
import { HeroCenter } from "./HeroCenter";

export function Hero() {
  return (
    <section className="relative flex h-screen min-w-full items-center justify-center overflow-hidden pt-20">
      <Image src="/images/background.svg" alt="" fill priority className="pointer-events-none -z-10 object-contain md:object-cover" />

      <HeroCard1 />
      <HeroCard2 />
      <HeroCard3 />
      <HeroCard4 />
      <HeroCenter />
    </section>
  );
}
