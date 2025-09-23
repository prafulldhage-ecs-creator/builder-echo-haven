import { cn } from "@/lib/utils";

export default function FuturisticPortrait({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="relative rounded-full p-[4px] bg-[conic-gradient(from_180deg,theme(colors.brand),#a855f7,#22d3ee,theme(colors.brand))] animate-glow">
        <div className="relative rounded-full bg-background/80 p-1 backdrop-blur">
          <img
            src={src}
            alt={alt}
            className="block h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full object-cover object-center"
            loading="eager"
          />
          {/* holographic overlays */}
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full mix-blend-screen opacity-[0.25] holo-gradient" />
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full scanlines opacity-30" />
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full noise opacity-[0.08]" />
        </div>
        {/* outer glow */}
        <div aria-hidden className="absolute -inset-3 rounded-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--brand-500)/0.45),transparent_60%)] blur-2xl" />
      </div>
      {/* sheen */}
      <span aria-hidden className="absolute -inset-1 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 animate-sheen" />
    </div>
  );
}
