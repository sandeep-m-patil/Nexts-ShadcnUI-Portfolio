"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32 hairline-t">
      <div className="container mx-auto max-w-6xl px-6" ref={ref}>
        <SectionHeading
          index="03"
          label="Projects"
          title="Selected work"
          description="A focused set of projects I've built — full-stack products and sharp frontend work. Each one taught me something worth shipping."
        />

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          <Link href={`/projects/${featured.slug}`} className="block">
            <article className="grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-muted">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="flex flex-col p-7 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {featured.subtitle}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground font-display">
                  {featured.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-6 pt-8">
                  {featured.links.github && (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Github className="h-4 w-4" />
                      Source
                    </span>
                  )}
                  {featured.links.demo && (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      <ArrowUpRight className="h-4 w-4" />
                      Live demo
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Link>
        </motion.div>

        {/* Project grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      {Icon && (
                        <span className="absolute left-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-md border border-border bg-background/80 text-primary backdrop-blur">
                          <Icon className="h-4 w-4" />
                        </span>
                      )}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                            {project.subtitle}
                          </span>
                          <h3 className="mt-2 text-lg font-bold text-foreground font-display">
                            {project.title}
                          </h3>
                        </div>
                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}