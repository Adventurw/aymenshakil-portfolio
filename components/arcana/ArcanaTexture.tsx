"use client";

export default function ArcanaTexture() {
  return (
    <>
      {/* paper */}

      <div
        className="
        absolute
        inset-0
        rounded-[inherit]
        opacity-[0.04]
        bg-[radial-gradient(circle_at_top_left,white,transparent_45%)]
      "
      />

      {/* vignette */}

      <div
        className="
        absolute
        inset-0
        rounded-[inherit]
        shadow-[inset_0_0_120px_rgba(0,0,0,.22)]
      "
      />

      {/* reflection */}

      <div
        className="
        absolute
        -left-20
        top-0
        h-full
        w-24
        rotate-12
        bg-white/5
        blur-xl
      "
      />
    </>
  );
}