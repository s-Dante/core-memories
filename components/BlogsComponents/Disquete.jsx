import Link from "next/link";
import { componentsPath } from "@/config";
import { rubik } from "@/app/layout";

// Mapa de colores: Asocia un tag con una clase de color de Tailwind
const colorMap = {
    "Programación": "bg-gray-500",
    "Arte": "bg-gray-400",
    "Modelado": "bg-gray-300",
    // Añade más tags y colores según necesites
    "default": "bg-gray-600"
};

export default function Disquete({ entry, blogID }) {
    const colorClass = colorMap[entry.tag] || colorMap["default"];

    return (
        <article className="relative w-full max-w-xs mx-auto aspect-square">
            <Link href={`/blogs/${blogID}/${entry.id}`} className="group">
                {/* Imagen del disquete */}
                <img 
                    src={componentsPath.disquete} 
                    alt="Imagen de un disquete" 
                    className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                />

                {/* Capa de color */}
                <div className={`absolute inset-0 w-full h-full mix-blend-multiply transition-opacity duration-300 group-hover:opacity-80 ${colorClass}`} />
                
                {/* Contenedor del texto */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div>
                        <p className={`${rubik.className} font-bold text-xl uppercase`}>{entry.tag}</p>
                        <p className="text-sm opacity-80">[{entry.title}]</p>
                    </div>
                    <p className="text-sm self-end opacity-80">[{entry.date}]</p>
                </div>
            </Link>
        </article>
    );
}