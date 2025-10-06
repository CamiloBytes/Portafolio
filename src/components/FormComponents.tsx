import { ButtonComponent } from "./ButtonComponent"

import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import { toast } from 'react-toastify';
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";


type Inputs = {
    name: string
    email: string
    title: string
    message: string
}

export const FormComponents = () => {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        try {
            console.log(data);

            // const response = axios.post('http://localhost:3000/',data)
            toast("Wow so easy !");

        } catch (error) {

        }
    }

    return (
        <>

            <section className="flex min-h-screen justify-center items-center  bg-gray-800 text-white">
                <div className="flex flex-col w-xl justify-center items-center border">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-col m-8 flex gap-y-9 ">
                        <div className="flex flex-row items-center gap-4">
                            <FloatLabel >
                                <InputText  {...register("name")}
                                    className="w-full rounded-none!  bg-transparent! outline-none border-purple-400/90 ring-1 ring-purple-500/80" />
                                <label htmlFor="username">Username</label>
                            </FloatLabel>

                            <FloatLabel>
                                <InputText {...register("email")}
                                    className="w-full rounded-none!  bg-transparent! outline-none border-purple-400/90 ring-1 ring-purple-500/80" />
                                <label htmlFor="username">Username</label>
                            </FloatLabel>

                        </div>
                        <div className="flex justify-center items-center">

                            <FloatLabel>
                                <InputText {...register("title")}
                                    className="w-[20rem] rounded-none! bg-transparent! outline-none border-purple-400/90 ring-1 ring-purple-500/80" />
                                <label htmlFor="username">Username</label>
                            </FloatLabel>

                        </div>
                        <div className="flex justify-center text-shadow-white items-center w-full ">
                            <FloatLabel>
                                <InputTextarea {...register("message")} 
                                rows={5} cols={30} 
                                className="w-full bg-transparent! rounded-none!   h-27 outline-none hover:border-purple-400/90!: ring-1 ring-purple-500/80!"/>
                                <label htmlFor="username">Username</label>
                            </FloatLabel>

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
