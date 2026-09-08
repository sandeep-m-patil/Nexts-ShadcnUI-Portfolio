"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    company: "CittaAI",
    role: "Software Development Trainee",
    type: "Startup",
    duration: "Sep 2025 — Present",
    location: "Hyderabad, India",
    description:
      "Building AI-powered products at an early-stage startup. Owning features end-to-end — from database schema and REST APIs to polished, responsive interfaces.",
    highlights: [
      "Ship full-stack features across React/Next.js frontends and Node.js/Express APIs, contributing directly to user-facing product.",
      "Integrate LLM-driven capabilities into production — prompt design, API wiring, and streaming responses into the UI.",
      "Design data models and query paths with MongoDB and Neon DB/PostgreSQL, keeping clean REST contracts for the frontend.",
      "Maintain a ShadcnUI + TailwindCSS component system for consistent, accessible interfaces across features.",
    ],
    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "TailwindCSS",
      "ShadcnUI",
      "LLM Integration",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative overflow-hidden py-24 sm:py-32 hairline-t">
      <div className="container mx-auto max-w-6xl px-6" ref={ref}>
        <SectionHeading
          label="Experience"
          title="Where I&apos;ve worked"
          description="My professional journey — the teams I've learned from and what I shipped."
        />

        <div className="mt-16 relative">
          {/* Vertical rail */}
          <div className="absolute left-[5px] md:left-[7px] top-2 bottom-2 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative pl-8 md:pl-16"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Node */}
              <span className="absolute left-0 md:left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background -translate-x-[5px] md:translate-x-0" />

              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-foreground font-display">
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 text-lg font-medium text-primary">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:items-end">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <ul className="mt-6 space-y-3">
                {exp.highlights.map((highlight, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}