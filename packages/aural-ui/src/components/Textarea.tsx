import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "../utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, disabled, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={cn(
          "min-h-[80px] w-full rounded-[2rem] border bg-background/50 px-4 py-3 text-sm text-foreground backdrop-blur-sm transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-border": !error,
            "border-destructive focus:ring-destructive": error,
          },
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
