"use client";
import React, { useState } from 'react';
import { Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  accent: string;
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
  },
  {
    title: 'OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Oct 2025',
    credentialId: '103035723OCI25AICFA',
    skills: ['Oracle Cloud Infrastructure'],
    accent: '#f97316',
  },
  {
    title: 'Docker Foundations Professional Certificate',
    issuer: 'Docker, Inc',
    date: 'Jun 2025',
    skills: ['Containerization', 'Docker Products'],
    accent: '#2496ED',
  },
  {
    title: 'GitHub Foundations Certification',
    issuer: 'GitHub',
    date: 'Dec 2024',
    skills: ['GitHub', 'Version Control'],
    accent: '#10b981',
  },
  {
    title: 'BCG - GenAI Job Simulation',
    issuer: 'Forage',
    date: 'Oct 2024',
    credentialId: 'p9RjuTFp82G8aa6fG',
    skills: ['Python', 'Chatbot Development', 'GenAI'],
    accent: '#a855f7',
  },
  {
    title: 'Accenture Data Analytics & Visualization',
    issuer: 'Forage',
    date: 'Oct 2024',
    credentialId: 'CmjKYy2iE9JgbyXpF',
    skills: ['Data Visualization', 'Communication', 'Analytics'],
    accent: '#06b6d4',
  },
  {
    title: 'DataCamp ChatGPT Intermediate',
    issuer: 'DataCamp',
    date: 'Nov 2024',
    skills: ['ChatGPT', 'Prompt Engineering'],
    accent: '#ffc107',
  },
  {
    title: 'Data Literacy Certification',
    issuer: 'DataCamp',
    date: 'Nov 2024',
    credentialId: 'DL0038438163443',
    skills: ['Data Literacy'],
    accent: '#3b82f6',
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
    title: 'Excellence in Academia — 2nd University Rank',
    issuer: 'Hindustan University',
    date: 'Apr 2025',
    description: 'Certificate of Proficiency for achieving 9.64 CGPA (2nd Year) at Hindustan Institute of Technology and Science.',
    accent: '#e62e2d',
  },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certifications : certifications.slice(0, 4);

  return (
    <section id="certifications" className="relative w-full bg-[#0a0a0c] border-t border-white/5 overflow-hidden">
      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-sans mb-3">credentials</p>
        <h3 className="text-3xl md:text-5xl font-heading text-white">
          CERTIFICATIONS &amp; <span className="text-[#ffc107]">AWARDS</span>
        </h3>
        <p className="mt-4 text-white/40 font-sans text-sm tracking-wide max-w-xl">
          Validated expertise from industry leaders — Oracle, Docker, GitHub, and more.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-20">
        {/* Awards Row */}
        <div className="mb-14">
          <h4 className="font-heading text-xl md:text-2xl text-white mb-6 flex items-center gap-3">
            <Award className="size-6 text-[#ffc107]" />
            <span>Honors & Awards</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {awards.map((award, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/5 bg-[#121318] p-6 transition-all duration-500 hover:border-white/15 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-b" style={{ background: award.accent }} />
                
                <div className="flex items-start justify-between mb-3">
                  <h5 className="font-heading text-lg text-white pr-4">{award.title}</h5>
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md whitespace-nowrap shrink-0">
                    {award.date}
                  </span>
                </div>
                <p className="text-xs font-sans font-semibold mb-2" style={{ color: award.accent }}>{award.issuer}</p>
                <p className="text-xs text-white/45 font-sans leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h4 className="font-heading text-xl md:text-2xl text-white mb-6 flex items-center gap-3">
            <Award className="size-6 text-[#e62e2d]" />
            <span>Professional Certifications</span>
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visibleCerts.map((cert, i) => (
              <div
                key={i}
                className="group relative flex flex-col rounded-xl border border-white/5 bg-[#121318] p-5 transition-all duration-500 hover:border-white/15 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
              >
                {/* Left accent line */}
                <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r" style={{ background: cert.accent }} />
                
                <h5 className="font-heading text-sm text-white mb-2 leading-tight pl-1">{cert.title}</h5>
                <p className="text-[11px] font-sans font-semibold mb-1 pl-1" style={{ color: cert.accent }}>{cert.issuer}</p>
                <p className="text-[10px] font-mono text-white/30 mb-3 pl-1">{cert.date}</p>
                
                {cert.credentialId && (
                  <p className="text-[9px] font-mono text-white/20 mb-3 pl-1 truncate" title={cert.credentialId}>
                    ID: {cert.credentialId}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mt-auto pl-1">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="text-[7px] font-mono uppercase bg-white/5 text-white/50 px-2 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {certifications.length > 4 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 text-sm font-sans text-white/50 hover:text-white/80 transition-colors duration-300 border border-white/10 hover:border-white/20 rounded-full px-6 py-2.5"
              >
                {showAll ? (
                  <>Show Less <ChevronUp className="size-4" /></>
                ) : (
                  <>View All {certifications.length} Certifications <ChevronDown className="size-4" /></>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
