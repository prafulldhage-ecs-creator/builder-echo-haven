import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SkillCircle from "@/components/SkillCircle";
import { Award, Calendar, FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const expertise = [
  {
    title: "UI/UX Design Systems",
    description:
      "Crafting glassmorphism interfaces, neon gradients, and interaction patterns that stay accessible and performant.",
  },
  {
    title: "Frontend Engineering",
    description:
      "Building responsive layouts with semantic HTML, layered CSS effects, and animation pipelines rooted in solid C fundamentals.",
  },
  {
    title: "Prototyping & Iteration",
    description:
      "Translating Figma prototypes into production-ready experiences, refining details based on feedback and usability insights.",
  },
];

const education = [
  {
    school: "Atharva College of Engineering",
    program: "B.E. Electronics and Computer Science (ECS)",
    timeline: "2023 — Present",
    location: "Mumbai, India",
    highlight: "2nd-year student focusing on human-centered interfaces and embedded-friendly web systems.",
  },
  {
    school: "ACE Student Council",
    program: "Digital Team & IEEE Techithon",
    timeline: "2023 — Present",
    location: "Campus Initiatives",
    highlight: "Assistant Head for web and media, coordinating tech fests, hackathons, and communication pipelines.",
  },
];

const skillMeter = [
  { label: "HTML", value: 85 },
  { label: "CSS", value: 82 },
  { label: "C", value: 70 },
  { label: "Figma", value: 88 },
  { label: "UI/UX", value: 84 },
];

export default function About() {
  useEffect(() => {
    document.title = "About — Prafull Dhage";
  }, []);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden pt-16">
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Award className="size-3.5 text-brand" /> About Prafull Dhage
            </motion.p>
            <motion.h1
              className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Designing immersive, future-ready experiences across web and UI/UX
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I’m a second-year ECS engineering student blending design thinking with engineering principles. From solar-powered smart wearables to animated UI systems, I craft digital stories that feel alive, inclusive, and technically grounded.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Skills & Expertise</h2>
            <p className="text-sm text-muted-foreground">
              Each project is a collaboration between research-backed UX, futuristic aesthetics, and reliable engineering. Here’s how those disciplines come together.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {expertise.map((item) => (
                <motion.article
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/60 p-5 backdrop-blur transition hover:border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-brand/20 via-fuchsia-500/10 to-cyan-400/10 blur-2xl group-hover:from-brand/30 transition-colors" />
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
          <motion.div
            className="rounded-xl border border-border/60 bg-background/60 p-6 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold tracking-tight">Core Skill Matrix</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A snapshot of current proficiency—continuously refined via hackathons, freelance work, and design jams.
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
                className="rounded-xl border border-border/60 bg-background/60 p-6 backdrop-blur"
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
        <div className="mx-auto max-w-5xl rounded-xl border border-border/60 bg-background/60 p-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Resume</h2>
              <p className="text-sm text-muted-foreground">
                Concentrated overview covering academics, project leadership, and UI/UX case studies.
              </p>
            </div>
            <a href="/resume.pdf" download>
              <Button className="bg-gradient-to-r from-brand to-cyan-500 text-white">
                <FileDown className="mr-2 size-4" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-5xl rounded-xl border border-border/60 bg-background/60 p-6 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Open to internships, collaborations, and UX audits. Reach out with your ideas, and let’s build something futuristic together.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <a href="mailto:hello@prafull.dev" className="inline-flex items-center gap-2 hover:text-foreground">
                  <Mail className="size-4" />
                  hello@prafull.dev
                </a>
                <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-2 hover:text-foreground">
                  <Github className="size-4" />
                  GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" className="inline-flex items-center gap-2 hover:text-foreground">
                  <Linkedin className="size-4" />
                  LinkedIn
                </a>
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
                window.location.href = `mailto:hello@prafull.dev?subject=Portfolio%20hello%20from%20${encodeURIComponent(String(name || ""))}&body=${encodeURIComponent(String(message || ""))}%0A%0AFrom:%20${encodeURIComponent(String(email || ""))}`;
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
                className="rounded-md border border-border/60 bg-background/60 p-3 outline-none focus:ring-2 focus:ring-[hsl(var(--brand-500))]"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="rounded-md border border-border/60 bg-background/60 p-3 outline-none focus:ring-2 focus:ring-[hsl(var(--brand-500))]"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="min-h-32 rounded-md border border-border/60 bg-background/60 p-3 outline-none focus:ring-2 focus:ring-[hsl(var(--brand-500))]"
              />
              <Button type="submit" className="bg-gradient-to-r from-brand to-cyan-500 text-white">
                Send message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
