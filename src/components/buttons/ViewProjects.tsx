'use client'

import { useScroll } from "@/hooks/useScroll"
import { Button } from "../ui/button"


function ViewProjects() {
    const { scrollToSection } = useScroll()
    return (
        <Button 
            onClick={() => scrollToSection("projects", 80)} 
            size="lg" 
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-6 text-lg font-semibold shadow-lg shadow-emerald-500/30 transition-shadow duration-300"
        >
            view projects
        </Button>
    )
}

export default ViewProjects