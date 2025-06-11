"use client"

import { Menu, X } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import NavLinks from "./NavLinks"

function MobileHeader() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const menuButtonRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false)
            }
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
        <div className="flex items-center justify-between tablet:hidden px-5 py-3 bg-inherit border border-transparent border-b-gray-500">
            <h3 className="text-white">Faris Abdelbagi</h3>
            <div className="flex gap-2 items-center" ref={menuButtonRef}>
                <Menu size={20} className="text-black dark:text-white cursor-pointer" onClick={() => setOpen(!open)} />
            </div>

            {/* Overlay */}
            {open && (
                <div className="fixed inset-0 bg-inherit bg-opacity-50 z-[998] tablet:hidden" onClick={() => setOpen(false)} />
            )}

            {/* Menu */}
            <div
                ref={menuRef}
                className={`
                    ${open
                        ? "fixed z-[999] right-0 top-0 w-[65%] tablet:hidden h-screen bg-[#161618] p-10 ease-in duration-300"
                        : "fixed right-[-100%] tablet:hidden top-0 p-10 h-screen ease-in duration-500"
                    }
                `}
            >
                <div className="flex w-full items-center justify-start">
                    <div className="p-1 w-fit cursor-pointer" onClick={() => setOpen(false)}>
                        <X size={25} color="white" />
                    </div>
                </div>
                <div className="capitalize flex flex-col justify-start mt-10 gap-4 text-sm text-gray-200">
                    <NavLinks ScreenType="mobile" onItemClick={() => setOpen(false)}/>
                </div>
            </div>
        </div>
    )
}

export default MobileHeader
