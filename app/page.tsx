import { Navbar } from "./components/Navbar";
import { Hero } from "./components/hero/Hero";
import { Project } from "./components/project/Project";
import { Global } from "./components/Global";
import { About } from "./components/about/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Project />
      <Global />
      <About />
    </main>
  );
}
