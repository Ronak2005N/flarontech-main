'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import gsap from 'gsap';
import { elephantColors } from './elephant-theme';

// Particle system component
function ElephantParticles() {
  const ref = useRef<any>(null);
  const positions = new Float32Array(2000 * 3);
  
  // Generate random sphere points
  for (let i = 0; i < 2000 * 3; i += 3) {
    const radius = Math.random() * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi);
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#d4af37"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export default function ElephantHero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - character by character
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        gsap.fromTo(
          chars,
          { opacity: 0, y: 50, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: 'power3.out',
            delay: 0.3,
          }
        );
      }

      // Subtitle animation
      if (subtitleRef.current) {
        const chars = subtitleRef.current.querySelectorAll('.char');
        gsap.fromTo(
          chars,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.02,
            ease: 'power2.out',
            delay: 1.2,
          }
        );
      }

      // Role and tagline fade in
      gsap.fromTo(
        [roleRef.current, taglineRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          delay: 1.8,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block" style={{ perspective: '1000px' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Three.js Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 1], fov: 75 }}
          className="bg-[#0a0a0a]"
        >
          <ElephantParticles />
        </Canvas>
      </div>

      {/* CSS Grid Overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Elephant Image Background */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center opacity-75">
        <img
          src="/images/elephant3.png"
          alt="Elephant"
          className="w-[800px] h-[800px] object-contain"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.3), rgba(10, 10, 10, 0.95))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Title */}
        <div ref={titleRef} className="mb-4">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white">
            {splitText('RONAK')}
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="mb-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#d4af37]">
            {splitText('THE ELEPHANT')}
          </h2>
        </div>

        {/* Role */}
        <div ref={roleRef} className="mb-6 opacity-0">
          <p className="text-2xl md:text-3xl font-semibold text-[#94a3b8] tracking-wide">
            CIO – Chief Information Officer
          </p>
        </div>

        {/* Descriptors */}
        <div ref={roleRef} className="mb-8 opacity-0">
          <p className="text-lg md:text-xl text-[#64748b] font-light">
            System Thinker <span className="text-[#d4af37]">•</span> AI Builder{' '}
            <span className="text-[#d4af37]">•</span> Data Strategist
          </p>
        </div>

        {/* Tagline */}
        <div ref={taglineRef} className="opacity-0">
          <p className="text-xl md:text-2xl text-white font-light italic max-w-2xl mx-auto">
            "Strong foundations. Scalable intelligence."
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[#d4af37]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
