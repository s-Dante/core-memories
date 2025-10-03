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
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[92%] 
                               transition-transform duration-500 ease-in-out 
                               group-hover:-translate-y-[100%] 
                               z-0"
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