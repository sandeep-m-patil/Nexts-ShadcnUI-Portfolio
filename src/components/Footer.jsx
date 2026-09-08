"use client";

import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const navItems = [
  { title: "About", url: "#about" },
  { title: "Experience", url: "#experience" },
  { title: "Projects", url: "#projects" },
  { title: "Skills", url: "#skills" },
  { title: "Contact", url: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/sandeep-m-patil", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/psandeep2005", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/SANDEEPMADHAVR2", label: "X" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="hairline-t">
      <div className="container mx-auto max-w-6xl px-6 pb-10 pt-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="font-bold text-lg tracking-tight font-display">
              <span className="text-foreground">sandeep</span>
              <span className="text-primary">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Full-Stack Web Developer building fast, reliable, and accessible web
              products.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground transition-colors duration-300 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 self-start text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>
            &copy; {currentYear} Sandeep Patil. All rights reserved.
          </span>
          <span className="font-mono">built with Next.js · designed with intent</span>
        </div>
      </div>
    </footer>
  );
}