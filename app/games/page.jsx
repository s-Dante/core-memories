import { GamesContent } from '@/components';
import { getAllGames } from '@/data/games';

export const metadata = {
    title: "Games | Core Memories",
    description: "Descubre nuestros videojuegos.",
};

export default function Games() {
    const games = getAllGames();

    return (
        <div className="pt-32 pb-20 bg-[#0a0a0a] min-h-screen selection:bg-white selection:text-black">
            {/* Very subtle ambient noise */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen bg-[url('/resources/textures/noise.png')]"></div>

            <div className="max-w-screen-xl mx-auto px-6 mb-16 relative z-10 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-sans font-black text-white tracking-tighter mb-4 leading-none">
                    PROJECT ARCHIVE
                </h1>
                <p className="text-zinc-500 font-sans text-lg md:text-xl max-w-2xl">
                    A curated collection of our creative endeavors and interactive experiences.
                </p>
            </div>

            <GamesContent games={games} />
        </div>
    );
}