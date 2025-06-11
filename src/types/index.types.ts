
export interface Technology {
    id: number
    name: string
    logo_url: string
    description: string
}

export interface Project {
    id: number
    projectName: string
    category: string
    description: string
    imagesUrl: string[]
    source_code: string
    demo: string
    project_technologies?: {
        technology: Technology
    }[]
}
