import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import ContactContent from "@/components/contact/ContactContent";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <ContactContent />
      </Container>
    </Section>
  );
}