import { useEffect } from "react";
import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import FuturisticPortrait from "@/components/FuturisticPortrait";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FileDown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    title: "UI/UX Design",
    accent: "Figma",
    items: ["Design systems", "Interactive prototypes", "User research synthesis"],
  },
  {
    title: "Web Development",
    accent: "HTML • CSS • JavaScript • React",
    items: ["Responsive storytelling", "Performance-focused layouts", "Framer Motion animations"],
  },
  {
    title: "Python",
    accent: "Automation & scripting",
    items: ["Exploring frameworks", "API experiments", "Problem solving"],
  },
  {
    title: "Video Editing",
    accent: "CapCut • Premiere Pro",
    items: ["Narrative edits", "Motion graphics", "Sound design polish"],
  },
  {
    title: "Git & GitHub",
    accent: "Collaboration at scale",
    items: ["Branch workflows", "Code reviews", "Deployment readiness"],
  },
];

const experience = [
  {
    role: "GDGC Committee Member",
    place: "Atharva College of Engineering",
    timeline: "2023 — Present",
    description:
      "Shape campus-wide design challenges, mentor peers, and host workshops that merge creativity with engineering rigor.",
    highlights: ["Community leadership", "Design critiques", "Hackathon support"],
  },
  {
    role: "Webmaster Assistant Head",
    place: "IEEE Techithon",
    timeline: "2023 — Present",
    description:
      "Architect and maintain the flagship event website, orchestrating UI flows, schedules, and live updates for thousands of visitors.",
    highlights: ["End-to-end UX", "Cross-team coordination", "Real-time rollouts"],
  },
];

const projects = [
  {
    title: "CPLD-Based Gas Leakage Detector",
    description:
      "Safety-first hardware meets software dashboards, delivering real-time alerts and a responsive interface for rapid action.",
    tags: ["Hardware", "IoT", "Safety"],
  },
  {
    title: "Personal Portfolio Platform",
    description:
      "Animated, glassmorphism-forward experience showcasing craft in UI/UX, web development, and storytelling.",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "UI Case Studies",
    description:
      "A collection of Figma explorations focusing on accessibility, motion systems, and futuristic interface language.",
    tags: ["Figma", "UX Research", "Micro-interactions"],
  },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "Instagram", href: "https://instagram.com/", icon: Instagram },
];

