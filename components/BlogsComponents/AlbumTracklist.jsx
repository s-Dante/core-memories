"use client";

import { useState } from "react";
import { courier } from "@/app/layout";

export default function AlbumTracklist({ entry }) {
    const tracks = entry.tracks || [];
    const [activeTrack, setActiveTrack] = useState(tracks.length > 0 ? tracks[0] : null);

    return (
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
            {/* Video Player Section */}
            <div className="w-full aspect-video bg-[#050505] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
                {activeTrack ? (
                    <iframe
                        className="w-full h-full absolute inset-0"
                        src={activeTrack.videoUrl}
                        title={activeTrack.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-600 font-mono text-sm">
                        NO SIGNAL // NO TRACK SELECTED
                    </div>
                )}
                {/* Subtle reflection overlay on player */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
            </div>

            {/* CD Back Cover / Playlist Section */}
            <div className="w-full bg-[#111111] border border-[#222] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col p-6 sm:p-10 mb-20 group cursor-default">
                {/* CD Case Plastic Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white-[0.03] to-white-[0.01] pointer-events-none mix-blend-screen z-20"></div>

                <div className="relative z-10 flex flex-col gap-6">
                    {/* Header: Artist / Title mapping to Game / Album */}
                    <div className="border-b border-zinc-800 pb-4 flex justify-between items-end">
                        <div className="flex flex-col">
                            <h2 className={`${courier.className} text-xl sm:text-3xl font-bold text-zinc-200 tracking-tighter uppercase`}>
                                {entry.title}
                            </h2>
                            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-1">RECORDED: {entry.date}</p>
                        </div>
                        {/* Fake Compact Disc Logo */}
                        <div className="hidden sm:flex flex-col items-center opacity-40">
                            <div className="w-12 h-6 border-2 border-zinc-400 rounded-full flex items-center justify-center">
                                <span className="font-black text-[10px] tracking-tighter">CD</span>
                            </div>
                            <span className="text-[6px] tracking-widest font-sans mt-0.5">DIGITAL MEDIA</span>
                        </div>
                    </div>

                    {/* Tracklist */}
                    <div className="flex flex-col gap-2 font-mono text-sm pt-4 pb-8 min-h-[200px]">
                        {tracks.map((track, index) => {
                            const isPlaying = activeTrack?.id === track.id;
                            
                            return (
                                <button
                                    key={track.id}
                                    onClick={() => setActiveTrack(track)}
                                    className={`flex items-center gap-4 px-4 py-3 rounded text-left transition-all duration-300 relative group/track
                                        ${isPlaying ? 'bg-zinc-800 border-l-2 border-red-500 shadow-inner text-white' : 'hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-200'}
                                    `}
                                >
                                    <span className={`w-6 text-right font-bold transition-colors ${isPlaying ? 'text-red-500' : 'text-zinc-600 group-hover/track:text-zinc-400'}`}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    
                                    <span className="flex-1 font-sans text-base tracking-wide truncate">
                                        {track.title}
                                    </span>
                                    
                                    {/* Dotted Leader Line (Responsive only) */}
                                    <div className="hidden sm:block flex-1 border-b border-dotted border-zinc-700 mx-4 opacity-50"></div>
                                    
                                    <span className={`font-mono text-xs ${isPlaying ? 'text-zinc-300' : 'text-zinc-500'}`}>
                                        {track.duration}
                                    </span>

                                    {/* Playing Indicator */}
                                    {isPlaying && (
                                        <div className="absolute left-[-2px] inset-y-0 w-0.5 bg-red-500 shadow-[0_0_10px_red]"></div>
                                    )}
                                </button>
                            );
                        })}

                        {tracks.length === 0 && (
                            <div className="text-center py-10 text-zinc-600">
                                NO AUDIO TRACKS FOUND.
                            </div>
                        )}
                    </div>

                    {/* Footer / Barcode */}
                    <div className="border-t border-zinc-800 pt-6 flex justify-between items-center opacity-50">
                        <div className="font-mono text-[8px] sm:text-[10px] text-zinc-500 uppercase flex flex-col gap-1 w-1/2">
                            <span>PRODUCED FOR INTERNAL USE ONLY.</span>
                            <span>UNAUTHORIZED DUPLICATION IS A VIOLATION OF APPLICABLE LAWS.</span>
                            <span>{entry.gameId} // {(entry.summary || "").substring(0, 30)}...</span>
                        </div>
                        {/* Fake Barcode using CSS borders */}
                        <div className="flex h-10 gap-[2px] opacity-70">
                            <div className="w-1 bg-white h-full"></div>
                            <div className="w-0.5 bg-white h-full relative -top-1"></div>
                            <div className="w-2 bg-white h-full relative"></div>
                            <div className="w-0.5 bg-white h-full"></div>
                            <div className="w-3 bg-white h-full relative -top-2"></div>
                            <div className="w-1 bg-white h-full relative -bottom-1"></div>
                            <div className="w-0.5 bg-white h-full"></div>
                            <div className="w-1 bg-white h-full relative"></div>
                            <div className="w-1.5 bg-white h-full relative -bottom-1"></div>
                            <div className="w-0.5 bg-white h-full"></div>
                            <div className="w-2 bg-white h-full relative -top-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}