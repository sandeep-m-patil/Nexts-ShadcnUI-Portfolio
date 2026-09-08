"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Code2, TerminalSquare } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
    className={className}
  >
    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
  </svg>
);

const socials = [
  {
    icon: Mail,
    label: "Email",
    handle: "sandeeppatil10705@gmail.com",
    href: "mailto:sandeeppatil10705@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "sandeep-m-patil",
    href: "https://github.com/sandeep-m-patil",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "psandeep2005",
    href: "https://linkedin.com/in/psandeep2005",
  },
  {
    icon: XIcon,
    label: "X",
    handle: "@SANDEEPMADHAVR2",
    href: "https://x.com/SANDEEPMADHAVR2?t=NfXiLG99hCHEuGhs1D9PUw&s=08",
  },
  {
    icon: Code2,
    label: "LeetCode",
    handle: "sandeeppatil10705",
    href: "https://leetcode.com/sandeeppatil10705",
  },
  {
    icon: TerminalSquare,
    label: "HackerRank",
    handle: "sandeep10705",
    href: "https://www.hackerrank.com/sandeep10705",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32 hairline-t">
      <div className="container mx-auto max-w-4xl px-6" ref={ref}>
        <SectionHeading
          index="05"
          label="Contact"
          title="Let's talk."
          description="I'm open to full-time roles, freelance work, and collaborations. If you have a project in mind — or just want to talk engineering — my inbox is always open."
          align="center"
        />

        <motion.div
          className="mt-12 flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="mailto:sandeeppatil10705@gmail.com"
            className="group inline-flex items-center gap-3 font-mono text-base sm:text-lg text-foreground underline decoration-primary/40 decoration-2 underline-offset-8 transition-colors duration-300 hover:text-primary"
          >
            sandeeppatil10705@gmail.com
            <ArrowUpRight className="h-5 w-5 text-primary" />
          </a>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to full-time &amp; freelance opportunities
          </div>
        </motion.div>

        {/* Social list */}
        <motion.div
          className="mt-14 overflow-hidden rounded-lg border border-border bg-card"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {socials.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={
                "group flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-muted/50 " +
                (i < socials.length - 1 ? "border-b border-border/60" : "")
              }
            >
              <item.icon className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
              <span className="flex-1 truncate text-sm font-medium text-foreground">
                {item.handle}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}