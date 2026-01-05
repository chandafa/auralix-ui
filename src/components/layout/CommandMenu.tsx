"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/config/docs";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean | ((prevState: boolean) => boolean)) => void;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpenChange]);

  const filteredItems = React.useMemo(() => {
    if (!query) return [];
    
    // Flatten all items
    const allItems = [
      ...docsConfig.gettingStarted.map(i => ({ ...i, category: "Getting Started" })),
      ...docsConfig.frameworkGuides.map(i => ({ ...i, category: "Frameworks" })),
      ...docsConfig.components.map(i => ({ ...i, category: "Components" })),
    ];

    return allItems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const runCommand = React.useCallback((command: () => unknown) => {
    onOpenChange(false);
    command();
  }, [onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm" 
        onClick={() => onOpenChange(false)}
      />
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-background shadow-2xl animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
        <div className="flex items-center border-b border-border px-3" cmd-input-wrapper="">
          <svg className="mr-2 h-4 w-4 shrink-0 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            className="h-11 flex-1 rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
        
        <div className="max-h-[300px] overflow-y-auto p-2">
          {query === "" ? (
             <div className="py-6 text-center text-sm text-muted-foreground">
               Type to search...
             </div>
          ) : filteredItems.length === 0 ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => runCommand(() => router.push(item.href))}
                  className="flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-muted aria-selected:bg-muted transition-colors"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted/50 mr-2 text-muted-foreground">
                    #
                  </div>
                  <span>{item.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {item.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="border-t border-border bg-muted/20 px-4 py-2 text-[10px] text-muted-foreground flex items-center justify-end gap-2">
           <span>Select</span> <kbd className="bg-muted px-1.5 rounded border border-border">↵</kbd>
           <span>Close</span> <kbd className="bg-muted px-1.5 rounded border border-border">Esc</kbd>
        </div>
      </div>
    </div>
  );
}
