"use client";

import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Projects from "@/src/components/Projects";
import TechOrnaments from "@/src/components/TechOrnaments";
import VideoBackground from "@/src/components/VideoBackground";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <Header />

      <TechOrnaments />
      <div className="content">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
