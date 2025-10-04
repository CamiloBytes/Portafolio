import { AboutComponents } from "@/components/AboutComponents"
import { FooterComponent } from "@/components/FooterComponent"
import { HeaderComponent } from "@/components/HeaderComponent"
import { SkillComponents } from "@/components/SkillComponents"

export const AboutMe = () => {
  return (
    <>
      <HeaderComponent
        title="Camilo"
        links={[
          { label: "Home", href: "#home" },
          { label: "Works", href: "#about" },
          { label: "About-me", href: "#projects" },
          { label: "Contacts", href: "#skil" },
        ]}
      />
      <AboutComponents />
      <SkillComponents />
      <FooterComponent title="Camilo" email="camiloandres02222@gmail.com" />
    </>
  )
}
