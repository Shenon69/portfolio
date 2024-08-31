import { IoLogoGithub, IoLogoNodejs } from "react-icons/io";
import MarqueeItem from "./marquee-item";
import { IoLogoDocker, IoLogoReact } from "react-icons/io5";
import { SiGithubactions, SiGo, SiLinux, SiMicrosoftazure, SiMongodb, SiNeovim, SiNetlify, SiTailwindcss, SiTerraform, SiVercel } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { VscTerminalBash } from "react-icons/vsc";

export default function Marquee() {

  const upperIcons = [SiTerraform, IoLogoDocker, SiMicrosoftazure, IoLogoNodejs, SiGo, SiLinux, VscTerminalBash, SiNeovim, SiTerraform, IoLogoDocker, SiMicrosoftazure, IoLogoNodejs, SiGo, SiLinux, VscTerminalBash, SiNeovim]
  const lowerIcons = [IoLogoGithub, SiTailwindcss, IoLogoReact, RiNextjsFill, SiNetlify, SiVercel, SiGithubactions, SiMongodb, IoLogoGithub, SiTailwindcss, IoLogoReact, RiNextjsFill, SiNetlify, SiVercel, SiGithubactions, SiMongodb]

  return (
    <div className="mx-auto flex flex-col gap-5 max-w-xl">
      <MarqueeItem icons={upperIcons} from={10} to={"-110%"} />
      <MarqueeItem icons={lowerIcons} from={"-10%"} to={"90%"} />
    </div>
  )
}
