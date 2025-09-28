import { FirstComponent } from "@/components/FirstComponent"
import { FooterComponent } from "@/components/FooterComponent"
import { HeaderComponent } from "@/components/HeaderComponent"
import { ProjectsComponent } from "@/components/ProjectsComponent"

export const Home = () => {
    return (
        <>
            <HeaderComponent
                title="Camilo"
                links={[
                    { label: "Home",  href: "#home" },
                    { label: "Works", href: "#about" },
                    { label: "About-me", href: "#projects" },
                    { label: "Contacts", href: "#skil" },
                ]}
            />
            <FirstComponent/>
            <ProjectsComponent/>
            <FooterComponent title="Camilo" email="camiloandres02222@gmail.com"/>
        </>

    )
}

