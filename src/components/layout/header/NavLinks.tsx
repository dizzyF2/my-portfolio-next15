'use client'

import ContactButton from "@/components/buttons/ContactButton"
import { useScroll } from "@/hooks/useScroll"

interface NavLinksProps {
    onItemClick?: () => void
    ScreenType: "mobile" | "desktop" | "footer"
}
function NavLinks({onItemClick, ScreenType}: NavLinksProps) {
    
    const { scrollToSection } = useScroll()

    const handleClick = (sectionId: string, offset?: number ) => {
        scrollToSection(sectionId, offset || 80)
        if (onItemClick) onItemClick()
    }
    return (
    <>
        {ScreenType === 'mobile' ? (
            <>
                <button
                    onClick={() => handleClick('about')}
                    className="pb-2 border-b-2 border-solid border-b-emerald-300 cursor-pointer rounded-md hover:bg-emerald-800"
                >
                    About
                </button>
                <button
                    onClick={() => handleClick('technologies')}
                    className="pb-2 border-b-2 border-solid border-b-emerald-300 cursor-pointer rounded-md hover:bg-emerald-800"
                >
                    technologies
                </button>
                <button
                    onClick={() => handleClick('projects')}
                    className="pb-2 border-b-2 border-solid border-b-emerald-300 cursor-pointer rounded-md hover:bg-emerald-800"
                >
                    Projects
                </button>
                <div onClick={onItemClick}>
                    <ContactButton className="px-4 py-1 text-sm font-medium tracking-wide uppercase bg-emerald-700 hover:bg-emerald-900 rounded-full transition cursor-pointer w-full"/>
                </div>
            </>
        ) : (
            <>
                <div className="cursor-pointer size-fit hover:text-gray-400 hover:border-b-2 duration-100 hover:border-b-emerald-300 rounded-md" onClick={()=> handleClick("about", 250)}>About</div>
                <div className="cursor-pointer size-fit hover:text-gray-400 hover:border-b-2 duration-100 hover:border-b-emerald-300 rounded-md" onClick={()=> handleClick("technologies")}>technologies</div>
                <div className="cursor-pointer size-fit hover:text-gray-400 hover:border-b-2 duration-100 hover:border-b-emerald-300 rounded-md" onClick={()=> handleClick("projects")}>projects</div>
                {ScreenType !== "footer" && <ContactButton className="px-4 py-1 text-sm font-medium tracking-wide uppercase bg-emerald-700 hover:bg-emerald-900 rounded-full transition cursor-pointer" />}
            </>
        )

        }
    </>
    )
}

export default NavLinks