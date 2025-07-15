"use client"

import { motion, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaJava, FaLinux, FaBootstrap, FaGithub, FaFigma,
} from "react-icons/fa"
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql,
  SiExpress, SiPostman, SiNotion, SiVercel, SiC, SiCplusplus,
} from "react-icons/si"

const combinedSkills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "REST APIs" },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "Git & GitHub", icon: FaGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: FaFigma },
  { name: "Notion", icon: SiNotion },
  { name: "Vercel", icon: SiVercel },
  { name: "Linux", icon: FaLinux },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, 
          ease: "linear",
        },
      },
    })
  }, [controls])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="md:py-40 py-20  bg-white dark:bg-black  relative flex justify-center items-center"
    >
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight">My Skills</h2>
            <p className="mt-4 text-muted-foreground text-base">
              Technologies and tools I use regularly in my development journey.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex w-max space-x-4"
              animate={controls}
              onMouseEnter={() => controls.stop()}
              onMouseLeave={() =>
                controls.start({
                  x: ["0%", "-50%"],
                  transition: {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 25,
                      ease: "linear",
                    },
                  },
                })
              }
            >
              {[...combinedSkills, ...combinedSkills].map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 border border-border bg-muted/20 dark:bg-[#8a2be2]/60 text-sm font-medium rounded-full text-primary whitespace-nowrap hover:bg-muted/40 transition"
                  >
                    {Icon && <Icon className="text-lg" />}
                    {skill.name}
                  </div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
