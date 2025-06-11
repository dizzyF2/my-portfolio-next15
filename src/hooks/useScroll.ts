"use client"

import { useCallback } from "react"

export const useScroll = () => {
    
    const scrollToSection = useCallback((sectionId: string, offset = 0) => {
        const element = document.getElementById(sectionId)
        if (element) {
        const elementPosition = element.offsetTop - offset
        window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
        })
        }
    }, [])

    const scrollToTop = useCallback(() => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        })
    }, [])

    return { scrollToSection, scrollToTop }
}