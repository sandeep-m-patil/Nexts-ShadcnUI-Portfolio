"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Rocket, Code, Brain } from "lucide-react"
import Profile from "@/images/profile.png"
import Image from "next/image"

export default function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const yReverse = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  const stats = [
    { number: "0", label: "Years Experience", icon: <Rocket className="h-6 w-6" /> },
    { number: "10+", label: "Projects Completed", icon: <Code className="h-6 w-6" /> },
    { number: "∞", label: "Ideas & Passion", icon: <Brain className="h-6 w-6" /> },
  ]

  return (
    <section
      id="about"
      aria-label="About Section"
      ref={sectionRef}
      className="py-40 bg-muted/30 relative overflow-hidden flex justify-center items-center"
    >
      {/* Background Gradients */}
      <motion.div
        className="absolute top-100 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br bg-primary/60 dark:bg-[#8a2be2]/60 blur-3xl"
        style={{ y, opacity }}
      />
      <motion.div
        className="absolute bottom-80 -left-50 w-[500px] h-[500px] rounded-full bg-gradient-to-tl bg-primary/60 dark:bg-[#8a2be2]/60 blur-3xl"
        style={{ y: yReverse, opacity }}
      />

      <div className="container relative z-10">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={Profile}
              alt="Sandeep"
              className="rounded-full w-48 h-48 object-cover border-4 dark:border-[#8a2be2] shadow-xl"
              
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 px-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r  bg-clip-text">
                About Me
              </h2>
              <div className="mt-4 space-y-4 text-md text-foreground">
                <p>
                  Hey there! I’m <strong className="text-3xl text-[#8a2be2]">Sandeep</strong>, a <span className="font-medium">full-stack web developer</span> who loves building beautiful, scalable apps with <strong>React</strong>, <strong>Next.js</strong>, and a modern tech stack.
                </p>
                <p>
                  I started my journey in college and since then, I’ve created many projects to turn ideas into interactive, responsive web applications.
                </p>
                <p>
                  Beyond coding, I enjoy exploring AI, learning new tech, and building side projects. I'm always excited for a challenge and passionate about problem-solving!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      

      
      </div>
    </section>
  )
}
