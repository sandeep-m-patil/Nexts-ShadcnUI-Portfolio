"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import Portfolio from "@/images/Portfolio.png"
import FlipZon from "@/images/Flipzon.png"
import Zwigato from "@/images/Zwigato.png"
import RockPaperScissors from "@/images/Rock-Paper-Scissors.png"
import Youtube from "@/images/Youtube.png"
import Todo from "@/images/Todo.png"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js",
    image: FlipZon,
    tags: ["React", "Tailwind CSS", "MonogoDB", "Nodejs", "Expressjs"],
    demoLink: "https://mern-flipzon.vercel.app/",
    githubLink: "https://github.com/sandeep-m-patil/MERN-FlipZon",
    category: "web",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and shadcn/ui.",
    image: Portfolio,
    tags: ["Next.js", "shadcn/ui", "Framer Motion"],
    demoLink: "#",
    githubLink: "https://github.com/sandeep-m-patil/Nexts-ShadcnUI-Portfolio",
    category: "web",
  },
  {
    title: "Zwigato Restaurant",
    description: "It is an simple Frontend Website made by using pure JavaScript. That can add items to cart and also remove items from cart.",
    image: Zwigato,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoLink: "https://sandeep-m-patil.github.io/zwigato/",
    githubLink: "https://github.com/sandeep-m-patil/zwigato",
    category: "web",
  },
  {
    title: "Rock Paper Scissors",
    description: "A simple rock paper scissors game , You can play against the computer and see who wins! , It uses Local Storage to save your game history.",
    image: RockPaperScissors,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoLink: "https://sandeep-m-patil.github.io/Rock-Paper-Scissors/",
    githubLink: "https://github.com/sandeep-m-patil/Rock-Paper-Scissors",
    category: "web",
  },
  {
    title: "Youtube Frontend clone",
    description: "A simple Youtube frontend clone built with HTML, CSS, and JavaScript. It mimics the basic layout of YouTube.",
    image: Youtube,
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://sandeep-m-patil.github.io/Youtube-Clone/",
    githubLink: "https://github.com/sandeep-m-patil/Youtube-Clone",
    category: "web",
  },
  {
    title: "Todo",
    description: "A simple Todo app built with HTML, CSS, and JavaScript. It allows users to add, remove, and manage tasks.",
    image: Todo,
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://sandeep-m-patil.github.io/Todo-List/",
    githubLink: "https://github.com/sandeep-m-patil/Todo-List",
    category: "web",
  },


]

const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Apps" },
  { value: "mobile", label: "Mobile Apps" },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])


  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden px-4 flex justify-center items-center">
     




      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-4">
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



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5   ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full  flex flex-col border-none shadow-lg">
                <motion.div
                  className="relative h-40 w-full overflow-hidden"
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
                  <CardDescription className="text-wrap">{project.description}</CardDescription>
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
