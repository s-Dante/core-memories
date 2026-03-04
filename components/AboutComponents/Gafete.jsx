// components/AboutComponents/Gafete.jsx
import Link from "next/link";
import Image from "next/image";

export default function Gafete({ crew }) {
    const isActive = crew.status === "Active";

    return (
        <article className="group relative w-[300px] h-[450px] transition-transform duration-300 hover:scale-105 hover:-translate-y-2">

            {/* Lanyard Hole Mockup */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-zinc-900 border-2 border-white/20 rounded-[100%] z-20 shadow-inner flex items-center justify-center">
                <div className="w-10 h-2 bg-black rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"></div>
            </div>

            {/* Badge Body */}
            <div className={`
                absolute inset-0 pt-8 pb-4 px-6 rounded-xl flex flex-col items-center
                border-2 shadow-2xl overflow-hidden
                ${isActive ? 'bg-zinc-100 border-zinc-300/80 shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'bg-zinc-300 border-zinc-400 grayscale opacity-80'}
            `}>

                {/* Subtle Background Texture */}
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('/resources/textures/noise.png')] z-0"></div>

                {/* Header (Company Name / Top Banner) */}
                <div className="absolute top-0 left-0 w-full h-16 bg-red-700 font-sans font-black flex items-end justify-center pb-2 z-10 text-white tracking-widest text-xl shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                    CORE MEMORIES
                </div>

                {/* Profile Picture */}
                <div className="relative w-32 h-32 mt-12 mb-4 z-10 bg-white p-1 border border-zinc-300 shadow-md">
                    <div className="w-full h-full relative overflow-hidden">
                        <Image
                            src={crew.image}
                            alt={crew.name}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                </div>

                {/* User Info */}
                <div className="w-full text-center z-10 relative">
                    <h3 className={`text-2xl font-bold font-sans uppercase ${isActive ? 'text-zinc-900' : 'text-zinc-600'}`}>
                        {crew.name}
                    </h3>
                    <div className="w-full h-px bg-zinc-400 my-2"></div>
                    <p className={`font-mono font-bold text-sm h-10 flex items-center justify-center ${isActive ? 'text-red-700' : 'text-zinc-500'}`}>
                        {crew.role}
                    </p>
                </div>

                {/* ID & Status */}
                <div className="w-full mb-auto mt-4 z-10 grid grid-cols-2 gap-2 text-xs font-mono font-bold text-zinc-500">
                    <div className="text-left">
                        <span className="block text-[10px] text-zinc-400">ID NO.</span>
                        {crew.id.substring(0, 8).toUpperCase()}
                    </div>
                    <div className="text-right">
                        <span className="block text-[10px] text-zinc-400">STATUS</span>
                        <span className={isActive ? "text-green-600" : "text-zinc-500"}>{crew.status}</span>
                    </div>
                </div>

                {/* assigned projects */}
                {crew.projects && crew.projects.length > 0 && (
                    <div className="w-full mt-2 mb-4 z-10">
                        <span className="block text-[10px] font-bold font-mono text-zinc-400 border-b border-zinc-300 mb-1">CLEARANCE GRANTS</span>
                        <div className="flex flex-wrap gap-1">
                            {crew.projects.map(proj => (
                                <span key={proj} className="text-[9px] font-mono bg-zinc-200 text-zinc-700 px-1 border border-zinc-300">
                                    {proj.replace('-', ' ').toUpperCase()}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Barcode Footer */}
                <div className="w-full mt-auto mb-2 text-center z-10 overflow-hidden">
                    <div className="font-[barcode] text-5xl tracking-[-4px] text-zinc-800 opacity-60 pointer-events-none select-none" style={{ fontFamily: 'Libre Barcode 39, var(--font-courier), monospace' }}>
                        *{crew.id.substring(0, 10)}*
                    </div>
                </div>

                {/* Social links hovering overlay */}
                <div className="absolute inset-0 bg-red-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                    <div className="flex flex-col gap-3 w-48 font-mono">
                        <p className="text-white text-center text-sm mb-2 border-b border-red-500/50 pb-2">COMM CHANNELS</p>
                        {crew.socials && Object.keys(crew.socials).length > 0 ? (
                            Object.entries(crew.socials).map(([platform, link]) =>
                                link ? (
                                    <Link key={platform} href={link} className="bg-black/40 hover:bg-black/80 text-white text-center py-2 text-sm uppercase tracking-widest border border-red-500/30 transition-colors">
                                        {platform}
                                    </Link>
                                ) : null
                            )
                        ) : (
                            <p className="text-red-300/60 text-center text-xs">NO CHANNELS AVALIABLE</p>
                        )}
                    </div>
                </div>

            </div>
        </article>
    );
}