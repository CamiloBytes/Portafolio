import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    let navegate = useNavigate()
    return (
        
            <section className="flex bg-gray-900 text-gray-100 min-h-screen">
                <div className="flex flex-col justify-center items-center text-center w-full px-4">
                    <h1 className="text-9xl font-bold text-purple-500">
                        404
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                        Página no encontrada
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Lo sentimos, la página que buscas no existe o fue movida.
                    </p>

                    <button
                        onClick={() => navegate("/")}
                        className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition-colors"
                    >
                        Volver al inicio
                    </button>
                </div>
            </section>
        
    )
}
