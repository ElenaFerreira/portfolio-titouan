import { HeroCard1 } from "./HeroCard1";
import { HeroCard2 } from "./HeroCard2";
import { HeroCard3 } from "./HeroCard3";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-80px)] min-w-full mt-20 flex items-center justify-center">
      <HeroCard1 />
      <HeroCard2 />
      <HeroCard3 />
    </section>
  );
}
