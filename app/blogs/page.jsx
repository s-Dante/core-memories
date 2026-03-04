import { getAllGames } from "@/data/games";
import { Folder } from "@/components";

export const metadata = {
    title: "Blogs | Core Memories",
    description: "Archivos de desarrollo de nuestros proyectos.",
};

export default function Blogs() {
    // Only show folders for games
    const games = getAllGames();

    return (
        <main className="min-h-screen bg-[#008080] p-8 md:p-16 relative overflow-hidden font-sans">
            {/* Retro Windows 95 Desktop pattern maybe? */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('/resources/textures/noise.png')] z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-12 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-r-gray-800 border-b-gray-800 p-2 inline-block shadow-md">
                    <h1 className="text-2xl font-bold text-black flex items-center gap-2 px-4 py-1">
                        <span className="w-4 h-4 bg-blue-900 inline-block mr-2"></span>
                        C:\CORE_MEMORIES\ARCHIVES
                    </h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    {games.map((game) => (
                        <Folder key={game.id} game={game} />
                    ))}
                </div>
            </div>

            {/* Fake Taskbar */}
            <div className="fixed bottom-0 left-0 w-full h-10 bg-[#c0c0c0] border-t-2 border-white flex items-center px-2 z-50">
                <div className="bg-[#c0c0c0] border-t border-l border-white border-b border-r border-[#808080] shadow-[1px_1px_black] font-bold px-3 py-1 flex items-center cursor-pointer text-sm">
                    <span className="mr-2 text-black font-black">▶</span> Start
                </div>
                <div className="mx-4 h-full border-l border-[#808080] border-r border-white w-[2px]"></div>
                <div className="bg-[#c0c0c0] border-t-[2px] border-l-[2px] border-[#808080] border-b-[2px] border-r-[2px] border-white px-4 py-1 text-sm shadow-[inset_1px_1px_black]">
                    C:\CORE_MEMORIES\ARCHIVES
                </div>
            </div>
        </main>
    );
}