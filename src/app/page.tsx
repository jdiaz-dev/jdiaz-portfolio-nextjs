import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechOrnamentsLeft from "@/components/TechOrnamentsLeft";
import TechOrnamentsRight from "@/components/TechOrnamentsRight";

export default function Home() {
  return (
    <>
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
