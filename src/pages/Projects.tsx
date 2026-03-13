import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedCubes from "@/components/AnimatedCubes";
import { useProjects } from "@/hooks/useProjects";

const Projects = () => {
  const { projects, categories, loading, selectedCategory, setSelectedCategory } = useProjects();

  return (
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
              Our Work
            </span>
            <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-white font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Our <span className="text-emerald-400">Projects</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A showcase of our work across AI, automation, and software engineering that drives real business impact.
            </p>
          </div>
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <AnimatedCubes />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-border/10">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter size={16} />
              <span>Filter by:</span>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-emerald-500 text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category._id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category._id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
                style={{
                  backgroundColor: selectedCategory === category._id ? category.color || '#10b981' : undefined,
                }}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading 
            title={selectedCategory ? `${categories.find(c => c._id === selectedCategory)?.title} Projects` : "Featured Projects"} 
            subtitle={selectedCategory ? `Projects in ${categories.find(c => c._id === selectedCategory)?.title} category.` : "Explore some of our recent work."} 
          />
          
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-52 bg-muted rounded-t-2xl" />
                  <div className="p-6 space-y-3 bg-card rounded-b-2xl">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-emerald-500 hover:text-emerald-600 font-medium"
              >
                View all projects
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p) => (
                <div key={p.slug?.current || p._id} className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}>
                  <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-emerald-500/20 transition-colors duration-500 pointer-events-none z-10" />
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05), 0 0 40px -10px rgba(16,185,129,0.1)' }} />

                  <div className="relative h-52 overflow-hidden bg-black/20">
                    <img 
                      src={p.image?.asset?._ref ? `https://cdn.sanity.io/images/v7q2gijs/production/${p.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : '/placeholder.jpg'} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1411] via-[#0b1411]/40 to-transparent" />
                    <span 
                      className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/50 font-medium backdrop-blur-md"
                      style={{ 
                        backgroundColor: p.category?.color ? `${p.category.color}20` : undefined,
                        borderColor: p.category?.color ? `${p.category.color}40` : undefined,
                        color: p.category?.color || undefined
                      }}
                    >
                      {p.category?.title || 'Uncategorized'}
                    </span>
                  </div>
                  <div className="p-6" style={{ background: 'linear-gradient(180deg, #0f1f19 0%, #0b1411 100%)' }}>
                    <h3 className="font-sans font-semibold text-sm text-white/80 mb-1.5 tracking-wide uppercase">{p.title}</h3>
                    <p className="text-xs text-white/30 mb-4 leading-relaxed line-clamp-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.techStack?.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40 font-medium">{t}</span>
                      ))}
                      {p.techStack && p.techStack.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40 font-medium">+{p.techStack.length - 3}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <Link to={`/projects/${p.slug?.current}`} className="inline-flex items-center gap-1.5 text-xs text-emerald-400/70 font-medium hover:text-emerald-300 transition-colors uppercase tracking-wider">
                        View Details <ExternalLink size={12} />
                      </Link>
                      {p.projectUrl && (
                        <a 
                          href={p.projectUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/80 font-medium hover:bg-emerald-500/20 hover:text-emerald-300 transition-all uppercase tracking-wider"
                        >
                          Live Demo <ArrowRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-2xl border border-border/50 bg-card p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Have a project in mind?</h2>
            <p className="text-muted-foreground mb-6">Let's build something amazing together.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors">
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
