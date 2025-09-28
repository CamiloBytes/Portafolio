import { FirstComponent } from "@/components/FirstComponent"
import { HeaderComponent } from "@/components/HeaderComponent"
import { ProjectsComponent } from "@/components/ProjectsComponent"

export const Home = () => {
    return (
        <>
            <HeaderComponent
                title="Camilo Dev 🚀"
                links={[
                    { label: "Inicio",  href: "#home" },
                    { label: "Sobre mí", href: "#about" },
                    { label: "Proyectos", href: "#projects" },
                    { label: "Skill", href: "#skil" },
                    { label: "Contacto", href: "#contact" },
                ]}
            />
            <FirstComponent/>
            <ProjectsComponent/>
        </>
    )
}

