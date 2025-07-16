"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send ,Github, Linkedin, Code2, TerminalSquare, MessageSquare } from "lucide-react"
import { useRef } from "react"

export default function Contact() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })


const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
    className={className}
  >
    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
  </svg>
);

  const contactList = [
    { icon: Mail, title: "Email", content: "sandeeppatil10705@gmail.com", href: "mailto:sandeeppatil10705@gmail.com" },
    { icon: XIcon, title: "X", content: "SANDEEPMADHAV2", href: "https://x.com/SANDEEPMADHAV2" },
    { icon: Github, title: "GitHub", content: "sandeep-m-patil", href: "https://github.com/sandeep-m-patil" },
    { icon: Linkedin, title: "LinkedIn", content: "psandeep2005", href: "https://linkedin.com/in/psandeep2005" },
    { icon: Code2, title: "LeetCode", content: "23ag1a66b7", href: "https://leetcode.com/23ag1a66b7" },
    { icon: TerminalSquare, title: "HackerRank", content: "23ag1a66b7", href: "https://www.hackerrank.com/23ag1a66b7" },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-white dark:bg-black px-4 flex justify-center items-center"
    >
    

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Connect with Me
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-gray-400">
              You can reach me via the following platforms . I'm always happy to connect!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactList.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href || "#"}
              target={item.href ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-md dark:bg-[#111111] hover:shadow-xl transition-shadow ">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 dark:bg-[#8a2be2]/20 text-primary dark:text-[#8a2be2]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-400">{item.content}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
