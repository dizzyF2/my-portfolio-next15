'use client'

import NavLinks from "./NavLinks"
import PersonalBrand from "./PersonalBrand"
import { useScrollHeader } from "@/hooks/useScrollHeader"

function DesktopHeader() {
    const scrolled = useScrollHeader(80)

    return (
        <div
        className={`
            hidden tablet:flex items-center justify-between sticky top-0 z-50 px-5 py-3 transition-colors duration-300
            ${scrolled
            ? "bg-[#0d1c1e] "
            : "bg-transparent"}
        `}
        >
        <PersonalBrand />
        <div className="capitalize flex items-center justify-end gap-9 text-sm text-gray-200">
            <NavLinks ScreenType="desktop" />
        </div>
        </div>
    )
}

export default DesktopHeader
