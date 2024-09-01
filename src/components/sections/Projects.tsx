"use client"

import { motion } from "framer-motion";
import ProjectCard from "../ui/project-card";

export default function Projects() {
  return (
    <section className="pb-96 space-y-10">

      <div className="flex items-center gap-5">
        <h2 className="font-bold text-4xl">
          Projects
        </h2>
        <div className="border-t border-gray-700 w-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <ProjectCard name="Software Freedom Day 2023" description="This website was created to the Software freedom day 2023 with the collaboration of the FOSS community in NSBM" image="/images/sfd.png" />
        <ProjectCard name="Azure Open AI voice Assistant" description="This website was created to the Software freedom day 2023 with the collaboration of the FOSS community in NSBM" image="/images/voice.png" />
        <ProjectCard name="Arduino Day Sri Lanka 2023" description="This website was created to the Software freedom day 2023 with the collaboration of the FOSS community in NSBM" image="/images/arduinoday.png" />
      </motion.div>

    </section>
  )
}
