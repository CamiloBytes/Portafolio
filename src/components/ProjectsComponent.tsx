import { projects } from "@/data/Projects"

export const ProjectsComponent = () => {
    return (
        <>
            <section id="projects" className="py-16 bg-gray-800 text-gray-100">
                <div className="container mx-auto px-6">

                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold text-purple-400">#projects</h2>
                        <a href="#"
                            className="text-sm text-gray-400 hover:text-purple-400 transition">
                            View all ➝
                        </a>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <div key={project.id}
                                className="bg-gray-800 border-1 overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-[1.02] flex flex-col">

                                <div className="h-40 bg-gray-700 border-b-1 flex items-center justify-center">
                                    <img src={project.image} alt={project.title} className="max-h-32 object-contain" />
                                </div>

                                <div className="  flex flex-col flex-1">
                                    
                                    <div className=" border-b-2 p-4 text-xs text-gray-400 mb-2">
                                        {project.tech.join(" · ")}
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-sm text-gray-400 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="mt-4 flex gap-2">
                                        {project.links.map((link, idx) => (
                                            <a
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`px-3 py-1 rounded-md text-sm border transition 
                                                    ${link.type === "primary"
                                                        ? "border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                                                        : "border-gray-500 text-gray-400 hover:bg-gray-600"}`}
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
