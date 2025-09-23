import { cn } from "@/lib/utils";

export default function FuturisticPortrait({
  src,
  alt,
  className,
  rotate = "rotate-0",
}: {
  src: string;
  alt: string;
  className?: string;
  rotate?: string;
}) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="relative rounded-full p-[4px] bg-[conic-gradient(from_180deg,theme(colors.brand),#a855f7,#22d3ee,theme(colors.brand))] animate-glow">
        <div className="relative rounded-full bg-background/80 p-1 backdrop-blur">
          <img
            src={src}
            alt={alt}
            className={cn("block h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full object-cover object-center", rotate)}
            loading="eager"
          />
          {/* holographic overlays */}
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full mix-blend-screen opacity-[0.25] holo-gradient" />
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full scanlines opacity-30" />
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full noise opacity-[0.08]" />
        </div>
        {/* outer glow */}
        <div
          aria-hidden
          className="absolute rounded-full blur-2xl"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--brand-500)/0.45), rgba(0,0,0,0) 60%)",
            bottom: "-12px",
            right: "-12px",
            left: "475px",
            top: "-156px",
            marginRight: "auto",
            width: "266px",
          }}
        />
      </div>
      {/* sheen */}
      <span
        aria-hidden
        className="absolute block rounded-full"
        style={{
          animationDelay: "2s",
          animationDuration: "3s",
          animationIterationCount: "infinite",
          animationName: "sheen",
          animationTimingFunction: "ease-in-out",
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(255,255,255,0.25), rgba(0,0,0,0))",
          opacity: 0.0335492,
          borderRadius: 9999,
          position: "absolute",
          left: "-4px",
          right: "-4px",
          top: "-4px",
          bottom: "-4px",
          transform:
            "matrix(0.984808, 0.173648, -0.173648, 0.984808, -297.171, 0)",
        }}
      />
    </div>
  );
}
