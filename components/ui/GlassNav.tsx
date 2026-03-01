'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GlassNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-full ${
        scrolled ? 'backdrop-blur-xl bg-obsidian-900/70 border border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-4 border border-transparent'
      }`}
    >
      <div className="px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image 
            src="/assets/dragon logo vector1.svg" 
            alt="The Dragon" 
            width={40} 
            height={40} 
            className="w-10 h-10 drop-shadow-[0_0_8px_rgba(230,46,45,0.5)]"
          />
          <span className="font-heading text-xl tracking-wider text-white select-none">
            FLARON TECH
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-xs font-medium tracking-widest text-white/70 uppercase">
          <a href="#philosophy" className="hover:text-[#e62e2d] transition-colors duration-300">Philosophy</a>
          <a href="#tech" className="hover:text-[#e62e2d] transition-colors duration-300">Stack</a>
          <a href="#journey" className="hover:text-[#ffc107] transition-colors duration-300">Journey</a>
          <a href="#vault" className="hover:text-[#ffc107] transition-colors duration-300">Vault</a>
          <a href="#certifications" className="hover:text-[#ffc107] transition-colors duration-300">Certs</a>
          <a href="#ai-lab" className="hover:text-[#e62e2d] transition-colors duration-300">Lab</a>
          <a href="#contact" className="hover:text-[#ff5722] transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}
