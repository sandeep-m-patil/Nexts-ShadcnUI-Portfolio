"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import { AiFillBook } from "react-icons/ai";
import { FaTools, FaRegCheckCircle, FaGithub, FaLink } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectDetails() {
  const params = useParams();
  const slug = params?.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <div className="text-center py-20">Project not found.</div>;

  const Icon = post.icon;

  return (
    <div className="w-full pb-20">
      {/* Back to Home */}
      <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-15 mb-1 md:px-12 px-2">
        <div className="md:px-12 px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg text-gray-800 dark:text-white hover:underline"
          >
            <FaArrowLeftLong className="dark:text-[#a952fb]" />
            Back to Home
          </Link>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-2 bg-white dark:bg-black">

        {/* Title + Icon */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center md:gap-4 mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >



          {Icon && (
            <div className="md:mb-0 mb-2">
              <Icon className="text-4xl md:text-5xl dark:text-[#a952fb]" />
            </div>
          )}
          <h1 className="text-2xl md:text-3xl font-bold dark:text-white text-center">
            {post.title}
          </h1>
        </motion.div>

        {post.image && (
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full rounded-xl mb-8 shadow-md object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        )}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            <AiFillBook className="dark:text-[#a952fb]" />
            <span>Description</span>
          </div>
          <p className="whitespace-pre-wrap text-base text-gray-700 dark:text-gray-300 mb-6">
            {post.description}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            <FaTools className="dark:text-[#a952fb]" />
            <span>Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            {post.techStack?.map((tech) => (
              <span
                key={tech}
                className="border text-black dark:text-white dark:border-[#a952fb] text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ✅ Features */}
        <div

        >
          {/* ✅ Animated "Features" Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              <FaRegCheckCircle className="dark:text-[#a952fb]" />
              <span>Features</span>
            </div>


            {/* ✅ Animated Features List */}
            <motion.ul
              className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {post.features?.map((feature, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>




        </div>

        {/* 🔗 Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            <FaLink className="dark:text-[#a952fb]" />
            <span>Links</span>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-start mt-4">
            {post.links?.github && (
              <Button asChild size="lg" variant="outline" className="gap-2 ">
                <Link href={post.links.github} target="_blank">
                  <FaGithub />GitHub
                </Link>
              </Button>
            )}
            {post.links?.demo && (
              <Button asChild size="lg" variant="default" className="gap-2 dark:bg-[#8a2be2] dark:text-white">
                <Link href={post.links.demo} target="_blank">
                  <IoIosRocket /> Live Demo
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div >
  );
}
