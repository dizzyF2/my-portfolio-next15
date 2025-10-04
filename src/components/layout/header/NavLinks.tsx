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
            <div className="flex flex-col items-center gap-3 w-full">
                <button
                    onClick={() => handleClick('about')}
                    className="w-fit text-center pb-2 text-gray-500 hover:text-white duration-200 text-lg  cursor-pointer"
                >
                    About
                </button>
                <button
                    onClick={() => handleClick('technologies')}
                    className="w-fit text-center pb-2 text-gray-500 hover:text-white duration-200 text-lg  cursor-pointer"
                >
                    technologies
                </button>
                <button
                    onClick={() => handleClick('projects')}
                    className="w-fit text-center pb-2 text-gray-500 hover:text-white duration-200 text-lg  cursor-pointer"
                >
                    Projects
                </button>
                <div onClick={onItemClick}>
                    <ContactButton className="w-full px-4 py-1 text-sm font-medium tracking-wide uppercase border-2 border-white/30 rounded-full cursor-pointer hover:border-emerald-500 text-white hover:text-white  bg-white/5 hover:bg-emerald-500/20 backdrop-blur-sm transition-all duration-300"/>
                </div>
            </div>
        ) : (
            <>
                <div className="cursor-pointer text-lg size-fit text-gray-300 hover:text-white duration-200" onClick={()=> handleClick("about", 250)}>About</div>
                <div className="cursor-pointer text-lg size-fit text-gray-300 hover:text-white duration-200" onClick={()=> handleClick("technologies")}>technologies</div>
                <div className="cursor-pointer text-lg size-fit text-gray-300 hover:text-white duration-200" onClick={()=> handleClick("projects")}>projects</div>
                {ScreenType !== "footer" && <ContactButton className="px-4 py-1 text-sm font-medium tracking-wide uppercase border-2 border-white/30 rounded-xl cursor-pointer hover:border-emerald-500 text-white hover:text-white  bg-white/5 hover:bg-emerald-500/20 backdrop-blur-sm transition-all duration-300" />}
            </>
        )

        }
    </>
    )
}

export default NavLinks