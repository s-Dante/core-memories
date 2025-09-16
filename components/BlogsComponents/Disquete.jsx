import { componentsPath } from "@/config";
import Link from "next/link";

export default function Disquete({entry, blogID}) {
    return (
        <article>
            <Link href={`/blogs/${blogID}/${entry.id}`}>
                <img src={componentsPath.disquete} alt="Imagen de un disquete" />
                <h3>{entry.tag}</h3>
                <p>{entry.title}</p>
                <span>{entry.date}</span>
            </Link>
        </article>
    );
}