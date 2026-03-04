import Link from "next/link";
import { varela } from "@/app/layout";

export default function SDGCard({ game, whereToGo }) {
    let path;
    if (whereToGo === 0) {
        path = `/games#game-${game.id}`;
    } else if (whereToGo === 1) {
        path = `/games/${game.id}`;
    }

    const coverPath = game.coverImage || "/resources/imgs/GamesImgs/Covers/comingsoon.jpg";

    return (
        <article className="relative w-[260px] sm:w-[340px] shrink-0 aspect-[4/5] group perspective-1000 mx-auto">
            <Link href={path} className="block w-full h-full relative transition-transform duration-500 transform-style-3d group-hover:rotate-y-[15deg] group-hover:-translate-y-2">

                {/* SD Card Base Body (Dark Gray Plastic) */}
                <div className="absolute inset-0 bg-[#3a3a3a] rounded-2xl shadow-2xl flex flex-col p-3 sm:p-4 pb-6 sm:pb-8 overflow-hidden 
                [clip-path:polygon(0_0,85%_0,100%_12%,100%_100%,0_100%)] border-t-2 border-r-2 border-[#555] border-b-4 border-l-4 border-[#222]">

                    {/* Top Notch Layout */}
                    {/* Left Switch Notch */}
                    <div className="absolute top-[15%] -left-1 w-3 h-[12%] bg-[#222] rounded-r-md border-y border-r border-[#2a2a2a] shadow-inner flex items-center">
                        {/* The locking switch */}
                        <div className="w-full h-1/3 bg-[#222] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] rounded-sm"></div>
                    </div>

                    {/* Right Notch (Under the angled cut) */}
                    <div className="absolute top-[30%] -right-1 w-3 h-[8%] bg-[#222] rounded-l-md border-y border-l border-[#2a2a2a] shadow-inner"></div>
                    <div className="absolute top-[45%] -right-1 w-3 h-[15%] bg-[#222] rounded-l-md border-y border-l border-[#2a2a2a] shadow-inner flex flex-col justify-evenly">
                        <div className="w-full h-1 bg-[#111]"></div>
                        <div className="w-full h-1 bg-[#111]"></div>
                    </div>

                    {/* SD Card Sticker / Full Image Area */}
                    <div className="relative mt-6 sm:mt-8 flex-1 w-full bg-white rounded-xl shadow-[inset_0_0_4px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden">

                        {/* Full Cover Image as background sticker */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={coverPath}
                                alt={`Portada del videojuego ${game.title}`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        {/* Top decorative gradient overlay for sticker */}
                        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/30 to-transparent z-10 pointer-events-none"></div>

                        {/* Label Footer (Overlay at the bottom) */}
                        <div className="relative mt-auto h-14 sm:h-16 bg-black/80 backdrop-blur-sm border-t border-gray-600 flex items-center justify-between px-2 sm:px-3 z-20">
                            <div className="min-w-0 pr-2 pb-1">
                                <h3 className={`${varela.className} font-black text-white text-base sm:text-lg uppercase leading-tight sm:leading-none tracking-tighter truncate max-w-[140px] sm:max-w-[180px]`}>{game.title}</h3>
                                <p className="text-[8px] sm:text-[10px] text-gray-300 font-bold tracking-widest mt-0.5">SDHC MEMORY CARD</p>
                            </div>
                            <div className="text-right flex flex-col items-end shrink-0">
                                <span className="font-black text-2xl sm:text-3xl text-white leading-none">32</span>
                                <span className="font-bold text-[8px] sm:text-[10px] text-gray-300">GB</span>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Grip Lip / Depression */}
                    <div className="absolute bottom-0 left-[10%] right-[10%] h-3 sm:h-4 bg-[#2a2a2a] border-t border-l border-r border-[#222] rounded-t-lg shadow-inner"></div>
                </div>

                {/* SD Card Drop Shadow Fix for clip-path */}
                <div className="absolute -inset-2 sm:-inset-3 bg-black/40 blur-xl sm:blur-2xl -z-10 rounded-[2rem] translate-y-4 sm:translate-y-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            </Link>
        </article>
    );
}