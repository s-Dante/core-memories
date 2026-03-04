import { GamesContent } from '@/components';
import { getAllGames } from '@/data/games';

export const metadata = {
    title: "Games | Core Memories",
    description: "Descubre nuestros videojuegos.",
};

export default function Games() {
    const games = getAllGames();

    return (
        <div className="pt-32 pb-20 bg-zinc-900 min-h-screen bg-[url('/resources/textures/noise.png')] bg-repeat">
            <div className="max-w-screen-xl mx-auto px-6 mb-12">
                <h1 className="text-5xl font-sans font-black text-white uppercase tracking-tighter">PROJECT ARCHIVE</h1>
                <p className="text-zinc-400 font-mono mt-2">Classified dossiers of active and past operations.</p>
                <div className="h-1 w-24 bg-red-600 mt-6"></div>
            </div>
            <GamesContent games={games} />
        </div>
    );
}