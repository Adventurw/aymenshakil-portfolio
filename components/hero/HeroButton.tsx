"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export default function HeroButtons() {
  const Arrow = Icons.arrowRight;
  const Download = Icons.download;

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      {/* View Projects */}
      <Button size="lg" asChild className="group">
        <a href="#projects">
          View Projects
          <Arrow className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </Button>

      {/* Download Resume */}
      <Button variant="outline" size="lg" asChild className="group">
        <a href="/Aymen_Shakil_Resume.pdf" download>
          <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
          Resume
        </a>
      </Button>
    </div>
  );
}