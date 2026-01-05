import { cn } from "@/lib/utils";

export interface AlertProps {
  children: React.ReactNode;
  variant?: "success" | "error" | "warning" | "info";
  title?: string;
  icon?: boolean;
  className?: string;
}

const icons = {
  success: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  error: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  warning: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  info: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export function Alert({
  children,
  variant = "info",
  title,
  icon = true,
  className,
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex gap-3 rounded-[2rem] border p-4 backdrop-blur-sm",
        {
          "border-success/30 bg-success/10 text-success": variant === "success",
          "border-destructive/30 bg-destructive/10 text-destructive": variant === "error",
          "border-warning/30 bg-warning/10 text-warning": variant === "warning",
          "border-info/30 bg-info/10 text-info": variant === "info",
        },
        className
      )}
    >
      {icon && <div className="flex-shrink-0">{icons[variant]}</div>}
      <div className="flex-1">
        {title && <div className="mb-1 font-semibold">{title}</div>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    </div>
  );
}
