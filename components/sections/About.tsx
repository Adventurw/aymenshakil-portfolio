import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import AboutContent from "@/about/AboutContent";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <AboutContent />
      </Container>
    </Section>
  );
}