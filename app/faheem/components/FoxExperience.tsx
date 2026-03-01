"use client"

import { Briefcase } from "lucide-react"
import { useInView } from "./use-in-view"

const experiences = [
  {
    role: "Frontend Developer Cum Marketing",
    company: "Imitate Labs",
    date: "December 2025",
    description:
      "Designed UI/UX for the site using NextJs and Deployed Query Box for the employees. Prepared Documentation for team workflow management system and pricing strategy analysis for their product.",
  },
  {
    role: "Internal IT Support",
    company: "Vdart Technologies",
    date: "June 2025",
    description:
      "Developed Employee Management system using PHP and prepared detailed documentation of internal applications and tools used by the team.",
  },
  {
    role: "Full Stack Developer",
    company: "Afton Tech",
    date: "December 2024",
    description:
      "Contributed to both frontend and backend development using PHP, MySQL, HTML, CSS, Javascript supporting end-to-end web application development.",
  },
  {
    role: "IT Employee Support",
    company: "All Sec Technologies",
    date: "June 2024",
    description:
      "Involved in recording employee queries, tracking issues resolution, coordinated with HR and IT teams, and maintained accurate support records to improve efficiency.",
  },
]

export function FoxExperience() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" ref={ref} className="bg-[#2a2a2a] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#9ca3af]">
            Career
          </p>
          <h2 className="mb-10 text-3xl font-bold text-[#ff6b35] md:text-4xl">
            Professional <span className="text-[#ff6b35]">Experience</span>
          </h2>
          <div className="relative space-y-0">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#404040] md:left-[23px]" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-5 pb-10 last:pb-0 md:gap-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#404040] bg-[#333333] md:h-12 md:w-12">
                  <Briefcase size={16} className="text-[#9ca3af]" />
                </div>

                {/* Content */}
                <div className="rounded-xl border border-[#404040] bg-[#333333] p-5 flex-1 transition-all duration-300 hover:border-[#d1d5db]/30">
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-semibold text-[#ff6b35]">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-medium text-[#9ca3af]">
                      {exp.date}
                    </span>
                  </div>
                  <p className="mb-2 text-sm font-medium text-[#d1d5db]">
                    {exp.company}
                  </p>
                  <p className="text-sm leading-relaxed text-[#9ca3af]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
