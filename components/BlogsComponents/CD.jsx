// components/BlogsComponents/CD.jsx
import Link from "next/link";
import Image from "next/image";
import { courier } from "@/app/layout";

export default function CD({ entry, blogId }) {
    return (
        <article className="group relative w-full aspect-square max-w-[180px] mx-auto cursor-pointer">
            <Link href={`/blogs/${blogId}/${entry.id}`} className="block w-full h-full">

                {/* CD Jewel Case Shadow */}
                <div className="absolute inset-1 bg-black/50 blur-md rounded-sm z-0 translate-y-2"></div>

                {/* Jewel Case Back/Base */}
                <div className="absolute inset-0 bg-gray-300 border-2 border-gray-400 rounded shadow-inner z-10 flex items-center justify-center overflow-hidden">
                    {/* CD Disc Element that slightly spins outward on hover */}
                    <div className="w-[90%] h-[90%] bg-gradient-to-tr from-gray-100 via-gray-400 to-gray-200 rounded-full border border-gray-500 flex items-center justify-center shadow-lg transition-transform duration-700 ease-in-out group-hover:-translate-x-8 group-hover:rotate-180 relative z-20">
                        {/* Inner CD Rim */}
                        <div className="w-1/3 h-1/3 bg-gray-300/80 rounded-full border border-gray-500 flex items-center justify-center relative">
                            {/* CD Hole */}
                            <div className="w-1/2 h-1/2 bg-gray-400 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"></div>
                        </div>
                        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.4)_45deg,rgba(0,0,255,0.2)_90deg,transparent_135deg,rgba(255,255,255,0.4)_180deg,rgba(255,0,0,0.2)_225deg,transparent_270deg,rgba(255,255,255,0.4)_315deg)] rounded-full mix-blend-screen pointer-events-none opacity-60"></div>
                    </div>
                </div>

                {/* Jewel Case Front Cover Container */}
                <div className="absolute inset-0 z-30 transform-origin-left transition-transform duration-700 group-hover:rotate-y-[-110deg] shadow-[inset_-2px_0_4px_rgba(0,0,0,0.2)]">
                    {/* Hinge Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gray-400 border-r border-gray-500 flex flex-col justify-evenly items-center z-40 opacity-90">
                        <div className="w-1 h-3 bg-gray-500 rounded-sm"></div>
                        <div className="w-1 h-3 bg-gray-500 rounded-sm"></div>
                    </div>

                    <div className="absolute inset-y-0 right-0 left-3 bg-[#0d0d0f] border-t border-b border-r border-[#404040] shadow-md p-1 pl-2 overflow-hidden flex flex-col items-center">
                        <div className="w-full text-center mt-2 border-b border-red-800 pb-1 mb-2">
                            <p className={`${courier.className} font-bold text-[10px] text-white tracking-widest uppercase`}>MULTIMEDIA</p>
                        </div>
                        <p className="text-white font-sans text-xs font-black uppercase text-center leading-tight">
                            {entry.title}
                        </p>
                        <div className="absolute bottom-2 right-2 text-red-500 font-mono text-[8px] border border-red-500 px-1">
                            REC {entry.duration || ">>"}
                        </div>
                    </div>
                    {/* Plastic Glare */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none z-50"></div>
                </div>
            </Link>
        </article>
    );
}