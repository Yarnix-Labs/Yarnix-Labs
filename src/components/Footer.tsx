import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0b1411 0%, #0a1f16 50%, #0b1411 100%)" }}>
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-30" />

    <div className="container relative py-16 md:py-20">
      {/* Newsletter CTA */}
      <div className="mb-16 p-6 sm:p-8 md:p-10 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Stay ahead with AI insights</h3>
          <p className="text-xs sm:text-sm text-white/50">Get the latest on AI, software engineering, and automation — straight to your inbox.</p>
        </div>
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-emerald-500/40"
          />
          <button className="flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-2.5 rounded-full text-sm transition-colors whitespace-nowrap">
            Subscribe <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-2">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-lg group-hover:bg-emerald-500/50 transition-all duration-500" />
              <img src={logo} alt="YarnixLabs logo" className="h-10 w-10 relative z-10" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold">
                <span className="text-white">Yarnix</span>
                <span className="text-emerald-500">Labs</span>
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">Innovation Studio</span>
            </div>
          </Link>
          <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
            Building smart AI & software solutions for modern businesses. Empowering growth through intelligent technology.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Github, label: "GitHub" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Mail, label: "Email" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-emerald-500/15 hover:border-emerald-500/30 transition-all duration-300"
              >
                <Icon size={16} className="text-white/50 hover:text-emerald-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          { title: "Company", links: [["About", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Contact", "/contact"]] },
          { title: "Resources", links: [["Blog", "/blog"], ["Documentation", "#"], ["Support", "#"], ["Careers", "#"]] },
          { title: "Legal", links: [["Privacy Policy", "#"], ["Terms of Service", "#"], ["Cookie Policy", "#"]] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80 mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map(([label, path]) => (
                <li key={label}>
                  <Link to={path} className="text-sm text-white/40 hover:text-emerald-400 transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} YarnixLabs. All rights reserved.
        </p>
        <p className="text-xs text-white/30">
          Crafted with passion for innovation 💚
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
