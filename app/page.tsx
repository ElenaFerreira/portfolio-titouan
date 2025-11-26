import { Navbar } from "./components/Navbar";
import { Hero } from "./components/hero/Hero";
import { Project } from "./components/project/Project";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Project />
    </main>
  );
}
