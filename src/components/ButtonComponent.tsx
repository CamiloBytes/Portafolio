import type { IButton } from "../types/IButton"

export const ButtonComponent = ({onClick, label}:IButton) => {
    return (
        <>
            <button onClick={onClick} className="px-4 py-2 bg-[#282C33] text-white font-fira  border w-fit h-fit hover:bg-gray-700 transition-colors  border-gray-700">
                {label}
            </button>
        </>
    )
}
