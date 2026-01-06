"use client";

import React, { useRef, useState } from "react";
import { cn } from "../utils";

export interface DockProps {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

export function Dock({
  className,
  direction = "bottom",
  children,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
}: DockProps) {
  const dockRef = useRef<HTMLDivElement>(null);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          magnification,
          distance,
        } as any);
      }
      return child;
    });
  };

  return (
    <div
      ref={dockRef}
      className={cn(
        "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md",
        className,
      )}
    >
      {renderChildren()}
    </div>
  );
}

export interface DockIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  magnification?: number;
  distance?: number;
  children?: React.ReactNode;
}

export function DockIcon({
  size = 40,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  className,
  children,
  ...props
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Use a simple event listener approach for cleaner performance in this context without framer-motion
  // Ideally, useMouseMove or similar hook would be better, but we'll infer it from parent or adding listener here.
  // Actually, for a smoother Dock without framer-motion, we can use CSS transition for simpler hover, or RequestAnimationFrame for physics.
  // Given the constraints and desire for "coolness", let's try a simple mousemove on the icon itself? No, it needs to be relative to the Dock.
  
  // Let's attach listener to the window or simpler, use CSS hover for now to ensure reliability without heavy math library, 
  // OR implement a lightweight distance calculator.
  
  // Lightweight implementation:
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const dist = Math.abs(e.clientX - centerX);
      
      // Calculate scale based on distance
      if (dist < distance) {
        // Linear interpolation or gaussian
        const val = 1 + (magnification / size - 1) * Math.cos((dist / distance) * Math.PI / 2);
        setScale(val);
      } else {
        setScale(1);
      }
    };

    const handleMouseLeave = () => {
      setScale(1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    // Optimization: Only listen when dock is hovered? For now globally is easiest but maybe heavy.
    // Better: Add listener to the parent Dock? 
    // Let's keep it global for now but throttle if we had a util. 
    // To solve performance, we only update if close.
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [distance, magnification, size]);

  return (
    <div
      ref={ref}
      style={{ 
        width: size * scale, 
        height: size * scale,
        transition: "width 0.1s ease-out, height 0.1s ease-out" 
      }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-black/5 dark:bg-white/10 shadow-sm hover:bg-black/10 dark:hover:bg-white/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
