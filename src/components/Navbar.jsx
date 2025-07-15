"use client"

import * as React from "react"
import Link from "next/link"
import { Home, User, Folder, Brain, Mail, Menu } from "lucide-react"
import { motion } from "framer-motion"
import ThemeToggle from "@/components/Theme-Toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

// Menu items for the sidebar
const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "About", url: "#about", icon: User },
  { title: "Projects", url: "#projects", icon: Folder },
  { title: "Skills", url: "#skills", icon: Brain },
  { title: "Contact", url: "#contact", icon: Mail },
]

export default function Navbar() {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = React.useState(false)

  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navAnimation}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 flex justify-center items-center",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-8 sm:px-6">
        <motion.div variants={itemAnimation}>
          <Link href="/" className="font-bold text-xl dark:text-white">
            Portfolio<span className="text-primary">.</span>
          </Link>
        </motion.div>

        {/* Mobile Navigation (Sidebar) */}
        {isMobile ? (
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>

                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />

                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[210px] p-6">
                <div className="flex flex-col gap-4 mt-12 ">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  {items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className={cn(
                        "flex items-center gap-2 text-base font-medium transition-colors hover:text-primary  p-2 rounded-md",
                        pathname === item.url ? "text-primary bg-primary/10" : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5 dark:text-[#8a2be2]" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                  <a href="/Sandeep_Madhavrao_Patil_Resume.pdf" download>
                    <Button className="dark:bg-[#8a2be2] dark:text-white">
                      Download Resume
                    </Button>
                  </a>

                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          // Desktop Navigation
          <nav className="flex items-center gap-6">
            {items.map((route, index) => (
              <motion.div key={route.url} variants={itemAnimation} custom={index}>
                <Link
                  href={route.url}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative group dark:hover:text-[#8a2be2]",
                    pathname === route.url ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {route.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary  transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemAnimation}>
              <ThemeToggle />
            </motion.div>
            <motion.div variants={itemAnimation}>

              <a href="/Sandeep_Madhavrao_Patil_Resume.pdf" download>
                <Button className="dark:bg-[#8a2be2] dark:text-white">
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </nav>
        )}
      </div>
    </motion.header>
  )
}