import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-gradient-to-br from-brand via-fuchsia-500 to-cyan-400 shadow-[0_0_20px_theme(colors.brand/60%)] group-hover:shadow-[0_0_30px_theme(colors.brand/80%)] transition-shadow"></div>
          <span className="font-semibold tracking-tight text-sm sm:text-base">
            Prafull Dhage
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/projects" label="Projects" />
          <a
            href="mailto:hello@prafull.dev"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
          >
            <Mail className="size-4" />
            <span>Contact</span>
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/about" className="hidden sm:inline-flex">
            <Button variant="ghost" size="sm">
              About
            </Button>
          </Link>
          <Link to="/projects">
            <Button
              size="sm"
              className="bg-gradient-to-r from-brand to-cyan-500 text-white shadow-[0_0_20px_theme(colors.brand/30%)] hover:shadow-[0_0_30px_theme(colors.brand/50%)]"
            >
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "text-muted-foreground hover:text-foreground transition-colors",
          isActive && "text-foreground",
        )
      }
      end
    >
      {label}
    </NavLink>
  );
}
