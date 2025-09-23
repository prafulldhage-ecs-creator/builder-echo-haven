import { ReactNode } from "react";

export default function Placeholder({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-brand via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-muted-foreground">
          {children ?? "This section is coming next. Tell me what you want here and I’ll generate it for you."}
        </p>
      </div>
    </section>
  );
}
