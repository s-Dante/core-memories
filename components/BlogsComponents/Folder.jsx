import Link from "next/link";
import { componentsPath } from "@/config";

export default function Folder({ blog }) {
    return (
        <article>
            <Link href={`/blogs/${blog.id}`}>
                <img src={componentsPath.folderBack} alt="Imagen de la parte trasera de una carpeta" />
                <img src={componentsPath.disqueteFolder} alt="Imagen de un disquete" />
                <img src={componentsPath.folderFront} alt="Imagen de la parte delantera de una carpeta" />
                <h3>{blog.name}</h3>
            </Link>
        </article>
    );
}