import { Bot, Globe, Cog, Server, Smartphone, Search, Megaphone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedGears from "@/components/AnimatedGears";
import serviceAi from "@/assets/service-ai.png";
import serviceAutomation from "@/assets/service-automation.png";
import serviceWeb from "@/assets/service-web.png";
import serviceDevops from "@/assets/service-devops.png";
import serviceMobile from "@/assets/service-mobile.png";
import serviceSeo from "@/assets/service-seo.png";
import serviceMarketing from "@/assets/service-marketing.png";

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

const Services = () => (
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

    {/* Services - Alternating Layout */}
    <section className="py-16 md:py-24">
      <div className="container space-y-20 md:space-y-28">
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={s.title} className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${!isEven ? "md:[direction:rtl]" : ""}`}>
              {/* Content */}
              <div className={!isEven ? "md:[direction:ltr]" : ""}>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                  <s.icon size={24} className="text-emerald-500" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-2.5 rounded-full text-sm transition-colors">
                    Get Started <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
              {/* Image */}
              <div className={`overflow-hidden rounded-2xl ${!isEven ? "md:[direction:ltr]" : ""}`}>
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="rounded-2xl p-12 md:p-16 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}>
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a custom solution?</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Let's discuss how we can help transform your business with AI and modern software.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3.5 rounded-full text-base transition-colors">
                  Get Started <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/projects">
                <button className="flex items-center gap-2 border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full text-base transition-colors">
                  View Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
