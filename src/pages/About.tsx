import { Target, Lightbulb, Users, ArrowRight, Github, Linkedin, Globe, Sparkles, Rocket, Heart, Star, CheckCircle2 } from "lucide-react";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedNetwork from "@/components/AnimatedNetwork";
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
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const About = () => {
  const { testimonials, loading, error } = useTestimonials();
  const { teamMembers, loading: teamLoading, error: teamError } = useTeam();

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[55vh] flex items-center pt-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
      >
        <ParticleMeteorBackground />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16" style={{ zIndex: 2 }}>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Who We Are
            </span>
            <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-white font-medium">
              About <span className="text-emerald-400">YarnixLabs</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              A forward-thinking AI and software company building the future of intelligent technology for businesses worldwide.
            </p>
          </motion.div>
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                className="rounded-2xl border border-emerald-500/20 bg-card backdrop-blur-sm p-6 text-center shadow-xl shadow-emerald-500/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                  <s.icon size={18} className="text-emerald-400" />
                </div>
                <span className="text-3xl font-bold text-foreground block">{s.value}</span>
                <span className="text-xs text-muted-foreground mt-1 block">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">From vision to reality.</h2>
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
                  className="rounded-2xl border border-border/50 bg-card p-8 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-5">{item.text}</p>
                  <ul className="space-y-2">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
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
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full blur-[120px] animate-[services-glow-1_8s_ease-in-out_infinite]" style={{ background: "rgba(16,185,129,0.15)" }} />
          <div className="absolute w-[500px] h-[500px] -bottom-40 -left-40 rounded-full blur-[100px] animate-[services-glow-2_10s_ease-in-out_infinite]" style={{ background: "rgba(5,150,105,0.12)" }} />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Core Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">The principles that guide us.</h2>
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
                className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8 hover:-translate-y-2 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.25)] group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] transition-all duration-500">
                  <v.icon size={24} className="text-emerald-500" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">The people behind YarnixLabs.</h2>
          </motion.div>

          {teamLoading ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse rounded-2xl border border-gray-100 overflow-hidden bg-white">
                  <div className="aspect-square bg-gray-100" />
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-gray-100 rounded w-3/4" />
                    <div className="h-3 bg-gray-50 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : teamError ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Failed to load team members.</p>
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
                  className="group rounded-2xl border border-gray-100 hover:border-emerald-400/40 bg-white overflow-hidden shadow-sm hover:shadow-[0_16px_40px_-12px_rgba(16,185,129,0.2)] transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Square image */}
                  <div className="relative aspect-square overflow-hidden bg-emerald-50">
                    <img
                      src={m.image?.asset?._ref ? `https://cdn.sanity.io/images/v7q2gijs/production/${m.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : '/placeholder.jpg'}
                      alt={m.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Social icons on hover */}
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                      {m.portfolio && (
                        <a href={m.portfolio} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500/80 transition-all" title="Portfolio">
                          <Globe size={14} />
                        </a>
                      )}
                      {m.github && (
                        <a href={m.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500/80 transition-all" title="GitHub">
                          <Github size={14} />
                        </a>
                      )}
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500/80 transition-all" title="LinkedIn">
                          <Linkedin size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 pt-4">
                    <h4 className="font-semibold text-base text-gray-900 truncate">{m.name}</h4>
                    <p className="text-sm text-emerald-500 font-medium mt-1 truncate">{m.role}</p>
                    {m.description && (
                      <p className="text-sm text-gray-500 leading-relaxed mt-2 line-clamp-2">{m.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full blur-[120px] animate-[services-glow-1_8s_ease-in-out_infinite]" style={{ background: "rgba(16,185,129,0.15)" }} />
          <div className="absolute w-[500px] h-[500px] -bottom-40 -left-40 rounded-full blur-[100px] animate-[services-glow-2_10s_ease-in-out_infinite]" style={{ background: "rgba(5,150,105,0.12)" }} />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">What clients say.</h2>
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse rounded-2xl border border-gray-100 bg-white/80 p-7 space-y-3">
                  <div className="flex gap-1">{[...Array(5)].map((_, j) => <div key={j} className="w-4 h-4 bg-gray-100 rounded-full" />)}</div>
                  <div className="h-3 bg-gray-100 rounded-full w-full" />
                  <div className="h-3 bg-gray-100 rounded-full w-4/5" />
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 bg-gray-100 rounded-full" />
                    <div className="space-y-1.5">
                      <div className="h-3 bg-gray-100 rounded w-20" />
                      <div className="h-2 bg-gray-100 rounded w-28" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Failed to load testimonials.</p>
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
                  className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-7 hover:-translate-y-2 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)]"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className={j < (t.rating || 5) ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 text-sm leading-relaxed mb-5 italic line-clamp-4">
                    "{t.content || 'No testimonial content available'}"
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <span className="text-emerald-600 font-bold text-sm">{t.name?.charAt(0) || '?'}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{t.name || 'Anonymous'}</p>
                      <p className="text-xs text-gray-400">{t.role || 'Client'}{t.company ? ` · ${t.company}` : ''}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent p-10 md:p-14 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] bg-emerald-500/20" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 relative">Want to Work With Us?</h2>
            <p className="text-muted-foreground mb-6 relative">
              We're always excited to take on new challenges and build amazing things together.
            </p>
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
