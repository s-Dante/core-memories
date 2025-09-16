import { getGames } from "@/app/lib";
import { SDGCard } from "@/components";

const sectionClasses = `
    parallax
    bg-red-300
`;


const gridClasses = `
    grid gap-6
    grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
`;

export default async function GamesShowcase() {
    const gamesList = await getGames();

    return (
        <section className={sectionClasses}>
            <div className={gridClasses}>
                {gamesList.map((game) => (
                    <SDGCard key={game.id} game={game} whereToGo={0} />
                ))}
            </div>
        </section>
    );
}