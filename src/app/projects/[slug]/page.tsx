"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { AiFillBook } from "react-icons/ai";
import { FaTools, FaRegCheckCircle, FaGithub, FaLink } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const sectionAnim = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function ProjectDetails() {
  const params = useParams();
  const slug = params?.slug as string;

  const post = projects.find((p) => p.slug === slug);
  if (!post)
    return (
      <div className="py-40 text-center text-muted-foreground">
        Project not found.
      </div>
    );

  const Icon = post.icon;

  return (
    <div className="w-full pb-24 pt-28">
      {/* Back */}
      <motion.div {...sectionAnim(0.05)} className="container mx-auto max-w-3xl px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
        >
          <FaArrowLeftLong />
          ../projects
        </Link>
      </motion.div>

      <div className="mx-auto mt-10 max-w-3xl px-6">
        {/* Title */}
        <motion.div {...sectionAnim(0.1)}>
          <div className="flex items-center gap-3">
            {Icon && <Icon className="h-6 w-6 text-primary" />}
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {post.subtitle}
            </span>
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display">
            {post.title}
          </h1>
        </motion.div>

        {/* Image */}
        {post.image && (
          <motion.div
            {...sectionAnim(0.15)}
            className="relative mt-8 aspect-video overflow-hidden rounded-lg border border-border bg-muted"
          >
            <Image src={post.image} alt={post.title} fill className="object-contain p-6" />
          </motion.div>
        )}

        {/* Description */}
        <motion.div {...sectionAnim(0.2)} className="mt-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <AiFillBook className="h-4 w-4 text-primary" />
            <span>Description</span>
          </div>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {post.description}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div {...sectionAnim(0.25)} className="mt-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <FaTools className="h-4 w-4 text-primary" />
            <span>Tech stack</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.techStack?.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-sm font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div {...sectionAnim(0.3)} className="mt-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <FaRegCheckCircle className="h-4 w-4 text-primary" />
            <span>Features</span>
          </div>
          <ul className="mt-3 space-y-2.5">
            {post.features?.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Links */}
        <motion.div {...sectionAnim(0.35)} className="mt-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <FaLink className="h-4 w-4 text-primary" />
            <span>Links</span>
          </div>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            {post.links?.github && (
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={post.links.github} target="_blank">
                  <FaGithub />
                  Source code
                </Link>
              </Button>
            )}
            {post.links?.demo && (
              <Button asChild size="lg" variant="default" className="gap-2">
                <Link href={post.links.demo} target="_blank">
                  <IoIosRocket />
                  Live demo
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}