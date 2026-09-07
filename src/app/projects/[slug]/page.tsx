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

export default function ProjectDetails() {
  const params = useParams();
  const slug = params?.slug as string;

  const post = projects.find((p) => p.slug === slug);
  if (!post)
    return (
      <div className="text-center py-40 text-muted-foreground">
        Project not found.
      </div>
    );

  const Icon = post.icon;

  const sectionAnim = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div className="w-full pb-20 pt-24">
      {/* Back */}
      <motion.div
        {...sectionAnim(0.1)}
        className="container mx-auto max-w-3xl px-6 mb-6"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <FaArrowLeftLong />
          Back to Projects
        </Link>
      </motion.div>

      <div className="max-w-3xl mx-auto px-6">
        {/* Title + Icon */}
        <motion.div
          {...sectionAnim(0.15)}
          className="flex flex-col md:flex-row items-center justify-center md:gap-4 mb-8 text-center"
        >
          {Icon && (
            <div className="mb-2 md:mb-0">
              <Icon className="text-4xl md:text-5xl text-primary" />
            </div>
          )}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
            <p className="text-muted-foreground mt-1">{post.subtitle}</p>
          </div>
        </motion.div>

        {/* Image */}
        {post.image && (
          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden mb-8 border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>
        )}

        {/* Description */}
        <motion.div {...sectionAnim(0.2)} className="mb-8">
          <div className="flex items-center gap-2 text-lg font-semibold mb-3">
            <AiFillBook className="text-primary" />
            <span>Description</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div {...sectionAnim(0.25)} className="mb-8">
          <div className="flex items-center gap-2 text-lg font-semibold mb-3">
            <FaTools className="text-primary" />
            <span>Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.techStack?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium rounded-lg bg-muted border border-border text-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div {...sectionAnim(0.3)} className="mb-8">
          <div className="flex items-center gap-2 text-lg font-semibold mb-3">
            <FaRegCheckCircle className="text-primary" />
            <span>Features</span>
          </div>
          <motion.ul
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {post.features?.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-muted-foreground"
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Links */}
        <motion.div {...sectionAnim(0.35)}>
          <div className="flex items-center gap-2 text-lg font-semibold mb-3">
            <FaLink className="text-primary" />
            <span>Links</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            {post.links?.github && (
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={post.links.github} target="_blank">
                  <FaGithub />
                  GitHub
                </Link>
              </Button>
            )}
            {post.links?.demo && (
              <Button asChild size="lg" variant="default" className="gap-2">
                <Link href={post.links.demo} target="_blank">
                  <IoIosRocket />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
