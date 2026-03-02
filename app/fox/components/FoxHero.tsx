"use client"

import { Download, FolderOpen } from "lucide-react"
import { useInView } from "./use-in-view"

export function FoxHero() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center bg-[#1f1f1f] px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-2xl font-medium uppercase tracking-[0.3em] text-[#ff6b35]">
            THE FOX
          </p>
          <h3 className="mb-5 text-4xl font-normal leading-tight tracking-tight text-white md:text-6xl" style={{ fontFamily: '"Times New Roman", serif' }}>
            <span>FAHEEMUDHEEN N</span>
          </h3>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-[#c4c4c4] md:text-xl">
            <span className="text-[#ff6b35]">Computer Science Engineering Student</span> | <span className="text-[#ff6b35]">Full Stack Developer</span>
          </p>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-[#9ca3af]">
            Building robust web applications with a focus on functionality,
            usability, and reliability. Passionate about end-to-end development
            and clean system architecture.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#d1d5db] px-8 py-3.5 text-sm font-semibold text-[#1f1f1f] transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-[#d1d5db]/10"
            >
              <FolderOpen size={16} />
              View Projects
            </a>
            <a
              href="/Faheem-Resume.pdf"
              download="Faheem-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-[#404040] bg-[#333333] px-8 py-3.5 text-sm font-semibold text-[#c4c4c4] transition-all duration-300 hover:border-[#d1d5db]/40 hover:text-[#d1d5db]"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[#9ca3af]/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-[#9ca3af]/50" />
        </div>
      </div>
    </section>
  )
}
