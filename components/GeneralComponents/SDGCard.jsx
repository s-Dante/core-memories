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
        <article className="relative w-[260px] sm:w-[340px] shrink-0 aspect-[4/5] group [perspective:1200px] mx-auto z-10 hover:z-20">
            <Link href={path} className="block w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(12deg)_rotateX(4deg)_translateY(-12px)_scale(1.02)]">

                {/* SD Card Base Body (Dark Gray Plastic) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f4f4f] via-[#2f2f2f] to-[#1a1a1a] rounded-[18px] flex flex-col p-3 sm:p-4 pb-6 sm:pb-8 overflow-hidden 
                [clip-path:polygon(0_0,85%_0,100%_12%,100%_100%,0_100%)] border-t-[1px] border-l-[1px] border-white/20 shadow-[inset_-3px_-5px_15px_rgba(0,0,0,0.9),inset_3px_3px_5px_rgba(255,255,255,0.15)] ring-1 ring-black/50">

                    {/* Top Notch Layout */}
                    {/* Left Switch Notch (Lock slider) */}
                    <div className="absolute top-[16%] -left-1 w-3.5 h-[12%] bg-[#111] rounded-r border-y border-r border-[#000] shadow-[inset_1px_1px_4px_rgba(0,0,0,1)] flex items-center justify-end pr-[2px]">
                        {/* The locking switch (Premium Yellow) */}
                        <div className="w-[4px] h-[45%] bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 shadow-[0_1px_2px_rgba(0,0,0,0.8)] rounded-[1px]"></div>
                    </div>

                    {/* Right Notches */}
                    <div className="absolute top-[32%] -right-1 w-2.5 h-[8%] bg-[#111] rounded-l border-y border-l border-[#000] shadow-[inset_-1px_1px_4px_rgba(0,0,0,1)]"></div>
                    <div className="absolute top-[48%] -right-1 w-2.5 h-[14%] bg-[#111] rounded-l border-y border-l border-[#000] shadow-[inset_-1px_1px_4px_rgba(0,0,0,1)] flex flex-col justify-evenly pl-[2px] py-1 gap-1">
                        <div className="w-full flex-1 bg-black/80 rounded-l-[1px] shadow-sm"></div>
                        <div className="w-full flex-1 bg-black/80 rounded-l-[1px] shadow-sm"></div>
                    </div>

                    {/* SD Card Sticker / Full Image Area */}
                    <div className="relative mt-8 sm:mt-10 mb-3 sm:mb-4 mx-auto flex-1 w-[86%] sm:w-[88%] bg-[#0a0a0a] rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.1),inset_0_2px_15px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden group/sticker isolate">

                        {/* Full Cover Image as background sticker */}
                        <div className="absolute inset-0 z-0 bg-black">
                            <img
                                src={coverPath}
                                alt={`Portada del videojuego ${game.title}`}
                                className="w-full h-full object-cover rounded-lg opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                        </div>

                        {/* Sticker Gloss / Glare Effect */}
                        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-lg">
                            <div className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-gradient-to-tr from-transparent via-white/25 to-transparent -rotate-45 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-[1200ms] ease-in-out"></div>
                        </div>

                        {/* Top decorative gradient overlay for sticker */}
                        <div className="absolute top-0 inset-x-0 h-20 sm:h-24 bg-gradient-to-b from-black/90 via-black/30 to-transparent z-10 pointer-events-none"></div>

                        {/* Gold Top Band */}
                        <div className="absolute top-0 left-0 right-0 h-[5px] sm:h-[6px] bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-500 z-20 shadow-[0_1px_8px_rgba(255,215,0,0.6)]"></div>

                        {/* Label Footer (Overlay at the bottom) */}
                        <div className="relative mt-auto h-14 sm:h-16 bg-gradient-to-t from-black via-black/95 to-black/60 backdrop-blur-md border-t border-white/10 flex items-center justify-between px-2.5 sm:px-3 z-20">
                            <div className="min-w-0 pr-1.5 pb-1 flex flex-col justify-center h-full">
                                <h3 className={`${varela.className} font-black text-white text-base sm:text-lg uppercase leading-tight tracking-tight truncate max-w-[120px] sm:max-w-[160px] drop-shadow-md`}>{game.title}</h3>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,1)] animate-[pulse_2s_ease-in-out_infinite]"></div>
                                    <p className="text-[8px] sm:text-[9.5px] text-gray-300 font-bold tracking-[0.15em]">SDXC MEMORY CARD</p>
                                </div>
                            </div>
                            <div className="text-right flex flex-col items-end shrink-0 justify-center h-full">
                                <span className="font-black text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 leading-none drop-shadow-lg filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">64</span>
                                <span className="font-bold text-[8px] sm:text-[9.5px] text-yellow-500 tracking-wider">GB <span className="text-gray-400">I</span></span>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Grip Lip / Depression */}
                    <div className="absolute bottom-0 left-[12%] right-[12%] h-3 sm:h-5 bg-gradient-to-b from-[#1f1f1f] to-[#2a2a2a] border-t border-x border-[#111] rounded-t-xl shadow-[inset_0_3px_5px_rgba(0,0,0,0.9)] flex justify-between px-4 sm:px-8 items-end pb-1 sm:pb-1.5">
                        <div className="w-[3px] h-1.5 sm:h-2 bg-black/60 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,1)]"></div>
                        <div className="w-[3px] h-1.5 sm:h-2 bg-black/60 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,1)]"></div>
                        <div className="w-[3px] h-1.5 sm:h-2 bg-black/60 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,1)]"></div>
                        <div className="w-[3px] h-1.5 sm:h-2 bg-black/60 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,1)]"></div>
                        <div className="w-[3px] h-1.5 sm:h-2 bg-black/60 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,1)]"></div>
                    </div>
                </div>

                {/* SD Card Drop Shadow Fix for clip-path */}
                <div className="absolute -inset-4 sm:-inset-6 bg-black/50 blur-2xl sm:blur-3xl -z-10 rounded-[2rem] translate-y-8 sm:translate-y-12 translate-x-2 sm:translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                {/* Static gentle shadow when not hovering */}
                <div className="absolute inset-0 bg-black/30 blur-xl -z-10 rounded-[2rem] translate-y-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

            </Link>
        </article>
    );
}