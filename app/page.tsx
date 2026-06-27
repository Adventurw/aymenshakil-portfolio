import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Section from "../components/layout/Sections";
import Container from "../components/layout/Container";

export default function Home() {
  return (
    <>
      <Navbar />

      <Section>
        <Container>
          <h1 className="text-5xl font-bold">
            Portfolio
          </h1>

          <p className="mt-4 text-muted-foreground">
            Building modern web experiences.
          </p>
        </Container>
      </Section>

      <Footer />
    </>
  );
}