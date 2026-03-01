'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function ElephantFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: '#',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: '#',
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      href: 'mailto:contact@ronak.dev',
    },
  ];

  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
      {/* Elephant Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
        <svg
          viewBox="0 0 200 200"
          className="w-[400px] h-[400px]"
          fill="currentColor"
        >
          <path d="M100 40 C60 40 30 70 30 110 L30 140 C30 150 35 160 40 160 L50 160 C50 170 55 180 65 180 C75 180 80 170 80 160 L120 160 C120 170 125 180 135 180 C145 180 150 170 150 160 L160 160 C165 160 170 150 170 140 L170 110 C170 70 140 40 100 40 M70 90 C75 90 80 95 80 100 C80 105 75 110 70 110 C65 110 60 105 60 100 C60 95 65 90 70 90 M130 90 C135 90 140 95 140 100 C140 105 135 110 130 110 C125 110 120 105 120 100 C120 95 125 90 130 90 M100 120 C110 120 120 125 120 130 C120 135 110 140 100 140 C90 140 80 135 80 130 C80 125 90 120 100 120" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2">
              RONAK<span className="text-[#d4af37]">.</span>
            </h3>
            <p className="text-sm text-[#64748b] max-w-xs">
              System Architect • AI Builder • Strategic Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 rounded-lg bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[#94a3b8] hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#64748b]">
          <p>
            Built with precision. <span className="text-[#d4af37]">Ronak © {currentYear}</span>
          </p>
          <p className="text-xs uppercase tracking-wider">
            The Elephant Architect – Strategic by Design
          </p>
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#d4af37] opacity-20" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#d4af37] opacity-20" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#d4af37] opacity-20" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#d4af37] opacity-20" />
      </div>
    </footer>
  );
}
