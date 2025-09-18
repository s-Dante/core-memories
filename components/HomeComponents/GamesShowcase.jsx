import { getGames } from "@/app/lib";
import { SDGCard } from "@/components";

const sectionClasses = `
    pt-50
    h-[100dvh]
    bg-zinc-900
    justify-center
    w-full
`;


const gridClasses = `
  grid gap-6 justify-items-center
  grid-auto-col grid-flow-col
  w-full
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