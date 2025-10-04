export const revalidate = 3600

import About from "@/components/sections/About"
import GetInTouch from "@/components/sections/GetInTouch"
import Hero from "@/components/sections/Hero"
import Projects from "@/components/sections/Projects"
import TechStack from "@/components/sections/TechStack"

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 sm:gap-32 lg:gap-60 py-12 sm:py-16 lg:py-24 text-white w-full px-5">
      <div className="absolute inset-0 bg-cover -z-10 bg-center bg-no-repeat opacity-90 bg-[url('/assets/images/bg-heroSection.png')]">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0d1c1e]" />
      </div>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GetInTouch />
    </div>
  )
}
