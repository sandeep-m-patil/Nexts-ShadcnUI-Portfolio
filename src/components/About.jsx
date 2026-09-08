"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";

const principles = [
  {
    title: "Clean architecture",
    description:
      "Maintainable, well-structured code — deliberate naming, small modules, and patterns that scale with the team.",
  },
  {
    title: "UI that respects users",
    description:
      "Interfaces that are intuitive, accessible, and refined. Visual polish that serves function.",
  },
  {
    title: "Performance as a feature",
    description:
      "Fast load times, no N+1 traps, and measurable efficiency baked in from the start.",
  },
  {
    title: "Relentless learning",
    description:
      "Always studying new tools and paradigms — from modern frontend frameworks to the LLM-driven stack.",
  },
];

const facts = [
  { label: "Location", value: "Hyderabad, India" },
  { label: "Currently", value: "Software Development Trainee @ CittaAI" },
  { label: "Focus", value: "Full-stack web · AI-assisted products" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 hairline-t">
      <div className="container mx-auto max-w-6xl px-6" ref={ref}>
        <SectionHeading
          label="About"
          title="Engineer by craft, builder by instinct."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mt-14">
          {/* Bio */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Sandeep, a Full-Stack Web Developer who started coding in
                college and hasn&apos;t stopped building since. I care about the
                whole journey of a product — from the data model and API design
                to the last pixel of the interface.
              </p>
              <p>
                Today I work at{" "}
                <span className="font-medium text-foreground">CittaAI</span>, an
                early-stage AI startup, where I ship features across
                React/Next.js frontends and Node.js backends — and wire
                LLM-powered capabilities into production products.
              </p>
              <p>
                I&apos;ve turned dozens of ideas into working, responsive web
                applications. My toolkit spans the MERN stack, PostgreSQL, and
                the design systems (Tailwind + ShadcnUI) that keep interfaces
                consistent at scale.
              </p>
            </div>

            {/* Facts */}
            <div className="mt-10 rounded-lg border border-border bg-card">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={
                    "flex items-center justify-between gap-4 px-5 py-3.5 text-sm " +
                    (i < facts.length - 1 ? "border-b border-border/60" : "")
                  }
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {fact.label}
                  </span>
                  <span className="text-right font-medium text-foreground">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Principles */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Principles
              </span>
            </div>
            <div className="mt-6">
              {principles.map((principle, i) => (
                <div
                  key={principle.title}
                  className={
                    "py-5 " + (i < principles.length - 1 ? "border-b border-border/60" : "")
                  }
                >
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-semibold text-foreground font-display">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}