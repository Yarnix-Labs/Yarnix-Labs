import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

interface NavbarProps {
  topBarVisible?: boolean;
}

const Navbar = ({ topBarVisible = true }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        topBarVisible ? "top-0 sm:top-9" : "top-0"
      } ${scrolled ? "bg-[#0b1411]/80 backdrop-blur-xl border-b border-emerald-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-transparent"}`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 tracking-tight group">
          <div className="relative flex items-center justify-center p-1">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg group-hover:bg-primary/50 transition-all duration-500" />
            <img src={logo} alt="YarnixLabs logo" className="h-16 w-16 relative z-10" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-gradient">YarnixLabs</span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">Innovation Studio</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`relative text-sm font-medium transition-colors group ${
                location.pathname === l.path ? "text-emerald-400" : "text-muted-foreground hover:text-emerald-300"
              }`}
            >
              {l.label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-400/80 transition-all duration-300 ${location.pathname === l.path ? "w-full shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)]"}`} />
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button size="sm" className="transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">Get Started</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0b1411]/95 backdrop-blur-xl border-b border-emerald-500/15">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium py-2 transition-colors ${
                  location.pathname === l.path ? "text-emerald-400" : "text-muted-foreground hover:text-emerald-300"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm" className="w-full mt-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
