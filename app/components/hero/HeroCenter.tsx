"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";
import { motion, useReducedMotion } from "framer-motion";

const tools = [
  { name: "Adobe Illustrator", src: "/images/tools/Adobe_Illustrator.svg" },
  { name: "Adobe Photoshop", src: "/images/tools/Adobe_Photoshop.svg" },
  { name: "Adobe Premiere Pro", src: "/images/tools/Adobe_Premiere_Pro.svg" },
  { name: "Canva", src: "/images/tools/canva.svg" },
  { name: "Figma", src: "/images/tools/figma.svg" },
  { name: "Monday", src: "/images/tools/monday.svg" },
  { name: "Notion", src: "/images/tools/Notion.svg" },
  { name: "ChatGPT", src: "/images/tools/openai.svg" },
  { name: "Slack", src: "/images/tools/slack.svg" },
  { name: "VS Code", src: "/images/tools/VScode.svg" },
  { name: "Wordpress", src: "/images/tools/wordpress.svg" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

export function HeroCenter() {
  const shouldReduceMotion = useReducedMotion();

  const transition = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.6,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  });

  return (
    <div className="z-50 flex flex-col items-center gap-6 pt-15 text-center w-[calc(100vw-2rem)] md:w-auto">
      {/* Logo */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0, type: "spring", stiffness: 200, damping: 15 }}
        className="flex size-16 items-center justify-center rounded-xl bg-primary"
      >
        <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={transition(0.2)}
        className="flex items-center gap-4 rounded-full border border-border bg-white p-2"
      >
        {/* Avatars + texte */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <Avatar src="/images/coworkers/tristan-habert.jpeg" alt="Coworker 1" />
            <Avatar src="/images/coworkers/noemie-saintemarie.jpg" alt="Coworker 2" />
            <Avatar src="/images/coworkers/alison-rico.jpg" alt="Coworker 3" />
          </div>
          <p className="text-xs font-semibold text-gray-dark">Ils me font confiance</p>
        </div>

        {/* Me contacter */}
        <a
          href="#contact"
          className="flex cursor-pointer items-center gap-1 rounded-full bg-blue-light px-4 py-1.5 text-xs font-semibold text-primary shadow-md"
        >
          Me contacter
          <ArrowRight className="size-3.5" />
        </a>
      </motion.div>

      {/* Titre principal */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={transition(0.4)}
        className="space-y-1"
      >
        <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          <span className="block">
            D'une idée abstraite <br /> à une
            <span className="bg-linear-to-r from-primary to-blue-dark bg-clip-text font-extrabold text-transparent"> interface concrète</span>
          </span>
        </h1>
      </motion.div>

      {/* Texte descriptif */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={transition(0.6)}
        className="max-w-2xl text-sm font-medium text-gray md:text-base"
      >
        Étudiant en UI/UX Design, je crée des interfaces simples, efficaces et centrées sur l'humain. Un seul objectif : rendre chaque interaction
        agréable à travers des designs modernes et intuitifs.
      </motion.p>

      {/* CTA principal */}
      <motion.a
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        transition={transition(0.8)}
        href="#projects"
        className="cursor-pointer rounded-xl bg-primary px-8 py-3 text-xl text-white transition hover:brightness-110 animation-pulser-discover"
      >
        Découvrir
      </motion.a>

      {/* Slider de logos */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={transition(1.0)}
        className="mt-6 w-full max-w-140 mx-auto"
      >
        <p className="mb-6 text-sm font-semibold text-dark">Mes logiciels les plus utilisés</p>

        <div className="relative h-14 overflow-hidden">
          <Marquee
            speed={60}
            gradient={false}
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            {tools.map((tool, i) => (
              <div key={i} className="mx-6 md:mx-10 flex items-center justify-center">
                <Image src={tool.src} alt={tool.name} width={38} height={38} className="object-contain shrink-0" />
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>
    </div>
  );
}

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative size-8 overflow-hidden rounded-full border-2 border-white">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
