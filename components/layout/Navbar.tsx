import Container from "./Container";

export default function Navbar() {
  return (
    <header className="border-b border-border">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">
            Aymen
          </h1>

          <div className="flex gap-6">
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </Container>
    </header>
  );
}