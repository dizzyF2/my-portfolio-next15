"use client"

import { X } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import NavLinks from "./NavLinks"
import PersonalBrand from "./PersonalBrand"
import { useScrollHeader } from "@/hooks/useScrollHeader"

function MobileHeader() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const menuButtonRef = useRef<HTMLDivElement>(null)
    const scrolled = useScrollHeader(80)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false)
        }

        const handleClickOutside = (e: MouseEvent) => {
        if (
            menuRef.current &&
            menuButtonRef.current &&
            !menuRef.current.contains(e.target as Node) &&
            !menuButtonRef.current.contains(e.target as Node)
        ) {
            setOpen(false)
        }
        }

        if (open) {
        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
        document.removeEventListener("keydown", handleKeyDown)
        document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [open])

    return (
        <div
        className={`
            flex items-center justify-between tablet:hidden sticky top-0 z-50 px-5 py-3 transition-colors duration-300
            ${scrolled
            ? "bg-[#0d1c1e]"
            : "bg-transparent"}
        `}
        >
        <PersonalBrand />
        <div className="self-center flex gap-2 items-center" ref={menuButtonRef}>
            <div className="flex flex-col items-end justify-between gap-0.5 h-4 w-7 text-white cursor-pointer group" onClick={() => setOpen(!open)}>
                <span className="bg-white h-[3px] w-[60%] rounded-full group-hover:bg-gray-400 group-hover:duration-50"/>
                <span className="bg-white h-[3px] w-full rounded-full group-hover:bg-gray-400 group-hover:duration-50"/>
                <span className="bg-white h-[3px] w-full rounded-full group-hover:bg-gray-400 group-hover:duration-50"/>
            </div>
        </div>

        {/* Overlay */}
        {open && (
            <div className="fixed inset-0 bg-black/50 z-[998]" onClick={() => setOpen(false)} />
        )}

        {/* Menu */}
        <div
            ref={menuRef}
            className={`
            ${open
                ? "fixed z-[999] right-0 top-0 w-[65%] tablet:hidden h-screen backdrop-blur-md p-10 ease-in duration-300"
                : "fixed right-[-100%] tablet:hidden top-0 p-10 h-screen ease-in duration-500"}
            `}
        >
            <div className="flex w-full items-center justify-start">
            <div
                className="p-1 w-fit cursor-pointer hover:bg-white/10 hover:rounded-full"
                onClick={() => setOpen(false)}
            >
                <X size={25} color="white" />
            </div>
            </div>
            <div className="capitalize flex flex-col justify-start mt-10 gap-4 text-sm text-gray-200">
            <NavLinks ScreenType="mobile" onItemClick={() => setOpen(false)} />
            </div>
        </div>
        </div>
    )
}

export default MobileHeader
