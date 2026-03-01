'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

/* ─── Tilted Grid Matrix ─────────────────────────────────── */
interface GridMatrixProps { isDark: boolean }
function GridMatrix({ isDark }: GridMatrixProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const baseOpacity = isDark ? 0.11 : 0.45;
  const color       = isDark ? '#00D98B' : '#007a4c';
  useFrame((s) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = -0.72 + Math.sin(s.clock.elapsedTime * 0.12) * 0.018;
    meshRef.current.rotation.z = Math.sin(s.clock.elapsedTime * 0.08) * 0.012;
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity =
      baseOpacity + Math.sin(s.clock.elapsedTime * 0.4) * 0.02;
  });
  return (
    /* Larger plane (120×120) moved up so the far edge fills the top of viewport */
    <mesh ref={meshRef} rotation={[-0.72, 0, 0]} position={[0, 0, -3]}>
      <planeGeometry args={[120, 120, 46, 46]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={baseOpacity} />
    </mesh>
  );
}

/* ─── Particles ──────────────────────────────────────────── */
interface ParticlesProps { isDark: boolean }
function EmeraldParticles({ isDark }: ParticlesProps) {
  const ref = useRef<THREE.Points>(null!);
  const count = 1600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, []);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.022;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.016) * 0.07;
  });
  const color   = isDark ? '#00D98B' : '#007a4c';
  const opacity = isDark ? 0.4 : 0.75;
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color={color} size={0.028} sizeAttenuation depthWrite={false} opacity={opacity} />
    </Points>
  );
}

/* ─── Hero content ──────────────────────────────────────── */
interface HeroContentProps { isDark: boolean }

function HeroContent({ isDark }: HeroContentProps) {
  const nameRef    = useRef<HTMLDivElement>(null);
  const subRef     = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const roleRef    = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.35 })
        .fromTo(
          nameRef.current!.querySelectorAll('.char'),
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.05, duration: 1.1, ease: 'power4.out' }
        )
        .fromTo(subRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .fromTo(roleRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
        .fromTo(
          ctaRef.current!.querySelectorAll('a'),
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.55, ease: 'power3.out' },
          '-=0.15'
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

      {/* PANTHER — main name, per-character stagger */}
      <div ref={nameRef} className="overflow-hidden mb-2">
        {'PANTHER'.split('').map((char, ci) => (
          <span
            key={ci}
            className="char inline-block font-heading font-black leading-[0.88] tracking-[-0.02em] opacity-0"
            style={{
              fontSize: 'clamp(3.8rem, 14vw, 12rem)',
              color: 'var(--p-text)',
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* THAMIL — subline */}
      <div ref={subRef} className="mb-5 opacity-0">
        <span
          className="font-mono text-sm md:text-base tracking-[0.55em] uppercase"
          style={{ color: 'var(--p-accent)', opacity: 0.75 }}
        >
          THAMILELELAN M
        </span>
      </div>

      {/* Divider */}
      <div
        ref={lineRef}
        className="w-20 h-[2px] mb-5 origin-center"
        style={{ background: 'var(--p-accent)' }}
      />

      {/* Role */}
      <p
        ref={roleRef}
        className="font-mono text-[11px] md:text-xs tracking-[0.35em] uppercase opacity-0"
        style={{ color: 'var(--p-text-muted)' }}
      >
        Full Stack Developer · Flarontech
      </p>

      {/* CTAs */}
      <div ref={ctaRef} className="flex gap-4 mt-10">
        <a
          href="#vault"
          className="opacity-0 font-mono font-black text-[10px] tracking-[0.25em] uppercase px-7 py-3 border-2 transition-all duration-150 hover:-translate-x-px hover:-translate-y-px"
          style={{
            background: 'var(--p-accent)',
            borderColor: 'var(--p-accent)',
            color: 'var(--p-invert-text)',
            boxShadow: '4px 4px 0 var(--p-invert-text)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '6px 6px 0 var(--p-invert-text)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '4px 4px 0 var(--p-invert-text)')}
        >
          SEE WORK
        </a>
        <a
          href="#contact"
          className="opacity-0 font-mono font-black text-[10px] tracking-[0.25em] uppercase px-7 py-3 border-2 transition-all duration-150 hover:-translate-x-px hover:-translate-y-px"
          style={{
            background: 'transparent',
            borderColor: 'var(--p-accent)',
            color: 'var(--p-accent)',
            boxShadow: '4px 4px 0 var(--p-accent)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '6px 6px 0 var(--p-accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '4px 4px 0 var(--p-accent)')}
        >
          CONTACT
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <div
          className="w-0.5 h-10"
          style={{ background: 'linear-gradient(to bottom, var(--p-accent), transparent)', opacity: 0.5 }}
        />
        <span
          className="text-[8px] font-mono tracking-[0.3em] uppercase"
          style={{ color: 'var(--p-accent)', opacity: 0.35 }}
        >
          SCROLL
        </span>
      </div>
    </div>
  );
}

/* ─── Main section ──────────────────────────────────────── */
interface PantherHeroProps { isDark: boolean }

export default function PantherHero({ isDark }: PantherHeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /* vignette blends into the page bg colour in either mode */
  const vignette = isDark
    ? 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 20%, #050e08 100%)'
    : 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 20%, #f2f7f4 100%)';

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
      style={{ background: 'var(--p-bg)' }}
    >
      {/* WebGL canvas */}
      {mounted && (
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 9], fov: 55 }}>
            <GridMatrix isDark={isDark} />
            <EmeraldParticles isDark={isDark} />
          </Canvas>
        </div>
      )}

      {/* Radial vignette — uses page bg colour */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: vignette }}
      />

      {/* Content */}
      <div className="relative z-[2] h-full">
        <HeroContent isDark={isDark} />
      </div>
    </section>
  );
}
