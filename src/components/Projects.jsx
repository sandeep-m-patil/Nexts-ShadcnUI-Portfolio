"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Portfolio from "@/images/Portfolio.png"
import FlipZon from "@/images/Flipzon.png"
import ComingSoon from "@/images/comingsoon.png"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe for payments.",
    image: FlipZon,
    tags: ["React", "Tailwind CSS","MonogoDB","Nodejs","Expressjs"],
    demoLink: "https://mern-flipzon.vercel.app/",
    githubLink: "#",
    category: "web",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and shadcn/ui.",
    image: Portfolio,
    tags: ["Next.js", "shadcn/ui", "Framer Motion"],
    demoLink: "#",
    githubLink: "#",
    category: "web",
  },
  
]

const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Apps" },
  { value: "mobile", label: "Mobile Apps" },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden px-4">
      {/* Background elements */}
      <motion.div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 dark:bg-[#8a2be2]/60" style={{ y, opacity }} />
      <motion.div
  className="absolute bottom-[-140] right-[-140] w-80 h-80 rounded-full bg-primary/5 dark:bg-[#8a2be2]/60"
  style={{ y, opacity }}
/>

   


      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
            <p className="mt-4 text-muted-foreground">
              Here are some of my recent projects. Each project is built with modern technologies and best practices in
              mind.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Tabs defaultValue="all" className="w-full max-w-md mx-auto"  >
            <TabsList className="grid w-full grid-cols-3 ">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  onClick={() => setActiveCategory(category.value)}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg">
                <motion.div
                  className="relative h-48 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                 
                </motion.div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2" >
                  <Button variant="outline" size="sm" asChild className={"dark:border-[#8a2be2]/60"}>
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild className={"dark:bg-[#8a2be2] dark:text-white"}>
                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
