import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold transition-transform duration-300 group-hover:rotate-6">
        A
      </div>

      <div className="hidden sm:block">
        <p className="font-semibold leading-none">
          Aymen Shakil
        </p>

        <p className="text-xs text-muted-foreground">
          Computer Scientist
        </p>
      </div>
    </Link>
  );
}