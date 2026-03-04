// components/BlogsComponents/Disquete.jsx
import Link from "next/link";
import { courier } from "@/app/layout";

export default function Disquete({ entry, blogId }) {
    return (
        <article className="relative w-full aspect-[3/4] max-w-[200px] mx-auto group perspective-1000">
            <Link href={`/blogs/${blogId}/${entry.id}`} className="block w-full h-full relative transition-transform duration-300 transform-style-3d group-hover:rotate-y-12">

                {/* Document Shadow */}
                <div className="absolute inset-x-2 -bottom-2 h-4 bg-black/40 blur-md rounded-full shadow-2xl z-0"></div>

                {/* Main Paper Body */}
                <div className="absolute inset-0 bg-[#fdfaf6] border border-gray-300 shadow-[2px_2px_5px_rgba(0,0,0,0.5)] z-10 flex flex-col p-4 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('/resources/textures/noise.png')] before:opacity-10 before:mix-blend-multiply before:pointer-events-none">

                    {/* Folded Corner Effect */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-transparent via-transparent to-black/10 border-b border-l border-gray-200 shadow-sm z-20"></div>

                    <div className="border-b-2 border-dashed border-gray-400 pb-2 mb-3">
                        <p className={`${courier.className} font-bold text-sm tracking-tighter text-black uppercase truncate flex items-center gap-1`}>
                            <span className="text-[10px]">C:\</span> {entry.title}
                        </p>
                    </div>

                    <div className="flex-1 overflow-hidden">
                        <div className="text-[8px] leading-tight font-mono text-gray-500 text-justify line-clamp-[12] select-none break-all" style={{ wordSpacing: '-2px' }}>
                            {entry.summary.repeat(5)}
                        </div>
                    </div>

                    <div className="mt-auto pt-2 border-t border-gray-200">
                        <p className="font-mono text-[10px] text-gray-600 font-bold uppercase">{entry.date}</p>
                        <p className="font-mono text-[9px] text-blue-800 bg-blue-100 px-1 inline-block mt-1 uppercase border border-blue-200">{entry.tags?.[0] || "LOG"}</p>
                    </div>

                </div>
            </Link>
        </article>
    );
}