import { SDGCard } from '@/components';
import Link from 'next/link';
import { varien, varela } from '@/app/layout';

const articleClasses = `
    grid items-start
    gap-y-6 md:gap-y-6 md:gap-x-10
    grid-cols-1
    md:grid-cols-[minmax(260px,340px)_minmax(0,640px)]
    md:justify-between
    h-[100dvh]
    pt-50

    
    md:[&>*:first-child]:col-start-1
    md:[&>*:first-child]:-rotate-5
    md:[&>*:first-child]:scale-105
    md:[&>*:first-child]:hover:rotate-0 transition-ease
    md:[&>*:first-child]:justify-self-start
    md:[&>*:not(:first-child)]:col-start-2
    md:[&>*:not(:first-child)]:justify-self-start
    md:[&>*:not(:first-child)]:text-left
    md:[&>*:not(:first-child)]:max-w-[56ch]

    
    md:[&>h2]:self-start
    md:[&>p]:mt-3
    md:[&>div]:mt-4

    
    even:md:[&>*:first-child]:col-start-2
    even:md:[&>*:first-child]:rotate-5
    even:md:[&>*:first-child]:scale-105
    even;md:[&>*:first-child]:hover:rotate-0 transition-ease
    even:md:[&>*:first-child]:justify-self-end
    even:md:[&>*:not(:first-child)]:col-start-1
    even:md:[&>*:not(:first-child)]:justify-self-end
    even:md:[&>*:not(:first-child)]:text-right
`;

const gameTitleClasses = `
    ${varien.className}
    text-3xl md:text-5xl font-extrabold 
    uppercase leading-tight text-white
    tracking-tight mb-2 md:mb-3
`;

const gameDescriptionClasses = `
    ${varela.className}
    text-neutral-200/90
`;

const botonesClasses = `
    mt-4 flex flex-wrap gap-3
`;

const linkClasses = `
    px-4 py-2 rounded-full bg-indigo-600/80
    hover:bg-indigo-600 text-white text-sm 
    md:text-base
`;

const noDownloadLinksClasses = `
    text-neutral-400
`;

const textWrapClasses = `
  flex flex-col justify-center
  gap-3 md:gap-4
  md:col-start-2
  even:md:col-start-1
  text-left even:md:text-right
  max-w-[56ch]
`;

export default function InfoGCard({ game, id }) {
    return (
        <article id={id} className={articleClasses}>

            <SDGCard key={game.id} game={game} whereToGo={1} />

            <div className={textWrapClasses}>
                <h2 className={gameTitleClasses}>{game.title}</h2>

                <p className={gameDescriptionClasses}>{game.shortDescription}</p>

                <div className={botonesClasses}>
                    {game.downloads && Object.keys(game.downloads).length > 0 ? (
                        Object.entries(game.downloads).map(([platform, link]) =>
                            link ? (
                                <Link
                                    key={platform}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClasses}
                                >
                                    {platform}
                                </Link>
                            ) : null
                        )
                    ) : (
                        <p className={noDownloadLinksClasses}>No hay enlaces de descarga disponibles</p>
                    )}
                </div>
            </div>
        </article>
    );
}