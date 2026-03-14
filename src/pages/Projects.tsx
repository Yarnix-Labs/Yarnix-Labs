import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedCubes from "@/components/AnimatedCubes";
import { useProjects } from "@/hooks/useProjects";
import BackgroundGrid from "@/components/BackgroundGrid";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const Projects = () => {
  const { projects, categories, loading, selectedCategory, setSelectedCategory } = useProjects();

  return (
    <div className="antialiased">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[50vh] flex items-center pt-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
      >
        <ParticleMeteorBackground />

        {/* noise overlay */}
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
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              Our Work
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-white font-medium"
            >
              Our{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)" }}
              >
                Projects
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed max-w-xl font-light"
            >
              A showcase of our work across AI, automation, and software engineering that drives real business impact.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="origin-left h-px w-32"
              style={{ background: "linear-gradient(90deg, rgba(52,211,153,0.6) 0%, transparent 100%)" }}
            />
          </div>

          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <AnimatedCubes />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section className="py-12 border-b border-border/10 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter size={14} className="text-emerald-500/60" />
              <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">Filter by:</span>
            </div>

            <button
              onClick={() => setSelectedCategory(null)}
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300"
              style={{
                background: selectedCategory === null ? "#10b981" : "rgba(0,0,0,0.04)",
                border: selectedCategory === null ? "1px solid rgba(52,211,153,0.35)" : "1px solid rgba(0,0,0,0.08)",
                color: selectedCategory === null ? "#fff" : "rgba(0,0,0,0.45)",
                boxShadow: selectedCategory === null ? "0 0 18px rgba(52,211,153,0.22)" : "none",
              }}
            >
              All Projects
            </button>

            {categories.map((category) => {
              const active = selectedCategory === category._id;
              return (
                <button
                  key={category._id}
                  onClick={() => setSelectedCategory(category._id)}
                  className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300"
                  style={{
                    background: active ? (category.color || "#10b981") : "rgba(0,0,0,0.04)",
                    border: active
                      ? `1px solid ${category.color || "rgba(52,211,153,0.35)"}80`
                      : "1px solid rgba(0,0,0,0.08)",
                    color: active ? "#fff" : "rgba(0,0,0,0.45)",
                    boxShadow: active ? `0 0 18px ${category.color || "rgba(52,211,153,0.3)"}40` : "none",
                  }}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-20 md:py-28 bg-zinc-50/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeading
              title={
                selectedCategory
                  ? `${categories.find((c) => c._id === selectedCategory)?.title} Projects`
                  : "Featured Projects"
              }
              subtitle={
                selectedCategory
                  ? `Projects in ${categories.find((c) => c._id === selectedCategory)?.title} category.`
                  : "Explore some of our recent work."
              }
            />
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse rounded-2xl overflow-hidden bg-white border border-zinc-200/60">
                  <div className="h-52 bg-zinc-100" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-zinc-100 rounded-full w-3/4" />
                    <div className="h-3 bg-zinc-100 rounded-full w-1/2" />
                    <div className="h-3 bg-zinc-100 rounded-full w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <motion.div className="text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-zinc-400 text-sm font-light mb-4">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-2 text-xs text-emerald-600 font-semibold hover:text-emerald-500 transition-colors uppercase tracking-widest"
              >
                View all projects <ArrowRight size={12} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projects.map((p) => (
                <motion.div
                  key={p.slug?.current || p._id}
                  variants={itemVariants}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-zinc-200/60 transition-all duration-500 hover:-translate-y-1"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.25)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 16px 48px rgba(0,0,0,0.10), 0 0 0 1px rgba(16,185,129,0.12), 0 0 32px rgba(16,185,129,0.07)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(228,228,231,0.6)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* image */}
                  <div className="relative h-52 overflow-hidden bg-zinc-100">
                    <img
                      src={
                        p.image?.asset?._ref
                          ? `https://cdn.sanity.io/images/v7q2gijs/production/${p.image.asset._ref
                              .replace("image-", "")
                              .replace("-jpg", ".jpg")
                              .replace("-png", ".png")
                              .replace("-webp", ".webp")}`
                          : "/placeholder.jpg"
                      }
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <span
                      className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md font-semibold"
                      style={{
                        backgroundColor: p.category?.color ? `${p.category.color}18` : "rgba(255,255,255,0.75)",
                        border: `1px solid ${p.category?.color ? `${p.category.color}35` : "rgba(0,0,0,0.08)"}`,
                        color: p.category?.color || "rgba(0,0,0,0.5)",
                      }}
                    >
                      {p.category?.title || "Uncategorized"}
                    </span>
                  </div>

                  {/* body */}
                  <div className="p-6">
                    <h3 className="font-sans font-semibold text-sm text-zinc-800 mb-1.5 tracking-wide uppercase">
                      {p.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mb-4 leading-relaxed line-clamp-2 font-light">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.techStack?.slice(0, 3).map((t: string) => (
                        <span
                          key={t}
                          className="text-[10px] px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-500 font-medium tracking-wide hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors duration-200"
                        >
                          {t}
                        </span>
                      ))}
                      {p.techStack && p.techStack.length > 3 && (
                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-400 font-medium">
                          +{p.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="h-px bg-zinc-100 mb-4" />

                    <div className="flex items-center gap-3">
                      <Link
                        to={`/projects/${p.slug?.current}`}
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-600/70 font-semibold hover:text-emerald-600 transition-colors uppercase tracking-wider group/link"
                      >
                        <span className="border-b border-emerald-600/20 group-hover/link:border-emerald-600/50 transition-colors pb-0.5">
                          View Details
                        </span>
                        <ExternalLink size={11} />
                      </Link>
                      {p.projectUrl && (
                        <a
                          href={p.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600/80 font-semibold hover:bg-emerald-500/15 hover:text-emerald-600 transition-all uppercase tracking-wider"
                        >
                          Live Demo <ArrowRight size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
            {/* grid */}
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
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                Have a project in mind?
              </h2>
              <p className="text-white/40 mb-10 font-light leading-relaxed">
                Let's build something amazing together.
              </p>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-9 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] tracking-wide">
                  Start a Project <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Projects;