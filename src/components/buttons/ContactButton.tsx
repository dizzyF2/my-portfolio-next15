'use client'

import { useScroll } from "@/hooks/useScroll"
import { Button } from "../ui/button"

function ContactButton({className}:{className: string}) {
    const { scrollToSection } = useScroll()

    const handleContactClick = () => {
        scrollToSection("contact", 80)
    }
    return (
        <Button 
            className={className} 
            onClick={handleContactClick}
            size="lg"
            variant="outline"
        >
            get in touch
        </Button>
    )
}

export default ContactButton