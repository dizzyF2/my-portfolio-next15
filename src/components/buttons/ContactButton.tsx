'use client'

import { useScroll } from "@/hooks/useScroll"

function ContactButton({className}:{className: string}) {
    const { scrollToSection } = useScroll()

    const handleContactClick = () => {
        scrollToSection("contact", 80)
    }
    return (
        <button className={className} onClick={handleContactClick}>
            get in touch
        </button>
    )
}

export default ContactButton