import { Navbar } from "./components/Navbar";
import { Hero } from "./components/hero/Hero";
import { Project } from "./components/project/Project";
import { Global } from "./components/Global";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Project />
      <Global />
    </main>
  );
}
