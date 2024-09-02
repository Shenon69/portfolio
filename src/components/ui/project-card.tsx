"use client"

import { BsArrowUpRightCircle } from "react-icons/bs";
import { CardSpotlight } from "./card-spotlight";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description: string;
  image?: string;
  link: string;
}

export default function ProjectCard({ name, description, image, link }: ProjectCardProps) {
  return (
    <Link href={link} target="_blank">
      <CardSpotlight className="overflow-hidden group flex flex-col justify-between gap-5 h-full">
        <div className="relative flex flex-row justify-between">
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl max-w-[70%] lg:max-w-[80%]">{name}</h3>
          <div>
            <BsArrowUpRightCircle size={40} />
          </div>
        </div>
        <span className="relative text-xlgray lg:text-lg">{description}</span>
        <Image className="relative group-hover:scale-110 transition-all duration-500 rounded-2xl" src={`/images/${image}`} alt="shape" width={0} height={20} sizes="100vw" style={{ width: '100%', height: 'auto' }} content="cover" />
      </CardSpotlight>
    </Link>
  )
}
