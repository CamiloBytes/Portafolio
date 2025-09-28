import { TbBrandReact } from "react-icons/tb";
import type { IHeader } from "../types/IHeader";

// El Header recibe props tipadas con IHeader
export const HeaderComponent = ({ title, links }: IHeader) => {
    return (
        <header
            className="  w-full z-50 flex items-center justify-between px-8 py-4 
            bg-gray-900 "
        >
            {/* Logo */}
            <div className="flex items-center gap-2 text-white font-fira text-[1.5rem]">
                <div className="text-2xl">
                    <TbBrandReact />
                </div>
                <h1 className="font-semibold">{title}</h1>
            </div>

            {/* Nav */}
            <nav>
                <ul className="flex gap-6">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className="text-[1.1rem] text-gray-300 hover:text-purple-400 transition-colors font-fira"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>


    );
};
