import Link from "next/link";
import { componentsPath } from "@/config";

export default function CD({ entry, blogID }) {
    return (
        <article className="group relative w-full max-w-xs mx-auto aspect-square cursor-pointer">
            <Link href={`/blogs/${blogID}/${entry.id}`}>
                {/* El CD que se va a animar */}
                <img 
                    src={componentsPath.cd} 
                    alt="Imagen de un CD" 
                    className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out group-hover:-translate-x-[75%] z-10"
                />

                {/* La funda/portada del CD */}
                <div className="absolute inset-0 w-full h-full shadow-lg">
                    <img 
                        src={entry.cover} 
                        alt={`Portada del álbum ${entry.title}`} 
                        className="w-full h-full object-cover"
                    />
                </div>
            </Link>
        </article>
    );
}