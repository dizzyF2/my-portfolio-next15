'use client'

import Image from "next/image"
import { useState } from "react"
import { TechModal } from "./TechModal"
import { Technology } from "@/types/index.types"



function TechCard({technologies}: {technologies: Technology[]}) {
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
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 max-w-5xl w-[70%] tablet:w-full">
                {technologies.map((tech, index) => (
                    <div
                    key={index}
                    onClick={() => handleTechClick(tech)}
                    className="bg-[#1c1f1d] rounded-xl flex flex-col items-center justify-center p-6 text-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                        <Image
                        src={tech.logo_url}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="mb-4"
                        />
                        <span className="font-semibold text-lg capitalize">{tech.name}</span>
                    </div>
                ))}
            </div>
            <TechModal isOpen={isModalOpen} onClose={handleCloseModal} tech={selectedTech} />
        </>
    )
}

export default TechCard