"use client";
import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export default function DragonFooter() {
  return (
    <footer className="relative w-full bg-[#060608] overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-8">

        {/* Big Text + Forest Image Row */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.4)]">
          {/* Forest Image — fills left side */}
          <div className="w-full lg:w-5/12 relative min-h-[200px] md:min-h-[280px] lg:min-h-[360px]">
            <img
              src="/images/vivid-forest-background.png"
              alt="Vivid Forest"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#060608]/90 pointer-events-none" />
          </div>

          {/* Big Footer Text */}
          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-end justify-center bg-[#060608] p-8 md:p-12 lg:p-16">
            <h2
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[9rem] font-heading leading-[0.9] tracking-tight text-right select-none"
            >
              <span className="block text-[#e62e2d]">FLARON</span>
              <span className="block text-[#96BF8A]">TECH</span>
            </h2>
            <p className="mt-4 text-white/30 font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-right">
              Rooted in Innovation. Powered by Vision.
            </p>
          </div>
        </div>

        {/* Links Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8">
          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-sans tracking-widest uppercase text-white/30">
            <a href="#hero" className="hover:text-white/70 transition-colors duration-300">Home</a>
            <a href="#philosophy" className="hover:text-white/70 transition-colors duration-300">Philosophy</a>
            <a href="#tech" className="hover:text-white/70 transition-colors duration-300">Stack</a>
            <a href="#journey" className="hover:text-white/70 transition-colors duration-300">Journey</a>
            <a href="#vault" className="hover:text-white/70 transition-colors duration-300">Vault</a>
            <a href="#contact" className="hover:text-white/70 transition-colors duration-300">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/lokeshkumar3103ar" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-white/30 hover:text-white/70 hover:bg-white/5 transition-all duration-300">
              <Github className="size-4" />
            </a>
            <a href="https://www.linkedin.com/in/lokesh-kumar-a-r-465218244/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-white/30 hover:text-white/70 hover:bg-white/5 transition-all duration-300">
              <Linkedin className="size-4" />
            </a>
            <a href="mailto:lokeshkumar3103ar@gmail.com" className="p-2 rounded-full text-white/30 hover:text-white/70 hover:bg-white/5 transition-all duration-300">
              <Mail className="size-4" />
            </a>
            <a href="https://www.imitatelabs.ai" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-white/30 hover:text-white/70 hover:bg-white/5 transition-all duration-300">
              <Globe className="size-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-[10px] font-mono text-white/15 tracking-wider">
            &copy; 2026 Flarontech. Crafted by Dragon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
