import { Navbar } from "./components/Navbar";
import { Hero } from "./components/hero/Hero";
import { Project } from "./components/project/Project";
import { Global } from "./components/Global";
import { About } from "./components/About";
import { Jobs } from "./components/Jobs";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Project />
      <Global />
      <About />
      <Jobs />
      <Skills />
    </main>
  );
}
