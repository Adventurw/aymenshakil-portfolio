"use client";

export default function EngineeringGrid() {
  return (
    <>
      {/* Main Grid */}
      <div
        className="
          engineering-grid
          absolute
          inset-0
        "
      />

      {/* Radial Fade */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,.18)_100%)]
        "
      />
    </>
  );
}