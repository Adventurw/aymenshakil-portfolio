"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 1500,
}: Props) {
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = 0;

        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;

          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        observer.disconnect();
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [duration, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}