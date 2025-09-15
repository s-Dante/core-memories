import { SDGCard } from '@/components';
import Link from 'next/link';

export default function InfoGCard({ game }) {
    return (
        <article>
            <SDGCard key={game.id} game={game} whereToGo={1} />
            <h2>{game.title}</h2>
            <p>{game.shortDescription}</p>
             <div>
                {game.downloads && Object.keys(game.downloads).length > 0 ? (
                    Object.entries(game.downloads).map(([platform, link]) =>
                        link ? (
                            <Link
                                key={platform}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {platform}
                            </Link>
                        ) : null
                    )
                ) : (
                    <p>No hay enlaces de descarga disponibles</p>
                )}
            </div>
        </article>
    );
}