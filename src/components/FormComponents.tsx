import { useState } from "react"
import { ButtonComponent } from "./ButtonComponent"
import { InputDemo, TextArea} from "./InputDemo"



export const FormComponents = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!name || !email || !title || !message) {
            alert("todos los campos son obligatorios")
            return
        }

        console.log("Form enviado:", { name, email, title, message })
        
    }
    return (
        <>

            <section className="flex min-h-screen justify-center items-center  bg-gray-800 text-white">
                <div className="flex flex-col w-xl justify-center items-center">
                    <form onSubmit={handleSubmit} className="flex-col m-8 flex gap-3.5 ">
                        <div className="flex flex-row items-center gap-4">
                            <InputDemo type="text"
                                placeholder="Name"
                                className="w-54 focus:outline-none focus:border-purple-400/90 focus:ring-1 focus:ring-purple-500/80"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <InputDemo type="email"
                                placeholder="Email"
                                className="w-54 focus:outline-none focus:border-purple-400/90 focus:ring-1 focus:ring-purple-500/80"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>
                        <div className="flex justify-center items-center">

                            <InputDemo type="text"
                                placeholder="Title"
                                className="w-[28rem]  focus:outline-none focus:border-purple-400/90 focus:ring-1 focus:ring-purple-500/80"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />

                        </div>
                        <div className="flex justify-center text-shadow-white items-center w-full ">
                            <TextArea placeholder="message"
                                className="w-full h-27 focus:outline-none focus:border-purple-400/90 focus:ring-1 focus:ring-purple-500/80"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                
                            />
                            
                        </div>
                        <div>
                            <ButtonComponent label="send" className="text-gray-400 border border-purple-400 pt-1 pb-1 pl-2 pr-10   hover:bg-fuchsia-300/40 transition-colors text-sm md:text-base" type="submit" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
