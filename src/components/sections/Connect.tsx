"use client"

import Particles from "../ui/particles";
import { socialData } from "@/const/data/socials";
import { motion } from "framer-motion";
import Link from "next/link";

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

export default function Connect() {
  return (
    <section className="space-y-10 pb-10">

      <div className="flex items-center gap-5">
        <h2 className="font-bold text-4xl lg:text-5xl whitespace-nowrap">
          Connect
        </h2>
        <div className="border-t w-full border-gray-700" />
      </div>

      <div>
        <div className="relative flex h-[650px] md:h-[250px] w-full flex-col md:flex-row overflow-hidden gap-5 md:gap-2 items-center justify-center md:justify-evenly rounded-2xl border bg-lgray md:shadow-xl">
          {socialData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center gap-2"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index} >
              <Link href={item.link} target="_blank" className="z-40">
                <item.icon size={52} />
              </Link>
              <Link href={item.link} target="_blank" className="z-40">
                <span>{item.value}</span>
              </Link>
            </motion.div>
          ))}
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={80}
            color={"#ffffff"}
            refresh
          />
        </div>
      </div>

    </section>
  )
}
