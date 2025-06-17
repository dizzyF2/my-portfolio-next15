import { createSupabaseServerClient } from "@/utils/supabase/server"
import TechCard from "../TechCard"
import { Technology } from "@/types/index.types"


const fetchTechnologies = async (): Promise<Technology[]> =>{
    const { data, error } = await (await createSupabaseServerClient())
        .from("technologies")
        .select("*")
    
    if (error) {
        console.error('Error fetching projects:', error.message)
        return []
    }

    return data as Technology[]
}
async function TechStack() {
    const technologies = await fetchTechnologies()
    return (
        <section id="technologies" className="flex flex-col gap-5 items-center justify-center">
            <p className="text-2xl font-bold tracking-tighter tablet:text-4xl">
                Frameworks & Tools
            </p>
            <p className="text-base tablet:text-xl text-gray-300">
                Some things I enjoy learning about and doing
            </p>
            <>
                <TechCard  technologies={technologies} />
            </>
        </section>
    )
}

export default TechStack