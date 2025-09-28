export const FirstComponent = () => {
    return (
        <>
            <section id="about" className=" min-h-screen  bg-gray-900 flex items-center px-12 text-white relative">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">

                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                            Camilo is a{" "}
                            <span className="text-purple-400">web designer</span><br />
                            and <span className="text-purple-400">front-end developer</span>
                        </h1>

                        <p className="text-gray-400 max-w-md">
                            He crafts responsive websites where technologies meet creativity
                        </p>

                        <button className="px-6 py-3 bg-transparent border border-gray-400 text-white font-fira rounded-md hover:bg-gray-700 transition-colors">
                            Contact me!!
                        </button>
                    </div>

                    <div className="relative flex justify-center md:justify-end">
                        <img
                            src="/camilo-hoodie.png" 
                            alt="Camilo"
                            className="w-80 md:w-[400px] relative z-10"
                        />

                        <div className="absolute top-10 right-10 w-40 h-40 border border-purple-400"></div>
                        <div className="absolute top-20 right-20 w-24 h-24 border border-purple-400"></div>
                    </div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 bg-[#1E1E23] border border-purple-400  px-4 py-2 text-sm font-fira">
                    <span className="text-purple-400">Currently working on </span>
                    <span className="text-white font-semibold">Portfolio</span>
                </div>
            </section>
        </>
    )
}
