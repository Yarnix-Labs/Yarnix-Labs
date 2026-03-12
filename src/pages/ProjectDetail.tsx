import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, Tag } from "lucide-react";
import { projects } from "@/data/projects";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Project Not Found</h1>
          <Link to="/projects" className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-end pt-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
      >
        <ParticleMeteorBackground />
        <div className="container relative py-16 z-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-4">
            {project.category}
          </span>
          <h1 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-white font-medium mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mb-6">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-white/50 font-medium">
                <Tag size={10} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="rounded-2xl overflow-hidden border border-border/50">
            <img src={project.image} alt={project.title} className="w-full h-64 sm:h-80 md:h-[28rem] object-cover" />
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { label: "Client", value: project.client },
              { label: "Duration", value: project.duration },
              { label: "Year", value: project.year },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border/50 bg-card p-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</span>
                <p className="font-semibold text-lg mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16">
            <div>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wide mb-4">
                The <span className="text-emerald-500">Challenge</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wide mb-4">
                Our <span className="text-emerald-500">Solution</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wide mb-6">
              Key <span className="text-emerald-500">Results</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.results.map((r) => (
                <div key={r} className="flex items-start gap-3 p-5 rounded-xl border border-border/50 bg-card">
                  <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-2xl border border-border/50 bg-card p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Want similar results?</h2>
            <p className="text-muted-foreground mb-6">Let's discuss how we can build something amazing for your business.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors">
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