export default function Index() {
  useEffect(() => {
    document.title = "Prafull Dhage — UI/UX | Web Dev";
  }, []);

  return (
    <div className="space-y-24 pb-28">
      <section className="relative overflow-hidden pt-20 sm:pt-28">
        <GradientBackdrop />
        <div className="container">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.26em] text-muted-foreground backdrop-blur">
                <Sparkles className="size-3.5 text-brand" /> UI/UX | Web Dev | GDGC | Video Editing
              </span>
              <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
                Hey there 👋 I’m
                <span className="block bg-gradient-to-r from-brand via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                  Prafull Dhage
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                I’m a UI/UX Designer, Web Developer, and GDGC Committee Member blending modern aesthetics with engineering foundations. From interactive event platforms to safety-driven hardware, I build stories where every interaction feels intentional.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand via-fuchsia-500 to-cyan-400 text-white shadow-[0_0_28px_hsl(var(--brand-500)/0.35)] transition hover:shadow-[0_0_40px_hsl(var(--brand-500)/0.5)]"
                  >
                    View My Work
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </a>
                <a href="/resume.pdf" download>
                  <Button variant="outline" size="lg" className="border-border/70 bg-background/60 backdrop-blur">
                    <FileDown className="mr-2 size-4" /> Download Resume
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              className="relative mx-auto flex h-full w-full max-w-[360px] items-center justify-center"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand/35 via-transparent to-cyan-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-[2rem] border border-border/60 bg-background/70 p-6 backdrop-blur-xl">
                <div className="h-80 w-64">
                  <FuturisticPortrait
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcaaa4ede07ec445597e01b5c69a33caa%2F2e822857be3543b382e763d9b4d6ec84?format=webp&width=800"
                    alt="Prafull Dhage portrait"
                    rotate="-rotate-3"
                  />
                </div>
                <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Webmaster Assistant Head — IEEE Techithon</p>
                  <p>Crafting seamless event UI experiences with real-time updates.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="container">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="About Me"
              title="Blending design, technology, and community leadership"
              description="Hey there 👋 I’m Prafull Dhage, a UI/UX Designer, Web Developer, and GDGC Committee Member currently pursuing my B.E. in Electronics & Computer Science at Atharva College of Engineering."
            />
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                I’m passionate about building digital experiences that blend design and technology. As the Webmaster Assistant Head for IEEE Techithon, I help manage and develop event websites, ensuring every interaction feels intuitive and visually engaging.
              </p>
              <p>
                I’m exploring Python and diving deeper into web frameworks while also polishing video edits in CapCut and Adobe Premiere Pro. My team is currently prototyping a CPLD-Based Gas Leakage Detector focused on safety innovation and real-time alerts.
              </p>
              <p>
                Always eager to learn, collaborate, and create — I believe every design and line of code tells a story ready to inspire action.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative w-full max-w-md rounded-[2rem] border border-border/60 bg-background/70 p-6 backdrop-blur-xl">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[conic-gradient(from_180deg,theme(colors.brand),#7c3aed,#38bdf8,theme(colors.brand))] opacity-20 blur-3xl" aria-hidden />
              <div className="relative rounded-[1.75rem] border border-border/50 bg-background/80 p-5 backdrop-blur">
                <div className="grid gap-6">
                  <div className="rounded-xl border border-border/60 bg-background/70 p-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Current Focus</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      CPLD-Based Gas Leakage Detector — blending hardware logic with responsive dashboards for safety-first storytelling.
                    </p>
                  </div>
                  <div className="grid gap-3 text-sm text-muted-foreground">
                    <p className="flex items-center justify-between gap-3"><span>Location</span><span className="text-foreground">Mumbai, India</span></p>
                    <p className="flex items-center justify-between gap-3"><span>Role</span><span className="text-foreground">GDGC Committee Member</span></p>
                    <p className="flex items-center justify-between gap-3"><span>Superpower</span><span className="text-foreground">Turning ideas into interactive experiences</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A multi-disciplinary toolkit for futuristic interfaces"
          description="A balance of design intuition, engineering precision, and storytelling across every project."
        />
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((skill) => (
            <motion.article
              key={skill.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur transition hover:border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-brand/30 via-fuchsia-500/10 to-cyan-400/10 blur-3xl transition-all group-hover:from-brand/50"
              />
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{skill.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">{skill.accent}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand to-cyan-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Leading creative and technical initiatives across campus"
          description="Hands-on roles shaping community events, digital ecosystems, and collaborative culture."
        />
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          {experience.map((item) => (
            <GlassyCard key={item.role}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.place}</p>
                </div>
                <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground">{item.timeline}</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <TagChip key={highlight}>{highlight}</TagChip>
                ))}
              </div>
            </GlassyCard>
          ))}
        </div>
      </section>

      <section id="projects" className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work at the intersection of design and engineering"
          description="From safety innovation to immersive interfaces, each build is a story crafted with intent."
        />
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <GlassyCard key={project.title}>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TagChip key={tag}>{tag}</TagChip>
                ))}
              </div>
              <div className="mt-6 text-sm text-brand">Dive deeper →</div>
            </GlassyCard>
          ))}
        </div>
      </section>

      <section id="contact" className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s collaborate on something extraordinary"
          description="Open to internships, freelance collaborations, and UI/UX audits. Tell me about the story you want to bring to life."
        />
        <div className="mx-auto mt-10 max-w-5xl grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassyCard>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Drop a message or connect across platforms — I’m quick to respond and always excited to jam on bold ideas.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@prafull.dev"
                  className="inline-flex items-center gap-2 text-foreground transition hover:text-brand"
                >
                  <Mail className="size-4" /> hello@prafull.dev
                </a>
                <div className="flex items-center gap-3">
                  {socials.map((social) => (
                    <SocialLink key={social.label} {...social} />
                  ))}
                </div>
              </div>
            </div>
          </GlassyCard>
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const name = data.get("name");
              const email = data.get("email");
              const message = data.get("message");
              if (typeof window !== "undefined") {
                if (typeof window !== "undefined") {
                  window.location.href = `mailto:hello@prafull.dev?subject=Portfolio%20hello%20from%20${encodeURIComponent(String(
                    name || ""
                  ))}&body=${encodeURIComponent(String(message || ""))}%0A%0AFrom:%20${encodeURIComponent(String(email || ""))}`;
                }
              }
            }}
            className="relative grid gap-4 rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,theme(colors.brand)/0.3,transparent_65%)] opacity-80" aria-hidden />
            <div className="relative grid gap-3">
              <input
                name="name"
                placeholder="Your name"
                required
                className="rounded-md border border-border/60 bg-background/70 p-3 outline-none transition focus:ring-2 focus:ring-[hsl(var(--brand-500))]"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="rounded-md border border-border/60 bg-background/70 p-3 outline-none transition focus:ring-2 focus:ring-[hsl(var(--brand-500))]"
              />
              <textarea
                name="message"
                placeholder="Tell me about your project"
                required
                className="min-h-32 rounded-md border border-border/60 bg-background/70 p-3 outline-none transition focus:ring-2 focus:ring-[hsl(var(--brand-500))]"
              />
              <Button type="submit" className="mt-2 bg-gradient-to-r from-brand via-fuchsia-500 to-cyan-400 text-white">
                Send message
              </Button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="relative inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-60" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm text-muted-foreground sm:text-base">{description}</p>
    </div>
  );
}

function GlassyCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-brand/25 via-fuchsia-500/10 to-cyan-400/10 blur-3xl" aria-hidden />
      <div className="relative space-y-4">{children}</div>
    </motion.div>
  );
}

function TagChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
      {children}
    </span>
  );
}

function SocialLink({
  label,
  href,
  icon: Icon,
}: {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative inline-flex size-11 items-center justify-center overflow-hidden rounded-full border border-border/60 bg-background/60 text-muted-foreground transition hover:text-brand"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-brand/40 via-transparent to-cyan-400/30 opacity-0 transition group-hover:opacity-100" aria-hidden />
      <Icon className="size-5" />
      <span className="sr-only">{label}</span>
    </a>
  );
}

function GradientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsla(var(--brand-500),0.45),transparent_65%)] blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/3 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[conic-gradient(from_90deg,hsla(210,90%,62%,0.18),transparent,hsla(255,88%,64%,0.25))] blur-3xl"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_50%_120%,hsla(var(--brand-500),0.25),transparent_70%)]" />
    </div>
  );
}
