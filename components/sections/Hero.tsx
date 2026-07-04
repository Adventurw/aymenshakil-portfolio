import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import GridBackground from "@/components/background/GridBackground";
import HeroContent from "@/components/hero/HeroContent";
import HeroImage from "@/components/hero/HeroImage";
import ScrollIndicator from "@/components/hero/ScrollIndicator";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-32"
    >
      <GridBackground />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>

      <ScrollIndicator />
    </Section>
  );
}