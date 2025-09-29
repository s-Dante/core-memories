// components/AboutComponents/Gafete.jsx

import Link from "next/link";

const articleClasses = `
    group relative w-full
    bg-zinc-800/40
    border border-white/10
    rounded-2xl p-6
    text-center
    transition-all duration-300
    hover:border-white/20
    overflow-hidden
`;

// Efecto de brillo que sigue al mouse
const glowEffect = `
    absolute -inset-px rounded-2xl opacity-0 
    transition-opacity duration-300 group-hover:opacity-100
    bg-[radial-gradient(400px_at_50%_50%,rgba(124,58,237,0.15),transparent_80%)]
`;

const photoClasses = `
    w-24 h-24
    rounded-full object-cover
    mx-auto mb-4
    border-2 border-white/10
`;

const nameClasses = `
    text-xl font-bold text-white
`;

const usernameClasses = `
    text-sm text-neutral-400 mb-2
`;

const roleClasses = `
    text-indigo-400 text-sm font-semibold
`;

const socialLinksContainer = `
    mt-6 grid grid-cols-2 gap-2 text-sm
`;

const socialLink = `
    truncate rounded-lg px-3 py-2 
    bg-white/5 hover:bg-white/10 
    text-neutral-300 hover:text-white
    transition-colors
`;

export default function Gafete({ crew }) {
    return (
        <article className={articleClasses}>
            {/* Elemento para el efecto de brillo */}
            <div className={glowEffect} />

            <div className="relative">
                <img 
                    src={crew.image} 
                    alt={`Miembro del crew: ${crew.name}`} 
                    className={photoClasses}
                />

                <h3 className={nameClasses}>{crew.name}</h3>
                <p className={usernameClasses}>{crew.username}</p>
                <p className={roleClasses}>{Array.isArray(crew.role) ? crew.role.join(" / ") : crew.role}</p>

                <div className={socialLinksContainer}>
                    {crew.socials && Object.keys(crew.socials).length > 0 ? (
                        Object.entries(crew.socials).map(([platform, link]) =>
                            link ? (
                                <Link
                                    key={platform}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={socialLink}
                                >
                                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                </Link>
                            ) : null
                        )
                    ) : (
                        <p className="col-span-2 text-neutral-500">No hay redes sociales</p>
                    )}
                </div>
            </div>
        </article>
    );
}