"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { Rocket, Brain, Compass } from 'lucide-react';

/* ═══════════════════════════════════════════════════
   ANIMATED COUNTER — counts up when in view
═══════════════════════════════════════════════════ */
function AnimatedCounter({
    target,
    suffix = '',
    prefix = '',
    decimals = 0,
    color,
    glowColor,
}: {
    target: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    color: string;
    glowColor: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) =>
        decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
    );
    const [display, setDisplay] = useState(decimals > 0 ? '0.00' : '0');

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(count, target, {
            duration: 2,
            ease: 'easeOut',
        });
        const unsub = rounded.on('change', (v) => setDisplay(v));
        return () => {
            controls.stop();
            unsub();
        };
    }, [isInView, target, count, rounded]);

    return (
        <span
            ref={ref}
            className="text-5xl md:text-6xl font-heading font-black"
            style={{
                color,
                textShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
            }}
        >
            {prefix}
            {display}
            {suffix}
        </span>
    );
}

/* ═══════════════════════════════════════════════════
   OPERATING PRINCIPLES
═══════════════════════════════════════════════════ */
const principles = [
    {
        icon: <Rocket className="size-5" />,
        title: 'Ship First, Perfect Later',
        desc: 'Working software beats white-paper plans. Every idea gets a prototype within days — not months.',
        accent: '#e62e2d',
    },
    {
        icon: <Brain className="size-5" />,
        title: 'AI as Co-Pilot, Not Crutch',
        desc: 'AI amplifies thinking, never replaces it. Understanding comes first — speed comes from mastery, not shortcuts.',
        accent: '#ffc107',
    },
    {
        icon: <Compass className="size-5" />,
        title: 'Master Any Domain on Demand',
        desc: 'No stack is permanent. The ability to learn, adapt, and execute in any field is the ultimate skill.',
        accent: '#10b981',
    },
];

