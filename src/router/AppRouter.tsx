
import { AboutMe } from "@/pages/AboutMe"
import { Contacts } from "@/pages/Contacts"
import { Home } from "@/pages/Home"
import { NotFound } from "@/pages/NotFound"
import { Works } from "@/pages/Works"
import { Route, Routes } from "react-router-dom"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contacts" element= {<Contacts/>}/>
            <Route path="/works" element= {<Works/>}/>
            <Route path="/about" element={<AboutMe/>}/>
            <Route path="*" element={<NotFound/>}/>

        </Routes>
    )
}
