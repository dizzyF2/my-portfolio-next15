'use client'

import ContactButton from "@/components/buttons/ContactButton"
import { useScroll } from "@/hooks/useScroll"

interface NavLinksProps {
    onItemClick?: () => void
    ScreenType: "mobile" | "desktop" | "footer"
}
function NavLinks({onItemClick, ScreenType}: NavLinksProps) {
    
    const { scrollToSection } = useScroll()

    const handleClick = (sectionId: string) => {
        scrollToSection(sectionId, 80)
        if (onItemClick) onItemClick()
    }
    return (
    <>
        {ScreenType === 'mobile' ? (
            <>
                <button
                    onClick={() => handleClick('about')}
                    className="pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c] cursor-pointer hover:bg-[#1f1f22]"
                >
                    About
                </button>
                <button
                    onClick={() => handleClick('technologies')}
                    className="pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c] cursor-pointer hover:bg-[#1f1f22]"
                >
                    technologies
                </button>
                <button
                    onClick={() => handleClick('projects')}
                    className="pb-2 border-b-2 border-solid dark:border-b-[#2c2c2c] cursor-pointer hover:bg-[#1f1f22]"
                >
                    Projects
                </button>
                <div onClick={onItemClick}>
                    <ContactButton className="px-4 py-1 text-sm font-medium tracking-wide uppercase bg-[#1f2220] hover:bg-white hover:text-black rounded-full transition cursor-pointer w-full"/>
                </div>
            </>
        ) : (
            <>
                <div className="cursor-pointer size-fit" onClick={()=> handleClick("about")}>About</div>
                <div className="cursor-pointer size-fit" onClick={()=> handleClick("technologies")}>technologies</div>
                <div className="cursor-pointer size-fit" onClick={()=> handleClick("projects")}>projects</div>
                {ScreenType !== "footer" && <ContactButton className="px-4 py-1 text-sm font-medium tracking-wide uppercase bg-[#1f2220] hover:bg-white hover:text-black  rounded-full transition cursor-pointer" />}
            </>
        )

        }
    </>
    )
}

export default NavLinks