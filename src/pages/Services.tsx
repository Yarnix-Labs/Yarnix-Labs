import { Bot, Globe, Cog, Server, Smartphone, Search, Megaphone, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedGears from "@/components/AnimatedGears";
import SectionHeading from "@/components/SectionHeading";
import { useProjects } from "@/hooks/useProjects";
import { useServices } from "@/hooks/useServices";
import BackgroundGrid from "@/components/BackgroundGrid";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Services = () => {
  const { projects, loading: projectsLoading } = useProjects();
  const { services, loading: servicesLoading } = useServices();

  const iconMap = { Bot, Cog, Globe, Server, Smartphone, Search, Megaphone };

  return (
    <div className="antialiased">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[500px] sm:min-h-[65svh] flex items-center pt-24 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
      >
        <ParticleMeteorBackground />

        {/* subtle noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px",
          }}
        />

        {/* radial glow */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)" }}
        />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20" style={{ zIndex: 2 }}>
          <div className="space-y-7">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              What We Offer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-white font-semibold"
            >
              Our{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)" }}
              >
                Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/50 leading-relaxed max-w-lg font-light"
            >
              End-to-end AI and software services to accelerate your digital transformation and drive measurable business results.
            </motion.p>

            {/* decorative divider */}
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
              <AnimatedGears />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section Intro ── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <BackgroundGrid />
        <div
          className="absolute right-0 top-0 w-[520px] h-[520px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 65%)" }}
        />

        <div className="container relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 text-[11px] font-bold tracking-widest uppercase mb-6">
              What we deliver
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-5 leading-[1.05]">
              End-to-end services{" "}
              <span className="text-emerald-600">that scale</span> with you
            </h2>
            <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-light">
              From AI and automation to web, mobile, and growth — each service is delivered with the same standard: clarity, quality, and measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Cards ── */}
      <section className="py-12 md:py-20 bg-zinc-50 relative overflow-hidden">
        <BackgroundGrid />
        <div className="container space-y-10 md:space-y-14 relative z-10">
          {servicesLoading ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center gap-3 text-zinc-400">
                <div className="w-5 h-5 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
                <span className="text-sm font-medium tracking-wide">Loading services…</span>
              </div>
            </div>
          ) : (
            services.map((service, i) => {
              const isEven = i % 2 === 0;
              const index = String(i + 1).padStart(2, "0");
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];

              return (
                <motion.article
                  key={service._id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  custom={i}
                  className={`group grid md:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 bg-white border border-zinc-200/60 hover:border-emerald-400/40`}
                  style={{
                    boxShadow: "0 2px 20px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.04)",
                    transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s cubic-bezier(0.22,1,0.36,1), border-color 0.3s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 20px 60px rgba(0,0,0,0.09), 0 0 0 1px rgba(16,185,129,0.15), 0 0 40px rgba(16,185,129,0.10)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 2px 20px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* ── Content ── */}
                  <div
                    className={`space-y-6 p-8 md:p-10 lg:p-12 flex flex-col justify-center ${!isEven ? "md:order-2" : ""}`}
                  >
                    {/* number + icon row */}
                    <div className="flex items-center gap-4">
                      <span
                        className="font-display text-5xl font-black tracking-tighter tabular-nums leading-none"
                        style={{
                          WebkitTextStroke: "1.5px rgba(16,185,129,0.25)",
                          color: "transparent",
                        }}
                      >
                        {index}
                      </span>
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(5,150,105,0.06) 100%)",
                          border: "1px solid rgba(16,185,129,0.2)",
                          boxShadow: "0 0 0 0 rgba(52,211,153,0)",
                          transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
                        }}
                      >
                        {IconComponent && (
                          <IconComponent size={20} className="text-emerald-600" strokeWidth={1.75} />
                        )}
                      </div>
                    </div>

                    <div>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-3 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-zinc-500 text-sm sm:text-[15px] leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>

                    {/* feature tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature: string) => (
                        <span
                          key={feature}
                          className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide bg-zinc-100 text-zinc-500 border border-zinc-200/80 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors duration-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-1">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500 transition-colors group/link"
                      >
                        <span className="border-b border-emerald-600/30 group-hover/link:border-emerald-500 transition-colors pb-0.5">
                          Get started
                        </span>
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* ── Image ── */}
                  <div
                    className={`relative overflow-hidden ${!isEven ? "md:order-1" : ""} min-h-[280px] md:min-h-0`}
                    style={{ background: "linear-gradient(135deg, #f0fdf4, #d1fae5)" }}
                  >
                    {service.image?.asset?._ref ? (
                      <img
                        src={`https://cdn.sanity.io/images/v7q2gijs/production/${service.image.asset._ref
                          .replace("image-", "")
                          .replace("-jpg", ".jpg")
                          .replace("-png", ".png")
                          .replace("-webp", ".webp")}`}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-24 h-24 rounded-3xl flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.08))",
                            border: "1px solid rgba(16,185,129,0.2)",
                          }}
                        >
                          {IconComponent && <IconComponent size={40} className="text-emerald-600" strokeWidth={1.5} />}
                        </div>
                      </div>
                    )}
                    {/* gradient overlay */}
                    <div
                      className={`absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100`}
                      style={{
                        background: isEven
                          ? "linear-gradient(to left, rgba(255,255,255,0.12), transparent)"
                          : "linear-gradient(to right, rgba(255,255,255,0.12), transparent)",
                      }}
                    />
                    {/* index watermark */}
                    <span
                      className="absolute bottom-4 right-5 font-display text-8xl font-black pointer-events-none select-none leading-none opacity-[0.07]"
                      style={{ color: "#059669" }}
                    >
                      {index}
                    </span>
                  </div>
                </motion.article>
              );
            })
          )}
        </div>
      </section>

      {/* ── Projects Showcase ── */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #070e0c 0%, #0b1a13 100%)" }}
      >
        <BackgroundGrid color="rgba(52,211,153,1)" size="64px" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)" }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="[&_h2]:text-white [&_p]:text-white/55 [&_*]:text-white"
          >
            <SectionHeading title="Recent Projects" subtitle="See our latest work in action." />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {projectsLoading
              ? [...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden animate-pulse"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="h-52 bg-white/5" />
                    <div className="p-6 space-y-3">
                      <div className="h-3.5 bg-white/8 rounded-full w-3/4" />
                      <div className="h-2.5 bg-white/5 rounded-full w-full" />
                      <div className="h-2.5 bg-white/5 rounded-full w-4/5" />
                    </div>
                  </div>
                ))
              : projects?.slice(0, 3).map((project, i) => (
                  <motion.div
                    key={project._id}
                    variants={itemVariants}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
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
                    {/* image */}
                    <div className="relative h-52 overflow-hidden bg-black/20">
                      <img
                        src={
                          project.image?.asset?._ref
                            ? `https://cdn.sanity.io/images/v7q2gijs/production/${project.image.asset._ref
                                .replace("image-", "")
                                .replace("-jpg", ".jpg")
                                .replace("-png", ".png")
                                .replace("-webp", ".webp")}`
                            : "/placeholder.jpg"
                        }
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-107 opacity-75 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070e0c] via-[#070e0c]/30 to-transparent" />
                      {project.category && (
                        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-black/30 border border-white/10 text-white/45 font-medium backdrop-blur-md">
                          {project.category.title}
                        </span>
                      )}
                    </div>

                    {/* body */}
                    <div className="p-6 pt-5">
                      <h3 className="font-sans font-semibold text-[13px] text-white mb-1.5 tracking-wider uppercase">
                        {project.title}
                      </h3>
                      <p className="text-[12px] text-white/55 mb-4 leading-relaxed line-clamp-2 font-light">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack?.slice(0, 3).map((tech: string) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] text-white/65 font-medium tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {/* horizontal rule */}
                      <div className="h-px bg-white/[0.10] mb-4" />
                      <div className="flex items-center gap-4">
                        <Link
                          to={`/projects/${project.slug.current}`}
                          className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold hover:text-emerald-300 transition-colors uppercase tracking-widest"
                        >
                          View Details <ExternalLink size={11} />
                        </Link>
                        <button className="ml-auto inline-flex items-center gap-1.5 text-[11px] px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 font-semibold hover:bg-emerald-500/25 hover:text-emerald-200 transition-all uppercase tracking-widest">
                          Live Demo <ArrowRight size={11} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
          </motion.div>

          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-9 py-3.5 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.35)] tracking-wide"
            >
              View All Projects <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container">
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "linear-gradient(135deg, #060d0b 0%, #0d2a1c 45%, #0f3d28 100%)",
            }}
          >
            {/* grid */}
            <BackgroundGrid color="rgba(52,211,153,1)" size="40px" className="absolute inset-0 opacity-[0.05] pointer-events-none" />
            {/* glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.15) 0%, transparent 65%)" }}
            />
            {/* top border accent */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.5), transparent)" }}
            />

            <div className="relative px-8 py-16 md:px-20 md:py-24 text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-emerald-300 text-[11px] font-bold tracking-widest uppercase mb-7 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                Let's Work Together
              </motion.span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.05]">
                Need a custom solution?
              </h2>
              <p className="text-white/40 text-base sm:text-lg max-w-lg mx-auto mb-12 font-light leading-relaxed">
                Let's discuss how we can help transform your business with AI and modern software.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <button className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] tracking-wide">
                    Get Started <ArrowRight size={15} />
                  </button>
                </Link>
                <Link to="/projects">
                  <button className="inline-flex items-center gap-2.5 border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white/80 font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300 backdrop-blur-sm tracking-wide">
                    View Projects
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;