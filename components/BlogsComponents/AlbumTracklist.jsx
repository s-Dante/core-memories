// components/BlogsComponents/AlbumTracklist.jsx
import { rubik } from "@/app/layout";

export default function AlbumTracklist({ entry }) {
    return (
        <div className="w-full max-w-xl mx-auto bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] shadow-[2px_2px_0_rgba(0,0,0,1)] text-black font-sans p-1">
            {/* Fake Window Header */}
            <header className="bg-blue-900 px-2 py-1 flex justify-between items-center text-white mb-2">
                <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-white text-blue-900 flex justify-center items-center text-xs font-bold leading-none">♪</span>
                    <h1 className="text-sm font-bold tracking-wider uppercase">MEDIA PLAYER</h1>
                </div>
                <div className="bg-[#c0c0c0] w-4 h-4 border-t border-l border-white border-b border-r border-[#808080] flex items-center justify-center text-black text-xs font-black cursor-pointer leading-none px-1 py-1 shadow-sm active:shadow-inner">x</div>
            </header>

            {/* Display Screen */}
            <div className="bg-black text-[#00ff00] p-4 font-mono mb-2 border-t-2 border-l-2 border-[#808080] border-b-2 border-r-2 border-white shadow-[inset_1px_1px_black]">
                <p className="text-xs uppercase blur-[0.5px]">NOW PLAYING:</p>
                <marquee scrollamount="3" className="text-xl font-bold uppercase mt-1 tracking-widest">{entry.title} - {entry.date}</marquee>
                <div className="flex justify-between items-center text-xs mt-2 text-[#00cc00]">
                    <span>{entry.duration || "00:00"}</span>
                    <div className="flex-1 mx-4 h-1 bg-[#008000] rounded-full relative">
                        <div className="absolute top-0 left-0 h-full w-1/3 bg-[#00ff00] rounded-full shadow-[0_0_4px_#00ff00]"></div>
                    </div>
                    <span className="animate-pulse">PLAY</span>
                </div>
            </div>

            {/* Video Player Emulation Area (If URL provided) */}
            {entry.videoUrl && (
                <div className="w-full aspect-video bg-black mb-2 border-2 border-gray-600 border-b-white border-r-white p-1">
                    <iframe
                        className="w-full h-full"
                        src={entry.videoUrl}
                        title="Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {/* Controls */}
            <div className="flex gap-2 justify-center py-2 px-1 bg-[#c0c0c0] border-t border-white border-b border-[#808080]">
                <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] px-3 py-1 font-bold text-sm active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white text-center w-12 pt-1.5 flex justify-center">⏪</button>
                <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] px-3 py-1 font-bold text-sm active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white text-center w-12 pt-1.5 flex justify-center">▶</button>
                <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] px-3 py-1 font-bold text-sm active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white text-center w-12 pt-1.5 flex justify-center">⏸</button>
                <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] px-3 py-1 font-bold text-sm active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white text-center w-12 pt-1.5 flex justify-center">■</button>
                <button className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] px-3 py-1 font-bold text-sm active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white text-center w-12 pt-1.5 flex justify-center">⏩</button>
            </div>
        </div>
    );
}