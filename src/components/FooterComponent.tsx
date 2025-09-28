import type { IFooter } from "@/types/IFooter";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbBrandReact } from "react-icons/tb";
export const FooterComponent = ({ title, email }: IFooter) => {
    return (
        <>
            <footer className="bg-gray-800  ">
                <section className="grid grid-cols-2 grid-rows-1 h-16 ml-10  mr-10 p-10" >
                    <div className="flex items-center flex-row gap-2 text-white font-fira text-[1.2rem]">
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-row gap-4 items-center text-2xl">
                                    <TbBrandReact />
                                    <h1>{title}</h1>
                                </div>
                                <span className="flex text-gray-400  items-center  ">{email}</span>
                            </div>
                            <div className="text-gray-400 text-[20px] ">
                                <p >Frontend developer</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex text-3xl  justify-end p-2 w-full gap-3 items-center  text-gray-400">
                        <div className=" flex flex-col ">
                            <div className="items-start font-mono text-[22px]">
                                <h1>
                                    Media
                                </h1>
                            </div>
                            <div className="flex flex-row mt-3 gap-5 text-[22px]">
                                <FaGithub />
                                <IoLogoLinkedin />
                                <FaDiscord />
                            </div>
                        </div>
                    </div>

                </section>
                <section className=" flex justify-center items-center text-gray-400 p-6 text-[0.9rem]">
                    <h1>
                        <span>Copyright 2025. Made By Camilo</span>
                    </h1>
                </section>
            </footer>
        </>
    )
}
