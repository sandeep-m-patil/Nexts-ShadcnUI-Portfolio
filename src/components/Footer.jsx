"use client";

import { motion } from "framer-motion";
import { ChevronUp, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const navItems = [
  { title: "Home", url: "#home" },
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
    <footer className="relative border-t">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-bold text-lg tracking-tight">
              <span className="text-foreground">sandeep</span>
              <span className="text-primary">.</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Full Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 w-fit"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10 pt-6 border-t gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Sandeep Patil. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ChevronUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
