"use client";

import * as React from "react";
import Link from "next/link";
import { Home, User, Briefcase, Folder, Brain, Mail, Menu, Download } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/Theme-Toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Home", url: "#home", icon: Home },
  { title: "About", url: "#about", icon: User },
  { title: "Experience", url: "#experience", icon: Briefcase },
  { title: "Projects", url: "#projects", icon: Folder },
  { title: "Skills", url: "#skills", icon: Brain },
  { title: "Contact", url: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.url.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "glass shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-6 mx-auto max-w-6xl">
        <Link href="/" className="font-bold text-xl tracking-tight">
          <span className="text-foreground">sandeep</span>
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.url.replace("#", "");
            return (
              <Link
                key={item.title}
                href={item.url}
                className={cn(
                  "relative px-3 lg:px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.title}</span>
              </Link>
            );
          })}
          <div className="w-px h-5 bg-border mx-2" />
          <ThemeToggle />
          <a href="/Sandeep_Madhavrao_Patil_Resume.pdf" download>
            <Button size="sm" className="ml-2 gap-2 rounded-full">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <div className="flex flex-col gap-1 p-6 pt-20">
                {navItems.map((item) => {
                  const isActive = activeSection === item.url.replace("#", "");
                  return (
                    <Link
                      key={item.title}
                      href={item.url}
                      className={cn(
                        "flex items-center gap-3 text-base font-medium transition-colors rounded-lg px-4 py-3",
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
                <a href="/Sandeep_Madhavrao_Patil_Resume.pdf" download>
                  <Button className="w-full mt-4 gap-2">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
