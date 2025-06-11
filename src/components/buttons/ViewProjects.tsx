'use client'

import { useScroll } from "@/hooks/useScroll"


function ViewProjects() {
    const { scrollToSection } = useScroll()
    return (
        <button 
            onClick={() => scrollToSection("projects", 80)}
            className="px-4 py-2 text-sm font-semibold tracking-wide uppercase border border-gray-500 text-black bg-white rounded-full hover:bg-gray-100 transition cursor-pointer"
        >
            view projects
        </button>
    )
}

export default ViewProjects