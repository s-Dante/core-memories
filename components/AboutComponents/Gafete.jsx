import Link from "next/link";
import { componentsPath } from "@/config";

export default function Gafete({ crew }) {
    return (
        <article className="rounded-xl">
            <img src={componentsPath.gafete} alt="Imagen de Gafete" />
            <img src={crew.image} alt={`Miembro del crew: ${crew.name}`} />

            <h3>{crew.name}</h3>
            <p>{crew.username}</p>

            <div>
                {crew.socials && Object.keys(crew.socials).length > 0 ? (
                    Object.entries(crew.socials).map(([platform, link]) =>
                        link ? (
                            <Link
                                key={platform}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-sm"
                            >
                                {platform}
                            </Link>
                        ) : null
                    )
                ) : (
                    <p>No hay redes sociales para mostrar</p>
                )}
            </div>

            {Array.isArray(crew.role) && crew.role.length > 0 && (
                <ul>
                    {crew.role.map((r, i) => (
                        <li key={i}>{r}</li>
                    ))}
                </ul>
            )}
        </article>
    );
}
