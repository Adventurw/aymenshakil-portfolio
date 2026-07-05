import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import ProjectContent from "@/components/projects/ProjectContent";
import Reveal from "../common/Reveal";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <ProjectContent />
        </Reveal>
      </Container>
    </Section>
  );
}