import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Project";
import Contact from "@/components/sections/Contact";
import Journey from "@/components/journey/Journey";
import Experience from "@/components/experience/Experience";
import Reveal from "@/components/common/Reveal";

export default function Home() {
  return (
    <>
    <Reveal x={-40}>
      <Hero />
    </Reveal>
    <Reveal x={40} delay={0.15}>
      <About />
    </Reveal>
    <Reveal>
      <Skills />
    </Reveal>
    <Reveal>
      <Projects />
    </Reveal>
    <Reveal>
      <Journey />
    </Reveal>
    <Reveal>
      <Experience/>
    </Reveal>
    <Reveal>                
      <Contact />
    </Reveal>
    </>
  );
}