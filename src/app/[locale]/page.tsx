"use client";

import Hero from "@components/Hero";
import About from "@components/About";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import TechOrnaments from "@components/TechOrnaments";
import Header from "@components/Header";

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
