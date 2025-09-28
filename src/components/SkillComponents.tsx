export const SkillComponents = () => {
    return (
        <>
            <section id="" className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                {/* Languages */}
                <div className="border border-gray-500 p-3 rounded">
                    <h3 className="font-semibold mb-2">Languages</h3>
                    <p>TypeScript Lua</p>
                    <p>Python JavaScript</p>
                </div>

                {/* Databases */}
                <div className="border border-gray-500 p-3 rounded">
                    <h3 className="font-semibold mb-2">Databases</h3>
                    <p>SQLite PostgreSQL</p>
                    <p>Mongo</p>
                </div>

                {/* Tools */}
                <div className="border border-gray-500 p-3 rounded">
                    <h3 className="font-semibold mb-2">Tools</h3>
                    <p>VSCode Neovim Linux</p>
                    <p>Figma XFCE Arch</p>
                    <p>Git Font Awesome</p>
                </div>

                {/* Other */}
                <div className="border border-gray-500 p-3 rounded">
                    <h3 className="font-semibold mb-2">Other</h3>
                    <p>HTML CSS EJS SCSS</p>
                    <p>REST Jinja</p>
                </div>

                {/* Frameworks */}
                <div className="border border-gray-500 p-3 rounded">
                    <h3 className="font-semibold mb-2">Frameworks</h3>
                    <p>React Vue</p>
                    <p>Disnake Discord.js</p>
                    <p>Flask Express.js</p>
                </div>
            </section>
        </>
    )
}
