import imagen from "../assets/FotografíaNeón.png"

export const AboutComponents = () => {
    return (
        <>
            <section className="min-h-screen bg-gray-900/95 flex flex-col justify-start px-6 md:px-20 py-16 text-gray-200 font-mono">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 text-[15px]">
                        <h1 className="  px-1 py-1  font-bold text-3xl ">
                            <span className="text-purple-400">/</span>about-me
                        </h1>
                        <p className="text-sm text-gray-400 mt-2">Who am I?</p>
                        <span className="text-gray-100 text-lg">Hello, I’m Camilo!</span>
                        <p className="text-gray-400">
                            I’m a self-taught front-end developer based in Barranquilla, Colombia.
                            I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                        </p>
                        <p className="text-gray-400">
                            Transforming my creativity and knowledge into websites has been my passion for over a year.
                            I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="grid grid-cols-4 gap-1">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <span key={i} className="w-1 h-1 bg-gray-500 rounded-full"></span>
                            ))}
                        </div>

                        <img
                            src={imagen}
                            alt="profile"
                            className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
                        />
                    </div>
                </div>
            </section>


        </>
    )
}
