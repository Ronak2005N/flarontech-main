"use client"

import { FolderOpen, FileDown, Mail } from "lucide-react"
import { useInView } from "./use-in-view"

const actions = [
  {
    icon: FolderOpen,
    title: "View My Projects",
    description: "Explore my featured development work",
    href: "#projects",
  },
  {
    icon: FileDown,
    title: "Download Resume",
    description: "Get a copy of my professional CV",
    href: "/Faheem-Resume.pdf",
    download: true,
  },
  {
    icon: Mail,
    title: "Contact Me",
    description: "Let's discuss opportunities together",
    href: "#contact",
  },
]

export function FoxActionCards() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="bg-[#1f1f1f] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-10" />
          <div className="grid gap-6 md:grid-cols-3">
            {actions.map((action) => (
              <a
                key={action.title}
                href={action.href}
                {...("download" in action && action.download
                  ? { download: "Faheem-Resume.pdf" }
                  : {})}
                className="group flex flex-col items-center rounded-2xl border border-[#404040] bg-[#333333] p-8 text-center transition-all duration-300 hover:border-[#d1d5db]/40 hover:shadow-xl hover:shadow-black/20"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2a2a2a] transition-colors group-hover:bg-[#404040]">
                  <action.icon
                    size={24}
                    className="text-[#9ca3af] transition-colors group-hover:text-[#d1d5db]"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {action.title}
                </h3>
                <p className="text-sm text-[#9ca3af]">
                  {action.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
