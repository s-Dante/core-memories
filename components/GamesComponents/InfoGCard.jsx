// components/GamesComponents/InfoGCard.jsx
import Link from 'next/link';
import Image from 'next/image';
import { Folder } from "@/components";

export default function InfoGCard({ game, id }) {
    // Generate the path to the details page
    const detailsPath = `/games/${game.id}`;

    return (
        <article id={id} className="w-full py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative max-w-6xl mx-auto px-4 group/row">

                {/* Visual Representation (Global Minimalist Folder) */}
                <div className="w-full md:w-5/12 flex justify-center md:items-center relative">
                    <Folder
                        title="" // Intentionally blank as requested
                        href={detailsPath}
                        className="w-full max-w-[360px]"
                        flapContent={
                            <div className="absolute bottom-6 right-6 text-red-600 border-4 border-red-600 font-black text-xl sm:text-2xl uppercase px-2 py-0.5 tracking-widest rotate-[10deg] mix-blend-screen opacity-90 pointer-events-none drop-shadow-[0_2px_5px_rgba(220,38,38,0.7)] z-20 transition-transform duration-500 group-hover:scale-105 font-serif">
                                TOP SECRET
                            </div>
                        }
                    >
                        {/* The Game Image popping out - Reduced size */}
                        <div className="w-[70%] aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-white/10 mx-auto bg-[#1a1a1a] relative rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500">
                            <Image src={game.coverImage} alt={game.title} fill className="object-cover" unoptimized />
                        </div>
                    </Folder>
                </div>

                {/* Text Content next to dossier - Clean, Minimalist */}
                <div className="w-full md:w-5/12 flex flex-col items-center md:items-start text-center md:text-left text-white mt-8 md:mt-0">

                    {/* Status Tag */}
                    <div className="mb-4">
                        <span className="inline-block border border-gray-600 bg-gray-900/50 text-gray-300 font-mono text-[10px] uppercase px-3 py-1 tracking-[0.2em] rounded-full">
                            Project Status: <span className={game.status === 'Released' ? 'text-green-400 font-bold' : 'text-amber-400 font-bold'}>{game.status}</span>
                        </span>
                    </div>

                    {/* Title */}
                    <Link href={detailsPath} className="hover:text-gray-300 transition-colors">
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter mb-6 leading-[0.9]">
                            {game.title}
                        </h2>
                    </Link>

                    {/* Fun minimalistic description */}
                    <p className="text-gray-400 font-sans text-base max-w-sm mb-10 leading-relaxed md:group-even:text-right">
                        {game.shortDescription}
                    </p>

                    {/* Simple minimalist button */}
                    <Link
                        href={detailsPath}
                        className="group/btn inline-flex items-center gap-2 font-bold tracking-widest uppercase text-white font-mono text-sm hover:text-gray-300 transition-colors duration-300"
                    >
                        OPEN FILE
                        <span className="text-lg leading-none transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                    </Link>
                </div>

            </div>
        </article>
    );
}