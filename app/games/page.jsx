import { GamesContent } from '@/components';
import { getGames } from '@/app/lib';

export const metadata = {
    title: "Games | Core Memories",
    description: "Descubre nuestros videojuegos.",
};

export default async function Games() {
    const games = await getGames();

    return <GamesContent games={games} />;
}