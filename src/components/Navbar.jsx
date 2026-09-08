"use client";

import * as React from "react";
import Link from "next/link";
import { Download, Menu } from "lucide-react";
import ThemeToggle from "@/components/Theme-Toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "About", url: "#about" },
  { title: "Experience", url: "#experience" },
  { title: "Projects", url: "#projects" },
  { title: "Skills", url: "#skills" },
  { title: "Contact", url: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.url.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 border-b transition-all duration-300",
        isScrolled
          ? "glass"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-6 mx-auto max-w-6xl">
        <Link href="/" className="font-bold text-lg tracking-tight font-display">
          <span className="text-foreground">sandeep</span>
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.url.replace("#", "");
            return (
              <Link
                key={item.title}
                href={item.url}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <a href="/Sandeep_Madhavrao_Patil_Resume.pdf" download className="hidden md:inline-flex">
            <Button size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </a>

          {/* Mobile */}
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
                  {navItems.map((item) => (
<Link
        key={item.title}
        href={item.url}
        className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {item.title}
      </Link>
                  ))}
                  <a href="/Sandeep_Madhavrao_Patil_Resume.pdf" download>
                    <Button className="mt-4 w-full gap-2">
                      <Download className="h-4 w-4" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}