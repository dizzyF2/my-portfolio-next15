import About from "@/components/About";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";



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
