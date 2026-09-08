"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaLinux,
  FaBootstrap,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiPostman,
  SiNotion,
  SiVercel,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiClaude,
} from "react-icons/si";
import { MousePointer2, SquareTerminal } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "REST APIs" },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git & GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: FaFigma },
      { name: "Notion", icon: SiNotion },
      { name: "Vercel", icon: SiVercel },
      { name: "Linux", icon: FaLinux },
      { name: "Cursor", icon: MousePointer2 },
      { name: "Claude Code", icon: SiClaude },
      { name: "OpenCode", icon: SquareTerminal },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32 hairline-t">
      <div className="container mx-auto max-w-6xl px-6" ref={ref}>
        <SectionHeading
          index="04"
          label="Skills"
          title="My toolkit"
          description="The technologies and tools I reach for every day while building and shipping products."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              className="rounded-lg border border-border bg-card"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + catIdx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-2 px-5 pt-5 pb-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {category.name}
                </h3>
              </div>
              <div className="mx-5 h-px bg-border/60" />
              <div className="flex flex-wrap gap-2 p-5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2 py-1 text-xs font-medium text-foreground"
                    >
                      {Icon && <Icon className="text-sm text-primary" />}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}