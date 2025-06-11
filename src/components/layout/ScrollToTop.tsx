"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { useScroll } from "@/hooks/useScroll"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const { scrollToTop } = useScroll()

    useEffect(() => {
        const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    return (
        <>
        {isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-3 bg-white hover:bg-gray-300 text-black rounded-full shadow-lg z-50 cursor-pointer"
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-5 w-5" />
            </button>
        )}
        </>
    )
}
