import { Link } from "react-router-dom";
import { ArrowRight, Bot, Globe, Cog, Server, Smartphone, Search, Megaphone, ExternalLink, Calendar, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedEarth from "@/components/AnimatedEarth";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import { useProjects } from "@/hooks/useProjects";
import { useBlog } from "@/hooks/useBlog";
import { useFeaturedTestimonials } from "@/hooks/useTestimonials";
import { useServices } from "@/hooks/useServices";
import BackgroundGrid from "@/components/BackgroundGrid";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const Index = () => {
  const { projects, loading: projectsLoading } = useProjects();
  const { posts, loading: blogLoading } = useBlog();
  const { testimonials, loading: testimonialsLoading } = useFeaturedTestimonials(3);
  const { services, loading: servicesLoading } = useServices();

  const iconMap: Record<string, React.ElementType> = {
    Bot, Cog, Globe, Server, Smartphone, Search, Megaphone,
  };

  const featuredProjects = projects?.slice(0, 3) || [];
  const featuredPosts = posts?.slice(0, 3) || [];

  const sanityImg = (ref: string) =>
    `https://cdn.sanity.io/images/v7q2gijs/production/${ref
      .replace("image-", "")
      .replace("-jpg", ".jpg")
      .replace("-png", ".png")
      .replace("-webp", ".webp")}`;

  return (
    <div className="antialiased">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[100svh] flex items-center pt-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #070e0c 0%, #0b2318 50%, #0f3d28 100%)" }}
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
        {/* radial glow */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)" }}
        />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16" style={{ zIndex: 2 }}>
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              AI Software Company
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-white font-medium"
            >
              Building Smart{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)" }}
              >
                AI & Software
              </span>{" "}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-xl font-light"
            >
              We help businesses automate workflows, build intelligent systems, and scale faster with custom AI and modern software solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link to="/projects">
                <button className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_32px_rgba(52,211,153,0.4)] tracking-wide">
                  View Our Projects <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2.5 border border-white/15 bg-white/[0.05] hover:bg-white/[0.09] text-white/80 font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300 backdrop-blur-sm tracking-wide">
                  Get Free Consultation
                </button>
              </Link>
            </motion.div>

            {/* shimmer line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="origin-left h-px w-40"
              style={{ background: "linear-gradient(90deg, rgba(52,211,153,0.5) 0%, transparent 100%)" }}
            />
          </div>

          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <AnimatedEarth />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-white">
        <BackgroundGrid />
        <div
          className="absolute right-0 top-0 w-[520px] h-[520px] -translate-y-1/3 translate-x-1/3 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 65%)" }}
        />

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 text-[11px] font-bold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                What We Do
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                Our <span className="text-emerald-600">Services</span>
              </h2>
            </motion.div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 font-semibold text-xs uppercase tracking-widest transition-colors shrink-0 group"
            >
              View All Services
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {servicesLoading
              ? [...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse rounded-3xl overflow-hidden border border-zinc-200/60 bg-white">
                    <div className="h-52 bg-zinc-100" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-zinc-100 rounded-full w-3/4" />
                      <div className="h-3 bg-zinc-100 rounded-full w-full" />
                      <div className="h-3 bg-zinc-100 rounded-full w-4/5" />
                    </div>
                  </div>
                ))
              : services.slice(0, 3).map((s) => {
                  const IconComponent = iconMap[s.icon] || Bot;
                  const imageUrl = s.image?.asset?._ref
                    ? `https://cdn.sanity.io/images/v7q2gijs/production/${s.image.asset._ref.replace("image-", "").replace(/-(\w+)$/, ".$1")}`
                    : null;

                  return (
                    <motion.div key={s._id} variants={itemVariants}>
                      <Link
                        to="/services"
                        className="group relative rounded-3xl overflow-hidden border border-zinc-200/60 bg-white block transition-all duration-500 hover:-translate-y-2"
                        style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.25)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.09), 0 0 40px rgba(16,185,129,0.10)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(228,228,231,0.6)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                        }}
                      >
                        <div className="relative h-52 overflow-hidden">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={s.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                              <IconComponent size={52} className="text-emerald-300" strokeWidth={1.5} />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                          <div
                            className="absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                            style={{
                              background: "rgba(255,255,255,0.10)",
                              backdropFilter: "blur(12px)",
                              border: "1px solid rgba(255,255,255,0.18)",
                            }}
                          >
                            <IconComponent size={18} className="text-white" strokeWidth={1.75} />
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-semibold text-[13px] uppercase tracking-wider text-zinc-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                            {s.title}
                          </h3>
                          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 font-light">{s.description}</p>
                          <span className="inline-flex items-center gap-1.5 mt-4 text-[11px] font-semibold text-emerald-600 uppercase tracking-widest group-hover:gap-2.5 transition-all duration-300">
                            Learn more <ArrowRight size={11} />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
          </motion.div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #070e0c 0%, #0b1a13 100%)" }}
      >
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="[&_h2]:text-white [&_p]:text-white/50"
            >
              <SectionHeading title="Our Projects" subtitle="Explore some of our recent work across AI and software development." />
            </motion.div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-emerald-400/70 hover:text-emerald-300 font-semibold text-xs uppercase tracking-widest transition-colors shrink-0 group"
            >
              View All <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {projectsLoading
              ? [...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="h-52 bg-white/5" />
                    <div className="p-6 space-y-3">
                      <div className="h-3.5 bg-white/8 rounded-full w-3/4" />
                      <div className="h-2.5 bg-white/5 rounded-full w-full" />
                    </div>
                  </div>
                ))
              : featuredProjects.map((project) => (
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
                    <div className="relative h-52 overflow-hidden bg-black/20">
                      <img
                        src={project.image?.asset?._ref ? sanityImg(project.image.asset._ref) : "/placeholder.jpg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070e0c] via-[#070e0c]/30 to-transparent" />
                      {project.category && (
                        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-black/30 border border-white/10 text-white/45 font-medium backdrop-blur-md">
                          {project.category.title}
                        </span>
                      )}
                    </div>
                    <div className="p-6 pt-5">
                      <h3 className="font-sans font-semibold text-[13px] text-white mb-1.5 tracking-wider uppercase">
                        {project.title}
                      </h3>
                      <p className="text-[12px] text-white/55 mb-4 leading-relaxed line-clamp-2 font-light">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack?.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.09] text-white/55 font-medium tracking-wide">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="h-px bg-white/[0.08] mb-4" />
                      <div className="flex items-center gap-4">
                        <Link
                          to={`/projects/${project.slug.current}`}
                          className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold hover:text-emerald-300 transition-colors uppercase tracking-widest"
                        >
                          View Details <ExternalLink size={11} />
                        </Link>
                        <button className="ml-auto inline-flex items-center gap-1.5 text-[11px] px-3.5 py-1.5 rounded-full bg-emerald-500/12 border border-emerald-500/20 text-emerald-300 font-semibold hover:bg-emerald-500/20 transition-all uppercase tracking-widest">
                          Live Demo <ArrowRight size={11} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
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

      {/* ── Blog ── */}
      <section className="py-20 md:py-28 bg-zinc-50/50 relative overflow-hidden">
        <BackgroundGrid />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 text-[11px] font-bold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Knowledge Hub
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                Latest <span className="text-emerald-600">Insights</span>
              </h2>
            </motion.div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 font-semibold text-xs uppercase tracking-widest transition-colors shrink-0 group"
            >
              View All Articles <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {blogLoading
              ? [...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse rounded-2xl overflow-hidden bg-white border border-zinc-200/60">
                    <div className="h-48 bg-zinc-100" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-zinc-100 rounded-full w-3/4" />
                      <div className="h-3 bg-zinc-100 rounded-full w-full" />
                    </div>
                  </div>
                ))
              : featuredPosts.map((post) => (
                  <motion.div key={post.slug.current} variants={itemVariants}>
                    <Link
                      to={`/blog/${post.slug.current}`}
                      className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200/60 block transition-all duration-500 hover:-translate-y-2"
                      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.25)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.10), 0 0 32px rgba(16,185,129,0.07)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(228,228,231,0.6)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                      }}
                    >
                      <div className="relative h-48 overflow-hidden bg-zinc-100">
                        <img
                          src={post.coverImage?.asset?._ref ? sanityImg(post.coverImage.asset._ref) : "/placeholder.jpg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                        {post.categories && post.categories.length > 0 && (
                          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/75 border border-white/50 text-zinc-600 font-semibold backdrop-blur-md">
                            {post.categories[0].title}
                          </span>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="inline-flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium uppercase tracking-widest">
                            <Calendar size={10} className="text-emerald-500/60" />
                            {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </span>
                          <span className="w-px h-2.5 bg-zinc-200" />
                          <span className="inline-flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium uppercase tracking-widest">
                            <Clock size={10} className="text-emerald-500/60" />
                            {Math.max(1, Math.ceil(((post.content?.reduce((acc: number, block: any) => {
                              if (block._type === "block" && block.children) {
                                return acc + block.children.reduce((w: number, c: any) => w + (c.text?.split(" ").length || 0), 0);
                              }
                              return acc;
                            }, 0) || 0) / 200)))} min read
                          </span>
                        </div>
                        <h3 className="font-sans font-semibold text-sm text-zinc-800 mb-2 tracking-wide uppercase line-clamp-2">{post.title}</h3>
                        <p className="text-xs text-zinc-400 mb-5 leading-relaxed line-clamp-2 font-light">{post.excerpt}</p>
                        <div className="h-px bg-zinc-100 mb-4" />
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-600/70 font-semibold group-hover:text-emerald-600 transition-colors uppercase tracking-widest">
                          Read More <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-9 py-3.5 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.35)] tracking-wide"
            >
              View All Articles <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #070e0c 0%, #0b1a13 100%)" }}
      >
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
            className="mb-12 [&_h2]:text-white [&_p]:text-white/50"
          >
            <SectionHeading title="Client Testimonials" subtitle="What our clients say about working with us." />
          </motion.div>

          {testimonialsLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse rounded-2xl p-7 space-y-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex gap-1">{[...Array(5)].map((_, j) => <div key={j} className="w-3.5 h-3.5 bg-white/8 rounded-full" />)}</div>
                  <div className="h-2.5 bg-white/5 rounded-full w-full" />
                  <div className="h-2.5 bg-white/5 rounded-full w-4/5" />
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial._id}
                  variants={itemVariants}
                  className="rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2"
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
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={13} className={j < (testimonial.rating || 5) ? "text-yellow-400 fill-yellow-400" : "text-white/10"} />
                    ))}
                  </div>
                  <blockquote className="text-white/60 text-sm leading-relaxed mb-5 font-light line-clamp-4 italic">
                    "{testimonial.content || "No testimonial content available"}"
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
                      {testimonial.name?.charAt(0) || "?"}
                    </div>
                    <div>
                      <p className="font-semibold text-[13px] text-white/80 tracking-wide">{testimonial.name || "Anonymous"}</p>
                      <p className="text-[11px] text-white/35 tracking-wide">
                        {testimonial.role || "Client"}{testimonial.company ? ` · ${testimonial.company}` : ""}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        <BackgroundGrid />
        <div className="container max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 text-[11px] font-bold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight mb-5">
              About <span className="text-emerald-600">YarnixLabs</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 font-light text-base sm:text-lg">
              YarnixLabs is a forward-thinking AI and software development company dedicated to building intelligent solutions
              that empower businesses to thrive in the digital era. Our mission is to bridge the gap between cutting-edge technology
              and real-world business challenges.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 hover:text-emerald-500 uppercase tracking-widest transition-colors group"
            >
              <span className="border-b border-emerald-600/30 group-hover:border-emerald-500 transition-colors pb-0.5">
                Learn More About Us
              </span>
              <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
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

            <div className="relative px-8 py-16 md:px-20 md:py-24 text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-emerald-300 text-[11px] font-bold tracking-widest uppercase mb-7 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                Let's Build Together
              </motion.span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.05]">
                Ready to build your next AI solution?
              </h2>
              <p className="text-white/40 text-base sm:text-lg max-w-lg mx-auto mb-12 font-light leading-relaxed">
                Let's collaborate and turn your ideas into powerful software.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <button className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] tracking-wide">
                    Contact Us <ArrowRight size={15} />
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

export default Index;