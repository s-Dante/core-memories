// components/BlogsComponents/CD.jsx
import Link from "next/link";
import Image from "next/image";
import { courier } from "@/app/layout";

export default function CD({ entry, blogId }) {
    return (
        <article className="group relative w-[300px] sm:w-[360px] aspect-square mx-auto cursor-pointer [perspective:1000px]">
            <Link href={`/blogs/${blogId}/${entry.id}`} className="block w-full h-full">

                {/* CD Jewel Case Shadow */}
                <div className="absolute inset-1 bg-black/50 blur-md rounded-sm z-0 translate-y-2"></div>

                {/* Jewel Case Back/Base (Removed overflow-hidden so the CD can slide out) */}
                <div className="absolute inset-0 bg-[#222225] border-2 border-[#404040] rounded shadow-inner z-10 flex items-center justify-center">
                    {/* CD Disc Element that spins and slides OUT (right) visibly on hover */}
                    <div className="w-[85%] h-[85%] bg-gradient-to-tr from-gray-100 via-gray-400 to-gray-200 rounded-full border border-gray-500 flex items-center justify-center shadow-md transition-all duration-700 ease-in-out group-hover:translate-x-[50%] group-hover:rotate-180 group-hover:shadow-[10px_0_15px_rgba(0,0,0,0.4)] relative z-20">
                        {/* Inner CD Rim */}
                        <div className="w-1/3 h-1/3 bg-gray-300/80 rounded-full border border-gray-500 flex items-center justify-center relative">
                            {/* CD Hole */}
                            <div className="w-1/2 h-1/2 bg-gray-400 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"></div>
                        </div>
                        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.4)_45deg,rgba(0,0,255,0.2)_90deg,transparent_135deg,rgba(255,255,255,0.4)_180deg,rgba(255,0,0,0.2)_225deg,transparent_270deg,rgba(255,255,255,0.4)_315deg)] rounded-full mix-blend-screen pointer-events-none opacity-60"></div>
                    </div>
                </div>

                {/* Jewel Case Front Cover Layer (The part that opens) */}
                <div className="absolute inset-0 z-30 origin-left transition-transform duration-700 ease-out group-hover:[transform:rotateY(-120deg)] shadow-[inset_-2px_0_4px_rgba(0,0,0,0.5)] transform-gpu outline outline-1 outline-[#555] bg-black/60 backdrop-blur-[2px]">
                    
                    {/* Hinge Detail (Left Edge) */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#111] border-r border-[#333] flex flex-col justify-evenly items-center z-40">
                        <div className="w-1 h-4 bg-[#222] rounded-sm shadow-inner"></div>
                        <div className="w-1 h-4 bg-[#222] rounded-sm shadow-inner"></div>
                    </div>

                    {/* Paper Booklet Inside the Cover */}
                    <div className="absolute inset-y-1 right-1 left-4 bg-[#0a0a0a] border border-[#333] shadow-md p-2 flex flex-col items-center">
                        <div className="w-full text-center mt-2 border-b border-red-800 pb-2 mb-2">
                            <p className={`${courier.className} font-bold text-xs sm:text-sm text-white tracking-widest uppercase`}>MULTIMEDIA</p>
                        </div>
                        <p className="text-white font-sans text-sm sm:text-base font-black uppercase text-center leading-tight">
                            {entry.title}
                        </p>
                        <div className="absolute bottom-2 right-2 text-red-500 font-mono text-[9px] sm:text-[10px] border border-red-500 px-1.5 py-0.5">
                            REC {entry.duration || ">>"}
                        </div>
                    </div>
                    {/* Plastic Glare over the entire front cover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/20 to-transparent pointer-events-none z-50"></div>
                </div>
            </Link>
        </article>
    );
}