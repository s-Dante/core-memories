import { componentsPath } from "@/config";
import Link from "next/link";

const articleClasses = `
    relative w-[300px] max-w-full aspect-[3/4]
    overflow-hidden
`;

const linkClasses = `
    block w-full h-full
`;

const sdImgClasses = `
    absolute inset-0
    object-contain
    z-0
    p-3
    w-full h-full
`;

const coverClasses = `
    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    z-10
    w-[65%] h-auto
    pointer-events-none select-none
    rounded-2xl border-zinc-800 border-4
`;

export default function GSDCard({ game, whereToGo }) {
    let path;

    if (whereToGo === 0) {
        path = "/games";
    } else if (whereToGo === 1) {
        path = `/games/${game.id}`;
    }

    return (
        <article className={articleClasses}>
            <Link href={path}>
                <img 
                    src={componentsPath.sd} 
                    alt="Ilustracion de un SD"
                    className={sdImgClasses} 
                />
                <img 
                    src={game.cover} 
                    alt={`Portada del videojuego ${game.title}`}
                    className={coverClasses}    
                />
            </Link>
        </article>
    );
}