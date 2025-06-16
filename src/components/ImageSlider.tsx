"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"

interface ImageSliderProps {
    images: string[]
    altText: string
}

export default function ImageSlider({ images, altText }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
            closeZoom()
            }
        }

        if (isZoomed) {
            document.addEventListener("keydown", handleKeyDown)
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [isZoomed])

    if (!images || images.length === 0) {
        return (
            <div className="size-full bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 italic">
                No Image Available
            </div>
        )
    }

    const imageArray = typeof images === "string" ? [images] : images

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1))
    }

    const handleZoom = () => {
        setIsZoomed(true)
    }

    const closeZoom = () => {
        setIsZoomed(false)
    }

    const handleClickOutside = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeZoom()
        }
    }


    return (
        <>
            {!isZoomed && (
                <div className="relative overflow-hidden w-full h-64 tablet:h-80 rounded-lg group">
                    {/* Main image */}
                    <div className="relative h-full w-full">
                        <Image
                        src={imageArray[currentIndex] || "/placeholder.svg"}
                        alt={altText}
                        fill
                        className="absolute rounded-lg object-cover size-full transition-transform duration-500"
                        />
                    </div>

                    {/* Navigation arrows */}
                    {imageArray.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer focus:outline-none"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="text-white" size={20} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer focus:outline-none"
                                aria-label="Next image"
                            >
                                <ChevronRight className="text-white" size={20} />
                            </button>
                        </>
                    )}

                    {/* Zoom button */}
                    <button
                        onClick={handleZoom}
                        className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer focus:outline-none"
                        aria-label="Zoom image"
                    >
                        <Maximize2 className="text-white" size={16} />
                    </button>

                    {/* Image counter */}
                    {imageArray.length > 1 && (
                        <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
                        {currentIndex + 1} / {imageArray.length}
                        </div>
                    )}
                </div>
            )}

            {/* Zoom modal */}
            {isZoomed && (
            <div
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                onClick={handleClickOutside}
            >
                <div
                    ref={modalRef}
                    className="relative max-w-4xl max-h-[90vh] w-full h-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative h-full w-full">
                        <Image
                            src={imageArray[currentIndex] || "/placeholder.svg"}
                            alt={altText}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Close button */}
                    <button
                        onClick={closeZoom}
                        className="absolute top-0 right-0 bg-white/10 hover:bg-white/20 p-2 rounded-full cursor-pointer focus:outline-none"
                        aria-label="Close zoom view"
                    >
                        <X className="text-white" size={24} />
                    </button>

                    {/* ZOOM SLIDE ARROWS */}
                    {imageArray.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full cursor-pointer focus:outline-none"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="text-white" size={24} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full cursor-pointer focus:outline-none"
                                aria-label="Next image"
                            >
                                <ChevronRight className="text-white" size={24} />
                            </button>
                        </>
                    )}

                    {/* Image counter for zoom view */}
                    {imageArray.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 hover:bg-black/70 px-3 py-1 rounded text-sm text-white">
                            {currentIndex + 1} / {imageArray.length}
                        </div>
                    )}
                </div>
            </div>
            )}
        </>
    )
}
