import { blogPosts } from "@/data/blogs";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div  id="projects" className="max-w-2xl mx-auto md:py-25 py-30   px-6 bg-white dark:bg-black text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Projects</h1>
      <ul className="space-y-6">
        {blogPosts.map((post) => {
          const Icon = post.icon; // ✅ Define outside JSX

          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="flex items-center gap-3">
                  {Icon && (
                    <Icon className="text-3xl text-blue-600 dark:text-[#a952fb]" />
                  )}
                  <h2 className="md:text-xl text-lg font-semibold text-blue-600 dark:text-[#a952fb] hover:underline">
                    {post.title}
                  </h2>
                </div>

                {/* Horizontal line outside the flex container */}
                <hr className="my-3 border-t border-black dark:border-white w-full" />

              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
