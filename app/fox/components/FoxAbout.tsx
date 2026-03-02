"use client"

import { useInView } from "./use-in-view"

export function FoxAbout() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" ref={ref} className="bg-[#2a2a2a] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#9ca3af]">
            About
          </p>
          <h2 className="mb-10 text-3xl font-bold text-[#ff6b35] md:text-4xl">
            About <span className="text-[#ff6b35]">Me</span>
          </h2>
          <div className="rounded-2xl border border-[#404040] bg-[#333333] p-8 md:p-10">
            <p className="text-base leading-relaxed text-[#c4c4c4]">
              Developer involved in the{" "}
              <span className="font-medium text-[#d1d5db]">
                development and maintenance
              </span>{" "}
              of web applications contributing to{" "}
              <span className="font-medium text-[#d1d5db]">
                system functionality, usability and reliability
              </span>
              . Along with preparing clear and structured{" "}
              <span className="font-medium text-[#d1d5db]">
                system documentation
              </span>{" "}
              and{" "}
              <span className="font-medium text-[#d1d5db]">
                data management
              </span>{" "}
              that supports end-to-end workflows.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">8.62</p>
                <p className="mt-1 text-xs text-[#9ca3af]">CGPA</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">4</p>
                <p className="mt-1 text-xs text-[#9ca3af]">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">4</p>
                <p className="mt-1 text-xs text-[#9ca3af]">Spoken Languages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
