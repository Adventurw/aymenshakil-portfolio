interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}