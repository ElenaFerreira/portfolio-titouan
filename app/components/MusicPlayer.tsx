"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";

interface Track {
  id: number;
  title: string;
  artist: string;
  cover: string;
  src: string;
}

const playlist: Track[] = [
  {
    id: 1,
    title: "Sweden",
    artist: "C-418",
    cover: "/images/music/sweden.jpeg",
    src: "/audio/Sweden.mp3",
  },
  {
    id: 2,
    title: "Staff role",
    artist: "Nintendo",
    cover: "/images/music/Staff_Credits.png",
    src: "/audio/Staff Credits.mp3",
  },
  {
    id: 3,
    title: "Lost in Paradise",
    artist: "ALI",
    cover: "/images/music/Lost_in_Paradise.jpg",
    src: "/audio/Lost in Paradise.mp3",
  },
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = playlist[currentTrackIndex];

  // Gestion des events audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      const nextIndex = (currentTrackIndex + 1) % playlist.length;
      setShouldAutoPlay(true);
      setCurrentTrackIndex(nextIndex);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex]);

  // Auto-play après changement de piste
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !shouldAutoPlay) return;

    const handleCanPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Erreur de lecture:", error);
      }
      setShouldAutoPlay(false);
    };

    audio.addEventListener("canplay", handleCanPlay, { once: true });

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
    };
  }, [currentTrackIndex, shouldAutoPlay]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        await audio.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Erreur de lecture:", error);
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setShouldAutoPlay(isPlaying);
    setCurrentTrackIndex(nextIndex);
    setProgress(0);
  };

  const prevTrack = () => {
    const prevIndex = currentTrackIndex === 0 ? playlist.length - 1 : currentTrackIndex - 1;
    setShouldAutoPlay(isPlaying);
    setCurrentTrackIndex(prevIndex);
    setProgress(0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    audio.currentTime = percentage * audio.duration;
  };

  return (
    <div
      className="fixed bottom-6 right-8 z-9999 hidden md:flex min-h-[120px] min-w-[120px] items-center"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Cover vinyle avec rotation */}
      <div className="relative z-10 shrink-0">
        <div
          className="relative h-[110px] w-[110px] overflow-hidden rounded-full animate-spin-slow shadow-lg"
          style={{ animationPlayState: isPlaying ? "running" : "paused" }}
        >
          <Image src={currentTrack.cover} alt={currentTrack.title} fill className="object-cover" />
          {/* Point blanc central */}
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-inner" />
        </div>
      </div>

      {/* Panneau infos et contrôles */}
      <div
        className={`-ml-14 flex h-[110px] flex-col justify-center overflow-hidden rounded-2xl bg-white/95 shadow-lg backdrop-blur-md transition-all duration-300 ${
          isExpanded ? "w-52 pl-16 pr-3 opacity-100" : "w-0 pl-0 pr-0 opacity-0"
        }`}
      >
        {/* Titre + artiste + volume */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-dark">{currentTrack.title}</p>
            <p className="truncate text-xs text-gray">{currentTrack.artist}</p>
          </div>
          <button
            onClick={toggleMute}
            className="shrink-0 rounded-full p-1 transition-colors hover:bg-gray-lighter"
            aria-label={isMuted ? "Activer le son" : "Couper le son"}
          >
            {isMuted ? <VolumeX className="size-4 text-gray" /> : <Volume2 className="size-4 text-gray" />}
          </button>
        </div>

        {/* Barre de progression */}
        <div className="my-2 h-1 w-full cursor-pointer rounded-full bg-gray-lighter" onClick={handleProgressClick}>
          <div className="h-full rounded-full bg-primary transition-all duration-100" style={{ width: `${progress}%` }} />
        </div>

        {/* Contrôles */}
        <div className="flex items-center justify-center gap-2">
          <button onClick={prevTrack} className="rounded-full p-1 transition-colors hover:bg-gray-lighter" aria-label="Piste précédente">
            <SkipBack className="size-4 text-dark" />
          </button>
          <button
            onClick={togglePlay}
            className="rounded-full bg-primary p-2 transition-colors hover:brightness-110"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="size-4 text-white" /> : <Play className="size-4 text-white" />}
          </button>
          <button onClick={nextTrack} className="rounded-full p-1 transition-colors hover:bg-gray-lighter" aria-label="Piste suivante">
            <SkipForward className="size-4 text-dark" />
          </button>
        </div>
      </div>

      {/* Audio element */}
      <audio ref={audioRef} src={currentTrack.src} preload="metadata" />
    </div>
  );
}
