import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, ArrowRight, Check } from "lucide-react";

export default function Index() {
  const [copied, setCopied] = useState<string | null>(null);
  const shortPurpose =
    "Futuristic, interactive portfolio showcasing my web development and UI/UX skills — crafted to attract internships, full‑time roles, and freelance clients.";
  const longPurpose =
    "A modern, animation‑rich website that highlights my technical skills, creativity, and projects. Built to impress potential employers and clients while demonstrating solid fundamentals and a growth mindset. Designed and developed with attention to accessibility, performance, and futuristic aesthetics.";

  useEffect(() => {
    document.title = "Prafull Dhage — Portfolio";
  }, []);

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_12px_theme(colors.brand/70%)]" />
              Futuristic • Interactive • UI/UX
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
              <span className="bg-gradient-to-r from-brand via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                Prafull Dhage
              </span>
              <span className="block text-balance mt-2">ECS Student • Web Developer • UI/UX</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
              I design and develop websites using HTML, CSS, and C fundamentals, with hands‑on UI/UX experience in Figma. I build immersive, accessible interfaces with animations and a futuristic edge.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="/projects">
                <Button size="lg" className="bg-gradient-to-r from-brand to-cyan-500 text-white shadow-[0_0_24px_theme(colors.brand/30%)] hover:shadow-[0_0_36px_theme(colors.brand/50%)]">
                  Explore Projects
                  <ArrowRight className="ml-1 size-4" />
                </Button>
              </a>
              <a href="mailto:hello@prafull.dev">
                <Button size="lg" variant="outline">Get in touch</Button>
              </a>
            </div>
          </div>
        </div>
        <Deco />
      </section>

      <section id="purpose" className="container pb-14 sm:pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          <PurposeCard
            title="Portfolio Purpose — Short"
            text={shortPurpose}
            copied={copied === "short"}
            onCopy={() => copy(shortPurpose, "short")}
          />
          <PurposeCard
            title="Portfolio Purpose — Long"
            text={longPurpose}
            copied={copied === "long"}
            onCopy={() => copy(longPurpose, "long")}
          />
        </div>
        <ul className="mx-auto mt-10 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2 rounded-md border border-border/60 bg-background/60 p-3 backdrop-blur">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_theme(colors.brand/70%)]" />
            Showcase technical skills and creativity through modern, animated interfaces.
          </li>
          <li className="flex items-start gap-2 rounded-md border border-border/60 bg-background/60 p-3 backdrop-blur">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_theme(colors.brand/70%)]" />
            Attract potential employers for internships or full‑time roles.
          </li>
          <li className="flex items-start gap-2 rounded-md border border-border/60 bg-background/60 p-3 backdrop-blur">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_theme(colors.brand/70%)]" />
            Appeal to freelance clients seeking clean, engaging web experiences.
          </li>
          <li className="flex items-start gap-2 rounded-md border border-border/60 bg-background/60 p-3 backdrop-blur">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_theme(colors.brand/70%)]" />
            Demonstrate implementation of modern web technologies and UI/UX process.
          </li>
        </ul>
      </section>
    </>
  );
}

function PurposeCard({ title, text, copied, onCopy }: { title: string; text: string; copied: boolean; onCopy: () => void }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/60 p-5 sm:p-6 backdrop-blur transition hover:border-border">
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-brand/20 via-fuchsia-500/10 to-cyan-400/10 blur-2xl group-hover:from-brand/30 transition-colors" />
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold tracking-tight">{title}</h3>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/60 px-2.5 py-1.5 text-xs hover:bg-accent hover:text-accent-foreground transition"
        >
          {copied ? (
            <>
              <Check className="size-3.5" /> Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" /> Copy
            </>
          )}
        </button>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function Deco() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand/25 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
      <div className="absolute inset-x-0 -bottom-24 -z-10 h-40 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--brand-500)/0.25),transparent_60%)]" />
    </div>
  );
}
