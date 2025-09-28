
import { InputDemo } from "@/components/InputDemo"
import { ButtonComponent } from "../components/ButtonComponent"
import { HeaderComponent } from "../components/HeaderComponent"


export const Portafolio = () => {
    return (
        <>
            <HeaderComponent
                title="Camilo Dev 🚀"
                links={[
                    { label: "Inicio",  href: "#home" },
                    { label: "Sobre mí", href: "#about" },
                    { label: "Proyectos", href: "#projects" },
                    { label: "Contacto", href: "#contact" },
                ]}
            />
            <ButtonComponent label="LIve"/>
            <InputDemo placeholder="name" type="text" />
        </>
    )
}
