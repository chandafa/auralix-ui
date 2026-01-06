import { cn } from "../utils";

export interface AnimatedGradientTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function AnimatedGradientText({
  children,
  className,
  ...props
}: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 block h-full w-full animate-shimmer bg-[linear-gradient(110deg,transparent,45%,var(--color-shimmer,rgba(167,139,250,0.5)),55%,transparent)] bg-[length:200%_100%]",
        )}
      />
      <span className="relative z-10">{children}</span>
    </div>
  );
}
