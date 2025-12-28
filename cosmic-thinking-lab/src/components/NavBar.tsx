import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar(): JSX.Element {
  const [open, setOpen] = useState(false);

  const navItems: Array<{ label: string; href: string }> = [
    { label: "Approach", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0a14]/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Cosmic Thinking Lab" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-200 text-sm"
            >
              Connect
            </Link>
          </div>

          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 px-4 py-4 bg-[#0a0a14]">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 bg-white text-black px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-200 text-sm text-center"
                onClick={() => setOpen(false)}
              >
                Connect
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
