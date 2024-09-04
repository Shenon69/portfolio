import About from "@/components/sections/About";
import Blogs from "@/components/sections/Blogs";
import Connect from "@/components/sections/Connect";
import Projects from "@/components/sections/Projects";
import Talks from "@/components/sections/Talks";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome, FaUsers } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { PiArticleMedium } from "react-icons/pi";

const navItems = [
  {
    name: "Home",
    link: "#",
    icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <GoProject className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Talks",
    link: "#talks",
    icon: (
      <FaUsers className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Blogs",
    link: "#blogs",
    icon: (
      <PiArticleMedium className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Conntect",
    link: "#connect",
    icon: (
      <GrContact className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen space-y-10">
      <FloatingNav navItems={navItems} />
      <div>
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="talks">
        <Talks />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
      <div id="connect">
        <Connect />
      </div>
    </main>
  );
}
