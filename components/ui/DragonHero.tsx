"use client";

import React, { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

/* ═══════════════════════════════════════════════════
   LAYER 1a -HUD Wire Grid (Three.js)
   A tilted, slowly rotating wireframe grid that gives
   the "AI operations room" feel beneath the particles.
═══════════════════════════════════════════════════ */
function HUDGrid() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = -0.75 + Math.sin(state.clock.elapsedTime * 0.1) * 0.015;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.07) * 0.01;
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity =
      0.06 + Math.sin(state.clock.elapsedTime * 0.3) * 0.015;
  });

  return (
    <mesh ref={meshRef} rotation={[-0.75, 0, 0]} position={[0, -2, -4]}>
      <planeGeometry args={[140, 140, 50, 50]} />
      <meshBasicMaterial color="#e62e2d" wireframe transparent opacity={0.06} />
    </mesh>
  );
}

/* ═══════════════════════════════════════════════════
   LAYER 1b -Dragon Particle Core (Three.js)
   ~2000 red/orange particles in a spherical cluster
   that slowly orbits behind the title text.
═══════════════════════════════════════════════════ */
function DragonParticles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 2000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Sphere distribution with radial falloff for density in center
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.pow(Math.random(), 0.6) * 6; // Concentration toward center
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.08;
    // Subtle breathing effect via scale
    const breath = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
    ref.current.scale.setScalar(breath);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#e62e2d"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/* ═══════════════════════════════════════════════════
   LAYER 1c -Secondary Ember Particles
   Smaller, scattered orange sparks for depth
═══════════════════════════════════════════════════ */
function EmberParticles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 800;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 24;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.012) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff5722"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

/* ═══════════════════════════════════════════════════
   LAYER 3 -Foreground Content
   Kinetic typography, cycling subtitle, CTAs
═══════════════════════════════════════════════════ */
const SUBTITLE_ROLES = [
  'AI Generalist',
  'Builder of Anything',
  'Prompt Architect',
];

function HeroContent() {
  const theRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through subtitle roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % SUBTITLE_ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      // "THE" slides in from left
      tl.fromTo(
        theRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power4.out' }
      );

      // "DRAGON" characters stagger up from below with blur
      tl.fromTo(
        nameRef.current!.querySelectorAll('.dragon-char'),
        { y: 120, opacity: 0, filter: 'blur(12px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.06,
          duration: 1.0,
          ease: 'power4.out',
        },
        '-=0.5'
      );

      // Accent line scales in
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );

      // Subtitle fades in
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );

      // CTAs stagger in
      tl.fromTo(
        ctaRef.current!.querySelectorAll('.hero-cta'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.2'
      );

      // Scroll indicator fades in last
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.2'
      );
    });
    return () => ctx.revert();
  }, []);

  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    []
  );

  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      {/* ── "THE" -small anchored text ── */}
      <div ref={theRef} className="opacity-0 mb-1 md:mb-2">
        <span
          className="font-mono text-sm md:text-base tracking-[0.5em] uppercase text-white/80"
          style={{ textShadow: '0 0 20px rgba(230, 46, 45, 0.5)' }}
        >
          THE
        </span>
      </div>

      {/* ── "DRAGON" -massive kinetic heading ── */}
      <div ref={nameRef} className="overflow-hidden mb-3">
        {'DRAGON'.split('').map((char, i) => (
          <span
            key={i}
            className="dragon-char inline-block font-heading font-black leading-[0.88] tracking-[-0.01em] opacity-0"
            style={{
              fontSize: 'clamp(4rem, 15vw, 13rem)',
              color: '#ffffff',
              textShadow: '0 0 60px rgba(230, 46, 45, 0.3), 0 0 120px rgba(230, 46, 45, 0.15)',
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* ── Accent divider line ── */}
      <div
        ref={lineRef}
        className="w-28 h-[2px] mb-5 origin-center"
        style={{
          background: 'linear-gradient(90deg, transparent, #e62e2d, transparent)',
          boxShadow: '0 0 12px rgba(230, 46, 45, 0.5)',
        }}
      />

      {/* ── Cycling subtitle ── */}
      <div ref={subRef} className="opacity-0 h-8 md:h-9 relative overflow-hidden mb-10">
        <AnimatePresence mode="wait">
          <motion.span
            key={roleIndex}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="block font-mono text-sm md:text-base tracking-[0.35em] uppercase font-bold"
            style={{ color: '#ff4a49', textShadow: '0 0 20px rgba(230, 46, 45, 0.6)' }}
          >
            {SUBTITLE_ROLES[roleIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── CTA Buttons ── */}
      <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
        <a
          href="#vault-section"
          onClick={(e) => handleScrollTo(e, '#vault-section')}
          className="hero-cta group opacity-0 relative font-mono text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase px-8 py-3.5 border-2 border-[#e62e2d] text-white bg-[#e62e2d]/20 rounded-full transition-all duration-300 hover:bg-[#e62e2d] hover:text-white hover:shadow-[0_0_30px_rgba(230,46,45,0.4)]"
          style={{ textShadow: '0 0 10px rgba(230, 46, 45, 0.4)' }}
        >
          Explore the Vault
        </a>
        <a
          href="#contact-section"
          onClick={(e) => handleScrollTo(e, '#contact-section')}
          className="hero-cta group opacity-0 relative font-mono text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase px-8 py-3.5 border-2 border-white/40 text-white/90 rounded-full transition-all duration-300 hover:border-white/70 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] backdrop-blur-sm"
        >
          Let&apos;s Connect
        </a>
      </div>

      {/* ── Scroll indicator ── */}
      <div ref={scrollRef} className="absolute bottom-10 flex flex-col items-center gap-2 opacity-0">
        <div
          className="w-[1px] h-12"
          style={{
            background: 'linear-gradient(to bottom, #e62e2d, transparent)',
            opacity: 0.7,
          }}
        />
        <span className="text-[8px] font-mono tracking-[0.4em] uppercase text-white/50">
          SCROLL
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN HERO COMPONENT -4-Layer Architecture
═══════════════════════════════════════════════════ */
export default function DragonHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleCanPlay = () => {
      video.play().catch(() => {
        // Autoplay may be blocked; poster will show as fallback
      });
    };
    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* ── LAYER 0: Video Background (darker) ── */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/dragon-hero-poster.webp"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          filter: 'brightness(0.35) contrast(1.15) saturate(0.9)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <source src="/assets/dragon-hero.mp4" type="video/mp4" />
      </video>

      {/* ── LAYER 1: R3F Canvas (particles + HUD grid) ── */}
      {mounted && (
        <div className="absolute inset-0 z-[1]">
          <Canvas gl={{ alpha: true, antialias: true }} camera={{ position: [0, 0, 10], fov: 50 }}>
            <HUDGrid />
            <DragonParticles />
            <EmberParticles />
          </Canvas>
        </div>
      )}

      {/* ── LAYER 2: Radial vignette + gradient overlays ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 65% at 50% 50%, transparent 15%, rgba(0,0,0,0.85) 100%)',
        }}
      />
      {/* Bottom gradient for smooth section transition */}
      <div className="absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-[#0a0a0c] to-transparent pointer-events-none" />

      {/* ── LAYER 3: Foreground Content ── */}
      <div className="relative z-[3] h-full">
        <HeroContent />
      </div>
    </section>
  );
}
