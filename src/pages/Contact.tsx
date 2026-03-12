import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Clock, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedEnvelope from "@/components/AnimatedEnvelope";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: Mail, label: "Email", value: "yarnixlabs@gmail.com", desc: "Drop us an email anytime" },
  { icon: Phone, label: "Phone", value: "+94 74 024 6010", desc: "Mon-Fri from 9am to 6pm" },
  { icon: MapPin, label: "Location", value: "223/1, Welivita, Kaduwela", desc: "Come visit our office" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", desc: "We reply fast" },
];

const Contact = () => (
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
            Let's Connect
          </span>
          <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-white font-medium">
            Get in <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl">
            Have a project in mind? We'd love to hear from you. Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedEnvelope />
        </motion.div>
      </div>
    </section>

    {/* Contact Info Cards - with animated glow bg */}
    <section className="py-16 md:py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full blur-[120px] animate-[services-glow-1_8s_ease-in-out_infinite]" style={{ background: "rgba(16,185,129,0.15)" }} />
        <div className="absolute w-[500px] h-[500px] -bottom-40 -left-40 rounded-full blur-[100px] animate-[services-glow-2_10s_ease-in-out_infinite]" style={{ background: "rgba(5,150,105,0.12)" }} />
        <div className="absolute w-[400px] h-[400px] top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-[90px] animate-[services-glow-3_12s_ease-in-out_infinite]" style={{ background: "rgba(52,211,153,0.08)" }} />
      </div>
      <div className="container relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600 text-sm font-medium mb-4">
            <MessageSquare size={14} />
            Reach Out
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">How to Find Us</h2>
          <p className="text-gray-500">Multiple ways to get in touch with our team.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 text-center hover:-translate-y-2 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <item.icon size={22} className="text-emerald-500" />
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="font-semibold text-gray-900 text-sm">{item.value}</p>
              <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Form */}
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            <Send size={14} />
            Message Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Send Us a Message</h2>
          <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
        </motion.div>

        <motion.form
          className="rounded-2xl border border-border/50 bg-card p-8 md:p-10 space-y-6 relative overflow-hidden"
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Subtle corner glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] bg-emerald-500/10 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-[80px] bg-emerald-500/10 pointer-events-none" />

          <div className="grid sm:grid-cols-2 gap-5 relative">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Name</label>
              <Input placeholder="Your name" className="bg-background border-border/50 h-12 rounded-xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input type="email" placeholder="your@email.com" className="bg-background border-border/50 h-12 rounded-xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all" />
            </div>
          </div>
          <div className="relative">
            <label className="text-sm font-medium mb-1.5 block">Subject</label>
            <Input placeholder="How can we help?" className="bg-background border-border/50 h-12 rounded-xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all" />
          </div>
          <div className="relative">
            <label className="text-sm font-medium mb-1.5 block">Message</label>
            <Textarea placeholder="Tell us about your project..." rows={6} className="bg-background border-border/50 rounded-xl focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all" />
          </div>
          <button
            type="submit"
            className="relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-500/25"
          >
            Send Message <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-40 -right-40 rounded-full blur-[120px] animate-[services-glow-1_8s_ease-in-out_infinite]" style={{ background: "rgba(16,185,129,0.12)" }} />
        <div className="absolute w-[400px] h-[400px] -bottom-32 -left-32 rounded-full blur-[100px] animate-[services-glow-2_10s_ease-in-out_infinite]" style={{ background: "rgba(5,150,105,0.10)" }} />
      </div>
      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center rounded-2xl border border-emerald-200 bg-white/80 backdrop-blur-sm p-10 md:p-14 shadow-xl shadow-emerald-500/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
            <Sparkles size={24} className="text-emerald-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Prefer a quick chat?</h2>
          <p className="text-gray-500 mb-6">
            Schedule a free 30-minute consultation to discuss your project needs.
          </p>
          <a href="https://wa.me/94740246010?text=Hi%20YarnixLabs%2C%20I%27d%20like%20to%20book%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-500/25">
            Book a Call <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Contact;
