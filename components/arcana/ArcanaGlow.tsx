"use client";

export default function ArcanaGlow() {
  return (
    <>
      <div
        className="
        absolute
        inset-0
        rounded-[inherit]
        bg-gradient-to-br
        from-[#C7A14A]/6
        via-transparent
        to-transparent
      "
      />

      <div
        className="
        absolute
        top-0
        left-1/2
        h-52
        w-72
        -translate-x-1/2
        rounded-full
        bg-[#C7A14A]/8
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        h-52
        w-52
        rounded-full
        bg-blue-300/5
        blur-[100px]
      "
      />
    </>
  );
}