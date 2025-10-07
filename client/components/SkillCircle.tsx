import { motion } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SkillCircle({ label, value, className }: { label: string; value: number; className?: string }) {
  const clamped = Math.min(Math.max(value, 0), 100);
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 36 36" className="h-full w-full">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--brand-500))" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
          <motion.circle
            cx="18"
            cy="18"
            r="15.5"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="97.39"
            initial={{ strokeDashoffset: 97.39 }}
            whileInView={{ strokeDashoffset: 97.39 * (1 - clamped / 100) }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-content-center text-sm font-semibold">
          {clamped}%
        </div>
      </div>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}
