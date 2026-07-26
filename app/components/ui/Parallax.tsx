"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/* ─── Parallax Wrapper for content elements ─── */

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // Negative = slower, Positive = faster. Range: -0.3 to 0.3
  className?: string;
}

export function Parallax({ children, speed = -0.1, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 800, -speed * 800]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Decorative floating shapes for section backgrounds ─── */

interface FloatingShape {
  size: number;
  x: string;
  y: string;
  speed: number;
  color: string;
  blur: number;
  opacity: number;
}

interface ParallaxBackgroundProps {
  variant?: "default" | "warm" | "cool";
  className?: string;
}

const shapePresets: Record<string, FloatingShape[]> = {
  default: [
    { size: 300, x: "10%", y: "5%", speed: -0.15, color: "rgba(56, 161, 247, 0.08)", blur: 80, opacity: 1 },
    { size: 250, x: "75%", y: "50%", speed: -0.08, color: "rgba(56, 161, 247, 0.06)", blur: 70, opacity: 1 },
    { size: 200, x: "85%", y: "10%", speed: -0.2, color: "rgba(56, 161, 247, 0.05)", blur: 60, opacity: 1 },
    { size: 180, x: "20%", y: "75%", speed: -0.12, color: "rgba(56, 161, 247, 0.07)", blur: 50, opacity: 1 },
    { size: 220, x: "50%", y: "30%", speed: -0.06, color: "rgba(56, 161, 247, 0.04)", blur: 90, opacity: 1 },
  ],
  warm: [
    { size: 350, x: "5%", y: "10%", speed: -0.12, color: "rgba(56, 161, 247, 0.07)", blur: 90, opacity: 1 },
    { size: 200, x: "80%", y: "60%", speed: -0.18, color: "rgba(0, 88, 159, 0.06)", blur: 70, opacity: 1 },
    { size: 150, x: "60%", y: "5%", speed: -0.1, color: "rgba(56, 161, 247, 0.08)", blur: 60, opacity: 1 },
    { size: 280, x: "30%", y: "45%", speed: -0.07, color: "rgba(225, 241, 254, 0.2)", blur: 80, opacity: 1 },
  ],
  cool: [
    { size: 300, x: "15%", y: "15%", speed: -0.14, color: "rgba(56, 161, 247, 0.09)", blur: 80, opacity: 1 },
    { size: 180, x: "70%", y: "40%", speed: -0.2, color: "rgba(0, 88, 159, 0.07)", blur: 65, opacity: 1 },
    { size: 220, x: "90%", y: "5%", speed: -0.09, color: "rgba(225, 241, 254, 0.18)", blur: 75, opacity: 1 },
    { size: 150, x: "40%", y: "70%", speed: -0.16, color: "rgba(56, 161, 247, 0.06)", blur: 55, opacity: 1 },
    { size: 260, x: "55%", y: "25%", speed: -0.05, color: "rgba(56, 161, 247, 0.04)", blur: 90, opacity: 1 },
  ],
};

export function ParallaxBackground({ variant = "default", className }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shapes = shapePresets[variant];
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`} aria-hidden="true">
      {shapes.map((shape, i) => (
        <FloatingBlob key={i} shape={shape} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function FloatingBlob({ shape, scrollYProgress }: { shape: FloatingShape; scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], [shape.speed * 2000, -shape.speed * 2000]);

  return (
    <motion.div
      style={{
        y,
        position: "absolute",
        left: shape.x,
        top: shape.y,
        width: shape.size,
        height: shape.size,
        borderRadius: "50%",
        background: shape.color,
        filter: `blur(${shape.blur}px)`,
        opacity: shape.opacity,
      }}
    />
  );
}
