import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import ProjectContent from "@/components/projects/ProjectContent";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <ProjectContent />
      </Container>
    </Section>
  );
}