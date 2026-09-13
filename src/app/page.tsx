"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import DeveloperTerminal from "@/components/DeveloperTerminal";
import DeveloperStatus from "@/components/DeveloperStatus";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader from "@/components/PageLoader";
import FloatingContact from "@/components/FloatingContact";
import ParticleBackground from "@/components/ParticleBackground";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <DeveloperTerminal />
        <DeveloperStatus />
        <Process />
        <Contact />
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}