/* ═══════════════════════════════════════════════════
   STATS DATA
═══════════════════════════════════════════════════ */
const stats = [
    {
        target: 17,
        suffix: '+',
        label: 'Projects Shipped',
        color: '#ffffff',
        glowColor: 'rgba(255, 255, 255, 0.15)',
        accentBar: '#e62e2d',
    },
    {
        target: 9.63,
        decimals: 2,
        label: 'Dual Degree CGPA',
        color: '#ffc107',
        glowColor: 'rgba(255, 193, 7, 0.2)',
        accentBar: '#ffc107',
    },
    {
        target: 0,
        prefix: '0 → 1',
        label: 'Startup Builder',
        color: '#e62e2d',
        glowColor: 'rgba(230, 46, 45, 0.2)',
        accentBar: '#e62e2d',
        isStatic: true,
    },
];

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
export default function DragonPhilosophy() {
    const principlesRef = useRef<HTMLDivElement>(null);
    const principlesInView = useInView(principlesRef, { once: true, margin: '-80px' });

    const statsRef = useRef<HTMLDivElement>(null);
    const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

    return (
        <section
            id="philosophy"
            className="relative min-h-screen flex items-center justify-center border-b border-white/5 bg-[#0a0a0c] px-6 py-24 md:py-32 overflow-hidden"
        >
            {/* ── BACKGROUND: Aurora gradient blobs ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Red aurora blob */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06]"
                    style={{
                        background: 'radial-gradient(circle, #e62e2d 0%, transparent 70%)',
                        top: '10%',
                        left: '20%',
                        animation: 'auroraFloat1 20s ease-in-out infinite',
                        filter: 'blur(80px)',
                    }}
                />
                {/* Amber aurora blob */}
                <div
                    className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
                    style={{
                        background: 'radial-gradient(circle, #ffc107 0%, transparent 70%)',
                        bottom: '15%',
                        right: '15%',
                        animation: 'auroraFloat2 25s ease-in-out infinite',
                        filter: 'blur(100px)',
                    }}
                />
                {/* Deep purple accent blob */}
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
                    style={{
                        background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
                        top: '50%',
                        right: '40%',
                        animation: 'auroraFloat3 18s ease-in-out infinite',
                        filter: 'blur(90px)',
                    }}
                />
            </div>

            {/* ── BACKGROUND: Grid overlay (faint, on top of aurora) ── */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* ── CONTENT ── */}
            <div className="max-w-5xl mx-auto relative z-10 w-full">

                {/* ━━━ ACT 1: THE BELIEF ━━━ */}
                <div className="mb-6">
                    <span className="text-xs font-mono tracking-[0.5em] uppercase text-white/40 block mb-4">
                        Manifesto / 01
                    </span>
                    <h2 className="font-heading text-[#e62e2d] text-xl md:text-2xl uppercase tracking-[0.3em] mb-4 flex items-center">
                        <span className="w-12 h-[2px] bg-[#e62e2d] mr-4 inline-block" />
                        The Core Philosophy
                    </h2>
                </div>

                <ScrollReveal
                    baseOpacity={0.15}
                    enableBlur={true}
                    baseRotation={2}
                    blurStrength={8}
                    textClassName="text-3xl md:text-5xl lg:text-7xl font-sans font-medium leading-[1.3] text-white/90"
                >
                    AI amplifies my thinking. I amplify possibilities. I build with tools, not just learn them. With AI as my co-pilot, I master any domain on demand.
                </ScrollReveal>

                {/* ━━━ ACT 2: THE PRINCIPLES ━━━ */}
                <div ref={principlesRef} className="mt-20 mb-16">
                    <span className="text-xs font-mono tracking-[0.5em] uppercase text-white/40 block mb-6">
                        Operating Principles / 02
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {principles.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
                                className="group relative rounded-2xl border border-white/5 bg-[#121318]/80 backdrop-blur-sm p-6 transition-all duration-500 hover:border-white/15 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]"
                            >
                                {/* Top accent bar */}
                                <div
                                    className="absolute top-0 left-6 right-6 h-[2px] rounded-b opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: p.accent }}
                                />

                                {/* Icon */}
                                <div
                                    className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/8 p-3"
                                    style={{ color: p.accent }}
                                >
                                    {p.icon}
                                </div>

                                {/* Text */}
                                <h4 className="font-heading text-base text-white mb-2">{p.title}</h4>
                                <p className="text-[12px] text-white/45 font-sans leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ━━━ ACT 3: THE PROOF (Stats) ━━━ */}
                <div ref={statsRef} className="border-t border-white/10 pt-12">
                    <span className="text-xs font-mono tracking-[0.5em] uppercase text-white/40 block mb-8">
                        The Proof / 03
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.2, ease: 'easeOut' }}
                                className="flex flex-col relative"
                            >
                                {/* Accent bar at top */}
                                <div
                                    className="w-8 h-[3px] rounded-full mb-4"
                                    style={{
                                        background: stat.accentBar,
                                        boxShadow: `0 0 12px ${stat.glowColor}`,
                                    }}
                                />

                                {/* Number */}
                                {stat.isStatic ? (
                                    <span
                                        className="text-5xl md:text-6xl font-heading font-black"
                                        style={{
                                            color: stat.color,
                                            textShadow: `0 0 30px ${stat.glowColor}, 0 0 60px ${stat.glowColor}`,
                                        }}
                                    >
                                        {stat.prefix}
                                    </span>
                                ) : (
                                    <AnimatedCounter
                                        target={stat.target}
                                        suffix={stat.suffix || ''}
                                        prefix={stat.prefix || ''}
                                        decimals={stat.decimals || 0}
                                        color={stat.color}
                                        glowColor={stat.glowColor}
                                    />
                                )}

                                {/* Label */}
                                <span className="text-xs font-sans tracking-widest uppercase text-white/40 mt-3">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Aurora animation keyframes ── */}
            <style jsx>{`
        @keyframes auroraFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
        }
        @keyframes auroraFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 30px) scale(1.05); }
          66% { transform: translate(40px, -20px) scale(0.9); }
        }
        @keyframes auroraFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -50px) scale(1.15); }
        }
      `}</style>
        </section>
    );
}
