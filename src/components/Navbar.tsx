import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

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
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "h-16 bg-[#0b1411]/85 backdrop-blur-2xl border-b border-emerald-500/10 shadow-lg shadow-black/20" : "h-20 bg-transparent border-b border-white/5"
      )}
    >
      <nav className="container h-full flex items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 tracking-tight group">
          <div className="relative flex items-center justify-center">
            <img 
              src={logo} 
              alt="YarnixLabs logo" 
              className={cn("transition-all duration-500 relative z-10 object-contain", scrolled ? "h-20 w-20" : "h-28 w-28")} 
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={cn(
                "relative text-[13px] font-semibold tracking-wide transition-all duration-300 group",
                activeLink === l.path ? "text-emerald-400" : "text-white/60 hover:text-white"
              )}
            >
              {l.label}
              {activeLink === l.path && (
                <motion.span 
                  layoutId="navbar-active-link"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <a 
              href="https://wa.me/94758121435?text=Hello%20YarnixLabs!%20I'd%20like%20to%20book%20a%20free%20consultation%20to%20discuss%20my%20next%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="sm" 
                className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 h-9 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
              >
                Book a Call
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <motion.button 
            whileTap={{ scale: 0.92 }}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white transition-colors hover:bg-white/10" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[calc(100%+8px)] left-4 right-4 overflow-hidden lg:hidden"
            >
              <div className="p-6 rounded-3xl bg-[#0b1411]/98 backdrop-blur-3xl border border-white/10 shadow-2xl space-y-2">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={l.path}
                      className={cn(
                        "flex items-center justify-between text-sm font-semibold p-3.5 rounded-2xl transition-all duration-300",
                        activeLink === l.path 
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2">
                  <a 
                    href="https://wa.me/94758121435?text=Hello%20YarnixLabs!%20I'd%20like%20to%20book%20a%20free%20consultation%20to%20discuss%20my%20next%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base shadow-xl shadow-emerald-500/20">
                      Book Free Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
