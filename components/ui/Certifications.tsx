"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Trophy, Star, ExternalLink, Medal } from 'lucide-react';
import {
  SiOracle,
  SiDocker,
  SiGithub,
} from 'react-icons/si';

/* ═══════════════════════════════════════════════════
   ISSUER LOGO MAP
═══════════════════════════════════════════════════ */
const issuerLogos: Record<string, { icon: React.ReactNode; color: string }> = {
  Oracle: { icon: <SiOracle size={20} />, color: '#e62e2d' },
  'Docker, Inc': { icon: <SiDocker size={20} />, color: '#2496ED' },
  GitHub: { icon: <SiGithub size={20} />, color: '#fff' },
  Forage: { icon: <Star size={18} />, color: '#a855f7' },
  DataCamp: { icon: <Medal size={18} />, color: '#03EF62' },
};

/* ═══════════════════════════════════════════════════
   VISUAL TIERS -for hierarchy
═══════════════════════════════════════════════════ */
type CertTier = 'professional' | 'foundation' | 'course';

const tierStyle: Record<CertTier, { label: string; badgeColor: string; badgeBg: string; glow: string }> = {
  professional: {
    label: 'Professional',
    badgeColor: '#ffc107',
    badgeBg: 'rgba(255, 193, 7, 0.12)',
    glow: '0 0 20px rgba(255, 193, 7, 0.15)',
  },
  foundation: {
    label: 'Foundation',
    badgeColor: '#10b981',
    badgeBg: 'rgba(16, 185, 129, 0.10)',
    glow: 'none',
  },
  course: {
    label: 'Course',
    badgeColor: '#64748b',
    badgeBg: 'rgba(100, 116, 139, 0.10)',
    glow: 'none',
  },
};

/* ═══════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════ */
interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  accent: string;
  tier: CertTier;
  link?: string;
}

interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  accent: string;
}

const certifications: Certification[] = [
  {
    title: 'OCI 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    date: 'Nov 2025',
    credentialId: '323467214OCI25DSOCP',
    skills: ['Model Training & Deployment', 'MLOps', 'OCI'],
    accent: '#e62e2d',
    tier: 'professional',
  },
  {
    title: 'OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Oct 2025',
    credentialId: '103035723OCI25AICFA',
    skills: ['Oracle Cloud Infrastructure'],
    accent: '#f97316',
    tier: 'foundation',
  },
  {
    title: 'Docker Foundations Professional Certificate',
    issuer: 'Docker, Inc',
    date: 'Jun 2025',
    skills: ['Containerization', 'Docker Products'],
    accent: '#2496ED',
    tier: 'professional',
  },
  {
    title: 'GitHub Foundations Certification',
    issuer: 'GitHub',
    date: 'Dec 2024',
    skills: ['GitHub', 'Version Control'],
    accent: '#10b981',
    tier: 'foundation',
  },
  {
    title: 'BCG - GenAI Job Simulation',
    issuer: 'Forage',
    date: 'Oct 2024',
    credentialId: 'p9RjuTFp82G8aa6fG',
    skills: ['Python', 'Chatbot Development', 'GenAI'],
    accent: '#a855f7',
    tier: 'course',
  },
  {
    title: 'Accenture Data Analytics & Visualization',
    issuer: 'Forage',
    date: 'Oct 2024',
    credentialId: 'CmjKYy2iE9JgbyXpF',
    skills: ['Data Visualization', 'Communication', 'Analytics'],
    accent: '#06b6d4',
    tier: 'course',
  },
  {
    title: 'DataCamp ChatGPT Intermediate',
    issuer: 'DataCamp',
    date: 'Nov 2024',
    skills: ['ChatGPT', 'Prompt Engineering'],
    accent: '#ffc107',
    tier: 'course',
  },
  {
    title: 'Data Literacy Certification',
    issuer: 'DataCamp',
    date: 'Nov 2024',
    credentialId: 'DL0038438163443',
    skills: ['Data Literacy'],
    accent: '#3b82f6',
    tier: 'course',
  },
];

const awards: AwardItem[] = [
  {
    title: 'Pinnacle Performer of the Year Award',
    issuer: 'Department of Computer Science & Engineering',
    date: 'Sep 2025',
    description: 'Awarded for exceptional achievement in AI/ML while at Hindustan Institute of Technology and Science.',
    accent: '#ffc107',
  },
  {
    title: 'Excellence in Academia -2nd University Rank',
    issuer: 'Hindustan University',
    date: 'Apr 2025',
    description: 'Certificate of Proficiency for achieving 9.64 CGPA (2nd Year) at Hindustan Institute of Technology and Science.',
    accent: '#e62e2d',
  },
];

