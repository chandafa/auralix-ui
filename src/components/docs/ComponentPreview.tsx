import { cn } from "@/lib/utils";

export interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
}

export function ComponentPreview({ children, className }: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "flex min-h-[200px] items-center justify-center rounded-lg border border-border bg-background p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
