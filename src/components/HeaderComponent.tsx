import type { IHeader } from "../types/IHeader";

// El Header recibe props tipadas con IHeader
export const HeaderComponent = ({ title, links }: IHeader) => {
    return (
        <header className="flex items-center max-h-full justify-between px-8 py-4 bg-[#282C33] text-sm">
            
            <div className="flex items-center gap-2 text-white font-fira">
                <h1 className="flex items-center gap-2 text-white font-fira">{title}</h1>
            </div>

            <nav >
                <ul className="flex justify-end gap-6">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className="text-gray-400 hover:text-purple-300 font-fira transition-colors"
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
