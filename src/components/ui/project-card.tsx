import { CardSpotlight } from "./card-spotlight";
import Image from "next/image";

type ProjectCardProps = {
  name: string;
  description: string;
  image?: string;
}

export default function ProjectCard({ name, description, image }: ProjectCardProps) {
  return (
    <CardSpotlight className="overflow-hidden group flex flex-col justify-between gap-5">
      <h3 className="relative font-bold text-3xl">{name}</h3>
      <span className="relative text-xlgray">{description}</span>
      <Image className="relative group-hover:scale-110 transition-all duration-500 rounded-2xl" src={`${image}`} alt="shape" width={0} height={20} sizes="100vw" style={{ width: '100%', height: 'auto' }} content="cover" />
    </CardSpotlight>
  )
}
