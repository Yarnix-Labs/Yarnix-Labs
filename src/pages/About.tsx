import { Target, Lightbulb, Users, ArrowRight, Github, Linkedin, Globe, Sparkles, Rocket, Heart, Star, CheckCircle2 } from "lucide-react";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedNetwork from "@/components/AnimatedNetwork";
import BackgroundGrid from "@/components/BackgroundGrid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTestimonials } from "@/hooks/useTestimonials";
import { useTeam } from "@/hooks/useTeam";

const stats = [
  { value: "2025", label: "Founded", icon: Rocket },
  { value: "50+", label: "Projects Delivered", icon: Sparkles },
  { value: "100%", label: "Client Satisfaction", icon: Heart },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    desc: "We're committed to building software solutions that solve real problems and create lasting value for our clients.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We stay ahead of the curve, leveraging the latest AI and automation technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client Success",
    desc: "Your success is our success. We partner closely to ensure every project exceeds expectations.",
  },
];

const story = [
  {
    title: "The Beginning",
    points: [
      "Founded in 2025 by passionate technologists",
      "Vision to bridge AI and business needs",
      "Grew rapidly into a dynamic team",
    ],
    text: "Yarnix was founded in 2025 by three passionate technologists who saw an opportunity to help businesses transform through intelligent software solutions.",
  },
  {
    title: "What We Do",
    points: [
      "AI tools & intelligent automation",
      "Full-stack web & mobile development",
      "UI/UX design & cloud infrastructure",
    ],
    text: "We specialize in AI tools, automation solutions, full-stack development, UI/UX design, mobile applications, and web platforms.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const About = () => {
  const { testimonials, loading, error } = useTestimonials();
  const { teamMembers, loading: teamLoading, error: teamError } = useTeam();

  return (
    <div className="antialiased">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[55vh] flex items-center pt-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
      >
        <ParticleMeteorBackground />

        {/* noise */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px",
          }}
        />
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)" }}
        />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16" style={{ zIndex: 2 }}>
          <div className="space-y-7">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              Who We Are
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.92] tracking-tight text-white font-semibold"
            >
              About{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)" }}
              >
                YarnixLabs
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/50 leading-relaxed max-w-xl font-light"
            >
              A forward-thinking AI and software company building the future of intelligent technology for businesses worldwide.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="origin-left h-px w-32"
              style={{ background: "linear-gradient(90deg, rgba(52,211,153,0.6) 0%, transparent 100%)" }}
            />
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatedNetwork />
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative -mt-10 z-10">
        <div className="container">
          <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl bg-white border border-zinc-200/60 p-6 text-center"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(16,185,129,0.06)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(5,150,105,0.06))",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                >
                  <s.icon size={17} className="text-emerald-500" />
                </div>
                <span className="text-3xl font-bold text-zinc-900 block tracking-tight">{s.value}</span>
                <span className="text-[11px] text-zinc-400 mt-1 block font-semibold uppercase tracking-widest">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 md:py-28 bg-zinc-50/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 text-[11px] font-bold tracking-widest uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                From vision <span className="text-emerald-600">to reality.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {story.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white border border-zinc-200/60 p-8 hover:-translate-y-1 transition-all duration-500 group"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.25)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.08), 0 0 32px rgba(16,185,129,0.07)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(228,228,231,0.6)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                  }}
                >
                  <h3 className="text-base font-bold mb-3 text-zinc-900 uppercase tracking-widest text-[13px]">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm mb-6 font-light">{item.text}</p>
                  <ul className="space-y-2.5">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-zinc-500 font-light">
                        <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        <BackgroundGrid />
        <div
          className="absolute right-0 top-0 w-[520px] h-[520px] -translate-y-1/3 translate-x-1/3 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 65%)" }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 text-[11px] font-bold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Core Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
              The principles <span className="text-emerald-600">that guide us.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl bg-white border border-zinc-200/60 p-8 hover:-translate-y-2 transition-all duration-500 group"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.08), 0 0 32px rgba(16,185,129,0.10)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(228,228,231,0.6)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(5,150,105,0.06))",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                >
                  <v.icon size={22} className="text-emerald-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-[13px] uppercase tracking-widest mb-3 text-zinc-900">{v.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section className="py-20 md:py-28 bg-zinc-50/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 text-[11px] font-bold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
              The people behind <span className="text-emerald-600">YarnixLabs.</span>
            </h2>
          </motion.div>

          {teamLoading ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse rounded-2xl border border-zinc-200/60 overflow-hidden bg-white">
                  <div className="aspect-square bg-zinc-100" />
                  <div className="p-5 space-y-2">
                    <div className="h-4 bg-zinc-100 rounded-full w-3/4" />
                    <div className="h-3 bg-zinc-100 rounded-full w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : teamError ? (
            <div className="text-center py-12">
              <p className="text-zinc-400 text-sm font-light">Failed to load team members.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {teamMembers.map((m, i) => (
                <motion.div
                  key={m.name}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-zinc-200/60 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.25)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.10), 0 0 40px rgba(16,185,129,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(228,228,231,0.6)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* image */}
                  <div className="relative aspect-square overflow-hidden bg-emerald-50">
                    <img
                      src={m.image?.asset?._ref
                        ? `https://cdn.sanity.io/images/v7q2gijs/production/${m.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`
                        : '/placeholder.jpg'}
                      alt={m.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* social icons */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                      {m.portfolio && (
                        <a href={m.portfolio} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-200">
                          <Globe size={13} />
                        </a>
                      )}
                      {m.github && (
                        <a href={m.github} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-200">
                          <Github size={13} />
                        </a>
                      )}
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-200">
                          <Linkedin size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* info */}
                  <div className="p-5 pt-4">
                    <h4 className="font-semibold text-[13px] uppercase tracking-wider text-zinc-800 truncate">{m.name}</h4>
                    <p className="text-xs text-emerald-600 font-semibold mt-1 truncate tracking-wide">{m.role}</p>
                    {m.description && (
                      <p className="text-xs text-zinc-400 leading-relaxed mt-2 line-clamp-2 font-light">{m.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #070e0c 0%, #0b1a13 100%)" }}
      >
        {/* grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)" }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-emerald-300 text-[11px] font-bold tracking-widest uppercase mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              What clients <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #34d399 0%, #10b981 100%)" }}>say.</span>
            </h2>
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse rounded-2xl p-7 space-y-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex gap-1">{[...Array(5)].map((_, j) => <div key={j} className="w-3.5 h-3.5 bg-white/8 rounded-full" />)}</div>
                  <div className="h-2.5 bg-white/5 rounded-full w-full" />
                  <div className="h-2.5 bg-white/5 rounded-full w-4/5" />
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-9 h-9 bg-white/8 rounded-full" />
                    <div className="space-y-1.5">
                      <div className="h-2.5 bg-white/8 rounded w-20" />
                      <div className="h-2 bg-white/5 rounded w-28" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-white/30 text-sm font-light">Failed to load testimonials.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.slice(0, 6).map((t, i) => (
                <motion.div
                  key={t._id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 group"
                  style={{
                    background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(52,211,153,0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(16,185,129,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
                  }}
                >
                  {/* stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={13} className={j < (t.rating || 5) ? "text-yellow-400 fill-yellow-400" : "text-white/10"} />
                    ))}
                  </div>

                  <blockquote className="text-white/60 text-sm leading-relaxed mb-5 font-light line-clamp-4 italic">
                    "{t.content || 'No testimonial content available'}"
                  </blockquote>

                  <div className="h-px bg-white/[0.07] mb-4" />

                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-emerald-400 font-bold text-sm"
                      style={{
                        background: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.08))",
                        border: "1px solid rgba(16,185,129,0.2)",
                      }}
                    >
                      {t.name?.charAt(0) || "?"}
                    </div>
                    <div>
                      <p className="font-semibold text-[13px] text-white/80 tracking-wide">{t.name || "Anonymous"}</p>
                      <p className="text-[11px] text-white/35 tracking-wide">{t.role || "Client"}{t.company ? ` · ${t.company}` : ""}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center rounded-3xl overflow-hidden relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "linear-gradient(135deg, #060d0b 0%, #0d2a1c 45%, #0f3d28 100%)" }}
          >
            <BackgroundGrid color="rgba(52,211,153,1)" size="40px" className="absolute inset-0 opacity-[0.05] pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.15) 0%, transparent 65%)" }}
            />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.5), transparent)" }}
            />

            <div className="relative px-8 py-14 md:px-16 md:py-20">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-emerald-300 text-[11px] font-bold tracking-widest uppercase mb-6 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                Join Us
              </motion.span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                Want to Work With Us?
              </h2>
              <p className="text-white/40 mb-10 font-light leading-relaxed max-w-md mx-auto">
                We're always excited to take on new challenges and build amazing things together.
              </p>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-9 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] tracking-wide">
                  Get in Touch <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;