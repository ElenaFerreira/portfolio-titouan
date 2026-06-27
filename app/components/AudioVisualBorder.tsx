"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { createPortal } from "react-dom";

interface AudioVisualBorderProps {
  audioElement: HTMLAudioElement | null;
  isPlaying: boolean;
}

export function AudioVisualBorder({ audioElement, isPlaying }: AudioVisualBorderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number>(0);
  const [isConnected, setIsConnected] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure portal only renders client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Connect audio element to Web Audio API analyser
  useEffect(() => {
    if (!audioElement || isConnected) return;

    try {
      const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.8;

      const source = audioContext.createMediaElementSource(audioElement);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      sourceRef.current = source;
      setIsConnected(true);
    } catch (error) {
      console.error("AudioVisualBorder: Failed to connect audio context", error);
    }

    return () => {
      // Don't disconnect on cleanup — the MediaElementSource can only be created once per element
    };
  }, [audioElement, isConnected]);

  // Resume audio context on play (browsers require user interaction)
  useEffect(() => {
    if (isPlaying && audioContextRef.current?.state === "suspended") {
      audioContextRef.current.resume();
    }
  }, [isPlaying]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    if (!canvas || !analyser) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to viewport
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    const w = window.innerWidth;
    const h = window.innerHeight;

    // Get frequency data
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    // Calculate average amplitude (0-1)
    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
      sum += dataArray[i];
    }
    const average = sum / bufferLength / 255;

    // Calculate bass amplitude for extra punch (0-1)
    let bassSum = 0;
    const bassRange = Math.floor(bufferLength * 0.15);
    for (let i = 0; i < bassRange; i++) {
      bassSum += dataArray[i];
    }
    const bassAverage = bassSum / bassRange / 255;

    // Blend bass and overall for intensity
    const intensity = Math.min(1, average * 0.5 + bassAverage * 0.7);

    // Clear canvas
    ctx.clearRect(0, 0, w, h);

    if (intensity < 0.01) {
      animationFrameRef.current = requestAnimationFrame(draw);
      return;
    }

    // Time-based hue rotation for the rainbow movement
    const time = Date.now() * 0.001;
    const hueShift = (time * 30) % 360;

    // Border thickness — tighter to the edge
    const maxBorderWidth = 25;
    const borderWidth = maxBorderWidth * (0.4 + intensity * 0.6);
    const glowOpacity = 0.2 + intensity * 0.35;

    // Create rainbow colors with hue shift
    const colors = [
      `hsla(${(hueShift + 0) % 360}, 100%, 65%, ${glowOpacity})`,
      `hsla(${(hueShift + 45) % 360}, 100%, 65%, ${glowOpacity})`,
      `hsla(${(hueShift + 90) % 360}, 100%, 65%, ${glowOpacity})`,
      `hsla(${(hueShift + 135) % 360}, 100%, 65%, ${glowOpacity})`,
      `hsla(${(hueShift + 180) % 360}, 100%, 65%, ${glowOpacity})`,
      `hsla(${(hueShift + 225) % 360}, 100%, 65%, ${glowOpacity})`,
      `hsla(${(hueShift + 270) % 360}, 100%, 65%, ${glowOpacity})`,
      `hsla(${(hueShift + 315) % 360}, 100%, 65%, ${glowOpacity})`,
      `hsla(${(hueShift + 360) % 360}, 100%, 65%, ${glowOpacity})`,
    ];

    // Tighter blur for a sharper edge glow
    ctx.filter = `blur(${8 + intensity * 6}px)`;

    // --- TOP EDGE ---
    const topGrad = ctx.createLinearGradient(0, 0, w, 0);
    colors.forEach((color, i) => {
      topGrad.addColorStop(i / (colors.length - 1), color);
    });
    ctx.fillStyle = topGrad;
    ctx.fillRect(-20, -20, w + 40, borderWidth + 20);

    // --- BOTTOM EDGE ---
    const bottomGrad = ctx.createLinearGradient(w, h, 0, h);
    colors.forEach((color, i) => {
      bottomGrad.addColorStop(i / (colors.length - 1), color);
    });
    ctx.fillStyle = bottomGrad;
    ctx.fillRect(-20, h - borderWidth, w + 40, borderWidth + 20);

    // --- LEFT EDGE ---
    const leftGrad = ctx.createLinearGradient(0, h, 0, 0);
    colors.forEach((color, i) => {
      leftGrad.addColorStop(i / (colors.length - 1), color);
    });
    ctx.fillStyle = leftGrad;
    ctx.fillRect(-20, -20, borderWidth + 20, h + 40);

    // --- RIGHT EDGE ---
    const rightGrad = ctx.createLinearGradient(w, 0, w, h);
    colors.forEach((color, i) => {
      rightGrad.addColorStop(i / (colors.length - 1), color);
    });
    ctx.fillStyle = rightGrad;
    ctx.fillRect(w - borderWidth, -20, borderWidth + 20, h + 40);

    ctx.filter = "none";

    animationFrameRef.current = requestAnimationFrame(draw);
  }, []);

  // Animation loop
  useEffect(() => {
    if (isPlaying && isConnected) {
      animationFrameRef.current = requestAnimationFrame(draw);
    } else {
      // Fade out: clear canvas when not playing
      cancelAnimationFrame(animationFrameRef.current);
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    }

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, isConnected, draw]);

  // Render via portal directly into document.body to avoid any parent
  // transform/will-change that would break position:fixed
  if (!mounted) return null;

  return createPortal(
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />,
    document.body
  );
}
