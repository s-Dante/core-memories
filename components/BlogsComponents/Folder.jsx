// components/BlogsComponents/Folder.jsx
import Link from "next/link";
import Image from "next/image";

export default function Folder({ game }) {
    return (
        <Link href={`/blogs/${game.id}`} className="group relative flex flex-col items-center gap-2 w-28 p-2 rounded hover:bg-blue-900/50 hover:bg-blend-overlay cursor-pointer transition-colors outline-none focus:bg-blue-900/50 active:scale-95">
            {/* Retro Folder Icon SVG structure */}
            <div className="w-16 h-12 relative flex justify-center items-end drop-shadow-md group-hover:drop-shadow-lg transition-transform duration-200 group-hover:-translate-y-1">
                {/* Back flap */}
                <div className="absolute bottom-0 w-full h-10 bg-[#eebb66] border border-black shadow-inner"></div>
                {/* Tab */}
                <div className="absolute bottom-10 left-0 w-6 h-3 bg-[#eebb66] border-t border-l border-r border-black"></div>

                {/* Internal Document Hint */}
                <div className="absolute bottom-1 left-2 w-10 h-10 bg-white border border-gray-400 shadow-sm opacity-0 -translate-y-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 transform rotate-[-5deg]">
                    {/* Fake text lines */}
                    <div className="w-6 h-0.5 bg-gray-300 mt-2 mx-1"></div>
                    <div className="w-8 h-0.5 bg-gray-300 mt-1 mx-1"></div>
                    <div className="w-5 h-0.5 bg-gray-300 mt-1 mx-1"></div>
                </div>

                {/* Front flap */}
                <div className="absolute bottom-0 w-full h-9 bg-[#ffcc66] border border-black shadow-[inset_1px_1px_rgba(255,255,255,0.5)] transform -skew-x-[8deg] origin-bottom px-1"></div>
            </div>

            {/* Label */}
            <span className="text-white bg-blue-900/0 group-hover:bg-blue-900 px-1 font-sans text-xs text-center border border-transparent group-hover:border-dotted group-hover:border-white leading-tight break-words hyphens-auto max-w-full">
                {game.title.replace(' ', '_')}
            </span>
        </Link>
    );
}