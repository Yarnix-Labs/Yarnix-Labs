import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Clock, ArrowRight, MessageSquare, Sparkles, LucideIcon } from "lucide-react";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedEnvelope from "@/components/AnimatedEnvelope";
import { motion } from "framer-motion";
import { useContact } from "@/hooks";
import BackgroundGrid from "@/components/BackgroundGrid";

const iconMap: Record<string, LucideIcon> = {
  Mail,
  MapPin,
  Phone,
  Clock,
};

const Contact = () => {
  const { contactInfo, loading, error } = useContact();

  return (
    <div className="antialiased">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[500px] sm:min-h-[60svh] flex items-center pt-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
      >
        <ParticleMeteorBackground />

        {/* noise */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px",
          }}
        />
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)" }}
        />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16" style={{ zIndex: 2 }}>
          <div className="space-y-7">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              Let's Connect
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.92] tracking-tight text-white font-semibold"
            >
              Get in{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)" }}
              >
                Touch
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/50 leading-relaxed max-w-xl font-light"
            >
              Have a project in mind? We'd love to hear from you. Let's discuss how we can help bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="origin-left h-px w-32"
              style={{ background: "linear-gradient(90deg, rgba(52,211,153,0.6) 0%, transparent 100%)" }}
            />
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatedEnvelope />
          </motion.div>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-white">
        <BackgroundGrid />
        <div
          className="absolute right-0 top-0 w-[520px] h-[520px] -translate-y-1/3 translate-x-1/3 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 65%)" }}
        />

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 text-[11px] font-bold tracking-widest uppercase mb-5">
              <MessageSquare size={12} />
              Reach Out
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight mb-2">
              How to <span className="text-emerald-600">Find Us</span>
            </h2>
            <p className="text-zinc-400 text-sm font-light">Multiple ways to get in touch with our team.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {loading ? (
              [...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse rounded-2xl border border-zinc-200/60 bg-white p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 mx-auto mb-4" />
                  <div className="h-3.5 bg-zinc-100 rounded-full w-3/4 mx-auto mb-2" />
                  <div className="h-2.5 bg-zinc-100 rounded-full w-full mb-1" />
                  <div className="h-2.5 bg-zinc-100 rounded-full w-2/3 mx-auto" />
                </div>
              ))
            ) : error ? (
              <div className="col-span-full text-center py-12">
                <p className="text-zinc-400 text-sm font-light">Failed to load contact information.</p>
              </div>
            ) : (
              contactInfo.map((item, i) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl bg-white border border-zinc-200/60 p-6 text-center transition-all duration-500 hover:-translate-y-2 group"
                    style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.25)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.08), 0 0 32px rgba(16,185,129,0.09)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(228,228,231,0.6)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(5,150,105,0.06))",
                        border: "1px solid rgba(16,185,129,0.2)",
                      }}
                    >
                      {IconComponent && <IconComponent className="text-emerald-600" size={20} strokeWidth={1.75} />}
                    </div>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1.5 font-semibold">{item.label}</p>
                    <p className="font-semibold text-zinc-800 text-sm mb-1">{item.value}</p>
                    <p className="text-[11px] text-zinc-400 font-light">{item.description}</p>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="py-20 md:py-28 bg-white relative">
        <BackgroundGrid />
        <div className="container max-w-4xl relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 text-[11px] font-bold tracking-widest uppercase mb-5">
              <Send size={11} />
              Message Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight mb-3">
              Send Us a <span className="text-emerald-600">Message</span>
            </h2>
            <p className="text-zinc-400 text-sm font-light">Fill out the form below and we'll get back to you within 24 hours.</p>
          </motion.div>

          <motion.form
            className="rounded-3xl bg-white border border-zinc-200/60 p-8 md:p-12 space-y-6 relative overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}
          >
            {/* top shimmer accent */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.35), transparent)" }}
            />
            {/* corner glows */}
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[80px] bg-emerald-500/8 pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full blur-[80px] bg-emerald-500/6 pointer-events-none" />

            <div className="grid sm:grid-cols-2 gap-5 relative">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Name</label>
                <Input
                  placeholder="Your name"
                  className="bg-zinc-50 border-zinc-200/80 h-12 rounded-xl text-zinc-800 placeholder:text-zinc-400 text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-zinc-50 border-zinc-200/80 h-12 rounded-xl text-zinc-800 placeholder:text-zinc-400 text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Subject</label>
              <Input
                placeholder="How can we help?"
                className="bg-zinc-50 border-zinc-200/80 h-12 rounded-xl text-zinc-800 placeholder:text-zinc-400 text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
              />
            </div>

            <div className="relative">
              <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Message</label>
              <Textarea
                placeholder="Tell us about your project..."
                rows={6}
                className="bg-zinc-50 border-zinc-200/80 rounded-xl text-zinc-800 placeholder:text-zinc-400 text-sm focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none"
              />
            </div>

            {/* divider */}
            <div className="h-px bg-zinc-100" />

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all duration-300 hover:shadow-[0_0_32px_rgba(52,211,153,0.35)] tracking-wide"
            >
              Send Message <Send size={15} />
            </button>
          </motion.form>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center rounded-3xl overflow-hidden relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "linear-gradient(135deg, #060d0b 0%, #0d2a1c 45%, #0f3d28 100%)" }}
          >
            {/* grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{
                backgroundImage: "linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.15) 0%, transparent 65%)" }}
            />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.5), transparent)" }}
            />

            <div className="relative px-8 py-14 md:px-16 md:py-20">
              {/* icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.08))",
                  border: "1px solid rgba(52,211,153,0.25)",
                  boxShadow: "0 0 24px rgba(52,211,153,0.15)",
                }}
              >
                <Sparkles size={24} className="text-emerald-400" />
              </motion.div>

              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-emerald-300 text-[11px] font-bold tracking-widest uppercase mb-6 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                Free Consultation
              </motion.span>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                Prefer a quick chat?
              </h2>
              <p className="text-white/40 mb-10 font-light leading-relaxed max-w-md mx-auto">
                Schedule a free 30-minute consultation to discuss your project needs.
              </p>
              <a
                href="https://wa.me/94740246010?text=Hi%20YarnixLabs%2C%20I%27d%20like%20to%20book%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-9 py-4 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] tracking-wide">
                  Book a Call <ArrowRight size={15} />
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;