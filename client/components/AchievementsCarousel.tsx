import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

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
          <motion.article
            key={i}
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            className="group relative min-w-[260px] max-w-[260px] p-[1.5px] rounded-xl bg-[conic-gradient(from_180deg,theme(colors.brand),#a855f7,#22d3ee,theme(colors.brand))]"
          >
            <div className="rounded-[11px] border border-border/50 bg-background/60 p-4 backdrop-blur transition group-hover:border-border group-hover:shadow-[0_0_30px_hsl(var(--brand-500)/0.2)]">
              <div aria-hidden className="pointer-events-none absolute -z-10 -top-20 -right-20 h-32 w-32 rounded-full bg-gradient-to-br from-brand/20 via-fuchsia-500/10 to-cyan-400/10 blur-2xl" />
              <h3 className="font-semibold tracking-tight">{it.title}</h3>
              {it.meta && <p className="text-xs text-muted-foreground mt-1">{it.meta}</p>}
              <p className="text-sm text-muted-foreground mt-2">{it.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
