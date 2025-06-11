"use client"

import { useState } from "react"
import Image from "next/image"

import { TechModal } from "./TechModal" 
import { Technology } from "@/types/index.types"

interface ProjectTechIconsProps {
    techIcons: { technology: Technology }[] | undefined
    className?: string
}

export function ProjectTechIcons({ techIcons, className = "" }: ProjectTechIconsProps) {
    const [selectedTech, setSelectedTech] = useState<Technology | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleTechClick = (tech: Technology) => {
            setSelectedTech(tech)
            setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedTech(null)
    }

    return (
        <>
            <div className={`flex items-center gap-4 ${className}`}>
                {techIcons?.map((icon, index) => (
                    <Image
                        key={index}
                        src={icon.technology.logo_url || "/placeholder.svg"}
                        alt={icon.technology.name}
                        width={30}
                        height={30}
                        onClick={() => handleTechClick(icon.technology)}
                        className={`cursor-pointer hover:scale-110 transition-transform duration-200`}
                    />
                ))}
            </div>
            <TechModal isOpen={isModalOpen} onClose={handleCloseModal} tech={selectedTech} />
        </>
    )
}
