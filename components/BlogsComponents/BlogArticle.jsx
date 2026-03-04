// components/BlogsComponents/BlogArticle.jsx
import { courier } from "@/app/layout";

export default function BlogArticle({ entry }) {
    return (
        <div className="w-full max-w-4xl mx-auto bg-white border-t-2 border-l-2 border-gray-100 border-b-2 border-r-2 border-gray-800 shadow-[2px_2px_0_rgba(0,0,0,1)] text-black font-sans flex flex-col h-full min-h-[500px]">
            {/* Fake Window Header */}
            <header className="bg-blue-900 px-2 py-1 flex justify-between items-center text-white select-none">
                <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-white text-blue-900 flex justify-center items-center text-xs font-bold leading-none">_</span>
                    <h1 className="text-sm font-bold tracking-wider uppercase truncate max-w-[200px] sm:max-w-md">NOTEPAD - {entry.title}</h1>
                </div>
                <div className="flex gap-1">
                    <div className="bg-[#c0c0c0] w-4 h-4 border-t border-l border-white border-b border-r border-[#808080] flex items-center justify-center text-black text-xs font-black cursor-pointer leading-none px-1 py-1 shadow-sm active:shadow-inner">_</div>
                    <div className="bg-[#c0c0c0] w-4 h-4 border-t border-l border-white border-b border-r border-[#808080] flex items-center justify-center text-black text-xs font-black cursor-pointer leading-none px-1 py-1 shadow-sm active:shadow-inner">□</div>
                    <div className="bg-[#c0c0c0] w-4 h-4 border-t border-l border-white border-b border-r border-[#808080] flex items-center justify-center text-black text-xs font-black cursor-pointer leading-none px-1 py-1 shadow-sm active:shadow-inner">x</div>
                </div>
            </header>

            {/* Fake Menu Bar */}
            <div className="bg-[#c0c0c0] px-2 py-1 text-xs flex gap-4 border-b border-gray-400 select-none">
                <span className="hover:bg-blue-900 hover:text-white px-1"><u>F</u>ile</span>
                <span className="hover:bg-blue-900 hover:text-white px-1"><u>E</u>dit</span>
                <span className="hover:bg-blue-900 hover:text-white px-1">Searc<u>h</u></span>
                <span className="hover:bg-blue-900 hover:text-white px-1"><u>H</u>elp</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white p-4 h-full overflow-y-auto cursor-text border-t-2 border-l-2 border-gray-600 border-b-2 border-r-2 border-gray-100 m-1">
                <div className={`${courier.className} text-sm sm:text-base leading-relaxed text-black`}>
                    <p className="mb-4">
                        Date: {entry.date}<br />
                        Author: {entry.authorId.replace('-', ' ')}
                    </p>

                    <p className="whitespace-pre-wrap">{entry.content}</p>

                    {entry.media && entry.media.length > 0 && (
                        <div className="mt-8 pt-4 border-t border-dashed border-gray-400">
                            <p className="mb-2 italic text-gray-600">-- Attached Imagery --</p>
                            {entry.media.map((img, idx) => (
                                <img key={idx} src={img} alt="Attached media" className="max-w-full h-auto border border-gray-400 shadow-sm p-1 bg-gray-100" />
                            ))}
                        </div>
                    )}

                    {/* Blinking Cursor */}
                    <span className="inline-block w-2.5 h-4 bg-black animate-pulse mt-2 align-middle"></span>
                </div>
            </div>
        </div>
    );
}