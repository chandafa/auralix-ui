import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  inputSize?: "sm" | "md" | "lg";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, inputSize = "md", disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        disabled={disabled}
        className={cn(
          "w-full rounded-[2rem] border bg-background/50 px-4 text-foreground backdrop-blur-sm transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-border": !error,
            "border-destructive focus:ring-destructive": error,
          },
          {
            "h-8 text-sm": inputSize === "sm",
            "h-10 text-sm": inputSize === "md",
            "h-12 text-base": inputSize === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
