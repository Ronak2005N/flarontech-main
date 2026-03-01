"use client";

import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  link?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon,
  title = "Featured",
  description = "Discover amazing content",
  date,
  tags,
  link,
  iconClassName = "text-dragon-red",
  titleClassName = "text-white",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[160px] w-[22rem] md:w-[26rem] -skew-y-[4deg] select-none flex-col justify-between rounded-xl border border-white/10 bg-obsidian-800/90 backdrop-blur-md px-5 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-obsidian-900 after:to-transparent after:content-[''] hover:border-dragon-red/50 hover:bg-obsidian-800 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,51,51,0.2)] hover:z-50 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div className="flex items-start justify-between w-full relative z-10">
        <div className="flex items-center gap-3">
          <span className="relative inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 p-2">
            {icon}
          </span>
          <p className={cn("text-lg font-heading tracking-wide", titleClassName)}>{title}</p>
        </div>
        {link && (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ExternalLink className="size-4 text-white/50 hover:text-white" />
          </Link>
        )}
      </div>
      
      <p className="text-sm font-sans text-white/60 leading-relaxed max-w-[85%] relative z-10 mt-2">{description}</p>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 relative z-10">
          {tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-white/70 px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {date && <p className="text-xs font-mono text-white/30 absolute bottom-4 right-4 z-10">{date}</p>}
    </div>
  );
}

export interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = cards || [];

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {defaultCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
