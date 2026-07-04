"use client";

export default function JourneyLine() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-0
        hidden
        h-full
        w-px
        -translate-x-1/2
        lg:block
      "
    >
      {/* gold gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#C7A14A]/70
          to-transparent
        "
      />

      {/* glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-[6px]
          -translate-x-1/2
          rounded-full
          bg-[#C7A14A]/10
          blur-md
        "
      />
    </div>
  );
}