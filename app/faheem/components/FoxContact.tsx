"use client"

import { Mail, Phone, Linkedin } from "lucide-react"
import { useInView } from "./use-in-view"

export function FoxContact() {
  const { ref, isInView } = useInView()

  return (
    <section id="contact" ref={ref} className="bg-[#2a2a2a] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#9ca3af]">
            Reach Out
          </p>
          <h2 className="mb-10 text-3xl font-bold text-[#ff6b35] md:text-4xl">
            Get In <span className="text-[#ff6b35]">Touch</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="mailto:n.faheemudheen@gmail.com"
              className="group flex items-center gap-5 rounded-2xl border border-[#404040] bg-[#333333] p-6 transition-all duration-300 hover:border-[#d1d5db]/40 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2a2a2a] transition-colors group-hover:bg-[#404040]">
                <Mail
                  size={22}
                  className="text-[#9ca3af] transition-colors group-hover:text-[#d1d5db]"
                />
              </div>
              <div className="min-w-0">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#9ca3af]">
                  Email
                </p>
                <p className="truncate text-base font-medium text-white transition-colors group-hover:text-[#d1d5db]">
                  n.faheemudheen@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+919150904940"
              className="group flex items-center gap-5 rounded-2xl border border-[#404040] bg-[#333333] p-6 transition-all duration-300 hover:border-[#d1d5db]/40 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2a2a2a] transition-colors group-hover:bg-[#404040]">
                <Phone
                  size={22}
                  className="text-[#9ca3af] transition-colors group-hover:text-[#d1d5db]"
                />
              </div>
              <div className="min-w-0">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#9ca3af]">
                  Phone
                </p>
                <p className="truncate text-base font-medium text-white transition-colors group-hover:text-[#d1d5db]">
                  +91 9150904940
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/faheemudheen-n-985641225"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-[#404040] bg-[#333333] p-6 transition-all duration-300 hover:border-[#d1d5db]/40 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2a2a2a] transition-colors group-hover:bg-[#404040]">
                <Linkedin
                  size={22}
                  className="text-[#9ca3af] transition-colors group-hover:text-[#d1d5db]"
                />
              </div>
              <div className="min-w-0">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#9ca3af]">
                  LinkedIn
                </p>
                <p className="truncate text-base font-medium text-white transition-colors group-hover:text-[#d1d5db]">
                  Faheemudheen N
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
