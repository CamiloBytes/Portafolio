import { FaSquareFull } from "react-icons/fa6"
import imagen from "../assets/FotografíaNeón.png"
import { ButtonComponent } from "./ButtonComponent"

export const FirstComponent = () => {
    return (
        <>
            <section
                id="about"
                className="relative min-h-screen bg-gray-800 flex flex-col justify-start px-6 md:px-12 py-16 text-white"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl mx-auto">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                            Camilo is a{" "}
                            <span className="text-purple-400">web designer</span>
                            <br />
                            and <span className="text-purple-400">front-end developer</span>
                        </h1>
                        <p className="text-gray-400 max-w-md text-sm md:text-base">
                            He crafts responsive websites where technologies meet creativity
                        </p>
                        <ButtonComponent
                            label="Contact me !!"
                            className="px-6 py-3 bg-transparent border border-gray-400 text-white font-fira hover:bg-gray-700 transition-colors text-sm md:text-base"
                        />
                    </div>
                    <div className="relative flex justify-center md:justify-end">
                        <img
                            src={imagen}
                            alt="Camilo"
                            className="w-72 md:w-[400px] relative z-10"
                        />
                        <div className="absolute top-6 right-6 w-40 h-40 border border-purple-400"></div>
                        <div className="absolute top-20 right-20 w-24 h-24 border border-purple-400"></div>
                        <div className="absolute -bottom-12 w-100 left-1/2 md:left-auto md:right-0 transform -trangray-x-1/2 
                        md:trangray-x-0 bg-gray-700 border border-gray-400 px-4 py-2 text-xs md:text-sm font-fira flex items-center gap-2">
                            <span className="text-purple-400 border-transparent">
                                <FaSquareFull />
                            </span>
                            <span className="text-gray-400">Currently working on </span>
                            <span className="text-white font-semibold">Portfolio</span>
                        </div>
                    </div>
                </div>
                <div className="mt-24 max-w-3xl mx-auto relative">
                    <div className="border border-gray-500 p-6 relative">
                        <span className="absolute -top-6 left-4 text-3xl text-gray-500">“</span>
                        <p className="text-base md:text-lg text-gray-300 italic text-center">
                            With great power comes great electricity bill
                        </p>
                        <span className="absolute -bottom-6 right-4 text-3xl text-gray-500">”</span>
                    </div>
                    <p className="text-right text-gray-500 mt-4 text-sm md:text-base">– Dr. Who</p>
                </div>
            </section>
        </>
    )
}
