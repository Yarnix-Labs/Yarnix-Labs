import { Target, Lightbulb, Users, ArrowRight, Github, Linkedin, Globe, Sparkles, Rocket, Heart, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedNetwork from "@/components/AnimatedNetwork";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTestimonials } from "@/hooks/useTestimonials";
import { useTeam } from "@/hooks/useTeam";

const stats = [
  { value: "2025", label: "Founded", icon: Rocket },
  { value: "50+", label: "Projects Delivered", icon: Sparkles },
  { value: "100%", label: "Client Satisfaction", icon: Heart },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    desc: "We're committed to building software solutions that solve real problems and create lasting value for our clients.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We stay ahead of the curve, leveraging the latest AI and automation technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client Success",
    desc: "Your success is our success. We partner closely to ensure every project exceeds expectations.",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const About = () => {
  const { testimonials, loading, error } = useTestimonials();
  const { teamMembers, loading: teamLoading, error: teamError } = useTeam();

  return (
    <div>
    {/* Hero */}
    <section
      className="relative min-h-[55vh] flex items-center pt-20 text-white overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
    >
      <ParticleMeteorBackground />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16" style={{ zIndex: 2 }}>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Who We Are
          </span>
          <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-white font-medium">
            About <span className="text-emerald-400">YarnixLabs</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl">
            A forward-thinking AI and software company building the future of intelligent technology for businesses worldwide.
          </p>
        </motion.div>
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedNetwork />
        </motion.div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="relative -mt-10 z-10">
      <div className="container">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="rounded-2xl border border-emerald-500/20 bg-card backdrop-blur-sm p-6 text-center shadow-xl shadow-emerald-500/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                <s.icon size={18} className="text-emerald-400" />
              </div>
              <span className="text-3xl font-bold text-foreground block">{s.value}</span>
              <span className="text-xs text-muted-foreground mt-1 block">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="Our Story" subtitle="From vision to reality — how it all began." />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {[
              {
                title: "The Beginning",
                text: "Yarnix was founded in 2025 by three passionate technologists who saw an opportunity to help businesses transform through intelligent software solutions. What started as a vision has quickly grown into a dynamic company.",
              },
              {
                title: "What We Do",
                text: "We specialize in AI tools, automation solutions, full-stack development, UI/UX design, mobile applications, and web platforms. Our comprehensive approach means we can handle projects from concept to deployment.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-border/50 bg-card p-8 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Our Values */}
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full blur-[120px] animate-[services-glow-1_8s_ease-in-out_infinite]" style={{ background: "rgba(16,185,129,0.15)" }} />
        <div className="absolute w-[500px] h-[500px] -bottom-40 -left-40 rounded-full blur-[100px] animate-[services-glow-2_10s_ease-in-out_infinite]" style={{ background: "rgba(5,150,105,0.12)" }} />
        <div className="absolute w-[400px] h-[400px] top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-[90px] animate-[services-glow-3_12s_ease-in-out_infinite]" style={{ background: "rgba(52,211,153,0.08)" }} />
      </div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="Our Values" subtitle="The principles that guide everything we do." />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8 hover:-translate-y-2 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 group"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <v.icon size={24} className="text-emerald-400" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-900">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Meet the Team */}
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="Meet the Team" subtitle="The talented people behind Yarnix Labs." />
        </motion.div>
        {teamLoading ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/4] border border-border/30 bg-muted" />
                <div className="text-center">
                  <div className="h-6 bg-muted rounded w-3/4 mx-auto mb-2" />
                  <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-3" />
                  <div className="h-3 bg-muted rounded w-full mb-4" />
                </div>
              </div>
            ))}
          </div>
        ) : teamError ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Failed to load team members</p>
          </div>
        ) : (
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((m, i) => (
            <motion.div
              key={m.name}
              className="group"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/4] border border-border/30 group-hover:border-emerald-500/30 transition-all duration-500 shadow-lg group-hover:shadow-emerald-500/10">
                <img
                  src={m.image?.asset?._ref ? `https://cdn.sanity.io/images/v7q2gijs/production/${m.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : '/placeholder.jpg'}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Social icons that appear on hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <a href={m.portfolio} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-emerald-500/80 hover:border-emerald-400 transition-all" title="Portfolio">
                    <Globe size={16} />
                  </a>
                  <a href={m.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-emerald-500/80 hover:border-emerald-400 transition-all" title="GitHub">
                    <Github size={16} />
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-emerald-500/80 hover:border-emerald-400 transition-all" title="LinkedIn">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
              {/* Info */}
              <div className="text-center">
                <h4 className="font-bold text-lg">{m.name}</h4>
                <p className="text-sm text-emerald-400 font-medium mt-1">{m.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{m.description}</p>
                {/* Static icons below image */}
                <div className="flex justify-center gap-3 mt-4">
                  <a href={m.portfolio} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300" title="Portfolio">
                    <Globe size={14} />
                  </a>
                  <a href={m.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300" title="GitHub">
                    <Github size={14} />
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300" title="LinkedIn">
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        )}
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full blur-[120px] animate-[services-glow-1_8s_ease-in-out_infinite]" style={{ background: "rgba(16,185,129,0.15)" }} />
        <div className="absolute w-[500px] h-[500px] -bottom-40 -left-40 rounded-full blur-[100px] animate-[services-glow-2_10s_ease-in-out_infinite]" style={{ background: "rgba(5,150,105,0.12)" }} />
        <div className="absolute w-[400px] h-[400px] top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-[90px] animate-[services-glow-3_12s_ease-in-out_infinite]" style={{ background: "rgba(52,211,153,0.08)" }} />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="Client Testimonials" subtitle="What our clients say about working with us." />
        </motion.div>
        
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-4 h-4 bg-gray-200 rounded-full" />
                    ))}
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-3" />
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-4" />
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
                      <div className="h-3 bg-gray-200 rounded w-32" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Failed to load testimonials</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(0, 6).map((testimonial, i) => (
              <motion.div
                key={testimonial._id}
                className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8 hover:-translate-y-2 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star 
                      key={j} 
                      size={16} 
                      className={j < (testimonial.rating || 5) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content || 'No testimonial content available'}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-600 font-semibold text-lg">
                      {testimonial.name?.charAt(0) || '?'}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name || 'Anonymous'}</p>
                    <p className="text-sm text-gray-500">{testimonial.role || 'Client'}</p>
                    {testimonial.company && (
                      <p className="text-xs text-emerald-600 font-medium">{testimonial.company}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent p-10 md:p-14 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] bg-emerald-500/20" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3 relative">Want to Work With Us?</h2>
          <p className="text-muted-foreground mb-6 relative">
            We're always excited to take on new challenges and build amazing things together.
          </p>
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors hover:shadow-lg hover:shadow-emerald-500/25"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);
};
export default About;
