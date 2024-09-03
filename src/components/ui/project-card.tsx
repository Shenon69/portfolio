"use client"

import { BsArrowUpRightCircle } from "react-icons/bs";
import { CardSpotlight } from "./card-spotlight";
import Image from "next/image";
import Link from "next/link";
import ProjectLabel from "./project-label";

type ProjectCardProps = {
  name: string;
  description: string;
  image?: string;
  link: string;
  technologies?: string[];
}

export default function ProjectCard({ name, description, image, link, technologies }: ProjectCardProps) {
  return (
    <Link href={link} target="_blank">
      <CardSpotlight className="overflow-hidden group flex flex-col justify-between gap-5 h-full">
        <div className="relative flex flex-row justify-between">
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl max-w-[70%] lg:max-w-[83%]">{name}</h3>
          <div>
            <BsArrowUpRightCircle size={38} />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <span className="relative text-xlgray lg:text-lg">{description}</span>
          {
            technologies && (
              <div className="flex flex-row flex-wrap gap-2">
                {
                  technologies.map((technology, index) => (
                    <ProjectLabel key={index} name={technology} />
                  ))
                }
              </div>
            )
          }
        </div>
        <Image className="relative group-hover:scale-110 transition-all duration-500 rounded-2xl" src={`/images/${image}`} alt="shape" width={0} height={20} sizes="100vw" style={{ width: '100%', height: 'auto' }} content="cover" />
      </CardSpotlight>
    </Link>
  )
}
