import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedBook from "@/components/AnimatedBook";
import { posts } from "@/data/posts";

const Blog = () => (
  <div>
    {/* Hero */}
    <section
      className="relative min-h-[50vh] flex items-center pt-20 text-white overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
    >
      <ParticleMeteorBackground />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16" style={{ zIndex: 2 }}>
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Knowledge Hub
          </span>
          <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-white font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Latest <span className="text-emerald-400">Insights</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Stay updated with our latest articles, tutorials, and industry insights on AI and software development.
          </p>
        </div>
        <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <AnimatedBook />
        </div>
      </div>
    </section>

    {/* Featured Post */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading title="All Articles" subtitle="Deep dives into technology and innovation." />

        {/* Featured - first post large */}
        <Link to={`/blog/${posts[0].slug}`} className="group block rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 mb-10">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-full overflow-hidden">
              <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden md:block" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-flex self-start text-xs px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium mb-4">
                Featured
              </span>
              <h3 className="font-bold text-2xl mb-3">{posts[0].title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{posts[0].desc}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
                <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> {posts[0].date}</span>
                <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {posts[0].readTime}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors self-start">
                Read Article <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((b) => (
            <Link to={`/blog/${b.slug}`} key={b.slug} className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 block" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}>
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-emerald-500/20 transition-colors duration-500 pointer-events-none z-10" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05), 0 0 40px -10px rgba(16,185,129,0.1)' }} />

              <div className="relative h-48 overflow-hidden bg-black/20">
                <img src={b.image} alt={b.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1411] via-[#0b1411]/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/50 font-medium backdrop-blur-md">
                  {b.category}
                </span>
              </div>
              <div className="p-6" style={{ background: 'linear-gradient(180deg, #0f1f19 0%, #0b1411 100%)' }}>
                <div className="flex items-center gap-4 text-[10px] text-white/25 mb-3 uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1"><Calendar size={10} /> {b.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={10} /> {b.readTime}</span>
                </div>
                <h3 className="font-sans font-semibold text-sm text-white/80 mb-1.5 tracking-wide uppercase">{b.title}</h3>
                <p className="text-xs text-white/30 mb-4 leading-relaxed line-clamp-2">{b.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400/70 font-medium group-hover:text-emerald-300 transition-colors uppercase tracking-wider">
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
