import About from "@/components/sections/About";
import GetInTouch from "@/components/sections/GetInTouch";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";



export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-60 text-white w-full max-w-[1110px] mx-auto px-4">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GetInTouch />
    </div>
  );
}
