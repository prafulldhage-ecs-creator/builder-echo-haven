import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FuturisticPortrait from "@/components/FuturisticPortrait";
import SkillCircle from "@/components/SkillCircle";
import {
  Award,
  Calendar,
  FileDown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const expertise = [
  {
    title: "Human-centered UI/UX",
    description:
      "Crafting glassmorphism experiences, blue–violet gradients, and interaction patterns that stay accessible and performance-ready across devices.",
  },
  {
    title: "Interactive Web Development",
    description:
      "Bringing designs to life with semantic HTML, responsive CSS, React, and Framer Motion to translate ideas into immersive journeys.",
  },
  {
    title: "Content & Community",
    description:
      "Hosting GDGC initiatives, driving IEEE Techithon web rollouts, and polishing video narratives with CapCut and Adobe Premiere Pro.",
  },
];

const education = [
  {
    school: "Atharva College of Engineering",
    program: "B.E. Electronics & Computer Science (ECS)",
    timeline: "2023 — Present",
    location: "Mumbai, India",
    highlight:
      "Exploring the crossroads of engineering and design while leading GDGC committee collaborations and campus-wide UX workshops.",
  },
  {
    school: "IEEE Techithon",
    program: "Webmaster Assistant Head",
    timeline: "2023 — Present",
    location: "ACE Student Council",
    highlight:
      "Designing, shipping, and iterating on event platforms with real-time schedules, sponsor highlights, and glowing interface details.",
  },
];

const skillMeter = [
  { label: "Figma", value: 90 },
  { label: "React", value: 85 },
  { label: "HTML/CSS", value: 88 },
  { label: "Python", value: 70 },
  { label: "Video Editing", value: 80 },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "Instagram", href: "https://instagram.com/", icon: Instagram },
];

export default function About() {
  useEffect(() => {
    document.title = "About — Prafull Dhage";
  }, []);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden pt-16">
        <div className="container relative">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted-foreground backdrop-blur">
                <Sparkles className="size-3.5 text-brand" /> Story-first designer & technologist
              </span>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
                Designing immersive, future-ready experiences that connect people to possibilities
              </h1>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Hey there 👋 I’m Prafull Dhage, a UI/UX Designer, Web Developer, and GDGC Committee Member currently pursuing my B.E. in Electronics & Computer Science at Atharva College of Engineering.
                </p>
                <p>
                  I’m passionate about experiences that blend design and technology. As the Webmaster Assistant Head for IEEE Techithon, I guide event platforms end-to-end — managing content, crafting UI flows, and launching real-time updates.
                </p>
                <p>
                  I’m exploring Python and deepening my web framework expertise while producing polished narratives through CapCut and Adobe Premiere Pro. My team is also prototyping a CPLD-Based Gas Leakage Detector, merging safety innovation with responsive dashboards.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1">UI/UX</span>
                <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1">Web Dev</span>
                <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1">GDGC</span>
                <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1">Video Editing</span>
              </div>
            </motion.div>
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="absolute -inset-8 rounded-[3rem] bg-[conic-gradient(from_180deg,theme(colors.brand),#7c3aed,#38bdf8,theme(colors.brand))] opacity-30 blur-3xl" aria-hidden />
              <div className="relative rounded-[2.5rem] border border-border/60 bg-background/70 p-6 backdrop-blur-xl">
                <div className="rounded-[2rem] border border-border/60 bg-background/70 p-5">
                  <div className="mx-auto w-[260px]">
                    <FuturisticPortrait
                      src="https://cdn.builder.io/api/v1/image/assets%2Fcaaa4ede07ec445597e01b5c69a33caa%2F2e822857be3543b382e763d9b4d6ec84?format=webp&width=800"
                      alt="Prafull Dhage portrait"
                      rotate="-rotate-2"
                    />
                  </div>
                  <div className="mt-4 rounded-xl border border-border/60 bg-background/70 p-4 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">Currently building</p>
                    <p className="mt-1">CPLD-Based Gas Leakage Detector — real-time alerts, hardware dashboards, and safety-first UX.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Skills & Expertise</h2>
            <p className="text-sm text-muted-foreground">
              Each project balances research-backed UX, futuristic aesthetics, and dependable engineering to deliver narratives that feel alive.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {expertise.map((item) => (
                <motion.article
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-5 backdrop-blur transition hover:border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-brand/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl group-hover:from-brand/45 transition" />
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
          <motion.div
            className="rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold tracking-tight">Core Skill Matrix</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Continuously refined through hackathons, GDGC initiatives, freelance collabs, and design sprints.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skillMeter.map((skill) => (
                <SkillCircle key={skill.label} label={skill.label} value={skill.value} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight">Education & Leadership</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Guided by curiosity, mentorship, and hands-on experimentation across campus communities.
          </p>
          <div className="mt-6 space-y-6">
            {education.map((item) => (
              <motion.div
                key={item.school + item.program}
                className="rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{item.school}</h3>
                    <p className="text-sm text-muted-foreground">{item.program}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="size-3.5" />{item.timeline}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" />{item.location}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Resume</h2>
              <p className="text-sm text-muted-foreground">
                Concentrated overview covering academics, project leadership, and UI/UX case studies.
              </p>
            </div>
            <a href="/resume.pdf" download>
              <Button className="bg-gradient-to-r from-brand via-fuchsia-500 to-cyan-400 text-white">
                <FileDown className="mr-2 size-4" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Open to internships, collaborations, and UI/UX audits. Reach out with your ideas — let’s build something futuristic together.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <a href="mailto:hello@prafull.dev" className="inline-flex items-center gap-2 hover:text-brand">
                  <Mail className="size-4" />
                  hello@prafull.dev
                </a>
                {socials.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-brand">
                    <Icon className="size-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const name = data.get("name");
                const email = data.get("email");
                const message = data.get("message");
                window.location.href = `mailto:hello@prafull.dev?subject=Portfolio%20hello%20from%20${encodeURIComponent(String(
                  name || ""
                ))}&body=${encodeURIComponent(String(message || ""))}%0A%0AFrom:%20${encodeURIComponent(String(email || ""))}`;
              }}
              className="grid gap-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <input
                name="name"
                placeholder="Your name"
                required
                className="rounded-md border border-border/60 bg-background/70 p-3 outline-none focus:ring-2 focus:ring-[hsl(var(--brand-500))]"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="rounded-md border border-border/60 bg-background/70 p-3 outline-none focus:ring-2 focus:ring-[hsl(var(--brand-500))]"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="min-h-32 rounded-md border border-border/60 bg-background/70 p-3 outline-none focus:ring-2 focus:ring-[hsl(var(--brand-500))]"
              />
              <Button type="submit" className="bg-gradient-to-r from-brand via-fuchsia-500 to-cyan-400 text-white">
                Send message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
