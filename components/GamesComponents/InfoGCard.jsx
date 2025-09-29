// components/GamesComponents/InfoGCard.jsx
import { SDGCard } from '@/components';
import Link from 'next/link';
import { varien, varela } from '@/app/layout';

// --- CLASES SIMPLIFICADAS Y RESPONSIVAS ---

// Contenedor principal del artículo
const articleClasses = `
    w-full
    py-5 md:py-0 md:min-h-screen
    grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16
    text-center md:text-left
`;

// Contenedor para la tarjeta del juego (SDCard)
const cardWrapperClasses = `
    w-full flex justify-center
    transition-transform duration-300 ease-in-out
    md:group-even:order-last
    md:group-even:rotate-3
    md:-rotate-3
    md:hover:scale-105
    md:hover:rotate-0
`;

// Contenedor para el texto (título, descripción, botones)
const textWrapClasses = `
    flex flex-col items-center
    md:items-start
    md:group-even:items-end
`;

const gameTitleClasses = `
    ${varien.className}
    text-4xl md:text-5xl font-extrabold 
    uppercase leading-tight text-white
    tracking-tight mb-3 md:mb-4
`;

const gameDescriptionClasses = `
    ${varela.className}
    text-neutral-200/90
    max-w-prose // Limita el ancho del texto para mejor legibilidad
    md:group-even:text-right // Alinea el texto a la derecha para los pares
`;

const botonesClasses = `
    mt-6 flex flex-wrap gap-3 justify-center md:justify-start
`;

const linkClasses = `
    px-5 py-2 rounded-full bg-indigo-600/80
    hover:bg-indigo-600 text-white text-sm 
    md:text-base transition-colors
`;

const noDownloadLinksClasses = `
    text-neutral-400
`;


export default function InfoGCard({ game, id }) {
    return (
        // Añadimos una clase "group" para poder usar "group-even" en los hijos
        <article id={id} className={`group ${articleClasses}`}>

            <div className={cardWrapperClasses}>
                <SDGCard key={game.id} game={game} whereToGo={1} />
            </div>

            <div className={textWrapClasses}>
                <h2 className={gameTitleClasses}>{game.title}</h2>

                <p className={gameDescriptionClasses}>{game.shortDescription}</p>

                <div className={botonesClasses}>
                    {/* --- LÓGICA DE BOTONES CORREGIDA --- */}
                    {game.downloads && Array.isArray(game.downloads) && game.downloads.length > 0 ? (
                        // Iteramos sobre el array con .map()
                        game.downloads.map((download, index) =>
                            download.link ? (
                                <Link
                                    key={index} // Usamos el index como key
                                    href={download.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClasses}
                                >
                                    {download.platform} {/* Usamos download.platform */}
                                </Link>
                            ) : null
                        )
                    ) : (
                        <p className={noDownloadLinksClasses}>No hay enlaces de descarga disponibles 🥺</p>
                    )}
                </div>
            </div>
        </article>
    );
}