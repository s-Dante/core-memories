import { InfoGCard} from '@/components';
import { getGames } from "@/app/lib/getGames";

export default async function Games() {
    const games = await getGames();
    return (
        <main>
            {games.map(game => (
                <InfoGCard key={game.id} game={game} />
            ))}
        </main>
    );
}