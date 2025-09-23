export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border/50">
      <div className="container py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Prafull Dhage. All rights reserved.
        </p>
        <p className="opacity-80">
          Built with modern web tech • Futuristic UI/UX
        </p>
      </div>
    </footer>
  );
}
