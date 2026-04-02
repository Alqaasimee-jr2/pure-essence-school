"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = value / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl lg:text-6xl font-headline font-bold shimmer-text">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm font-semibold text-[#5a413d] mt-2 uppercase tracking-widest">{label}</div>
    </div>
  );
}
