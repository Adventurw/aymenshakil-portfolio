"use client";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="container py-32"
    >
      <ExperienceHeader />

      <ExperienceTimeline />
    </section>
  );
}