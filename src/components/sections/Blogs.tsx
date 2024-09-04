"use client"

import { blogsData } from "@/const/data/blogs";
import BlogCard from "../ui/blog-card";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opactiy: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
    }
  })
}

export default function Blogs() {
  return (
    <section className="pb-96 space-y-10">

      <div className="flex items-center gap-5">
        <h2 className="font-bold text-4xl lg:text-5xl whitespace-nowrap">
          Blogs
        </h2>
        <div className="border-t w-full border-gray-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          blogsData.map((blog, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <BlogCard key={index} title={blog.title} duration={blog.duration} date={blog.date} image={blog.image} link={blog.link} />
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}
