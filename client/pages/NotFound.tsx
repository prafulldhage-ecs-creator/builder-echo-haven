import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-brand via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">404</h1>
        <p className="text-lg text-muted-foreground mb-4">This page drifted into the void.</p>
        <a href="/" className="inline-flex items-center gap-2 text-sm rounded-md border px-3 py-1.5 hover:bg-accent hover:text-accent-foreground transition">
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
