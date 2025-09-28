import type { IFooter } from "@/types/IFooter";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbBrandReact } from "react-icons/tb";

export const FooterComponent = ({ title, email }: IFooter) => {
    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-white/10">
            <section className="container mx-auto grid md:grid-cols-2 gap-8 px-8 py-10">
                <div className="flex flex-col gap-2 items-star justify-center">
                    <div className="flex flex-row items-center gap-3 text-white font-fira text-xl">
                        <TbBrandReact className="text-3xl text-purple-400" />
                        <h1 className="font-semibold">{title}</h1>
                        <span className="text-gray-400 text-sm">{email}</span>
                    </div>
                    
                    <p className="text-gray-400 text-base">Frontend Developer</p>
                    
                </div>

                <div className="flex flex-col items-center justify-center md:items-end gap-4">
                    <div className="flex flex-row items-center gap-3  font-mono text-lg text-white">
                        <h2 >Media</h2>
                    </div>
                    
                    <div className="flex gap-6 text-2xl">
                        <a href="https://github.com" target="_blank" className="hover:text-purple-400 transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="hover:text-purple-400 transition-colors">
                            <IoLogoLinkedin />
                        </a>
                        <a href="https://discord.com" target="_blank" className="hover:text-purple-400 transition-colors">
                            <FaDiscord />
                        </a>
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center border-t border-white/10 py-4">
                <p className="text-sm text-gray-500">
                    © 2025. Made by <span className="text-purple-400 font-semibold">Camilo</span>
                </p>
            </section>
        </footer>
    );
};
