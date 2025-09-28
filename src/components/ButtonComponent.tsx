import type { IButton } from "../types/IButton"

export const ButtonComponent = ({onClick, label,className}:IButton) => {
    return (
        <>
            <button onClick={onClick} className={className}>
                {label}
            </button>
        </>
    )
}
