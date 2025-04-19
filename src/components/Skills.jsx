"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useRef, useState } from "react"

const skillCategories = [
  {
    id: "webDev",
    label: "Web Dev",
    skills: [
      { name: "HTML5", level: 90 },
    { name: "CSS3", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 50 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Bootstrap", level: 90 },
    { name: "Node.js", level: 60 },
    { name: "Express.js", level: 50 },
    { name: "REST APIs", level: 80 },
    { name: "MongoDB", level: 40 },
    { name: "MySQL", level: 40 },
    { name: "State Management (Zustand/Redux)", level: 70 },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 90 },
      { name: "Java", level: 60 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Data Structures & Algorithms", level: 50 },
      { name: "Object-Oriented Programming (OOP)", level: 70 },
    
    ],
  },
  {
    id: "tools",
    label: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Figma", level: 85 },
      { name: "Notion", level: 90 },
      { name: "Netlify/Vercel", level: 75 },
      { name: "Linux (Basics)", level: 60 },
    ],
  },
]

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section id="skills" ref={sectionRef} className="py-20 dark:bg-black relative overflow-hidden p-4 flex justify-center items-center">
      {/* Background elements */}
      <motion.div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 dark:bg-[#8a2be2]/60" style={{ y, opacity }} />
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-primary/5 dark:bg-[#8a2be2]/60"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
      />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight">My Skills</h2>
            <p className="mt-4 text-muted-foreground">
              I've worked with a variety of technologies and tools throughout my career. Here's an overview of my
              technical skills.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Tabs defaultValue="webDev" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-6 space-y-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onHoverStart={() => setActiveSkill(skill.name)}
                        onHoverEnd={() => setActiveSkill(null)}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress
                            value={activeSkill === skill.name ? skill.level : 0}
                            className="h-2"
                            initial={0}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                          <motion.div
                            className="absolute top-0 left-0 h-2 bg-primary rounded-full dark:bg-[#8a2be2]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
