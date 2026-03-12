import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { posts } from "@/data/posts";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Article Not Found</h1>
          <Link to="/blog" className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const related = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pt-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
      >
        <ParticleMeteorBackground />
        <div className="container relative py-16 z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-white font-medium mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
            <span className="inline-flex items-center gap-1.5"><User size={14} /> {post.author}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <div className="rounded-2xl overflow-hidden border border-border/50">
            <img src={post.image} alt={post.title} className="w-full h-64 sm:h-80 md:h-[24rem] object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 border-t border-border/50">
          <div className="container max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wide mb-8">
              Related <span className="text-emerald-500">Articles</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="group rounded-xl border border-border/50 bg-card overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
                  <div className="h-40 overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                    <h3 className="font-semibold mt-1 mb-2 group-hover:text-emerald-500 transition-colors">{r.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{r.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-2xl border border-border/50 bg-card p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Want to learn more?</h2>
            <p className="text-muted-foreground mb-6">Get in touch to discuss how we can help with your project.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
