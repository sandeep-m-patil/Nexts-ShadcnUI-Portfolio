"use client"

import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react" 

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t py-12 bg-muted/30 px-4 flex justify-center items-center">
      <div className="container flex flex-col items-center justify-center text-center">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-bold text-xl">
            Portfolio<span className="text-primary">.</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">&copy; {currentYear} Alex Parker. All rights reserved.</p>
        </motion.div>

        <motion.button
          onClick={scrollToTop}
          className="mt-6 p-3 rounded-full  animate-bounce bg-primary dark:bg-[#8a2be2] text-white hover:bg-[#6a1f9b] transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      </div>
    </footer>
  )
}
