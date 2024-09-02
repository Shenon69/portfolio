"use client"

import ProjectCard from "../ui/project-card";
import { projectsData } from "@/const/data/projects";
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


export default function Projects() {
  return (
    <section className="pb-96 space-y-10">

      <div className="flex items-center gap-5">
        <h2 className="font-bold text-4xl lg:text-5xl">
          Projects
        </h2>
        <div className="border-t border-gray-700 w-full" />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {
          projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <ProjectCard name={project.name} link={project.link} description={project.description} image={project.image} />
            </motion.div>
          ))
        }
      </div>

    </section>
  )
}
