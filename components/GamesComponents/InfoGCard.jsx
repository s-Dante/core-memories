// components/GamesComponents/InfoGCard.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function InfoGCard({ game, id }) {
    // Generate the path to the details page
    const detailsPath = `/games/${game.id}`;

    return (
        <article id={id} className="w-full py-8 md:py-16 group">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">

                {/* Visual Representation (Dossier Preview) */}
                <div className="w-full md:w-1/2 flex justify-center md:group-even:order-last">
                    <Link href={detailsPath} className="block relative w-full max-w-[400px] aspect-[4/3] group/folder transition-transform duration-500 hover:scale-105">
                        {/* Background File Tab */}
                        <div className="absolute top-0 left-4 w-32 h-10 bg-[#cca876] rounded-t-lg border-2 border-amber-900/40 border-b-0 shadow-inner rotate-[-3deg] z-0 -mt-8 flex items-end pb-1 px-3">
                            <span className="font-mono text-xs font-bold text-amber-950/80">ID: {game.id.substring(0, 6).toUpperCase()}</span>
                        </div>

                        {/* Main Folder Body */}
                        <div className="absolute inset-0 bg-[#e1c699] rounded-xl border-2 border-amber-900/30 shadow-xl overflow-hidden z-10 flex p-4 pb-6 transition-all duration-300 group-hover/folder:bg-[#e6ceb1]">
                            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply bg-[url('/resources/textures/noise.png')]"></div>

                            {/* Pinned Photo inside preview */}
                            <div className="w-1/2 h-full bg-white p-2 shadow-md rotate-[-2deg] relative">
                                <div className="w-full h-full bg-gray-300 relative overflow-hidden">
                                    <Image src={game.coverImage} alt={game.title} fill className="object-cover" unoptimized />
                                </div>
                                {/* Tape */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/60 border border-white/20 shadow-sm rotate-3 mix-blend-overlay"></div>
                            </div>

                            {/* Preview Text inside folder */}
                            <div className="w-1/2 pl-4 flex flex-col justify-center">
                                <div className="border-b-2 border-red-800/20 mb-2 pb-1">
                                    <span className="text-red-700/80 font-bold font-serif text-sm tracking-widest uppercase block">Classified</span>
                                </div>
                                <span className="font-mono text-xs text-amber-900/70 line-clamp-6 leading-relaxed">
                                    {game.shortDescription}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Text Content next to dossier */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:group-even:items-end text-center md:text-left text-white">
                    <div className="mb-2">
                        <span className="bg-red-600 font-bold text-xs uppercase px-2 py-1 tracking-wider">{game.status}</span>
                    </div>

                    <Link href={detailsPath} className="hover:text-amber-500 transition-colors">
                        <h2 className="text-4xl md:text-5xl font-sans font-black uppercase tracking-tighter mb-4">
                            {game.title}
                        </h2>
                    </Link>

                    <p className="text-zinc-400 font-mono text-sm max-w-md mb-6 md:group-even:text-right">
                        {game.shortDescription}
                    </p>

                    <Link
                        href={detailsPath}
                        className="font-mono font-bold tracking-widest uppercase border-b-2 border-red-600 pb-1 hover:text-red-500 hover:border-red-500 transition-colors inline-block"
                    >
                        Access File {'>'}
                    </Link>
                </div>

            </div>
        </article>
    );
}