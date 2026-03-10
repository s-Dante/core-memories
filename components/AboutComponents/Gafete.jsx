"use client";

// components/AboutComponents/Gafete.jsx
import { useState, useEffect } from "react";
import Image from "next/image";
import QRCode from "react-qr-code";

const NoiseOverlay = () => (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06] mix-blend-overlay z-0 rounded-[20px]" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
);

const LogoWatermark = () => (
    <div
        className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay z-0"
        style={{
            backgroundImage: "url('/resources/svg/CM-Logo.svg')",
            backgroundSize: "160%",
            backgroundPosition: "center -20%",
            backgroundRepeat: "no-repeat",
            transform: "rotate(-10deg) scale(1.1)",
        }}
    >
    </div>
);

export default function Gafete({ crew }) {
    const isActive = crew.status === "Active";
    const [copied, setCopied] = useState(false);
    const [shareUrl, setShareUrl] = useState("");

    useEffect(() => {
        setShareUrl(`${window.location.origin}/about#${crew.name.toLowerCase().replace(/\s+/g, '-')}`);
    }, [crew.name]);

    const handleShare = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!shareUrl) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(shareUrl).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }).catch(() => fallbackCopyTextToClipboard(shareUrl));
        } else {
            fallbackCopyTextToClipboard(shareUrl);
        }
    };

    const fallbackCopyTextToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    };

    return (
        <article className="group relative w-[300px] h-[450px] [perspective:1200px] cursor-pointer">

            {/* Inner Flipper Container */}
            <div className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-[20px] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.05)]">

                {/* ---------------- FRONT FACE ---------------- */}
                <div className="absolute inset-0 backface-hidden [backface-visibility:hidden] bg-[#1a1a20] rounded-[20px] border border-white/[0.12] flex flex-col pt-9 pb-5 px-7 overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.7)]">

                    {/* Noise & Integrated Logo Background */}
                    <LogoWatermark />
                    <NoiseOverlay />

                    {/* Fun gradient orb background to give personality */}
                    <div className="absolute top-1/4 -right-1/4 w-40 h-40 bg-zinc-400/20 rounded-full blur-[50px] pointer-events-none mix-blend-screen"></div>

                    {/* Lanyard Hole - made distinctly like a hole punch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black/80 rounded-full z-20 shadow-[inset_0_4px_8px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.05)] border border-white/5"></div>

                    {/* Content Container (ensure Z-10 translates correctly to avoid click issues later) */}
                    <div className="flex flex-col h-[calc(100%-1rem)] z-10 w-full relative">

                        {/* Top Left: Profile Image */}
                        <div className="relative w-[110px] aspect-square mb-4 self-start group/img shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent rounded-xl translate-y-[2px] blur-sm"></div>
                            <div className="w-full h-full relative bg-[#121214] border border-white/5 rounded-xl p-1.5 shadow-lg overflow-hidden">
                                <div className="w-full h-full relative overflow-hidden rounded-lg grayscale group-hover/img:grayscale-0 transition-all duration-700 ease-out">
                                    <Image
                                        src={crew.image}
                                        alt={crew.name}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                                {/* Tech scanner effect */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none rounded-xl mix-blend-screen opacity-50"></div>
                            </div>
                            {/* Decorative corner brackets (tech element) */}
                            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-white/40"></div>
                            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-white/40"></div>
                        </div>

                        {/* Name (Left Aligned), elegant, modern font display with text-ellipsis for overflow */}
                        <div className="flex items-center gap-2 mb-2 w-full">
                            <h3 className="text-[20px] font-sans font-black tracking-widest uppercase text-white leading-none truncate flex-1 shrink drop-shadow-md">
                                {crew.name}
                            </h3>
                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse shrink-0"></div>}
                        </div>

                        {/* Details Grid (Username / Status) - Minimalist code lines */}
                        <div className="grid grid-cols-2 gap-3 text-[8.5px] font-mono mb-3 w-full shrink-0 drop-shadow-sm">
                            <div className="flex flex-col text-left overflow-hidden">
                                <div className="flex items-center gap-1 mb-1 opacity-50 truncate">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    <span className="uppercase tracking-[0.2em] text-white truncate">ALIAS</span>
                                </div>
                                <span className="text-zinc-200 font-medium truncate">@{crew.name.split(' ')[0].toLowerCase()}</span>
                            </div>
                            <div className="flex flex-col text-left border-l border-white/10 pl-3 overflow-hidden">
                                <div className="flex items-center gap-1 mb-1 opacity-50 truncate">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    <span className="uppercase tracking-[0.2em] text-white truncate">AUTH // SYS</span>
                                </div>
                                <span className={`${isActive ? "text-emerald-400 font-bold" : "text-zinc-400 font-bold"} truncate`}>
                                    {isActive ? 'GRANTED' : 'REVOKED'} <span className="text-zinc-500 font-normal ml-1 opacity-70">[{crew.status.substring(0, 3).toUpperCase()}]</span>
                                </span>
                            </div>
                        </div>

                        {/* Minimalist Divider */}
                        <div className="w-full relative py-1.5 shrink-0">
                            <div className="w-full h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent"></div>
                        </div>

                        {/* QR & Role (Left Aligned) */}
                        <div className="flex w-full items-center gap-4 mt-1.5 mb-3 shrink-0">
                            {/* Slightly larger QR code */}
                            <div className="w-[66px] h-[66px] bg-white/[0.04] p-1.5 rounded-xl border border-white/15 flex-shrink-0 flex items-center justify-center relative overflow-hidden group/qr">
                                {/* Soft glow effect behind QR */}
                                <div className="absolute inset-0 bg-white/10 blur-md opacity-0 group-hover/qr:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 opacity-90 transition-transform duration-300 group-hover/qr:scale-105">
                                    {shareUrl ? (
                                        <QRCode value={shareUrl} size={54} fgColor="#ffffff" bgColor="transparent" level="L" />
                                    ) : (
                                        <div className="w-[54px] h-[54px] bg-white/5 rounded-md"></div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 justify-center text-left overflow-hidden drop-shadow-md">
                                <span className="text-zinc-400 text-[6.5px] tracking-[0.3em] font-mono uppercase mb-1 flex items-center gap-1 shrink-0">
                                    <span className="w-1 h-px bg-zinc-400 shrink-0"></span>
                                    ASSIGNED ROLE
                                </span>
                                {/* Adjusted size and line-clamp to prevent overflow */}
                                <h2 className="text-[15px] font-black font-sans tracking-tight text-white uppercase leading-[1.1] break-words line-clamp-2">
                                    {crew.role}
                                </h2>
                            </div>
                        </div>

                        {/* Recent Projects (UI Pills) */}
                        <div className="w-full flex-grow flex flex-col justify-start min-h-[30px] overflow-hidden">
                            {crew.projects && crew.projects.length > 0 && (
                                <>
                                    <div className="w-full flex items-center gap-2 mb-2 shrink-0 opacity-80">
                                        <span className="text-zinc-300 text-[6.5px] tracking-[0.2em] font-mono uppercase drop-shadow-sm">RECENT ASSIGNMENTS</span>
                                        <div className="flex-1 h-px border-t border-dashed border-white/15"></div>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 overflow-hidden">
                                        {crew.projects.slice(0, 3).map((proj, idx) => (
                                            <span key={idx} className="flex items-center gap-1 md:gap-1.5 bg-black/50 text-zinc-200 text-[7px] md:text-[8px] font-mono px-2 py-1 md:px-2.5 md:py-1.5 rounded-full border border-white/10 uppercase shadow-[0_2px_4px_rgba(0,0,0,0.5)] truncate max-w-full backdrop-blur-sm">
                                                <span className="w-1 h-1 rounded-full bg-zinc-500 shrink-0"></span>
                                                <span className="truncate">{proj.replace('-', ' ')}</span>
                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Footer Logo Text */}
                        <div className="w-full mt-auto flex items-end justify-between pt-2 relative z-10 border-t border-white/10 shrink-0">
                            <div>
                                <h4 className="text-zinc-300 font-sans font-black text-[9px] tracking-[0.1em] uppercase flex items-center gap-1 opacity-80 drop-shadow-sm">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle></svg>
                                    COREMEMORIES
                                </h4>
                            </div>
                            <div className="text-right font-mono flex flex-col items-end">
                                <span className="text-[5.5px] text-zinc-400 uppercase tracking-widest leading-tight">AUTH_CODE</span>
                                <span className="text-[7.5px] text-zinc-300 font-bold tracking-widest">{crew.id.substring(0, 8).toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------- BACK FACE ---------------- */}
                <div className="absolute inset-0 backface-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1a1a20] rounded-[20px] border border-white/[0.12] flex flex-col p-7 overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.7)] group">

                    {/* Noise Texture & Logo Background */}
                    <LogoWatermark />
                    <NoiseOverlay />

                    {/* Lanyard Hole Mockup (Back) */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black/80 rounded-full z-20 shadow-[inset_0_4px_8px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.05)] border border-white/5"></div>

                    {/* 3D Translation Fix for inner clicks */}
                    <div className="pt-6 flex flex-col h-full z-10 w-full relative [transform:translateZ(1px)]">

                        <h3 className="text-white font-sans font-black tracking-widest text-sm uppercase mb-6 flex items-center gap-2 opacity-90 shrink-0 drop-shadow-md">
                            <span className="w-1.5 h-1.5 bg-zinc-300 rounded-sm"></span>
                            COMM CHANNELS
                            <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent ml-2"></div>
                        </h3>

                        <div className="flex flex-col gap-2.5 flex-grow mt-2 overflow-hidden pointer-events-auto">
                            {crew.socials && Object.keys(crew.socials).length > 0 ? (
                                Object.entries(crew.socials).map(([platform, link]) =>
                                    link ? (
                                        <a
                                            key={platform}
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="group/link flex items-center justify-between border border-white/10 bg-white/[0.03] rounded-xl px-4 py-3.5 hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300 shadow-sm backdrop-blur-sm shrink-0 cursor-pointer pointer-events-auto"
                                        >
                                            <span className="font-mono text-zinc-100 text-[10px] font-bold uppercase tracking-widest group-hover/link:text-white transition-colors truncate pr-2">
                                                {platform}
                                            </span>
                                            <span className="text-zinc-400 group-hover/link:text-white transition-all transform group-hover/link:translate-x-1 font-sans text-sm shrink-0">
                                                →
                                            </span>
                                        </a>
                                    ) : null
                                )
                            ) : (
                                <div className="h-full flex items-center justify-center">
                                    <div className="flex flex-col items-center opacity-40">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><path d="M12 2v20"></path><path d="m4.93 10.93 2.83 2.83"></path><path d="m2.1 13.76 2.83 2.83"></path><path d="m19.07 10.93-2.83 2.83"></path><path d="m21.9 13.76-2.83 2.83"></path></svg>
                                        <p className="font-mono text-[9px] uppercase tracking-widest text-center text-white">
                                            No active channels<br />in database.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Share / Copy Link Button */}
                        <div className="mt-auto pt-6 shrink-0 z-20 relative pointer-events-auto">
                            <button
                                onClick={handleShare}
                                className={`relative overflow-hidden w-full flex items-center justify-center gap-2 font-mono text-[10px] border font-bold uppercase tracking-widest py-3.5 px-4 rounded-xl transition-all duration-300 active:scale-95 shadow-lg drop-shadow-md cursor-pointer pointer-events-auto
                                ${copied ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-400' : 'bg-white/10 border-white/20 text-white hover:bg-white/15 hover:border-white/30 backdrop-blur-md group/btn'}`}
                            >
                                {copied ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="z-10"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        <span className="z-10">DOSSIER COPIED</span>
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="z-10"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                        <span className="z-10 flex items-center gap-2">SHARE DOSSIER <span className="opacity-40">|</span> LINK</span>
                                        {/* Hover glow effect for the ghost button */}
                                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}