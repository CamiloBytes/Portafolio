import type { IButton } from "../types/IButton"

export const ButtonComponent = ({onClick, label,className, type}:IButton) => {
    return (
        <>
            <button onClick={onClick} className={className} typeof={type}>
                {label}
            </button>
        </>
    )
}
