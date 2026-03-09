// components/GeneralComponents/Folder.jsx
import Link from 'next/link';

export default function Folder({ title, href, children, flapContent, className = "" }) {
    const Wrapper = href ? Link : 'div';
    const wrapperProps = href ? { href } : {};

    return (
        <Wrapper {...wrapperProps} className={`group block relative aspect-[4/3] drop-shadow-2xl hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-500 hover:-translate-y-3 ${className}`}>

            {/* The Back Tab */}
            <div className="absolute top-0 left-0 w-[42%] h-[16%] bg-gradient-to-b from-[#404040] to-[#2d2d2d] rounded-tl-xl rounded-tr-sm [clip-path:polygon(0_0,82%_0,100%_100%,0_100%)] border-t border-l border-white/20 transition-colors duration-500"></div>

            {/* The Back Main Body */}
            <div className="absolute top-[15%] left-0 right-0 bottom-0 bg-gradient-to-b from-[#333333] to-[#222222] rounded-tr-2xl rounded-b-xl border-t border-r border-white/10 shadow-inner transition-colors duration-500"></div>

            {/* Content (Inside the folder, allowed to pop OUT now) */}
            {/* Removed overflow-hidden so children can spill over the top border when hovering */}
            <div className="absolute top-[15%] left-[5%] right-[5%] bottom-[8%] z-10 flex text-center items-end justify-center pointer-events-none">
                <div className="w-full h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] transform translate-y-[10%] group-hover:-translate-y-[25%] group-hover:scale-105 flex items-end justify-center">
                    {children}
                </div>
            </div>

            {/* Folder Front Flap */}
            <div className="absolute top-[25%] left-0 right-0 bottom-0 bg-gradient-to-br from-[#1c1c1c] via-[#111111] to-[#0a0a0a] rounded-2xl shadow-[0_-8px_25px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] z-20 flex flex-col justify-end p-5 sm:p-7 pb-6 sm:pb-8 border border-white/10 transition-colors duration-500">
                <h3
                    className="text-white/90 font-sans font-bold text-xl sm:text-3xl lg:text-4xl leading-tight tracking-tight break-words drop-shadow-md z-10 relative"
                    dangerouslySetInnerHTML={{ __html: title }}
                ></h3>
                {flapContent}
            </div>

        </Wrapper>
    );
}
