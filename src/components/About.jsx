"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Heart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code that scales.",
  },
  {
    icon: Palette,
    title: "UI/UX Focused",
    description: "Building interfaces that are intuitive and visually refined.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed, accessibility, and real-world usage.",
  },
  {
    icon: Heart,
    title: "Continuous Learner",
    description: "Always exploring new tools, patterns, and technologies.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle navy radial bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A bit about me
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 mt-12">
          {/* Bio */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m <span className="text-foreground font-medium">Sandeep</span>,
              a full-stack web developer who loves building beautiful, scalable
              applications with <span className="text-foreground font-medium">React</span>,
              {" "}<span className="text-foreground font-medium">Next.js</span>, and
              a modern tech stack.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I started my journey in college and since then, I&apos;ve created many
              projects to turn ideas into interactive, responsive web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I enjoy exploring AI, learning new tech, and building
              side projects. I&apos;m always excited for a challenge and passionate
              about problem-solving.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:glow-sm transition-all duration-500"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
