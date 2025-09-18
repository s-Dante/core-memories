import Link from "next/link";
import { componentsPath } from "@/config";

const articleClasses = `
    relative bg-[#1f1f1f] rounded-3xl p-5
    shadow-[0_20px_40px_rgba(0,0,0,.35)]
    border border-white/5
    mb-10
`;

export default function Gafete({ crew }) {
    return (
        <article className="articleClasses mb-50 mt-10">

            {/* marco del gafete */}
            <div className="relative rounded-2xl bg-[#242424] p-4">
                <div className="flex items-start gap-4">
                    {/* foto */}
                    <div className="shrink-0 justify-items-center align-items-center">
                        <div className="w-20 h-20 rounded-xl overflow-hidden ring-1 ring-white/10 justify-self-center align-self-center">
                            <img src={crew.image} alt={`Miembro del crew: ${crew.name}`} className="w-full h-full object-cover grayscale" />
                        </div>
                    </div>

                    {/* rol + usuario */}
                    <div className="min-w-0">
                        <p className="text-sm text-neutral-300">{Array.isArray(crew.role) ? crew.role[0] : crew.role}</p>
                        <p className="text-xs text-neutral-400">{crew.username}</p>
                        <h3 className="mt-1 text-lg font-semibold text-white truncate text-wrap">{crew.name}</h3>
                    </div>
                </div>

                {/* separador */}
                <div className="my-4 h-px bg-white/10" />

                {/* redes */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                    {crew.socials && Object.keys(crew.socials).length > 0 ? (
                        Object.entries(crew.socials).map(([platform, link]) =>
                            link ? (
                                <Link
                                    key={platform}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="truncate rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 text-neutral-200"
                                >
                                    {platform}
                                </Link>
                            ) : null
                        )
                    ) : (
                        <p className="col-span-2 text-neutral-400">No hay redes sociales para mostrar</p>
                    )}
                </div>
            </div>
        </article>
    );
}
