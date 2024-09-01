import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen space-y-10">
      <About />
      <Projects />
    </main>
  );
}
