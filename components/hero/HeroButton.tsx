"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { portfolio } from "@/constants/portfolio";

export default function HeroButtons() {
  const Arrow = Icons.arrowRight;
  const Download = Icons.download;

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button size="lg" asChild className="group">
        <Link href="#projects">
          View Projects
          <Arrow className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>

      <Button variant="outline" size="lg" asChild className="group">
        <Link href={portfolio.personal.resume}>
          <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
          Resume
        </Link>
      </Button>
    </div>
  );
}