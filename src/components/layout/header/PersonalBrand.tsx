'use client'

import { useScroll } from "@/hooks/useScroll";
import Image from "next/image";

function PersonalBrand() {

    const { scrollToTop } = useScroll()

    return (
        <div 
            onClick={scrollToTop}
            className="relative w-40 h-9 tablet:w-44 tablet:h-12 cursor-pointer"
        >
            <Image
                src="/assets/images/portfolio-logo.png"
                alt="portfolio Logo"
                fill
                className="object-cover"
                priority
            />
        </div>
    );
}

export default PersonalBrand;
