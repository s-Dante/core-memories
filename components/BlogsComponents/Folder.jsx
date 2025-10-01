// components/BlogsComponents/Folder.jsx

import Link from "next/link";
import { componentsPath } from "@/config";
import { rubik } from "@/app/layout";

export default function Folder({ blog }) {
    return (
        // --- INICIO DE CAMBIOS ---
        // 1. Reducimos el tamaño máximo de 'xs' (20rem) a '72' (18rem) para que sea un poco más compacto en escritorio.
        <article className="group relative w-full max-w-72 mx-auto aspect-[4/3] cursor-pointer">
            <Link href={`/blogs/${blog.id}`} className="block w-full h-full">
                
                <img 
                    src={componentsPath.folderBack} 
                    alt="Parte trasera de la carpeta"
                    className="absolute inset-0 w-full h-full z-0"
                />

                <div className="absolute inset-0 w-full h-full flex justify-center items-center z-10">
                    {/* 2. Aumentamos la animación para que sea más notoria */}
                    {/* Disquete Central: se mueve más hacia arriba */}
                    <img 
                        src={componentsPath.disqueteFolder} 
                        alt="Disquete principal"
                        className="z-3 h-[105px] w-auto -translate-y-11 transition-transform duration-300 ease-out group-hover:-translate-y-20" 
                    />
                    {/* Disquete Izquierdo: se mueve más y rota más */}
                    <img 
                        src={componentsPath.disqueteFolder} 
                        alt="Disquete secundario"
                        className="z-1 absolute h-[105px] w-auto -translate-y-11 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-31 group-hover:-translate-x-5 group-hover:-rotate-[20deg]" 
                    />
                    {/* Disquete Derecho: se mueve más y rota más */}
                    <img 
                        src={componentsPath.disqueteFolder} 
                        alt="Disquete secundario"
                        className="z-2 absolute h-[105px] w-auto -translate-y-11 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-27 group-hover:translate-x-8 group-hover:rotate-[12deg]" 
                    />
                </div>
                
                <img 
                    src={componentsPath.folderFront} 
                    alt="Parte delantera de la carpeta"
                    className="absolute inset-0 w-full h-auto translate-y-10 z-20"
                />

                <div className="absolute bottom-4 left-4 z-30">
                    <h3 className={`${rubik.className} text-2xl font-bold text-white uppercase`}>
                        {blog.name}
                    </h3>
                </div>

            </Link>
        </article>
        // --- FIN DE CAMBIOS ---
    );
}