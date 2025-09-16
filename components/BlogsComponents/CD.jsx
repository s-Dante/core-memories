import Link from "next/link";
import { componentsPath } from "@/config";

export default function CD({ entry, blogID }) {
    return (
        <article>
            <Link href={`/blog/${blogID}/${entry.id}`}>
                <img src={componentsPath.cd} alt="Imagen de un CD" />
                <img src={entry.cover} alt={`Portada del álbum ${entry.title}`} />
            </Link>
        </article>
    );
}