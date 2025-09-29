// components/HomeComponents/GamesShowcase.jsx
import { getGames } from "@/app/lib";
import { SDGCard } from "@/components";

const sectionClasses = `
    py-20 sm:py-24
    min-h-screen
    bg-zinc-900
    flex items-center justify-center
    w-full
`;

const containerClasses = `
  flex flex-wrap justify-center
  gap-8 sm:gap-12
  max-w-8xl mx-auto px-4
`;

export default async function GamesShowcase() {
    const gamesList = await getGames();

    return (
        <section className={sectionClasses}>
            <div className={containerClasses}>
                {gamesList.map((game) => (
                    <SDGCard key={game.id} game={game} whereToGo={0} />
                ))}
            </div>
        </section>
    );
}