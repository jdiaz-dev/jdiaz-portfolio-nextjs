"use client";

import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import TechOrnamentsLeft from "@/src/components/TechOrnamentsLeft";
import TechOrnamentsRight from "@/src/components/TechOrnamentsRight";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <TechOrnamentsLeft />
      <TechOrnamentsRight />
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
