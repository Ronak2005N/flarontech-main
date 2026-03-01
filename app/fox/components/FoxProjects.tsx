"use client"

import { useInView } from "./use-in-view"

const projects = [
  {
    title: "Consumer Pantry System",
    description:
      "A comprehensive system for managing consumer pantry inventory, tracking supplies, and generating usage reports for efficient food management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Timetable Management System",
    description:
      "An automated timetable generation and management system designed for educational institutions to streamline scheduling workflows.",
    technologies: ["ReactJs", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Employee Management System",
    description:
      "A full-featured employee management platform built for internal operations, including record management, documentation, and team coordination tools.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
]

export function FoxProjects() {
  const { ref, isInView } = useInView()

  return (
    <section id="projects" ref={ref} className="bg-[#2a2a2a] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#9ca3af]">
            Work
          </p>
          <h2 className="mb-10 text-3xl font-bold text-[#ff6b35] md:text-4xl">
            Featured <span className="text-[#ff6b35]">Projects</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-2xl border border-[#404040] bg-[#333333] p-6 transition-all duration-300 hover:border-[#d1d5db]/40 hover:shadow-xl hover:shadow-black/20"
              >
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-[#9ca3af]">
                  {project.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[#2a2a2a] px-2.5 py-1 text-xs font-medium text-[#9ca3af]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
