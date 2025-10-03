import Link from "next/link";
import { componentsPath } from "@/config";
import { rubik } from "@/app/layout";

export default function Disquete({ entry, blogID }) {
    return (
        <article className="relative w-full max-w-xs mx-auto aspect-square">
            <Link href={`/blogs/${blogID}/${entry.id}`} className="group">
                {/* Imagen del disquete */}
                <img 
                    src={componentsPath.disquete} 
                    alt="Imagen de un disquete" 
                    className="w-full h-full"
                />

                {/* Capa de color */}
                <div className={`absolute inset-0 w-full h-full mix-blend-multiply transition-opacity duration-300 group-hover:opacity-80`} />
                
                {/* Contenedor del texto */}
                <div className="absolute inset-0 px-10 flex flex-col justify-between text-white">
                    <div className="pt-33">
                        <p className={`${rubik.className} font-bold text-xl uppercase`}>{entry.tag}</p>
                        <p className="text-sm opacity-80">[{entry.title}]</p>
                    </div>
                    <p className="text-sm self-end pr-2 pb-2 opacity-80">[{entry.date}]</p>
                </div>
            </Link>
        </article>
    );
}