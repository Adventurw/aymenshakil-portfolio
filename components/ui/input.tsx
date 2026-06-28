import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-xl border bg-background px-4 text-sm transition-colors",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-primary",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };