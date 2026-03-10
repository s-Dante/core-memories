// components/BlogsComponents/CSSFloppy.jsx

export default function CSSFloppy({ className = "", labelContent = null }) {
    return (
        <div className={`relative w-full h-full ${className}`}>
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 aspect-[8.9/9.3] w-[85%]">
                {/* Main Floppy Body */}
                <div className="absolute inset-0 bg-[#A6A49F] rounded-sm rounded-tr-xl shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),inset_1px_1px_2px_rgba(255,255,255,0.4)] border border-[#8C8A85]">
                    
                    {/* Metal Sliding Shutter */}
                    <div className="absolute top-0 left-[20%] w-[35%] h-[30%] bg-gradient-to-br from-[#d1d5db] via-[#9ca3af] to-[#6b7280] rounded-b-sm border-b border-x border-[#4b5563] shadow-sm">
                        {/* Shutter Detail/Indent */}
                        <div className="absolute top-[10%] left-[60%] w-[20%] h-[70%] bg-[#374151] rounded-sm shadow-inner opacity-80"></div>
                        <div className="absolute top-[10%] left-[20%] w-[5%] h-[70%] bg-[#222] opacity-20 rounded-sm"></div>
                    </div>

                    {/* Write Protect Notch */}
                    <div className="absolute bottom-[5%] left-[5%] w-[8%] h-[8%] bg-black rounded-sm shadow-inner flex items-center justify-center">
                        <div className="w-[80%] h-[80%] bg-[#A6A49F] opacity-0 hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Bottom Indent Arrow Area */}
                    <div className="absolute bottom-[5%] right-[5%] w-[10%] h-[5%] border-t border-[#8C8A85] flex justify-center mt-[-2%]">
                        <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-[#8C8A85] mt-1"></div>
                    </div>

                    {/* Paper Label Sticker */}
                    <div className="absolute top-[35%] left-[10%] right-[10%] bottom-[10%] bg-[#F0EFEB] rounded-sm shadow-sm border border-[#E0DFDB] flex flex-col items-center">
                        {/* Label Colored Header */}
                        <div className="w-full h-[25%] bg-[#4F5D75] rounded-t-sm relative border-b border-[#3b475c]">
                            {/* Lines on sticker */}
                            <div className="absolute inset-x-2 bottom-1 border-b border-white/20 h-px"></div>
                        </div>
                        {/* Label Content Area */}
                        {labelContent ? (
                            <div className="flex-1 w-full p-2 overflow-hidden relative">
                                {labelContent}
                            </div>
                        ) : (
                            <div className="flex-1 w-full p-2 flex flex-col gap-1 justify-center opacity-40">
                                <div className="w-full h-1 bg-[#A6A49F] rounded-full"></div>
                                <div className="w-[80%] h-1 bg-[#A6A49F] rounded-full"></div>
                                <div className="w-[90%] h-1 bg-[#A6A49F] rounded-full"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
