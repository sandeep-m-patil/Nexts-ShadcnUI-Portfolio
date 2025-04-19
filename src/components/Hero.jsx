"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { useRef } from "react"

export default function Hero() {
    const constraintsRef = useRef(null)

    return (
        <section id="home" className="relative pt-50 pb-32 md:pt-44 md:pb-32 overflow-hidden">
            {/* Background Layer */}
            <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Light/Dark radial background */}
                <div className="absolute inset-0 bg-white dark:bg-black [background:radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#505050_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000000_40%,#8a2be2_100%)]" />

             
            </motion.div>

            <div className="container flex flex-col items-center text-center px-2">
                <motion.div
                    ref={constraintsRef}
                    className="max-w-3xl mx-auto relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Floating elements */}
                    <motion.div className="hidden md:block absolute -top-20 -left-20 w-16 h-16 rounded-full bg-primary/60 dark:bg-[#8a2be2]/60"
                        animate={{ y: [0, 15, 0], x: [0, 10, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.div className="hidden md:block absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-primary/60 dark:bg-[#8a2be2]/60"
                        animate={{ y: [0, -20, 0], x: [0, -15, 0], rotate: [0, -15, 0] }}
                        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.div className="hidden md:block absolute top-40 -right-32 w-12 h-12 rounded-lg bg-primary/60 dark:bg-[#8a2be2]/60"
                        animate={{ y: [0, 30, 0], rotate: [0, 30, 0] }}
                        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                    />

                    {/* Main heading */}
                    <motion.h1
                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        Hi, I'm{" "}
                        <span className="text-primary relative">
                            Sandeep
                            <motion.span
                                className="absolute -z-10 bottom-1 left-0 w-full h-3 bg-primary/20 dark:bg-primary/30"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </span>
                    </motion.h1>

                    {/* Animated roles */}
                    <motion.div
                        className="h-16 mt-4 text-2xl sm:text-3xl font-medium text-muted-foreground dark:text-gray-400"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer", 2000,
                                "UI/UX Designer", 2000,
                                "React Specialist", 2000,
                                "Solving problems, making impact.", 2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.div>

                    {/* Sub description */}
                    <motion.p
                        className="mt-4 text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto px-5"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        I build full-stack web experiences that are fast, accessible, and built to last — focused on clean code, inclusive design, and real-world performance.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6">
                            <Button size="lg" asChild className="group w-50 sm:w-auto mx-8 sm:mx-0">
                                <Link href="#projects" className="flex items-center justify-center">
                                    View My Work
                                    <motion.span className="ml-2 inline-block" animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}>
                                        <ArrowRight className="h-4 w-4" />
                                    </motion.span>
                                </Link>
                            </Button>

                            <Button size="lg" variant="outline" asChild className="group w-50 sm:w-auto mx-8 sm:mx-0">
                                <Link href="#contact" className="flex items-center justify-center">
                                    Contact Me
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                  
                </motion.div>
            </div>
        </section>
    )
}
