import { BadgeCheck, Trophy, Sun, Zap } from "lucide-react";

export default function Projects() {
  return (
    <section className="container py-14 sm:py-20">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-brand via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="mt-3 text-muted-foreground">
          Selected work demonstrating modern web, interaction, and problem‑solving skills.
        </p>
      </header>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6">
        <article className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/60 p-6 backdrop-blur transition hover:border-border">
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-brand/20 via-fuchsia-500/10 to-cyan-400/10 blur-3xl" />
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/60 px-2 py-0.5"><Sun className="size-3"/> Solar</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/60 px-2 py-0.5"><Zap className="size-3"/> Piezoelectric</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/60 px-2 py-0.5"><Trophy className="size-3"/> 2nd place • Avinya'25</span>
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">SYNERGIA: The Solar‑Piezo Powered Future</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A sustainable energy model combining solar and piezoelectric technologies to harvest energy from sunlight and mechanical pressure. The hybrid system can power small devices for smart cities, wearables, and more.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-2"><BadgeCheck className="size-4 text-brand"/> Hybrid energy harvesting approach</li>
            <li className="inline-flex items-center gap-2"><BadgeCheck className="size-4 text-brand"/> Real‑world applications: smart city surfaces, IoT, wearables</li>
            <li className="inline-flex items-center gap-2"><BadgeCheck className="size-4 text-brand"/> Recognition: 2nd position at Avinya'25 (Atharva College of Engineering)</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
