"use client";

import Reveal from "@/components/common/Reveal";

import BlogHeader from "./blogHeader";
import BlogGrid from "./blogGrid";

export default function BlogContent() {
  return (
    <>
      <Reveal>
        <BlogHeader />
      </Reveal>

      <Reveal delay={0.2}>
        <BlogGrid />
      </Reveal>
    </>
  );
}