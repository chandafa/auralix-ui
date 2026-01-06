"use client";

import { useEffect, useState } from "react";
import { cn } from "../utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
  const [meteors, setMeteors] = useState<Array<{ left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const meteorStyles = new Array(number).fill(null).map(() => ({
      left: Math.floor(Math.random() * 100),
      delay: Math.random() * 0.6 + 0.2,
      duration: Math.floor(Math.random() * 8 + 2),
    }));
    setMeteors(meteorStyles);
  }, [number]);

  return (
    <>
      {meteors.map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
          style={{
            top: "-5px",
            left: `${style.left}%`,
            animationDelay: `${style.delay}s`,
            animationDuration: `${style.duration}s`,
          }}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};
