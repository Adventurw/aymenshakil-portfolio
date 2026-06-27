import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aymen Shakil.
          All rights reserved.
        </p>
      </Container>
    </footer>
  );
}