"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Volume1 } from "lucide-react";
import { AudioVisualBorder } from "./AudioVisualBorder";

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
    title: "Comedy",
    artist: "Gen Hoshino",
    cover: "/images/music/Spy_x_family.jpg",
    src: "/audio/SpyXFamily.mp3",
  },
  {
    id: 4,
    title: "Animal Crossing",
    artist: "Nintendo",
    cover: "/images/music/animal_crossing.jpg",
    src: "/audio/animal_crossing.mp3",
  },
  {
    id: 5,
    title: "Shiveria Town",
    artist: "Nintendo",
    cover: "/images/music/shiveria_town.jpg",
    src: "/audio/shiveria_town.mp3",
  },
  {
    id: 6,
    title: "Azalea Town",
    artist: "Nintendo",
    cover: "/images/music/azalea_town.jpg",
    src: "/audio/azalea_town.mp3",
  },
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [previousVolume, setPreviousVolume] = useState(0.7);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
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

  // Synchroniser le volume avec l'audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        // Réactiver le son : restaurer le volume précédent
        setVolume(previousVolume);
        setIsMuted(false);
      } else {
        // Couper le son : sauvegarder le volume actuel
        setPreviousVolume(volume);
        setIsMuted(true);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setPreviousVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX className="size-4 text-gray" />;
    if (volume < 0.5) return <Volume1 className="size-4 text-gray" />;
    return <Volume2 className="size-4 text-gray" />;
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
    <>
    {/* Rainbow glow border overlay */}
    <AudioVisualBorder audioElement={audioRef.current} isPlaying={isPlaying} />
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
        className={`-ml-14 flex h-[110px] flex-col justify-center rounded-2xl bg-white/95 shadow-lg backdrop-blur-md transition-all duration-300 ${
          isExpanded ? "w-52 pl-16 pr-3 opacity-100" : "w-0 pl-0 pr-0 opacity-0 overflow-hidden"
        }`}
      >
        {/* Titre + artiste + volume */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-dark">{currentTrack.title}</p>
            <p className="truncate text-xs text-gray">{currentTrack.artist}</p>
          </div>
          {/* Bouton volume avec slider au hover */}
          <div className="relative shrink-0" onMouseEnter={() => setShowVolumeSlider(true)} onMouseLeave={() => setShowVolumeSlider(false)}>
            <button
              onClick={toggleMute}
              className="rounded-full p-1 transition-colors hover:bg-gray-lighter"
              aria-label={isMuted ? "Activer le son" : "Couper le son"}
            >
              {getVolumeIcon()}
            </button>
            {/* Slider de volume */}
            <div
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-3 bg-white/95 rounded-xl shadow-lg backdrop-blur-md transition-all duration-200 z-50 ${
                showVolumeSlider ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1"
              }`}
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="volume-slider h-20 w-1.5 appearance-none rounded-full bg-gray-lighter cursor-pointer"
                style={{
                  writingMode: "vertical-lr",
                  direction: "rtl",
                }}
                aria-label="Volume"
              />
            </div>
          </div>
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
      <audio ref={audioRef} src={currentTrack.src} preload="metadata" crossOrigin="anonymous" />
    </div>
    </>
  );
}