/* ═══════════════════════════════════════════════════
   AWARD CARD -celebratory with trophy + glow
═══════════════════════════════════════════════════ */
function AwardCard({ award, index }: { award: AwardItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-2xl border bg-[#121318] p-6 transition-all duration-500 hover:-translate-y-1"
      style={{
        borderColor: `${award.accent}25`,
        boxShadow: `0 0 40px ${award.accent}10, inset 0 1px 0 ${award.accent}15`,
      }}
    >
      {/* Top golden gradient bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${award.accent}, transparent)`,
        }}
      />

      {/* Trophy icon with glow */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="shrink-0 flex items-center justify-center rounded-xl w-12 h-12 border"
          style={{
            background: `${award.accent}12`,
            borderColor: `${award.accent}30`,
            boxShadow: `0 0 24px ${award.accent}20`,
            color: award.accent,
          }}
        >
          <Trophy size={22} />
        </div>
        <div className="flex-1">
          <h5 className="font-heading text-base text-white leading-snug mb-1">{award.title}</h5>
          <p className="text-[11px] font-sans font-semibold" style={{ color: award.accent }}>{award.issuer}</p>
        </div>
        <span
          className="text-[10px] font-mono px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 border"
          style={{
            color: award.accent,
            borderColor: `${award.accent}25`,
            background: `${award.accent}08`,
          }}
        >
          {award.date}
        </span>
      </div>

      <p className="text-xs text-white/45 font-sans leading-relaxed pl-16">{award.description}</p>

      {/* Subtle sparkle decorations */}
      <div
        className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full opacity-40"
        style={{ background: award.accent, boxShadow: `0 0 6px ${award.accent}` }}
      />
      <div
        className="absolute bottom-6 right-10 w-1 h-1 rounded-full opacity-25"
        style={{ background: award.accent, boxShadow: `0 0 4px ${award.accent}` }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   CERT CARD -with logo + tier badge + hierarchy
═══════════════════════════════════════════════════ */
function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const tier = tierStyle[cert.tier];
  const logo = issuerLogos[cert.issuer];
  const isProfessional = cert.tier === 'professional';

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative flex-shrink-0 rounded-xl border bg-[#121318] transition-all duration-500 hover:-translate-y-1 ${isProfessional ? 'p-6 w-[320px]' : 'p-5 w-[280px]'
        }`}
      style={{
        borderColor: isProfessional ? `${cert.accent}30` : 'rgba(255,255,255,0.05)',
        boxShadow: isProfessional ? `0 0 30px ${cert.accent}10` : 'none',
      }}
    >
      {/* Left accent line */}
      <div
        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r"
        style={{ background: cert.accent }}
      />

      {/* Header: logo + tier */}
      <div className="flex items-center justify-between mb-3 pl-2">
        <div
          className="flex items-center justify-center rounded-lg w-9 h-9 border"
          style={{
            background: `${cert.accent}10`,
            borderColor: `${cert.accent}20`,
            color: logo?.color || cert.accent,
          }}
        >
          {logo?.icon || <Award size={18} />}
        </div>
        <span
          className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border"
          style={{
            color: tier.badgeColor,
            borderColor: tier.badgeBg,
            background: tier.badgeBg,
            boxShadow: tier.glow,
          }}
        >
          {tier.label}
        </span>
      </div>

      {/* Title */}
      <h5
        className={`font-heading text-white leading-tight pl-2 mb-2 ${isProfessional ? 'text-sm' : 'text-[13px]'
          }`}
      >
        {cert.title}
      </h5>

      {/* Issuer + Date */}
      <div className="flex items-center gap-2 pl-2 mb-3">
        <span className="text-[11px] font-sans font-semibold" style={{ color: cert.accent }}>
          {cert.issuer}
        </span>
        <span className="text-white/15">·</span>
        <span className="text-[10px] font-mono text-white/30">{cert.date}</span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 pl-2">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="text-[8px] font-mono uppercase px-2 py-0.5 rounded border"
            style={{
              color: `${cert.accent}cc`,
              borderColor: `${cert.accent}15`,
              background: `${cert.accent}08`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Credential ID */}
      {cert.credentialId && (
        <p className="text-[9px] font-mono text-white/15 mt-3 pl-2 truncate" title={cert.credentialId}>
          ID: {cert.credentialId}
        </p>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative w-full bg-[#0a0a0c] border-t border-white/5 overflow-hidden"
    >
      {/* Aurora bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #ffc107 0%, transparent 70%)',
            top: '10%',
            right: '20%',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-14">
        <span className="text-xs font-mono tracking-[0.5em] uppercase text-white/40 block mb-4">
          Credentials / 06
        </span>
        <h3 className="text-3xl md:text-5xl font-heading text-white">
          CERTIFICATIONS &amp; <span className="text-[#ffc107]">AWARDS</span>
        </h3>
        <p className="mt-4 text-white/40 font-sans text-sm tracking-wide max-w-xl">
          Validated expertise from industry leaders -Oracle, Docker, GitHub, and more.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-20 relative z-10">

        {/* ━━━ AWARDS -celebratory cards ━━━ */}
        <div className="mb-16">
          <h4 className="font-heading text-lg md:text-xl text-white mb-6 flex items-center gap-3">
            <Trophy className="size-5 text-[#ffc107]" />
            <span>Honors & <span className="text-[#ffc107]">Awards</span></span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {awards.map((award, i) => (
              <AwardCard key={i} award={award} index={i} />
            ))}
          </div>
        </div>

        {/* ━━━ CERTIFICATIONS -horizontal scroll carousel ━━━ */}
        <div>
          <h4 className="font-heading text-lg md:text-xl text-white mb-6 flex items-center gap-3">
            <Award className="size-5 text-[#e62e2d]" />
            <span>Professional <span className="text-[#e62e2d]">Certifications</span></span>
          </h4>

          {/* Horizontal scrolling container */}
          <div className="relative">
            {/* Left fade */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none" />

            <div
              className="flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,255,255,0.1) transparent',
              }}
            >
              {certifications.map((cert, i) => (
                <CertCard key={i} cert={cert} index={i} />
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <p className="text-[10px] font-mono text-white/20 text-center mt-4 tracking-widest uppercase">
            ← Scroll to explore →
          </p>
        </div>
      </div>
    </section>
  );
}
