"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Globe, ExternalLink, Send, CheckCircle, Sparkles } from 'lucide-react';

const links = [
  {
    icon: <Mail className="size-5" />,
    label: 'Email',
    value: 'lokeshkumar3103ar@gmail.com',
    href: 'mailto:lokeshkumar3103ar@gmail.com',
    color: '#e62e2d',
  },
  {
    icon: <Phone className="size-5" />,
    label: 'Phone',
    value: '+91 9489112725',
    href: 'tel:+919489112725',
    color: '#10b981',
  },
  {
    icon: <Linkedin className="size-5" />,
    label: 'LinkedIn',
    value: 'Lokesh Kumar A R',
    href: 'https://www.linkedin.com/in/lokesh-kumar-a-r-465218244/',
    color: '#0077B5',
  },
  {
    icon: <Github className="size-5" />,
    label: 'GitHub',
    value: 'lokeshkumar3103ar',
    href: 'https://github.com/lokeshkumar3103ar',
    color: '#fff',
  },
  {
    icon: <Globe className="size-5" />,
    label: 'Portfolio',
    value: 'lokeshkumar3103ar.github.io',
    href: 'https://lokeshkumar3103ar.github.io/My_portfolio/',
    color: '#a855f7',
  },
  {
    icon: <Globe className="size-5" />,
    label: 'Imitate Labs',
    value: 'www.imitatelabs.ai',
    href: 'https://www.imitatelabs.ai',
    color: '#ffc107',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('https://formspree.io/f/xzzgrkqy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      setSent(true);
      setFormState({ name: '', email: '', message: '' });
    } catch {
      // Silently handle
    } finally {
      setSending(false);
    }
  };

  const inputBase =
    'w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-sm font-sans text-white placeholder:text-white/20 focus:outline-none transition-all duration-400 resize-none';
  const inputFocused = 'border-[#e62e2d]/50 ring-2 ring-[#e62e2d]/15 bg-white/[0.05] shadow-[0_0_20px_rgba(230,46,45,0.08)]';
  const inputDefault = 'border-white/10 hover:border-white/20';

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-[#0a0a0c] via-[#0f0a0a] to-[#0a0a0c] border-t border-white/5 overflow-hidden">
      {/* Warm ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(230,46,45,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-14"
      >
        <span className="text-xs font-mono tracking-[0.5em] uppercase text-white/40 block mb-4">
          Signal / 08
        </span>
        <h3 className="text-3xl md:text-5xl font-heading text-white">
          LET&apos;S <span className="text-[#e62e2d]">CONNECT</span>
        </h3>
        <p className="mt-4 text-white/40 font-sans text-sm tracking-wide max-w-xl">
          Building something that needs AI, engineering, or an unstoppable builder? Let&apos;s talk.
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left: Contact Links — with hover glow + stagger */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="group relative flex items-center gap-4 rounded-2xl border border-white/5 bg-[#121318] p-4 transition-all duration-500"
                  style={{
                    boxShadow: 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${link.color}30`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${link.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="shrink-0 inline-flex items-center justify-center rounded-xl border p-2.5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: link.color,
                      borderColor: `${link.color}20`,
                      background: `${link.color}10`,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-0.5">{link.label}</p>
                    <p className="text-sm font-sans text-white/80 truncate group-hover:text-white transition-colors duration-300">{link.value}</p>
                  </div>
                  <ExternalLink className="size-3.5 text-white/10 group-hover:text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form — upgraded */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-white/8 bg-[#121318]/80 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden"
            >
              {/* Subtle glow in top-right corner */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[radial-gradient(circle,rgba(230,46,45,0.06)_0%,transparent_70%)] pointer-events-none" />

              <h4 className="font-heading text-lg text-white mb-6 flex items-center gap-2 relative z-10">
                <Send className="size-4 text-[#e62e2d]" />
                Send a Message
              </h4>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-center py-10 relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-16 h-16 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center mx-auto mb-5"
                      style={{ boxShadow: '0 0 40px rgba(16,185,129,0.15)' }}
                    >
                      <CheckCircle className="text-[#10b981] size-7" />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="font-heading text-xl text-white mb-2"
                    >
                      Message Sent!
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-sm text-white/40 font-sans mb-6"
                    >
                      I&apos;ll get back to you soon.
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      onClick={() => setSent(false)}
                      className="text-xs font-mono text-white/30 hover:text-white/60 transition-colors underline underline-offset-4"
                    >
                      Send another
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 relative z-10"
                  >
                    {/* Name */}
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 block mb-2">
                        Name
                        {formState.name && <span className="text-[#10b981] ml-2">✓</span>}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={e => setFormState(p => ({ ...p, name: e.target.value }))}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className={`${inputBase} ${focused === 'name' ? inputFocused : inputDefault}`}
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 block mb-2">
                        Email
                        {formState.email && formState.email.includes('@') && <span className="text-[#10b981] ml-2">✓</span>}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={e => setFormState(p => ({ ...p, email: e.target.value }))}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className={`${inputBase} ${focused === 'email' ? inputFocused : inputDefault}`}
                        placeholder="you@example.com"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 block mb-2">
                        Message
                        {formState.message.length > 10 && <span className="text-[#10b981] ml-2">✓</span>}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className={`${inputBase} ${focused === 'message' ? inputFocused : inputDefault}`}
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(230,46,45,0.25)' }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-1 w-full py-4 rounded-xl font-heading text-sm tracking-wider uppercase text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 relative overflow-hidden group"
                      style={{
                        background: 'linear-gradient(135deg, #e62e2d 0%, #c92726 100%)',
                        boxShadow: '0 0 20px rgba(230,46,45,0.15)',
                      }}
                    >
                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      {sending ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="size-4" />
                          Send Message
                          <Sparkles className="size-3.5 opacity-60" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 border border-white/10 rounded-full px-8 py-4 bg-[#121318]/50 backdrop-blur-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" style={{ boxShadow: '0 0 8px rgba(16,185,129,0.4)' }} />
            <span className="text-sm font-sans text-white/60">Open to collaboration, consulting & startup opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
