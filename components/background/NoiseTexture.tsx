"use client";

export default function NoiseTexture() {
  return (
    <div
      className="
        absolute
        inset-0
        opacity-[0.025]
        mix-blend-soft-light
      "
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, white 0.7px, transparent 0.8px),
          radial-gradient(circle at 80% 60%, white 0.6px, transparent 0.7px),
          radial-gradient(circle at 40% 80%, white 0.5px, transparent 0.6px)
        `,
        backgroundSize: "18px 18px",
      }}
    />
  );
}