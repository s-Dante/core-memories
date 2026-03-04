import React from 'react';
import Image from 'next/image';

const GameFile = ({ game }) => {
    return (
        <div className="w-full max-w-4xl mx-auto relative mt-20 mb-20">

            {/* Background Folder Tab */}
            <div className="absolute -top-12 left-0 w-64 h-16 bg-[#e1c699] rounded-t-xl border-t-2 border-l-2 border-r-2 border-amber-800/20 shadow-[inset_0_4px_6px_rgba(0,0,0,0.1)] -z-10" />
            <div className="absolute -top-8 left-6 text-amber-900/60 font-mono text-xl font-bold tracking-widest uppercase rotate-[-2deg]">
                FILE: {game.id.substring(0, 8)}
            </div>

            {/* Main Manila Folder */}
            <div className="bg-[#e1c699] p-8 md:p-12 rounded-b-xl rounded-tr-xl shadow-2xl relative border-2 border-amber-800/20 w-full overflow-hidden">

                {/* Grime/Texture Overlay (Optional CSS approach) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('/resources/textures/noise.png')]"></div>

                {/* Top Secret Stamp */}
                <div className="absolute top-8 right-8 text-red-700/80 border-4 border-red-700/80 font-bold text-4xl uppercase p-2 tracking-widest rotate-[15deg] select-none shadow-sm font-serif">
                    TOP SECRET
                </div>

                {/* Paper Content Wrapper */}
                <div className="bg-[#f4f1ea] w-full min-h-[600px] mt-8 p-10 shadow-md relative font-mono text-gray-800 leading-relaxed max-w-3xl mx-auto">

                    {/* Paper lines overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_95%,rgba(0,0,0,0.05)_100%)] bg-[length:100%_2rem]"></div>

                    <div className="relative z-10 space-y-8">
                        {/* Header section */}
                        <div className="border-b-2 border-gray-400 pb-4 mb-8">
                            <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter">
                                SUBJECT: <span className="font-sans font-black">{game.title}</span>
                            </h1>
                            <div className="grid grid-cols-2 gap-4 text-sm font-bold">
                                <p>STATUS: <span className="text-red-600 bg-red-100 px-2 py-1">{game.status}</span></p>
                                <p>ETA: {game.releaseDate}</p>
                                <p>ENGINE: {game.engine}</p>
                                <p>GENRE: {game.genre.join(', ')}</p>
                            </div>
                        </div>

                        {/* Polaroid Cover Image */}
                        <div className="float-right ml-6 mb-6 w-64 bg-white p-3 pb-12 shadow-lg rotate-[-3deg] relative z-20 transition-transform hover:scale-105 hover:rotate-0 duration-300">
                            <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                                <Image
                                    src={game.coverImage}
                                    alt={game.title}
                                    fill
                                    className="object-cover"
                                    unoptimized // Removing optimization for local dummy data unless images exist
                                />
                            </div>
                            <p className="absolute bottom-4 left-0 w-full text-center font-handwriting text-gray-700 text-xl font-bold">Exhibit A</p>
                            {/* Tape */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/50 border border-white/20 shadow-sm rotate-[-5deg] mix-blend-overlay"></div>
                        </div>

                        {/* Description Body */}
                        <div>
                            <h2 className="text-xl font-bold border-b border-gray-400 inline-block mb-3">OVERVIEW LOG</h2>
                            <p className="whitespace-pre-wrap">{game.description}</p>
                        </div>

                        {/* Key Features (Redacted style optionally) */}
                        <div className="clear-both pt-4">
                            <h2 className="text-xl font-bold border-b border-gray-400 inline-block mb-3">KNOWN CAPABILITIES</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                {game.features.map((feature, idx) => (
                                    <li key={idx} className="relative group">
                                        {/* Try hovering over the redacted text! */}
                                        <span className="bg-black text-black group-hover:bg-transparent group-hover:text-inherit transition-colors duration-300 select-none group-hover:select-auto cursor-help px-1 -mx-1">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Assigned Operatives */}
                        <div className="pt-8">
                            <h2 className="text-xl font-bold border-b border-gray-400 inline-block mb-3">ASSIGNED OPERATIVES</h2>
                            <div className="flex flex-wrap gap-2">
                                {game.team.map((member, idx) => (
                                    <span key={idx} className="bg-gray-200 px-3 py-1 font-bold font-sans uppercase text-sm border border-gray-400">
                                        {member.replace('-', ' ')}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameFile;