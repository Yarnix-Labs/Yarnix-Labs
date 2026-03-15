import { Calendar, ArrowRight, Clock, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedBook from "@/components/AnimatedBook";
import { useBlog } from "@/hooks/useBlog";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const Blog = () => {
  const {
    featuredPost,
    otherPosts,
    categories,
    loading,
    error,
    selectedCategory,
    setSelectedCategory,
  } = useBlog();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getReadTime = (content: any[] | undefined) => {
    if (!content) return "5 min read";
    const wordsPerMinute = 200;
    const wordCount =
      content?.reduce((acc, block) => {
        if (block._type === "block" && block.children) {
          return (
            acc +
            block.children.reduce((wordAcc: number, child: any) => {
              return wordAcc + (child.text?.split(" ").length || 0);
            }, 0)
          );
        }
        return acc;
      }, 0) || 0;
    return `${Math.max(1, Math.ceil(wordCount / wordsPerMinute))} min read`;
  };

  const sanityImg = (ref: string) =>
    `https://cdn.sanity.io/images/v7q2gijs/production/${ref
      .replace("image-", "")
      .replace("-jpg", ".jpg")
      .replace("-png", ".png")
      .replace("-webp", ".webp")}`;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-900 mb-2">Error loading posts</h2>
          <p className="text-zinc-400 font-light">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="antialiased">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[450px] sm:min-h-[55svh] flex items-center pt-20 text-white overflow-hidden"
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
              Knowledge Hub
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.92] tracking-tight text-white font-semibold"
            >
              Latest{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)" }}
              >
                Insights
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/50 leading-relaxed max-w-xl font-light"
            >
              Stay updated with our latest articles, tutorials, and industry insights on AI and software development.
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
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <AnimatedBook />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section className="py-10 border-b border-zinc-200/60 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2.5 justify-center">
            <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-semibold tracking-widest uppercase mr-1">
              <Filter size={13} className="text-emerald-500/70" />
              Filter
            </div>

            <button
              onClick={() => setSelectedCategory(null)}
              className="px-4 py-2 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-300"
              style={{
                background: selectedCategory === null ? "rgba(16,185,129,1)" : "rgba(0,0,0,0.04)",
                border: selectedCategory === null ? "1px solid rgba(52,211,153,0.4)" : "1px solid rgba(0,0,0,0.08)",
                color: selectedCategory === null ? "#fff" : "rgba(0,0,0,0.45)",
                boxShadow: selectedCategory === null ? "0 0 18px rgba(52,211,153,0.22)" : "none",
              }}
            >
              All Posts
            </button>

            {categories.map((category) => {
              const active = selectedCategory === category.slug?.current;
              return (
                <button
                  key={category._id}
                  onClick={() => setSelectedCategory(category.slug?.current || null)}
                  className="px-4 py-2 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-300"
                  style={{
                    background: active ? "rgba(16,185,129,1)" : "rgba(0,0,0,0.04)",
                    border: active ? "1px solid rgba(52,211,153,0.4)" : "1px solid rgba(0,0,0,0.08)",
                    color: active ? "#fff" : "rgba(0,0,0,0.45)",
                    boxShadow: active ? "0 0 18px rgba(52,211,153,0.22)" : "none",
                  }}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="py-20 md:py-28 bg-zinc-50/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <SectionHeading
              title={
                selectedCategory
                  ? `${categories.find((c) => c.slug?.current === selectedCategory)?.title || "Category"} Articles`
                  : "All Articles"
              }
              subtitle={
                selectedCategory
                  ? `Posts in ${categories.find((c) => c.slug?.current === selectedCategory)?.title || "category"}.`
                  : "Deep dives into technology and innovation."
              }
            />
          </motion.div>

          {loading ? (
            <div className="space-y-10 mt-10">
              {/* featured skeleton */}
              <div className="animate-pulse rounded-3xl overflow-hidden bg-white border border-zinc-200/60">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-80 bg-zinc-100" />
                  <div className="p-10 space-y-4">
                    <div className="h-5 bg-zinc-100 rounded-full w-1/4" />
                    <div className="h-7 bg-zinc-100 rounded-full w-full" />
                    <div className="h-4 bg-zinc-100 rounded-full w-full" />
                    <div className="h-4 bg-zinc-100 rounded-full w-3/4" />
                  </div>
                </div>
              </div>
              {/* grid skeleton */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse rounded-2xl overflow-hidden bg-white border border-zinc-200/60">
                    <div className="h-48 bg-zinc-100" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-zinc-100 rounded-full w-3/4" />
                      <div className="h-3 bg-zinc-100 rounded-full w-1/2" />
                      <div className="h-3 bg-zinc-100 rounded-full w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : otherPosts.length === 0 && !featuredPost ? (
            <motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-zinc-400 text-sm font-light mb-4">No posts found in this category.</p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-2 text-[11px] text-emerald-600 font-semibold hover:text-emerald-500 transition-colors uppercase tracking-widest"
              >
                View all posts <ArrowRight size={12} />
              </button>
            </motion.div>
          ) : (
            <div className="space-y-10 mt-10">

              {/* ── Featured Post ── */}
              {featuredPost && featuredPost.slug?.current && (
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
                >
                  <Link
                    to={`/blog/${featuredPost.slug.current}`}
                    className="group block rounded-3xl overflow-hidden bg-white border border-zinc-200/60 transition-all duration-500 hover:-translate-y-1"
                    style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.25)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 20px 60px rgba(0,0,0,0.09), 0 0 0 1px rgba(16,185,129,0.12), 0 0 40px rgba(16,185,129,0.08)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(228,228,231,0.6)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(0,0,0,0.04)";
                    }}
                  >
                    <div className="grid md:grid-cols-2">
                      {/* image */}
                      <div className="relative h-64 md:h-full overflow-hidden bg-zinc-100 min-h-[280px]">
                        <img
                          src={featuredPost.coverImage?.asset?._ref ? sanityImg(featuredPost.coverImage.asset._ref) : "/placeholder.jpg"}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 hidden md:block pointer-events-none" />
                        {/* watermark index */}
                        <span
                          className="absolute bottom-4 right-5 font-display text-8xl font-black pointer-events-none select-none leading-none opacity-[0.07]"
                          style={{ color: "#059669" }}
                        >
                          01
                        </span>
                      </div>

                      {/* content */}
                      <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center space-y-5">
                        {featuredPost.featured && (
                          <span className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-600 text-[11px] font-bold tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Featured
                          </span>
                        )}

                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight leading-tight">
                          {featuredPost.title}
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed font-light line-clamp-3">
                          {featuredPost.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                          <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 font-medium uppercase tracking-widest">
                            <Calendar size={11} className="text-emerald-500/60" />
                            {formatDate(featuredPost.publishedAt)}
                          </span>
                          <span className="w-px h-3 bg-zinc-200" />
                          <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 font-medium uppercase tracking-widest">
                            <Clock size={11} className="text-emerald-500/60" />
                            {getReadTime(featuredPost.content)}
                          </span>
                        </div>

                        <div className="pt-1">
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:text-emerald-500 transition-colors group/link">
                            <span className="border-b border-emerald-600/30 group-hover:border-emerald-500 transition-colors pb-0.5">
                              Read Article
                            </span>
                            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* ── Post Grid ── */}
              {otherPosts.length > 0 && (
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {otherPosts.map((post) =>
                    post.slug?.current ? (
                      <motion.div key={post.slug.current} variants={itemVariants}>
                        <Link
                          to={`/blog/${post.slug.current}`}
                          className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200/60 block transition-all duration-500 hover:-translate-y-2"
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

                          {/* body */}
                          <div className="p-6">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <span className="inline-flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium uppercase tracking-widest">
                                <Calendar size={10} className="text-emerald-500/60" />
                                {formatDate(post.publishedAt)}
                              </span>
                              <span className="w-px h-2.5 bg-zinc-200" />
                              <span className="inline-flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium uppercase tracking-widest">
                                <Clock size={10} className="text-emerald-500/60" />
                                {getReadTime(post.content)}
                              </span>
                            </div>

                            <h3 className="font-sans font-semibold text-sm text-zinc-800 mb-2 tracking-wide uppercase line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-xs text-zinc-400 mb-5 leading-relaxed line-clamp-2 font-light">
                              {post.excerpt}
                            </p>

                            <div className="h-px bg-zinc-100 mb-4" />

                            <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-600/70 font-semibold group-hover:text-emerald-600 transition-colors uppercase tracking-widest">
                              Read More
                              <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ) : null
                  )}
                </motion.div>
              )}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Blog;