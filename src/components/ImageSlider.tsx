"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"

interface ImageSliderProps {
    images: string[]
    altText: string
}

export default function ImageSlider({ images, altText }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const modalRef = useRef<HTMLDivElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)

    const minSwipeDistance = 50
    const imageArray = typeof images === "string" ? [images] : images

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1))
    }, [imageArray.length])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1))
    }, [imageArray.length])

    // Autoplay functionality
    useEffect(() => {
        if (!isZoomed && imageArray.length > 1) {
            const interval = setInterval(() => {
                nextSlide()
            }, 3000)

            return () => clearInterval(interval)
        }
    }, [isZoomed, imageArray.length, nextSlide])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeZoom()
            }
            
            if (isZoomed) {
                if (e.key === "ArrowLeft" && imageArray.length > 1) {
                    prevSlide()
                }
                if (e.key === "ArrowRight" && imageArray.length > 1) {
                    nextSlide()
                }
            }
        }

        if (isZoomed) {
            document.addEventListener("keydown", handleKeyDown)
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [isZoomed, imageArray.length, nextSlide, prevSlide])

    if (!images || images.length === 0) {
        return (
            <div className="size-full bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 italic">
                No Image Available
            </div>
        )
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

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe && imageArray.length > 1) {
            nextSlide()
        }
        if (isRightSwipe && imageArray.length > 1) {
            prevSlide()
        }
    }

    return (
        <>
            {!isZoomed && (
                <div className="relative size-full flex flex-col">
                    <div
                        ref={sliderRef}
                        className="relative overflow-hidden w-full h-full rounded-t-lg group select-none"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div onClick={handleZoom} className="relative h-full w-full cursor-zoom-in">
                            <Image
                                src={imageArray[currentIndex] || "/placeholder.svg"}
                                alt={altText}
                                fill
                                className="absolute rounded-t-lg object-cover size-full transition-transform duration-500 pointer-events-none"
                                draggable={false}
                            />
                        </div>

                        {/* Zoom button */}
                        <button
                            onClick={handleZoom}
                            className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 p-1.5 rounded-full cursor-pointer focus:outline-none z-10"
                            aria-label="Zoom image"
                        >
                            <Maximize2 className="text-white size-3" />
                        </button>

                        {/* Image counter */}
                        {imageArray.length > 1 && (
                            <div className="absolute top-2 left-2 bg-black/50 px-2 py-0.5 rounded text-xs text-white z-10">
                                {currentIndex + 1} / {imageArray.length}
                            </div>
                        )}
                    </div>

                    {/* Navigation arrows */}
                    {imageArray.length > 1 && (
                        <div className="flex items-center justify-center gap-3 py-2 bg-[#1a1d1b] rounded-b-lg">
                            <button
                                onClick={prevSlide}
                                className="bg-[#252825] hover:bg-[#353835] p-1.5 rounded-full cursor-pointer focus:outline-none transition-colors"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="text-white size-4" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-[#252825] hover:bg-[#353835] p-1.5 rounded-full cursor-pointer focus:outline-none transition-colors"
                                aria-label="Next image"
                            >
                                <ChevronRight className="text-white size-4" />
                            </button>
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
                        className="relative max-w-4xl max-h-[90vh] w-full h-full select-none"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div className="relative h-full w-full">
                            <Image
                                src={imageArray[currentIndex] || "/placeholder.svg"}
                                alt={altText}
                                fill
                                className="object-contain pointer-events-none"
                                draggable={false}
                            />
                        </div>

                        {/* Close button */}
                        <button
                            onClick={closeZoom}
                            className="absolute top-3 right-2 bg-white/10 hover:bg-white/20 p-2 rounded-full cursor-pointer focus:outline-none z-10"
                            aria-label="Close zoom view"
                        >
                            <X className="text-white" size={24} />
                        </button>

                        {/* ZOOM SLIDE ARROWS */}
                        {imageArray.length > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-2 tablet:left-3 laptop:left-4 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-3 rounded-full cursor-pointer focus:outline-none z-10"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="text-white size-3 tablet:size-4 laptop:size-6" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-2 tablet:right-3 laptop:right-4 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-3 rounded-full cursor-pointer focus:outline-none z-10"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="text-white size-3 tablet:size-4 laptop:size-6" />
                                </button>
                            </>
                        )}

                        {/* Image counter for zoom view */}
                        {imageArray.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 hover:bg-black/70 px-3 py-1 rounded text-sm text-white z-10">
                                {currentIndex + 1} / {imageArray.length}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}