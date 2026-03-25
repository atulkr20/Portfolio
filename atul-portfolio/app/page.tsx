import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import TechMarquee from "@/components/TechMarquee";
import Works from "@/components/Works";
import Stats from "@/components/Stats";
import GitHubGraph from "@/components/GitHubGraph";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen py-6 md:py-10 flex flex-col gap-4"
      style={{ background: "#d6d9c1" }}
    >
      {/* SECTION 1: Navbar */}
      <Navbar />

      {/* SECTION 2: Hero */}
      <Hero />

      {/* SECTION 3: Skills */}
      <Skills />

      {/* Infinite Scrolling Tech Ticker */}
      <TechMarquee />

      {/* SECTION 4: Works */}
      <Works />

      {/* Stats Row */}
      <Stats />

      {/* GitHub Activity Graph */}
      <GitHubGraph />

      {/* SECTION 6: Contact */}
      <Contact />

      {/* SECTION 7: Footer */}
      <Footer />
    </main>
  );
}
