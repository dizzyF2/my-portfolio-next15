"use client"

import type React from "react"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Technology } from "@/types/index.types"

interface TechModalProps {
    isOpen: boolean
    onClose: () => void
    tech: Technology | null
}

export function TechModal({ isOpen, onClose, tech }: TechModalProps) {

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
            }
    }, [isOpen, onClose])

    if (!isOpen || !tech) return null


    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent backdrop-blur-sm"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all duration-300 ease-out scale-100 opacity-100"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10 cursor-pointer"
                    aria-label="Close modal"
                >
                    <X />
                </button>

                {/* Modal content */}
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0">
                            <Image
                                src={tech.logo_url || "/placeholder.svg"}
                                alt={tech.name}
                                width={48}
                                height={48}
                                className="rounded-lg"
                            />
                        </div>
                        <h2 id="modal-title" className="text-2xl font-bold text-gray-900 capitalize">
                            {tech.name}
                        </h2>
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                        <p>{tech.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
