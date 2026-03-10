// components/BlogsComponents/Disquete.jsx
import Link from "next/link";
import { courier } from "@/app/layout";
import CSSFloppy from "./CSSFloppy";

export default function Disquete({ entry, blogId }) {
    // Generate text content for the floppy label
    const labelData = (
        <div className="flex flex-col h-full items-center justify-between text-black relative z-10 w-full">
            {/* Title Area */}
            <div className="w-full text-center border-b border-gray-300 pb-1 mb-1.5 truncate">
                <span className={`${courier.className} font-bold text-sm sm:text-base uppercase truncate block w-full leading-tight`}>
                    {entry.title}
                </span>
            </div>

            {/* Content Preview */}
            <div className="flex-1 w-full overflow-hidden text-[10px] sm:text-[11px] leading-tight font-mono text-gray-700 text-justify mt-1.5 line-clamp-3 opacity-90" style={{ wordSpacing: '-1px' }}>
                {entry.summary}
            </div>

            {/* Footer / Meta Area */}
            <div className="w-full mt-auto pt-1.5 border-t border-gray-300 flex justify-between items-center px-1">
                <div className="font-mono text-[9px] sm:text-[10px] text-gray-800 font-bold bg-white/50 px-2 py-0.5 rounded-sm border border-gray-300 uppercase">
                    {entry.tags?.[0] || "LOG"}
                </div>
                <div className="font-mono text-[8px] sm:text-[9px] text-gray-500 font-bold uppercase tracking-tighter">
                    {entry.date}
                </div>
            </div>
        </div>
    );

    return (
        <article className="relative w-[300px] sm:w-[360px] aspect-square mx-auto group">
            <Link href={`/blogs/${blogId}/${entry.id}`} className="block w-full h-full relative transition-transform duration-300 group-hover:-translate-y-2">
                <CSSFloppy labelContent={labelData} className="drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300" />
            </Link>
        </article>
    );
}