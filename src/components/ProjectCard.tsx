import Link from "next/link"
import ImageSlider from "./ImageSlider";
import { ProjectTechIcons } from "./TechStack-Icons";
import { Project } from "@/types/index.types";


function ProjectCard({projectDetails}:{projectDetails: Project[]}) {

    const sortedProjects = [...projectDetails].sort((a, b) => a.id - b.id)

    return (
        <div className="flex flex-col gap-16">
            {sortedProjects.map((project: Project, index: number) =>{
                const isLeft = index % 2 === 0;
                const images = project.imagesUrl ? (Array.isArray(project.imagesUrl) ? project.imagesUrl : [project.imagesUrl]) : []
                return(
                    <div key={project.id} className="flex flex-col tablet:flex-row items-center gap-8 my-12 max-w-5xl mx-auto">
                        {/* IMAGE SLIDER */}
                        <div className={`laptop:mb-10 w-full h-64 tablet:w-1/2 ${isLeft ? "" : "tablet:order-2"}`}>
                            <ImageSlider images={images} altText={project.projectName} />
                        </div>

                        {/* CONTENT */}
                        <div className="flex flex-col items-center justify-center tablet:items-start tablet:justify-start gap-4 w-full md:w-1/2 text-white">
                            <p className="text-sm uppercase text-gray-400 tracking-wide">
                                {project.category}
                            </p>
                            <h3 className="text-2xl font-bold">
                                {project.projectName}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {project.description.replace(/•/g, '').split(". ").map((sentence, index) => (
                                    <span key={index}>
                                        {sentence.trim()}.{<br />}
                                    </span>
                                ))}
                            </p>

                            {/* Tech Stack Icons */}
                            <ProjectTechIcons techIcons={project.project_technologies} className="mt-2" />

                            <div className="flex gap-4 mt-4">
                                <Link
                                    href={project.source_code}
                                    target="_blank"
                                    className="inline-block mt-4 bg-[#1c1f1d] px-5 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition"
                                >
                                    View Code
                                </Link>
                                {project.demo && (
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        className="inline-block mt-4 bg-[#1c1f1d] px-5 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition"
                                    >
                                        View Demo
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectCard