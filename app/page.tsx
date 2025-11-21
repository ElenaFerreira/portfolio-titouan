import { Navbar } from "./components/Navbar";
import { Hero } from "./components/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}
