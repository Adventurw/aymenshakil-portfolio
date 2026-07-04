"use client";

import JourneyHeader from "./JourneyHeader";
import JourneyTimeline from "./JourneyTimeline";

export default function Journey() {
  return (
    <section
      id="journey"
      className="container py-32"
    >
      <JourneyHeader />

      <JourneyTimeline />
    </section>
  );
}