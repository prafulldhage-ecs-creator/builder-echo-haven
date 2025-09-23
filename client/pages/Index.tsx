import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, ArrowRight, Check, FileDown, Mail, Github, Linkedin, Award } from "lucide-react";
import FuturisticPortrait from "@/components/FuturisticPortrait";
import { motion } from "framer-motion";
import SkillCircle from "@/components/SkillCircle";
import AchievementsCarousel from "@/components/AchievementsCarousel";

export default function Index() {
  const [copied, setCopied] = useState<string | null>(null);
  const shortPurpose =
    "Futuristic, interactive portfolio by a 2nd‑year ECS engineering student, showcasing web development and UI/UX skills — built to attract internships, full‑time roles, and freelance clients.";
  const longPurpose =
    "A modern, animation‑rich website highlighting my skills, creativity, and projects. Built to impress employers and clients while demonstrating strong fundamentals and a growth mindset. Designed in Figma and developed with HTML, CSS, and C foundations, with attention to accessibility, performance, and futuristic aesthetics.";

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
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="container relative">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_12px_theme(colors.brand/70%)]" />
                Futuristic • Interactive • UI/UX
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
                <span className="bg-gradient-to-r from-brand via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                  Prafull Dhage
                </span>
                <span className="block text-balance mt-2">2nd‑year ECS Student • Web Developer • UI/UX</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
                I design and develop websites using HTML, CSS, and C fundamentals, with hands‑on UI/UX experience in Figma. I build immersive, accessible interfaces with animations and a futuristic edge.
              </p>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
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
            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <FuturisticPortrait
                  src="https://cdn.builder.io/api/v1/image/assets%2Fcaaa4ede07ec445597e01b5c69a33caa%2F2e822857be3543b382e763d9b4d6ec84?format=webp&width=800"
                  alt="Prafull Dhage portrait"
                  rotate="rotate-90"
                />
              </div>
            </div>
          </div>
        </div>
        <Deco />
      </section>

      {/* Purpose cards */}
      <section id="purpose" className="container pb-14 sm:pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          <PurposeCard title="Portfolio Purpose — Short" text={shortPurpose} copied={copied === "short"} onCopy={() => copy(shortPurpose, "short")} />
          <PurposeCard title="Portfolio Purpose — Long" text={longPurpose} copied={copied === "long"} onCopy={() => copy(longPurpose, "long")} />
        </div>
        <ul className="mx-auto mt-10 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2 rounded-md border border-border/60 bg-background/60 p-3 backdrop-blur"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_theme(colors.brand/70%)]" /> Showcase technical skills and creativity through modern, animated interfaces.</li>
          <li className="flex items-start gap-2 rounded-md border border-border/60 bg-background/60 p-3 backdrop-blur"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_theme(colors.brand/70%)]" /> Attract potential employers for internships or full‑time roles.</li>
          <li className="flex items-start gap-2 rounded-md border border-border/60 bg-background/60 p-3 backdrop-blur"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_theme(colors.brand/70%)]" /> Appeal to freelance clients seeking clean, engaging web experiences.</li>
          <li className="flex items-start gap-2 rounded-md border border-border/60 bg-background/60 p-3 backdrop-blur"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_theme(colors.brand/70%)]" /> Demonstrate implementation of modern web technologies and UI/UX process.</li>
        </ul>
      </section>

      {/* About & Experience */}
      <section id="about" className="container pb-14 sm:pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .6 }} className="rounded-xl border border-border/60 bg-background/60 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold tracking-tight">About Me</h2>
            <p className="mt-3 text-sm text-muted-foreground">I am Prafull Dhage, a 2nd‑year Electronics and Computer Science student at Atharva College of Engineering. I enjoy designing and developing modern, interactive web experiences and polishing UI/UX flows in Figma.</p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>• College: Atharva College of Engineering</li>
              <li>• Branch: Electronics and Computer Science (ECS)</li>
              <li>• Interests: Web Dev, UI/UX, Animations, Futuristic Design</li>
            </ul>
          </motion.div>
          <motion.div initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .6, delay: .1 }} className="rounded-xl border border-border/60 bg-background/60 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
            <p className="mt-3 text-sm text-muted-foreground">Webmaster Assistant Head — IEEE Techithon, Atharva College of Engineering. Contributing to web management, event coordination, and cross‑team collaboration to ship a smooth tech fest experience.</p>
            <p className="mt-2 inline-flex items-center gap-2 text-xs text-muted-foreground"><Award className="size-4 text-brand"/> 2nd place at Avinya'25 for project "SYNERGIA"</p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container pb-14 sm:pb-20">
        <h2 className="mx-auto max-w-5xl text-xl font-semibold tracking-tight">Skills</h2>
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <SkillCircle label="HTML" value={85} />
          <SkillCircle label="CSS" value={80} />
          <SkillCircle label="C" value={70} />
          <SkillCircle label="Figma" value={85} />
          <SkillCircle label="UI/UX" value={80} />
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="container pb-14 sm:pb-20">
        <h2 className="mx-auto max-w-5xl text-xl font-semibold tracking-tight">Achievements</h2>
        <div className="mx-auto mt-6 max-w-5xl">
          <AchievementsCarousel
            items={[
              { title: "Avinya'25 — 2nd Place", meta: "Atharva College of Engineering", description: "Team project SYNERGIA: Solar + Piezo hybrid energy for smart city and wearable devices." },
              { title: "ACE MUN — Participation Certificate", meta: "Atharva College of Engineering", description: "Participated in ACE MUN, collaborating, debating, and presenting ideas with clarity and confidence." },
              { title: "IEEE Techithon", meta: "Webmaster Assistant Head", description: "Web management and coordination for the college’s flagship tech event." },
              { title: "UI/UX Mini Projects", description: "Interactive Figma prototypes and micro‑interactions exploring futuristic aesthetics." },
            ]}
          />
        </div>

        <h3 className="mx-auto mt-10 max-w-5xl text-lg font-medium tracking-tight">Volunteering</h3>
        <div className="mx-auto mt-4 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="group relative rounded-xl p-[1.5px] bg-[conic-gradient(from_180deg,theme(colors.brand),#a855f7,#22d3ee,theme(colors.brand))]">
            <div className="rounded-[11px] border border-border/50 bg-background/60 p-5 backdrop-blur transition group-hover:border-border group-hover:shadow-[0_0_30px_hsl(var(--brand-500)/0.2)]">
              <h4 className="font-semibold tracking-tight">Digital Team — Student Council</h4>
              <p className="text-xs text-muted-foreground mt-1">Atharva College of Engineering</p>
              <p className="text-sm text-muted-foreground mt-2">Supported digital content, event pages, and announcements with a focus on clean UX and rapid iteration.</p>
            </div>
          </div>
          <div className="group relative rounded-xl p-[1.5px] bg-[conic-gradient(from_180deg,theme(colors.brand),#a855f7,#22d3ee,theme(colors.brand))]">
            <div className="rounded-[11px] border border-border/50 bg-background/60 p-5 backdrop-blur transition group-hover:border-border group-hover:shadow-[0_0_30px_hsl(var(--brand-500)/0.2)]">
              <h4 className="font-semibold tracking-tight">Student Council — Volunteer</h4>
              <p className="text-xs text-muted-foreground mt-1">Atharva College of Engineering</p>
              <p className="text-sm text-muted-foreground mt-2">Contributed to event coordination, communications, and tech support for activities across campus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="container pb-14 sm:pb-20">
        <div className="mx-auto max-w-5xl rounded-xl border border-border/60 bg-background/60 p-6 backdrop-blur flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Resume</h2>
            <p className="text-sm text-muted-foreground">Download a concise PDF with education, skills, and projects.</p>
          </div>
          <a href="/resume.pdf" download>
            <Button className="bg-gradient-to-r from-brand to-cyan-500 text-white"><FileDown className="mr-2 size-4"/> Download PDF</Button>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container pb-24">
        <h2 className="mx-auto max-w-5xl text-xl font-semibold tracking-tight">Contact</h2>
        <form
          onSubmit={(e) => { e.preventDefault(); const form = e.currentTarget as HTMLFormElement; const data = new FormData(form); const name = data.get('name'); const email = data.get('email'); const message = data.get('message'); window.location.href = `mailto:hello@prafull.dev?subject=Portfolio%20contact%20from%20${encodeURIComponent(String(name||''))}&body=${encodeURIComponent(String(message||''))}%0A%0AFrom:%20${encodeURIComponent(String(email||''))}`; }}
          className="mx-auto mt-6 max-w-5xl grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <input name="name" placeholder="Your name" required className="rounded-md border border-border/60 bg-background/60 p-3 outline-none focus:ring-2 focus:ring-[hsl(var(--brand-500))]" />
          <input name="email" type="email" placeholder="Your email" required className="rounded-md border border-border/60 bg-background/60 p-3 outline-none focus:ring-2 focus:ring-[hsl(var(--brand-500))]" />
          <textarea name="message" placeholder="Message" required className="md:col-span-2 min-h-32 rounded-md border border-border/60 bg-background/60 p-3 outline-none focus:ring-2 focus:ring-[hsl(var(--brand-500))]" />
          <div className="md:col-span-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <a href="mailto:hello@prafull.dev" className="inline-flex items-center gap-1 hover:text-foreground"><Mail className="size-4"/> Email</a>
              <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-1 hover:text-foreground"><Github className="size-4"/> GitHub</a>
              <a href="https://linkedin.com/" target="_blank" className="inline-flex items-center gap-1 hover:text-foreground"><Linkedin className="size-4"/> LinkedIn</a>
            </div>
            <Button type="submit" className="bg-gradient-to-r from-brand to-cyan-500 text-white">Send</Button>
          </div>
        </form>
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
          {copied ? (<><Check className="size-3.5" /> Copied</>) : (<><Copy className="size-3.5" /> Copy</>)}
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
