import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import AboutContent from "@/components/about/AboutContent";
import Reveal from "../common/Reveal";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <Reveal>
        <AboutContent />
        </Reveal>
      </Container>
    </Section>
  );
}