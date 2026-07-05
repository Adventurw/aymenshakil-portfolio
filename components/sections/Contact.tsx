import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import ContactContent from "@/components/contact/ContactContent";
import Reveal from "../common/Reveal";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <ContactContent />
        </Reveal>
      </Container>
    </Section>
  );
}