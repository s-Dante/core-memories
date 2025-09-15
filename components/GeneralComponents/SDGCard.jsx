import { componentsPath } from "@/config";
import Link from "next/link";

export default function GSDCard({ game, whereToGo }) {
    let path;

    if (whereToGo === 0) {
        path = "/games";
    } else if (whereToGo === 1) {
        path = `/games/${game.id}`;
    }

    return (
        <article>
            <Link href={path}>
                <img src={componentsPath.sd} alt="Ilustracion de un SD" />
                <img src={game.cover} alt={`Portada del videojuego ${game.title}`} />
            </Link>
        </article>
    );
}