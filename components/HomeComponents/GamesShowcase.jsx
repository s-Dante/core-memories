import { getGames } from "@/app/lib";
import { SDGCard } from "@/components";

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