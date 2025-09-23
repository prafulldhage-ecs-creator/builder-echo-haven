import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export default function AchievementsCarousel({ items }: { items: { title: string; description: string; meta?: string }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    let raf: number;
    const auto = () => {
      emblaApi.scrollNext();
      raf = window.setTimeout(auto, 3000) as unknown as number;
    };
    raf = window.setTimeout(auto, 3000) as unknown as number;
    return () => window.clearTimeout(raf);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {items.map((it, i) => (
          <article key={i} className="min-w-[260px] max-w-[260px] rounded-xl border border-border/60 bg-background/60 p-4 backdrop-blur hover:border-border transition">
            <h3 className="font-semibold tracking-tight">{it.title}</h3>
            {it.meta && <p className="text-xs text-muted-foreground mt-1">{it.meta}</p>}
            <p className="text-sm text-muted-foreground mt-2">{it.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
