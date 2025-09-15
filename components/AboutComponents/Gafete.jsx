import Link from "next/link";
import { componentsPath } from "@/config";

export default function Gafete({ crew }) {
    return (
        <article className="rounded-xl border p-4">
            <img src={componentsPath.gafete} alt="Imagen de Gafete" />
            <img src={crew.image} alt={`Miembro del crew: ${crew.name}`} />

            <h3 className="mt-2 font-semibold">{crew.name}</h3>
            <p className="text-sm opacity-80">{crew.username}</p>

            <div className="mt-3 flex gap-3 flex-wrap">
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
                    <p className="text-sm opacity-70">No hay redes sociales para mostrar</p>
                )}
            </div>

            {Array.isArray(crew.role) && crew.role.length > 0 && (
                <ul className="mt-3 text-sm list-disc pl-5">
                    {crew.role.map((r, i) => (
                        <li key={i}>{r}</li>
                    ))}
                </ul>
            )}
        </article>
    );
}
