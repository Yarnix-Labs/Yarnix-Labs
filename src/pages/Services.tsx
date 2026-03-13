import { Bot, Globe, Cog, Server, Smartphone, Search, Megaphone, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedGears from "@/components/AnimatedGears";
import SectionHeading from "@/components/SectionHeading";
import { useProjects } from "@/hooks/useProjects";
import serviceAi from "@/assets/service-ai.png";
import serviceAutomation from "@/assets/service-automation.png";
import serviceWeb from "@/assets/service-web.png";
import serviceDevops from "@/assets/service-devops.png";
import serviceMobile from "@/assets/service-mobile.png";
import serviceSeo from "@/assets/service-seo.png";
import serviceMarketing from "@/assets/service-marketing.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: Bot,
    title: "AI Tools & Solutions",
    desc: "Custom AI models, chatbots, and intelligent automation tailored to your business needs.",
    features: ["Custom GPT Models", "Chatbot Development", "Predictive Analytics", "Natural Language Processing"],
    image: serviceAi,
  },
  {
    icon: Cog,
    title: "Business Automation",
    desc: "Streamline operations with intelligent workflows that save time and reduce costs.",
    features: ["Process Automation", "Data Integration", "Workflow Optimization", "RPA Solutions"],
    image: serviceAutomation,
  },
  {
    icon: Globe,
    title: "Web Applications",
    desc: "Modern, scalable web apps built with cutting-edge technologies and best practices.",
    features: ["React & Next.js", "Progressive Web Apps", "API Development", "Cloud Architecture"],
    image: serviceWeb,
  },
  {
    icon: Server,
    title: "DevOps Solutions",
    desc: "Cloud infrastructure, CI/CD pipelines, and monitoring for reliable deployments.",
    features: ["CI/CD Pipelines", "Container Orchestration", "Cloud Migration", "24/7 Monitoring"],
    image: serviceDevops,
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications that deliver seamless user experiences.",
    features: ["iOS & Android Apps", "React Native", "Flutter Development", "App Store Optimization"],
    image: serviceMobile,
  },
  {
    icon: Search,
    title: "Technical SEO",
    desc: "Optimize your website's technical foundation to rank higher and drive organic traffic.",
    features: ["Site Speed Optimization", "Schema Markup", "Core Web Vitals", "Crawl & Index Management"],
    image: serviceSeo,
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that grow your brand and generate qualified leads.",
    features: ["Social Media Marketing", "PPC Campaigns", "Content Strategy", "Analytics & Reporting"],
    image: serviceMarketing,
  },
];

