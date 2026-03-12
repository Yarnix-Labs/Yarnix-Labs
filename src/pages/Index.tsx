import { Link } from "react-router-dom";
import { ArrowRight, Bot, Globe, Cog, Server, Smartphone, Search, Megaphone, ExternalLink, Calendar, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedEarth from "@/components/AnimatedEarth";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

const services = [
  { icon: Bot, title: "AI Tools & Solutions", desc: "Custom AI models, chatbots, and intelligent automation tailored to your business needs." },
  { icon: Cog, title: "Business Automation", desc: "Streamline operations with intelligent workflows that save time and reduce costs." },
  { icon: Globe, title: "Web Applications", desc: "Modern, scalable web apps built with cutting-edge technologies and best practices." },
  { icon: Server, title: "DevOps Solutions", desc: "Cloud infrastructure, CI/CD pipelines, and monitoring for reliable deployments." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile applications that deliver seamless user experiences." },
  { icon: Search, title: "Technical SEO", desc: "Optimize your website's technical foundation to rank higher and drive organic traffic." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven marketing strategies that grow your brand and generate qualified leads." },
];

const featuredProjects = projects.slice(0, 3);
const featuredPosts = posts.slice(0, 3);

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center pt-20 text-white overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}>
      <ParticleMeteorBackground />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16" style={{ zIndex: 2 }}>
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            AI Software Company
          </span>
          <h1 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[0.95] tracking-wide text-white font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Building Smart{" "}
            <span className="text-emerald-400">AI & Software Solutions</span>{" "}
            for Modern Businesses
          </h1>
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We help businesses automate workflows, build intelligent systems, and scale faster with custom AI and modern software solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/projects">
              <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3.5 rounded-full text-base transition-colors">
                View Our Projects <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/contact">
              <button className="flex items-center gap-2 border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full text-base transition-colors backdrop-blur-sm">
                Get Free Consultation
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <AnimatedEarth />
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full blur-[120px] animate-[services-glow-1_8s_ease-in-out_infinite]" style={{ background: "rgba(16,185,129,0.15)" }} />
        <div className="absolute w-[500px] h-[500px] -bottom-40 -left-40 rounded-full blur-[100px] animate-[services-glow-2_10s_ease-in-out_infinite]" style={{ background: "rgba(5,150,105,0.12)" }} />
        <div className="absolute w-[400px] h-[400px] top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-[90px] animate-[services-glow-3_12s_ease-in-out_infinite]" style={{ background: "rgba(52,211,153,0.08)" }} />
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Comprehensive AI and software development services to power your business.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((s) => (
            <div key={s.title} className="relative group rounded-2xl p-7 hover:-translate-y-2 transition-all duration-300 bg-white border border-gray-200 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5 group-hover:bg-emerald-100 group-hover:border-emerald-300 transition-all duration-300">
                  <s.icon size={26} className="text-emerald-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-full text-sm transition-colors">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Projects — same cards as Projects page */}
    <section className="py-20 md:py-28 bg-card/30">
      <div className="container">
        <SectionHeading title="Our Projects" subtitle="Explore some of our recent work across AI and software development." />
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((p) => (
            <div key={p.slug} className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}>
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-emerald-500/20 transition-colors duration-500 pointer-events-none z-10" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05), 0 0 40px -10px rgba(16,185,129,0.1)' }} />
              <div className="relative h-52 overflow-hidden bg-black/20">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1411] via-[#0b1411]/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/50 font-medium backdrop-blur-md">
                  {p.category}
                </span>
              </div>
              <div className="p-6" style={{ background: 'linear-gradient(180deg, #0f1f19 0%, #0b1411 100%)' }}>
                <h3 className="font-sans font-semibold text-sm text-white/80 mb-1.5 tracking-wide uppercase">{p.title}</h3>
                <p className="text-xs text-white/30 mb-4 leading-relaxed line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40 font-medium">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Link to={`/projects/${p.slug}`} className="inline-flex items-center gap-1.5 text-xs text-emerald-400/70 font-medium hover:text-emerald-300 transition-colors uppercase tracking-wider">
                    View Details <ExternalLink size={12} />
                  </Link>
                  <button className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/80 font-medium hover:bg-emerald-500/20 hover:text-emerald-300 transition-all uppercase tracking-wider">
                    Live Demo <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-full text-sm transition-colors">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Blog — same cards as Blog page */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading title="Latest Insights" subtitle="Stay updated with our latest articles and industry insights." />
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((b) => (
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
        <div className="text-center mt-10">
          <Link to="/blog" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-full text-sm transition-colors">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20 md:py-28 bg-card/30">
      <div className="container max-w-3xl text-center">
        <SectionHeading title="About YarnixLabs" />
        <p className="text-muted-foreground leading-relaxed mb-8">
          YarnixLabs is a forward-thinking AI and software development company dedicated to building intelligent solutions
          that empower businesses to thrive in the digital era. Our mission is to bridge the gap between cutting-edge technology
          and real-world business challenges.
        </p>
        <Link to="/about">
          <button className="text-sm text-primary font-medium hover:underline">Learn More About Us →</button>
        </Link>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="glass-card p-12 md:p-16 text-center bg-hero-gradient">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build your next AI solution?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let's collaborate and turn your ideas into powerful software.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3.5 rounded-full text-base transition-colors">
                Contact Us <ArrowRight size={16} />
              </button>
            </Link>
            <Link to="/projects">
              <button className="flex items-center gap-2 border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full text-base transition-colors backdrop-blur-sm">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
