import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

import BlogContent from "./blogContent";

export default function Blog() {
  return (
    <Section id="blog">
      <Container>
        <BlogContent />
      </Container>
    </Section>
  );
}