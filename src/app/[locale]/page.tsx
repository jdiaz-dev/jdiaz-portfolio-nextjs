"use client";

import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Header from "../../components/Header";
import TechOrnaments from "@/src/components/TechOrnaments";

export default function Home() {
  return (
    <>
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
