'use client'

import { useScroll } from "@/hooks/useScroll"


function ViewProjects() {
    const { scrollToSection } = useScroll()
    return (
        <button 
            onClick={() => scrollToSection("projects", 80)}
            className="px-4 py-2 text-sm font-semibold tracking-wide uppercase border border-gray-100 hover:border-transparent text-black bg-white hover:bg-gray-300 rounded-full   transition cursor-pointer"
        >
            view projects
        </button>
    )
}

export default ViewProjects