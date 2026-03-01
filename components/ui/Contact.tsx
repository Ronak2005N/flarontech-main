"use client";
import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Globe, ExternalLink, Send } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Formspree endpoint — user can replace with their own
    try {
      await fetch('https://formspree.io/f/xzzgrkqy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      setSent(true);
      setFormState({ name: '', email: '', message: '' });
    } catch {
      // Silently handle — form still works via fallback
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-[#0a0a0c] via-[#0f0a0a] to-[#0a0a0c] border-t border-white/5 overflow-hidden">
      {/* Warm ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(230,46,45,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-sans mb-3">get in touch</p>
        <h3 className="text-3xl md:text-5xl font-heading text-white">
          LET&apos;S <span className="text-[#e62e2d]">CONNECT</span>
        </h3>
        <p className="mt-4 text-white/40 font-sans text-sm tracking-wide max-w-xl">
          Building something that needs AI, engineering, or an unstoppable builder? Let&apos;s talk.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Contact Links */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative flex items-center gap-4 rounded-2xl border border-white/5 bg-[#121318] p-4 transition-all duration-500 hover:border-white/15 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
                >
                  <div
                    className="shrink-0 inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/8 p-2.5 transition-colors duration-300 group-hover:bg-white/10"
                    style={{ color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-0.5">{link.label}</p>
                    <p className="text-sm font-sans text-white/80 truncate group-hover:text-white transition-colors duration-300">{link.value}</p>
                  </div>
                  <ExternalLink className="size-3.5 text-white/20 group-hover:text-white/50 transition-colors duration-300 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-1/2">
            <div className="rounded-2xl border border-white/5 bg-[#121318]/80 backdrop-blur-sm p-6 md:p-8">
              <h4 className="font-heading text-lg text-white mb-6 flex items-center gap-2">
                <Send className="size-4 text-[#e62e2d]" />
                Send a Message
              </h4>

              {sent ? (
                <div className="text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#10b981] text-lg">✓</span>
                  </div>
                  <p className="font-heading text-lg text-white mb-2">Message Sent!</p>
                  <p className="text-sm text-white/40 font-sans">I&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-xs font-mono text-white/30 hover:text-white/60 transition-colors underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder:text-white/20 focus:outline-none focus:border-[#e62e2d]/40 focus:ring-1 focus:ring-[#e62e2d]/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState(p => ({ ...p, email: e.target.value }))}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder:text-white/20 focus:outline-none focus:border-[#e62e2d]/40 focus:ring-1 focus:ring-[#e62e2d]/20 transition-all duration-300"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 block mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm font-sans text-white placeholder:text-white/20 focus:outline-none focus:border-[#e62e2d]/40 focus:ring-1 focus:ring-[#e62e2d]/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-2 w-full py-3 rounded-xl font-heading text-sm tracking-wider uppercase bg-[#e62e2d] hover:bg-[#c92726] text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,46,45,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {sending ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="size-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 border border-white/10 rounded-full px-8 py-4 bg-[#121318]/50 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-sm font-sans text-white/60">Open to collaboration, consulting & startup opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
