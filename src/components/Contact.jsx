"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  TerminalSquare,
  ExternalLink,
} from "lucide-react";

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

const socialLinks = [
  {
    icon: Mail,
    title: "Email",
    content: "sandeeppatil10705@gmail.com",
    href: "mailto:sandeeppatil10705@gmail.com",
  },
  {
    icon: XIcon,
    title: "X",
    content: "SANDEEPMADHAV2",
    href: "https://x.com/SANDEEPMADHAVR2?t=NfXiLG99hCHEuGhs1D9PUw&s=08",
  },
  {
    icon: Github,
    title: "GitHub",
    content: "sandeep-m-patil",
    href: "https://github.com/sandeep-m-patil",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    content: "psandeep2005",
    href: "https://linkedin.com/in/psandeep2005",
  },
  {
    icon: Code2,
    title: "LeetCode",
    content: "sandeeppatil10705",
    href: "https://leetcode.com/sandeeppatil10705",
  },
  {
    icon: TerminalSquare,
    title: "HackerRank",
    content: "sandeep10705",
    href: "https://www.hackerrank.com/sandeep10705",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/3 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s connect
          </h2>
          <p className="mt-3 text-muted-foreground">
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat. Reach out through any of these platforms.
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {socialLinks.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <Card className="h-full hover:border-primary/30 hover:glow-sm transition-all duration-500">
                <CardHeader className="flex flex-row items-center space-x-3 pb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    {item.content}
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
