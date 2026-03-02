"use client"

import { useInView } from "./use-in-view"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJs",
  "NextJs",
  "PHP",
  "MySQL",
  "Documentation",
  "Canva",
  "Figma",
]

export function FoxSkills() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" ref={ref} className="bg-[#1f1f1f] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#9ca3af]">
            Expertise
          </p>
          <h2 className="mb-10 text-3xl font-bold text-[#ff6b35] md:text-4xl">
            <span className="text-[#ff6b35]">Skills</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group rounded-xl border border-[#404040] bg-[#333333] px-5 py-4 text-center transition-all duration-300 hover:border-[#d1d5db]/40 hover:shadow-lg hover:shadow-black/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <p className="text-sm font-medium text-[#c4c4c4] transition-colors group-hover:text-[#d1d5db]">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
