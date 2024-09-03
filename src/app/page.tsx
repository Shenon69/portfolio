import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Talks from "@/components/sections/Talks";

export default function Home() {
  return (
    <main className="min-h-screen space-y-10">
      <About />
      <Projects />
      <Talks />
    </main>
  );
}
