"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"

export default function About() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-20  bg-muted/30 relative overflow-hidden flex justify-center items-center"  
        >
            {/* Background Elements */}
            <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 rounded-full  bg-primary/5 dark:bg-[#8a2be2]/60"
                style={{ y, opacity }}
            />
            <motion.div
                className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full  bg-primary/5 dark:bg-[#8a2be2]/60"
                style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
            />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    <div className="w-full px-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-foreground">
                                About Me
                            </h2>
                            <div className="mt-4 space-y-4 text-md">
                                <p>
                                    Hello! I'm <strong className="dark:text-[#8a2be2] text-3xl"> Sandeep </strong>, a passionate full-stack web developer focused on building modern and responsive web applications. I specialize in React, Next.js, and enjoy crafting clean, user-friendly interfaces.
                                </p>
                                <p>
                                    My web development journey began in college with my first project. Since then, I’ve been building responsive and accessible web apps to sharpen my skills and bring ideas to life.
                                </p>
                                <p>
                                    When I’m not coding, I enjoy exploring new technologies, reading about AI, and building side projects. I’m always eager to learn and take on new challenges.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                    {[
                        { number: "2+", label: "Years Experience" },
                        { number: "10+", label: "Projects Completed" },
                        { number: "∞", label: "Ideas & Passion" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.03 }}
                        >
                            <Card className="overflow-hidden border-none shadow-lg mx-8  dark:bg-black dark:text-white">
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <motion.span
                                        className="text-4xl font-bold text-primary dark:text-[#8a2be2]"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        {stat.number}
                                    </motion.span>
                                    <span className="text-muted-foreground mt-2 dark:text-white ">{stat.label}</span>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
