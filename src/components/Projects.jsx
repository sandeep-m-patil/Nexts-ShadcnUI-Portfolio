"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/3 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Featured work
          </h2>
          <p className="mt-3 text-muted-foreground">
            A selection of projects I&apos;ve built — from full-stack apps to
            frontend experiments.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                  <article className="h-full rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:glow-sm transition-all duration-500">
                    {/* Image */}
                    <div className="relative aspect-video bg-muted overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        {Icon && (
                          <Icon className="h-4 w-4 text-primary" />
                        )}
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {project.subtitle}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs font-medium rounded-md bg-muted text-muted-foreground group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-muted text-muted-foreground">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3">
                        {project.links.github && (
                          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <Github className="h-4 w-4" />
                            Code
                          </span>
                        )}
                        {project.links.demo && (
                          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
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
