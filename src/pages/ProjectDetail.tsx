import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Layout, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import { useProject } from "@/hooks/useProjects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const { project, loading, error } = useProject(slug || "");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="inline-flex items-center gap-3 text-zinc-400">
          <div className="w-5 h-5 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
          <span className="text-sm font-medium tracking-wide">Loading project…</span>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center p-8">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <ShieldCheck size={36} className="text-emerald-500" />
          </div>
          <h1 className="font-display text-4xl font-bold text-zinc-900 mb-4">
            {error ? "Error Loading Content" : "Project Not Found"}
          </h1>
          {error && <p className="text-zinc-400 mb-6 font-light">{error}</p>}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 font-semibold text-sm transition-colors"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = project.image?.asset?._ref
    ? `https://cdn.sanity.io/images/v7q2gijs/production/${project.image.asset._ref
        .replace("image-", "")
        .replace("-jpg", ".jpg")
        .replace("-png", ".png")
        .replace("-webp", ".webp")}`
    : "/placeholder.jpg";

  return (
    <div className="antialiased">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[55vh] flex items-end pt-20 text-white overflow-hidden"
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
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)" }}
        />

        <div className="container relative py-16 z-10 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/35 hover:text-white/65 text-xs font-semibold uppercase tracking-widest mb-8 transition-colors group"
            >
              <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              Back to Projects
            </Link>
          </motion.div>

          {project.category && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {project.category.title}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.92] tracking-tight text-white font-semibold mb-6 max-w-3xl"
          >
            {project.title}
          </motion.h1>

          {/* action links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full bg-emerald-500 text-black hover:bg-emerald-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.35)]"
              >
                <ExternalLink size={13} /> Live Project
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/15 text-white/75 hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                <Github size={13} /> Source Code
              </a>
            )}
            <span className="inline-flex items-center gap-2 text-[11px] text-white/30 font-medium uppercase tracking-widest ml-1">
              <Layout size={12} className="text-emerald-400/50" />
              Production Ready
            </span>
          </motion.div>

          {/* shimmer line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="origin-left h-px w-48 mt-10"
            style={{ background: "linear-gradient(90deg, rgba(52,211,153,0.5) 0%, transparent 100%)" }}
          />
        </div>
      </section>

      {/* ── Featured Image ── */}
      <section className="bg-white pt-12 pb-0">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden border border-zinc-200/60"
            style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.09)" }}
          >
            <img
              src={imageUrl}
              alt={project.title}
              className="w-full h-64 sm:h-80 md:h-[26rem] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* ── Left: Description ── */}
            <div className="lg:col-span-2 space-y-10">
              {/* about */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 text-[11px] font-bold tracking-widest uppercase mb-5">
                  About this project
                </span>
                <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-light mb-4">
                  {project.description}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  Our approach focused on creating a seamless user experience while maintaining high-performance standards. Every detail was meticulously planned to ensure that the final product not only met but exceeded business expectations.
                </p>
              </motion.div>

              {/* divider */}
              <div className="h-px bg-zinc-100" />

              {/* tech stack */}
              {project.techStack && project.techStack.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5"
                >
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 text-[11px] font-bold tracking-widest uppercase">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {project.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-50 border border-zinc-200/80 text-zinc-600 text-xs font-semibold tracking-wide hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors duration-200"
                      >
                        <Cpu size={12} className="text-emerald-500/70" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── Right: Sidebar ── */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              {/* project links card */}
              <div
                className="rounded-2xl border border-zinc-200/60 p-6 space-y-4"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
              >
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                  Project Links
                </h4>
                <div className="space-y-2.5">
                  {project.projectUrl ? (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/8 border border-emerald-500/20 text-emerald-700 text-xs font-semibold hover:bg-emerald-500/12 transition-colors group"
                    >
                      <ExternalLink size={14} className="shrink-0" />
                      <span>Live Project</span>
                      <ArrowRight size={12} className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200/60 text-zinc-400 text-xs font-medium">
                      <ExternalLink size={14} className="shrink-0 opacity-40" />
                      <span>No live URL</span>
                    </div>
                  )}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200/60 text-zinc-700 text-xs font-semibold hover:bg-zinc-100 transition-colors group"
                    >
                      <Github size={14} className="shrink-0" />
                      <span>Source Code</span>
                      <ArrowRight size={12} className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200/60 text-zinc-400 text-xs font-medium">
                      <Github size={14} className="shrink-0 opacity-40" />
                      <span>Private repository</span>
                    </div>
                  )}
                </div>
              </div>

              {/* category card */}
              {project.category && (
                <div
                  className="rounded-2xl border border-zinc-200/60 p-6"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                >
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-3">
                    Category
                  </h4>
                  <span
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: project.category.color ? `${project.category.color}15` : "rgba(16,185,129,0.08)",
                      border: `1px solid ${project.category.color ? `${project.category.color}30` : "rgba(16,185,129,0.2)"}`,
                      color: project.category.color || "#059669",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: project.category.color || "#10b981" }}
                    />
                    {project.category.title}
                  </span>
                </div>
              )}

              {/* status card */}
              <div
                className="rounded-2xl border border-zinc-200/60 p-6"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
              >
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-3">
                  Status
                </h4>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse" />
                  <span className="text-xs font-semibold text-zinc-700 tracking-wide">Production Ready</span>
                </div>
              </div>
            </motion.aside>

          </div>
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
            {/* grid texture */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
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
                Start a Project
              </motion.span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                Ready to transform your vision?
              </h2>
              <p className="text-white/40 mb-10 font-light leading-relaxed max-w-md mx-auto">
                Join leading enterprises that trust us to deliver cutting-edge AI and software excellence.
              </p>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-9 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] tracking-wide">
                  Start Collaboration <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;