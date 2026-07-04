"use client";

interface Props {
  className?: string;
}

export default function ArcanaCorner({
  className = "",
}: Props) {
  return (
    <div
      className={`
      absolute
      h-14
      w-14
      ${className}
    `}
    >
      {/* L shape */}

      <div className="absolute left-0 top-0 h-full w-px bg-primary/25" />

      <div className="absolute left-0 top-0 h-px w-full bg-primary/25" />

      {/* ornament */}

      <div
        className="
        absolute
        left-0
        top-0
        h-3
        w-3
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-primary/30
      "
      />

      <div
        className="
        absolute
        left-0
        top-0
        h-1.5
        w-1.5
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-primary/40
      "
      />
    </div>
  );
}