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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 w-48 bg-muted rounded mb-4 mx-auto" />
          <div className="h-4 w-32 bg-muted rounded mx-auto" />
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <ShieldCheck size={40} className="text-emerald-500" />
          </div>
          <h1 className="font-display text-4xl mb-4">
            {error ? "Error Loading Content" : "Project Not Found"}
          </h1>
          {error && <p className="text-muted-foreground mb-6">{error}</p>}
          <Link to="/projects" className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = project.image?.asset?._ref 
    ? `https://cdn.sanity.io/images/v7q2gijs/production/${project.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` 
    : '/placeholder.jpg';

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pt-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
      >
        <ParticleMeteorBackground />
        <div className="container relative py-16 z-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          {project.category && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium">
                {project.category.title}
              </span>
            </div>
          )}
          <h1 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-white font-medium mb-4">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm pt-2">
            {project.projectUrl && (
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
              >
                <ExternalLink size={14} /> Live Project
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
              >
                <Github size={14} /> Source Code
              </a>
            )}
            <span className="inline-flex items-center gap-1.5 text-white/40">
              <Layout size={14} /> Production Ready
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <div className="rounded-2xl overflow-hidden border border-border/50">
            <img 
              src={imageUrl} 
              alt={project.title} 
              className="w-full h-64 sm:h-80 md:h-[24rem] object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-3xl">
          <div className="prose prose-invert prose-emerald max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <p className="text-muted-foreground">
              Our approach focused on creating a seamless user experience while maintaining high-performance standards. Every detail was meticulously planned to ensure that the final product not only met but exceeded business expectations.
            </p>
          </div>

          {project.techStack && project.techStack.length > 0 && (
            <div className="space-y-6 pt-8 border-t border-border/50">
              <h3 className="text-xl font-display uppercase tracking-widest font-medium text-foreground">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium"
                  >
                    <Cpu size={14} className="text-emerald-500/60" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-muted/30 border-t border-border/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-2xl border border-border/50 bg-card p-10 md:p-14 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to transform your vision?</h2>
            <p className="text-muted-foreground mb-6">Join the ranks of leading enterprises that trust YarnixLabs to deliver cutting-edge AI and software excellence.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors shadow-sm">
              Start Collaboration <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
