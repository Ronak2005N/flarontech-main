"use client";
import React from 'react';
import { Mail, Phone, Github, Linkedin, Globe, ExternalLink } from 'lucide-react';

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
  return (
    <section id="contact" className="relative w-full bg-[#0a0a0c] border-t border-white/5 overflow-hidden">
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

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative flex items-center gap-4 rounded-2xl border border-white/5 bg-[#121318] p-5 transition-all duration-500 hover:border-white/15 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
              <div
                className="shrink-0 inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/8 p-3 transition-colors duration-300 group-hover:bg-white/10"
                style={{ color: link.color }}
              >
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-1">{link.label}</p>
                <p className="text-sm font-sans text-white/80 truncate group-hover:text-white transition-colors duration-300">{link.value}</p>
              </div>
              <ExternalLink className="size-3.5 text-white/20 group-hover:text-white/50 transition-colors duration-300 shrink-0" />
            </a>
          ))}
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
