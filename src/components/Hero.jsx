"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "10+", label: "Projects built" },
  { value: "15+", label: "Technologies" },
  { value: "3+", label: "Years coding" },
];

const socials = [
  { icon: Github, href: "https://github.com/sandeep-m-patil", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/psandeep2005", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/SANDEEPMADHAVR2", label: "X" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[760px] h-[760px] bg-primary/5 dark:bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">
          {/* Left — copy */}
          <div>
            <motion.p
              {...fadeUp(0.05)}
              className="font-mono text-sm text-primary"
            >
              // full-stack web developer
            </motion.p>

            <motion.h1 {...fadeUp(0.12)} className="mt-5">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-foreground font-display">
                Sandeep Patil
              </span>
              <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-muted-foreground font-display">
                Engineering dependable web products.
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              I design and build full-stack applications — React and Next.js on
              the front, Node.js and databases behind — that are fast,
              accessible, and built to scale.
            </motion.p>

            <motion.div {...fadeUp(0.28)} className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <Link href="#projects" className="gap-2">
                  View selected work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
            </motion.div>

            <motion.div {...fadeUp(0.36)} className="mt-10 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Find me on
              </span>
              <span className="h-px w-8 bg-border" />
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground transition-colors duration-300 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — profile */}
          <motion.div {...fadeUp(0.2)} className="mx-auto w-full max-w-sm">
            <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-primary/30" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-border bg-card">
                <Image
                  src="/images/profile.png"
                  alt="Sandeep Patil"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 divide-x divide-border border border-border rounded-lg bg-card overflow-hidden">
              {stats.map((stat) => (
                <div key={stat.label} className="px-3 py-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold font-display text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}