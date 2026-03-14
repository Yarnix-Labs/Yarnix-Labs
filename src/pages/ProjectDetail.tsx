import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Tag, ExternalLink, Github, Globe, Layout, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import { useProject } from "@/hooks/useProjects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const { project, loading, error } = useProject(slug || "");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b1411]">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mx-auto" />
          <p className="text-emerald-500/60 font-medium animate-pulse">Loading Project Details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b1411]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 max-w-md"
        >
          <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <ShieldCheck size={40} className="text-emerald-500" />
          </div>
          <h1 className="font-display text-4xl text-white mb-4 uppercase tracking-tight">
            {error ? "Error Loading Content" : "Project Not Found"}
          </h1>
          {error && <p className="text-white/40 mb-8 leading-relaxed">{error}</p>}
          <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all hover:scale-105">
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </motion.div>
      </div>
    );
  }

  const imageUrl = project.image?.asset?._ref 
    ? `https://cdn.sanity.io/images/v7q2gijs/production/${project.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` 
    : '/placeholder.jpg';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="bg-[#0b1411] text-white min-h-screen selection:bg-emerald-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute w-[800px] h-[800px] -top-[400px] -right-[400px] rounded-full bg-emerald-500/5 blur-[120px] animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bottom-0 -left-[300px] rounded-full bg-emerald-900/10 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        <ParticleMeteorBackground />
        <div className="container relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7 space-y-8">
              <motion.div variants={itemVariants}>
                <Link to="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white/80 hover:bg-white/10 transition-all group mb-4">
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
                  <span className="text-xs font-semibold uppercase tracking-widest">Back to Projects</span>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                {project.category && (
                  <span className="inline-block text-emerald-400 text-sm font-bold uppercase tracking-[0.2em] mb-2">
                    // {project.category.title}
                  </span>
                )}
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight font-medium uppercase tracking-tighter">
                  {project.title.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 === 1 ? 'text-emerald-500' : 'text-white'}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
              </motion.div>

              <motion.p variants={itemVariants} className="text-xl text-white/50 leading-relaxed max-w-2xl font-light">
                {project.description}
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                {project.projectUrl && (
                  <a 
                    href={project.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 text-[#0b1411] font-bold hover:bg-emerald-400 transition-all hover:scale-105 shadow-lg shadow-emerald-500/20 group"
                  >
                    View Live Project <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all hover:scale-105 group backdrop-blur-md"
                  >
                    Source Code <Github size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                )}
              </motion.div>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-500/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-3xl p-3 shadow-2xl">
                   <div className="aspect-[4/5] rounded-[24px] overflow-hidden">
                      <img src={imageUrl} alt={project.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-16"
            >
              {/* Image presentation for mobile/tablets */}
              <div className="lg:hidden rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={imageUrl} alt={project.title} className="w-full object-cover" />
              </div>

              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Layout size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest">Project Details</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display uppercase font-medium leading-[1.1]">
                  The Future of <span className="text-white/40">Innovation</span> meets Functional Excellence
                </h2>
                <div className="prose prose-invert prose-lg max-w-none text-white/60 leading-relaxed font-light space-y-6">
                  <p>{project.description}</p>
                  <p>Our approach focused on creating a seamless user experience while maintaining high-performance standards. Every detail was meticulously planned to ensure that the final product not only met but exceeded business expectations.</p>
                </div>
              </div>

              {project.techStack && project.techStack.length > 0 && (
                <div className="space-y-8 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 px-4 bg-emerald-500/30 rounded-full" />
                    <h3 className="text-2xl font-display uppercase tracking-widest font-medium">Technology Stack</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {project.techStack.map((tech, i) => (
                      <motion.div 
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Cpu size={20} className="text-emerald-500/60" />
                        </div>
                        <span className="text-sm font-semibold text-white/80 uppercase tracking-tight">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.aside 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 sticky top-32"
            >
              <div className="rounded-[32px] bg-white/[0.02] border border-white/10 p-10 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-colors" />
                
                <h3 className="text-2xl font-display uppercase font-medium mb-10 border-b border-white/10 pb-6 tracking-tight">Technical Info</h3>
                
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-[0.3em]">Vertical</span>
                    <p className="text-lg font-light text-white/90">{project.category?.title || 'Advanced Technology'}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-[0.3em]">Status</span>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-lg font-light text-white/90">Production Ready</p>
                    </div>
                  </div>

                  {project.projectUrl && (
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-[0.3em]">Live Architecture</span>
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors group/link">
                        <Globe size={16} />
                        <span className="truncate flex-1 font-light">{project.projectUrl.replace('https://', '')}</span>
                      </a>
                    </div>
                  )}

                  <div className="pt-8">
                    <Link to="/contact" className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white text-[#0b1411] font-bold hover:bg-emerald-500 transition-all">
                      Inquire Details <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.aside>

          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden bg-emerald-500/10 border border-emerald-500/20 p-12 md:p-20 text-center"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-50" />
             <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-display uppercase font-medium leading-tight">
                  Ready to transform your <span className="text-emerald-500">Business Vision?</span>
                </h2>
                <p className="text-lg text-white/50 leading-relaxed font-light">
                  Join the ranks of leading enterprises that trust YarnixLabs to deliver cutting-edge AI and software excellence.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all hover:scale-105">
                     Start Collaboration <ArrowRight size={20} />
                  </Link>
                </div>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
