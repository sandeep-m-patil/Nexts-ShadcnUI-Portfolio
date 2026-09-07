"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "CittaAI",
    role: "Software Development Trainee",
    type: "Startup",
    duration: "2024 — Present",
    location: "OnSite, Hyderabad, India",
    description:
      "Contributing to the development of AI-powered products at an early-stage startup. Working across the full stack to build, test, and ship features that directly impact users.",
    highlights: [
      
    ],
    tags: ["HTML/CSS", "JavaScript", "MongoDB", "Express.js", "React/Next.js", "Node.js", "AI Integration","Neon DB/PostgreSQL","TailwindCSS/ShadcnUI","Basic DevOps"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
            <motion.span
              className="h-px bg-primary"
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Where I&apos;ve worked
          </h2>
          <p className="mt-3 text-muted-foreground">
            My professional journey and the teams I&apos;ve contributed to.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-12 relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative pl-8 md:pl-20"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.35 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-8 top-6 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-[5px] md:-translate-x-[5px] z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + i * 0.15,
                  type: "spring",
                  bounce: 0.5,
                }}
              />

              {/* Card */}
              <motion.div
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:glow-sm transition-all duration-500"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-lg font-medium text-primary/80">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
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

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((highlight, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + i * 0.15 + j * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
