import { Technology } from "@/types/index.types"
import ProjectCard from "./ProjectCard"
import { createSupabaseServerClient } from "@/utils/supabase/server"


interface ProjectTechnologyJoin {
    technology: Technology
}

const fetchProjects = async () => {
    const { data, error } = await (await createSupabaseServerClient())
        .from("project")
        .select(`
          *,
            project_technologies (
                technology: technologies (
                id,
                name,
                logo_url,
                description
                )
            )
        `)

    if (error) {
        console.error('Error fetching projects:', error.message)
        return []
    }

    const projects = data.map((project) => ({
        ...project,
        technologies: (project.project_technologies as ProjectTechnologyJoin[]).map((pt) => pt.technology)
    }))

    return projects
}

async function Projects() {
    const projectDetails = await fetchProjects()
    return (
        <div id="projects" className="flex flex-col items-center justify-center gap-5">
            <p className="text-2xl tablet:text-4xl">
                projects
            </p>
            <p className="text-base tablet:text-xl">
                Some things I`ve worked (or am working) on
            </p>
            <div>
                <ProjectCard projectDetails={projectDetails} />
            </div>
        </div>
    )
}

export default Projects