import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import { useBlogPost } from "@/hooks/useBlog";
import { PortableText } from "@portabletext/react";
import BackgroundGrid from "@/components/BackgroundGrid";

const BlogPost = () => {
  const { slug } = useParams();
  const { post, loading, error } = useBlogPost(slug || "");

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 text-zinc-400">
            <div className="w-5 h-5 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
            <span className="text-sm font-medium tracking-wide">Loading article…</span>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center p-8">
          <h1 className="font-display text-4xl font-bold text-zinc-900 mb-4">
            {error ? "Error Loading Article" : "Article Not Found"}
          </h1>
          {error && <p className="text-zinc-400 mb-6 font-light">{error}</p>}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 font-semibold text-sm transition-colors"
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="antialiased">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[50vh] flex items-end pt-20 text-white overflow-hidden"
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
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)" }}
        />

        <div className="container relative py-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/35 hover:text-white/65 text-xs font-semibold uppercase tracking-widest mb-7 transition-colors group"
            >
              <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              Back to Blog
            </Link>
          </motion.div>

          {post.categories && post.categories.length > 0 && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-widest uppercase mb-5 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {post.categories[0].title}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-white font-medium mb-6 max-w-3xl"
          >
            {post.title}
          </motion.h1>

          {/* meta row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-5"
          >
            {post.author && (
              <span className="inline-flex items-center gap-2 text-[11px] text-white/40 font-medium uppercase tracking-widest">
                <User size={12} className="text-emerald-400/60" />
                {post.author.name}
              </span>
            )}
            <span
              className="w-px h-3 bg-white/15 hidden sm:block"
            />
            <span className="inline-flex items-center gap-2 text-[11px] text-white/40 font-medium uppercase tracking-widest">
              <Calendar size={12} className="text-emerald-400/60" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="w-px h-3 bg-white/15 hidden sm:block" />
            <span className="inline-flex items-center gap-2 text-[11px] text-white/40 font-medium uppercase tracking-widest">
              <Clock size={12} className="text-emerald-400/60" />
              {getReadTime(post.content)}
            </span>
          </motion.div>

          {/* bottom shimmer line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="origin-left h-px w-48 mt-8"
            style={{ background: "linear-gradient(90deg, rgba(52,211,153,0.5) 0%, transparent 100%)" }}
          />
        </div>
      </section>

      {/* ── Featured Image ── */}
      {post.coverImage?.asset?._ref && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border border-zinc-200/60"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
            >
              <img
                src={`https://cdn.sanity.io/images/v7q2gijs/production/${post.coverImage.asset._ref
                  .replace("image-", "")
                  .replace("-jpg", ".jpg")
                  .replace("-png", ".png")
                  .replace("-webp", ".webp")}`}
                alt={post.title}
                className="w-full h-64 sm:h-80 md:h-[24rem] object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Content ── */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="prose prose-zinc prose-emerald max-w-none
              prose-headings:font-display prose-headings:tracking-tight prose-headings:text-zinc-900
              prose-p:text-zinc-500 prose-p:leading-relaxed prose-p:font-light
              prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-500
              prose-strong:text-zinc-800 prose-strong:font-semibold
              prose-code:text-emerald-700 prose-code:bg-emerald-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-medium
              prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
              prose-blockquote:border-l-emerald-500 prose-blockquote:text-zinc-400 prose-blockquote:font-light prose-blockquote:not-italic
              prose-hr:border-zinc-200
              prose-img:rounded-xl prose-img:border prose-img:border-zinc-200/60"
          >
            {post.content && <PortableText value={post.content} />}
          </motion.div>
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
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-emerald-300 text-[11px] font-bold tracking-widest uppercase mb-6 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                Let's Talk
              </motion.span>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                Want to learn more?
              </h2>
              <p className="text-white/40 mb-10 font-light leading-relaxed">
                Get in touch to discuss how we can help with your project.
              </p>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-9 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] tracking-wide">
                  Contact Us <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default BlogPost;