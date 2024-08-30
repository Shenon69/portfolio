"use client"

import { Meteors } from "../ui/meteors";
import splitStringUsingRegex from "@/helpers/splitStringUsingRegex";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGit } from "react-icons/fa";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { IoIosCloudDownload } from "react-icons/io";

const content = {
  title: "Ayubowan! I'm",
  name: "Trishan 👋",
  description: "When I'm not busy engineering software 👨‍💻, you'll find me dribbling a football ⚽ or rallying the tech community with a mix of enthusiasm and caffeine ☕🚀.",
};

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
}

export default function About() {
  const splitDescription = splitStringUsingRegex(content.description);

  return (
    <section className="flex flex-col lg:flex-row justify-between gap-5 py-10">
      <div className="border bg-lgray w-full lg:w-2/3 flex flex-col rounded-2xl p-5 lg:p-10 gap-5">
        <div className="flex flex-col gap-3">
          <span className="text-xlgray text-3xl lg:text-5xl">{content.title}</span>
          <span className="font-bold text-white text-4xl lg:text-5xl">{content.name}</span>
        </div>
        <Image src="/images/portfolio.webp" alt="Trishan" width={500} height={500} className="rounded-2xl" />
      </div>
      <div className="w-full relative flex flex-col gap-5">
        <div className="absolute h-full w-full" />

        <div className="relative bg-lgray border h-fit overflow-hidden rounded-2xl flex flex-col gap-16 p-5 lg:p-10">

          <motion.span className="font-bold text-white text-2xl lg:text-4xl" initial="hidden" whileInView="reveal" transition={{ staggerChildren: .02 }}>
            {
              splitDescription.map(char => (
                <motion.span key={char} transition={{ duration: .35 }} variants={charVariants}>
                  {char}
                </motion.span>
              ))
            }
          </motion.span>
          <div className="flex justify-end">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span className="flex gap-2 justify-center items-center">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <IoIosCloudDownload className="text-white/80" /> <span>Download CV</span> </span>
            </HoverBorderGradient>
          </div>

          <Meteors number={25} />

        </div>

        <div className="border rounded-2xl flex-1">
        </div>

      </div>
    </section>
  )
}
