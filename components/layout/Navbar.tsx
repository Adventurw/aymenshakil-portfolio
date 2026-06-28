import Link from "next/link";

import Container from "./Container";
import Logo from "@/components/shared/Logo";
import { navigation } from "@/constants/navigation";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          <Logo />

          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
              <ThemeToggle />
          </div>

        </nav>
      </Container>
    </header>
  );
}