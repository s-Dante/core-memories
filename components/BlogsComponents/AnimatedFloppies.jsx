// components/BlogsComponents/AnimatedFloppies.jsx
import CSSFloppy from "./CSSFloppy";

export default function AnimatedFloppies() {
    return (
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
            {/* Left Floppy */}
            <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom-left group-hover:-translate-x-6 sm:group-hover:-translate-x-8 group-hover:-translate-y-2 group-hover:-rotate-12 z-10">
                <CSSFloppy className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]" />
            </div>

            {/* Right Floppy */}
            <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom-right group-hover:translate-x-6 sm:group-hover:translate-x-8 group-hover:-translate-y-1 group-hover:rotate-12 z-20">
                <CSSFloppy className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]" />
            </div>

            {/* Center Floppy */}
            <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom group-hover:-translate-y-6 sm:group-hover:-translate-y-8 z-30">
                <CSSFloppy className="drop-shadow-[0_8px_12px_rgba(0,0,0,0.6)]" />
            </div>
        </div>
    );
}
