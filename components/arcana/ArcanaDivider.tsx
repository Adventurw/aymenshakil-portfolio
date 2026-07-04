"use client";

export default function ArcanaDivider() {
  return (
    <div className="my-8 flex items-center gap-5">

      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      <div
        className="
          h-2
          w-2
          rotate-45
          border
          border-primary/40
        "
      />

      <div
        className="
          h-5
          w-5
          rounded-full
          border
          border-primary/30
          flex
          items-center
          justify-center
        "
      >
        <div className="h-1.5 w-1.5 rounded-full bg-primary/45" />
      </div>

      <div
        className="
          h-2
          w-2
          rotate-45
          border
          border-primary/40
        "
      />

      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

    </div>
  );
}