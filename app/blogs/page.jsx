import { getAllGames } from "@/data/games";
import { Folder } from "@/components/GeneralComponents";
import { AnimatedFloppies } from "@/components/BlogsComponents";

export const metadata = {
    title: "Blogs | Core Memories",
    description: "Archivos de desarrollo de nuestros proyectos.",
};

export default function Blogs() {
    // Only show folders for games
    const games = getAllGames();

    return (
        <div className="pt-32 pb-20 bg-[#0a0a0a] min-h-screen selection:bg-white selection:text-black">
            {/* Very subtle ambient noise */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen bg-[url('/resources/textures/noise.png')]"></div>

            <div className="max-w-screen-xl mx-auto px-6 mb-16 relative z-10 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-sans font-black text-white tracking-tighter mb-4 leading-none">
                    DEVELOPER LOGS
                </h1>
                <p className="text-zinc-500 font-sans text-lg md:text-xl max-w-2xl">
                    Archived notes, updates, and deep dives into our development process.
                </p>
            </div>

            <main className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 justify-items-center">
                    {games.map((game) => (
                        <div key={game.id} className="w-full max-w-[360px]">
                            <Folder
                                title={game.title.replace(" ", "<br/>")}
                                href={`/blogs/${game.id}`}
                            >
                                <div className="w-full h-full flex items-center justify-center translate-y-0 pointer-events-none">
                                    <AnimatedFloppies />
                                </div>
                            </Folder>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}