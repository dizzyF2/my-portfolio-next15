'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import ImageSlider from "./ImageSlider"
import { ProjectTechIcons } from "./TechStack-Icons"
import { Project } from "@/types/index.types"

function ProjectCard({ projectDetails }: { projectDetails: Project[] }) {
    const sortedProjects = [...projectDetails].sort((a, b) => a.id - b.id)

    const truncateDescription = (description: string, maxLength: number = 200) => {
        const cleanDesc = description.replace(/•/g, '').trim()
        if (cleanDesc.length <= maxLength) return cleanDesc
        return cleanDesc.substring(0, maxLength).trim() + "..."
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {sortedProjects.map((project: Project, index: number) => {
                const images = project.imagesUrl
                    ? Array.isArray(project.imagesUrl)
                        ? project.imagesUrl
                        : [project.imagesUrl]
                    : []

                return (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="bg-[#0a1f1a] border-[#10b981]/20 hover:border-[#10b981]/50 hover:shadow-lg hover:shadow-[#10b981]/10 transition-all duration-300 h-full flex flex-col overflow-hidden">
                            <CardContent className="flex flex-col h-full">
                                {/* IMAGE SLIDER */}
                                <div className="w-full h-72">
                                    <ImageSlider images={images} altText={project.projectName} />
                                </div>

                                {/* CONTENT */}
                                <div className="flex flex-col gap-3 p-6 flex-grow">
                                    <p className="text-xs uppercase text-gray-400 tracking-wide">
                                        {project.category}
                                    </p>
                                    
                                    <h3 className="text-xl font-bold text-white">
                                        {project.projectName}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                        {truncateDescription(project.description)}
                                    </p>

                                    {/* Tech Stack Icons */}
                                    <ProjectTechIcons 
                                        techIcons={project.project_technologies} 
                                        className="mt-2"
                                        iconSize={24}
                                    />

                                    {/* Buttons */}
                                    <div className="flex gap-3 mt-4">
                                        <Link
                                            href={project.source_code}
                                            target="_blank"
                                            className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-center border-2 border-white/30 cursor-pointer hover:border-emerald-500 text-white hover:text-white  bg-white/5 hover:bg-emerald-500/20 backdrop-blur-sm transition-all duration-300"
                                        >
                                            Code
                                        </Link>
                                        {project.demo && (
                                            <Link
                                                href={project.demo}
                                                target="_blank"
                                                className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-center border-2 border-white/30 cursor-pointer hover:border-emerald-500 text-white hover:text-white  bg-white/5 hover:bg-emerald-500/20 backdrop-blur-sm transition-all duration-300"
                                            >
                                                Demo
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default ProjectCard