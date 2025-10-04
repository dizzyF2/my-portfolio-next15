"use client"

import { useEffect, useRef } from "react"

interface Star {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
}

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const starsRef = useRef<Star[]>([])
    const animationRef = useRef<number | undefined>(undefined)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Initialize stars
        const initStars = () => {
        const stars: Star[] = []
        const numStars = Math.floor((canvas.width * canvas.height) / 8000)

        for (let i = 0; i < numStars; i++) {
            stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            })
        }

        starsRef.current = stars
        }

        // Set canvas size and reinitialize stars on resize
        const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        // Reinitialize stars with new screen dimensions
        initStars()
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Animation loop
        const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        starsRef.current.forEach((star) => {
            // Update position
            star.x += star.vx
            star.y += star.vy

            // Wrap around edges
            if (star.x < 0) star.x = canvas.width
            if (star.x > canvas.width) star.x = 0
            if (star.y < 0) star.y = canvas.height
            if (star.y > canvas.height) star.y = 0

            // Twinkle effect
            star.opacity += (Math.random() - 0.5) * 0.02
            star.opacity = Math.max(0.1, Math.min(1, star.opacity))

            // Draw star
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
            ctx.fill()
        })

        animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
        window.removeEventListener("resize", resizeCanvas)
        if (animationRef.current !== undefined) {
            cancelAnimationFrame(animationRef.current)
        }
        }
    }, [])

    return (
        <>
        {/* Fixed background container */}
        <div className="fixed inset-0 bg-[#0d1c1e] -z-20">
            {/* Grid Background */}
            <div
            className="absolute inset-0 opacity-20"
            // style={{
            //     backgroundImage: `
            //     linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            //     linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            //     `,
            //     backgroundSize: "50px 50px",
            // }}
            />

            {/* Animated Stars Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
        </>
    )
}
