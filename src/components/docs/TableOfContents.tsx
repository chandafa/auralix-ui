"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ToCItem {
  title: string;
  url: string;
  items?: ToCItem[];
}

// These are the standard sections we expect on every component page
const items: ToCItem[] = [
  {
    title: "Preview",
    url: "#preview",
  },
  {
    title: "Usage",
    url: "#usage",
  },
  {
    title: "Props",
    url: "#props",
  },
];

export function TableOfContents() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(window.location.hash);
    
    const handleScroll = () => {
      // Simple logic to highlight based on scroll position could go here
      // For now, we'll just stick to hash based or click based
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-2">
      <p className="font-medium text-sm">On this page</p>
      <ul className="m-0 list-none space-y-2">
        {items.map((item) => (
          <li key={item.url} className="mt-0 pt-2">
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline transition-colors hover:text-foreground text-sm",
                activeHash === item.url
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
              onClick={() => setActiveHash(item.url)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
