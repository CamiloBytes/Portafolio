export const SkillComponents = () => {
    return (
        <>
            <section id="" className=" text-white text-sm bg-gray-900/95">
                <div className="mb-5 font-bold text-2xl ml-4">
                    <h1><span className="text-purple-500">#</span>skill</h1>
                </div>
                <div className="flex flex-row  ">

                    {/* Languages */}
                    <div className="p-3 w-69">
                        <div className="border border-gray-500 p-4 font-bold">
                            <h3 className="font-semibold mb-2">Languages</h3>
                        </div>
                        <div className="border border-gray-500 p-4 ">
                            <p>TypeScript Lua</p>
                            <p>Python JavaScript</p>
                        </div>
                    </div>

                    {/* Databases */}
                    <div className=" p-3 w-69">
                        <div className="border-gray-600 border p-4 ">
                            <h3 className="font-semibold mb-2">Databases</h3>
                        </div>
                        <div className="border border-gray-500 p-4">
                            <p>SQLite PostgreSQL</p>
                            <p>Mongo</p>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className=" p-3 w-xs">
                        <div className="border border-gray-500 p-4 font-bold">
                            <h3 className="font-semibold mb-2">Tools</h3>
                        </div>
                        <div className="border border-gray-500 p-4 ">
                            <p>VSCode Neovim Linux</p>
                            <p>Figma XFCE Arch</p>
                            <p>Git Font Awesome</p>
                        </div>
                    </div>

                    {/* Other */}
                    <div className="p-3 w-69">
                        <div className="border border-gray-500 p-4 font-bold">
                            <h3 className="font-semibold mb-2">Other</h3>
                        </div>
                        <div className="border border-gray-500 p-4 ">
                            <p>HTML CSS EJS SCSS</p>
                            <p>REST Jinja</p>
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className=" p-3 w-69">
                        <div className="border border-gray-500 p-4 font-bold">
                            <h3 className="font-semibold mb-2">Frameworks</h3>
                        </div>
                        <div className="border flex  flex-col border-gray-500 p-4 ">
                            <p>React Vue</p>
                            <p>Flask Express.js</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