const Services = () => {
  const { projects, loading } = useProjects();

  return (
  <div>
    {/* Hero */}
    <section className="relative min-h-[50vh] flex items-center pt-20 text-white overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}>
      <ParticleMeteorBackground />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16" style={{ zIndex: 2 }}>
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            What We Offer
          </span>
          <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-white font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Our <span className="text-emerald-400">Services</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            End-to-end AI and software services to accelerate your digital transformation and drive measurable business results.
          </p>
        </div>
        <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <AnimatedGears />
        </div>
      </div>
    </section>

    {/* Section intro */}
    <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-b from-white to-zinc-50/80">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[480px] h-[480px] -top-32 -right-32 rounded-full blur-[100px] opacity-40" style={{ background: "rgba(16,185,129,0.08)" }} />
        <div className="absolute w-[360px] h-[360px] bottom-0 left-0 rounded-full blur-[80px] opacity-30" style={{ background: "rgba(5,150,105,0.06)" }} />
      </div>
      <div className="container relative z-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-emerald-700 text-xs font-medium tracking-wide uppercase mb-5">
            What we deliver
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            End-to-end services that scale with you
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            From AI and automation to web, mobile, and growth—each service is delivered with the same standard: clarity, quality, and measurable impact.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services - Card-based alternating layout */}
    <section className="py-12 md:py-20 bg-zinc-50/50">
      <div className="container space-y-12 md:space-y-16">
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          const index = String(i + 1).padStart(2, "0");
          return (
            <motion.article
              key={s.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              className={`group grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center rounded-3xl p-6 md:p-8 lg:p-10 transition-shadow duration-300 hover:shadow-xl hover:shadow-emerald-500/5 bg-white border border-zinc-200/80`}
            >
              {/* Content */}
              <div className={`space-y-5 ${!isEven ? "md:order-2 md:pl-4" : "md:pr-4"}`}>
                <div className="flex items-center gap-4">
                  <span className="font-display text-4xl font-bold text-zinc-200/90 tracking-tighter tabular-nums">
                    {index}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <s.icon size={22} className="text-emerald-600" strokeWidth={1.8} />
                  </div>
                </div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  {s.title}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg">
                  {s.desc}
                </p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.05}
                >
                  {s.features.map((f, j) => (
                    <motion.span
                      key={f}
                      variants={itemVariants}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200/80"
                    >
                      {f}
                    </motion.span>
                  ))}
                </motion.div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors group"
                >
                  Get started
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              {/* Image */}
              <div className={`relative overflow-hidden rounded-2xl bg-zinc-100 ${!isEven ? "md:order-1" : ""}`}>
                <div className="aspect-[4/3] sm:aspect-[5/3] relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>

    {/* Projects Showcase */}
    <section className="py-20 md:py-28 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading title="Recent Projects" subtitle="See our latest work in action." />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {loading ? (
            [...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="group relative rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}>
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6" style={{ background: 'linear-gradient(180deg, #0f1f19 0%, #0b1411 100%)' }}>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4" />
                    <div className="h-3 bg-gray-300 rounded w-full mb-4" />
                    <div className="flex gap-2 mb-4">
                      <div className="h-3 bg-gray-300 rounded w-16" />
                      <div className="h-3 bg-gray-300 rounded w-20" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            projects?.slice(0, 3).map((project) => (
              <div key={project._id} className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}>
                <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-emerald-500/20 transition-colors duration-500 pointer-events-none z-10" />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05), 0 0 40px -10px rgba(16,185,129,0.1)' }} />
                <div className="relative h-48 overflow-hidden bg-black/20">
                  <img 
                    src={project.image?.asset?._ref ? `https://cdn.sanity.io/images/v7q2gijs/production/${project.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : '/placeholder.jpg'} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1411] via-[#0b1411]/40 to-transparent" />
                  {project.category && (
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/50 font-medium backdrop-blur-md">
                      {project.category.title}
                    </span>
                  )}
                </div>
                <div className="p-6" style={{ background: 'linear-gradient(180deg, #0f1f19 0%, #0b1411 100%)' }}>
                  <h3 className="font-sans font-semibold text-sm text-white/80 mb-1.5 tracking-wide uppercase">{project.title}</h3>
                  <p className="text-xs text-white/30 mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack?.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40 font-medium">{tech}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <Link to={`/projects/${project.slug.current}`} className="inline-flex items-center gap-1.5 text-xs text-emerald-400/70 font-medium hover:text-emerald-300 transition-colors uppercase tracking-wider">
                      View Details <ExternalLink size={12} />
                    </Link>
                    <button className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/80 font-medium hover:bg-emerald-500/20 hover:text-emerald-300 transition-all uppercase tracking-wider">
                      Live Demo <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-full text-sm transition-colors">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 45%, #134e35 100%)" }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="relative px-8 py-14 md:px-16 md:py-20 text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
              Need a custom solution?
            </h2>
            <p className="text-white/55 text-base sm:text-lg max-w-lg mx-auto mb-10">
              Let's discuss how we can help transform your business with AI and modern software.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Link to="/contact">
                <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25">
                  Get Started <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/projects">
                <button className="inline-flex items-center gap-2 border border-white/25 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 backdrop-blur-sm">
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
export default Services;
