"use client"

import { talksData } from "@/const/data/talks";
import EventCard from "../ui/event-card";
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

export default function Talks() {
  return (
    <section className="pb-96 space-y-10">

      <div className="flex items-center gap-5">
        <h2 className="font-bold text-4xl lg:text-5xl whitespace-nowrap">
          Tech Talks
        </h2>
        <div className="border-t w-full border-gray-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          talksData.map((talk, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <EventCard key={index} title={talk.title} event={talk.event} date={talk.date} location={talk.location} image={talk.image} link={talk.link} />
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}
