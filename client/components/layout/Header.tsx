import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Our Location" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-36 items-center justify-between gap-6">
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fcd94b92507a346519724ff25cf7be75c%2Faca8292bf4f948ccaa8c052b6d7dc0c6?format=webp&width=800"
              alt="Gym logo"
              className="h-32 w-auto drop-shadow"
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-semibold text-white/80 hover:text-white transition-colors",
                    isActive && "text-white",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              to="/join"
              className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Join Now
            </Link>
          </div>

          <button
            className="md:hidden relative z-50 text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-6 bg-white mb-1.5" />
            <span className="block h-0.5 w-6 bg-white mb-1.5" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70 text-white",
          open ? "block" : "hidden",
        )}
      >
        <div className="px-6 pb-6">
          <div className="grid gap-4 py-4">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-lg font-semibold text-white/80",
                    isActive && "text-white",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
          <div className="flex">
            <Link
              to="/join"
              className="flex-1 rounded-full bg-primary text-primary-foreground text-center py-2"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
