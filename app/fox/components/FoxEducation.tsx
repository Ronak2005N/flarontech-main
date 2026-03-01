"use client"

import { GraduationCap } from "lucide-react"
import { useInView } from "./use-in-view"

const education = [
  {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Hindustan Institute of Technology and Science, Chennai",
    period: "July 2023 - July 2027",
    highlight: "8.62 CGPA",
  },
  {
    degree: "High School - PCB + Mathematics",
    institution: "Velammal Bodhi Campus",
    period: "Completed May 2023",
    highlight: "",
  },
]

export function FoxEducation() {
  const { ref, isInView } = useInView()

  return (
    <section id="education" ref={ref} className="bg-[#1f1f1f] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#9ca3af]">
            Academic
          </p>
          <h2 className="mb-10 text-3xl font-bold text-[#ff6b35] md:text-4xl">
            My <span className="text-[#ff6b35]">Education</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="group rounded-2xl border border-[#404040] bg-[#333333] p-6 transition-all duration-300 hover:border-[#d1d5db]/40 hover:shadow-lg hover:shadow-black/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2a2a2a] transition-colors group-hover:bg-[#404040]">
                  <GraduationCap
                    size={22}
                    className="text-[#9ca3af] transition-colors group-hover:text-[#d1d5db]"
                  />
                </div>
                <h3 className="mb-1 text-base font-semibold text-[#ff6b35]">
                  {edu.degree}
                </h3>
                <p className="mb-2 text-sm text-[#d1d5db]">{edu.institution}</p>
                <p className="text-xs text-[#9ca3af]">{edu.period}</p>
                {edu.highlight && (
                  <div className="mt-4 inline-block rounded-md bg-[#2a2a2a] px-3 py-1.5 text-xs font-semibold text-[#d1d5db]">
                    {edu.highlight}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
