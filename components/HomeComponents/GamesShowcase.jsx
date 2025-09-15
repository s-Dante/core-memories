import { SDGCard } from "@/components";
import { getGames } from "@/app/lib/getGames";

export default async function GamesShowcase() {
    const gamesList = await getGames();

    return (
        <section>
            <div>
                {gamesList.map((game) => (
                    <SDGCard key={game.id} game={game} whereToGo={0} />
                ))}
            </div>
        </section>
    );
}