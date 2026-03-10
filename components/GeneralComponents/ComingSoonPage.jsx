import { FollowUs } from '@/components';
import Image from 'next/image';

export default function ComingSoonPage({ imageUrl, imageAlt, message }) {
    return (
        <article className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0c0c0e] py-20">
            {/* Custom Animation Keyframes */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes slow-float {
                    0%, 100% { transform: translateY(0px) rotate(-1deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                }
                .animate-slow-float {
                    animation: slow-float 6s ease-in-out infinite;
                }
            `}} />

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Heavy Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: "url('/resources/textures/noise.png')", backgroundRepeat: "repeat", backgroundSize: "150px 150px" }}></div>

                {/* Tech grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]"></div>

                {/* Glowing ambient orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-10 md:mt-0 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

                {/* Left: Image Section with slow float animation */}
                <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-square flex-shrink-0 group [perspective:1000px]">
                    {/* Pulsing ring behind image */}
                    <div className="absolute inset-10 bg-amber-500/5 rounded-full blur-[60px] group-hover:bg-amber-400/20 transition-colors duration-1000"></div>

                    {/* Floater container */}
                    <div className="relative w-full h-full animate-slow-float drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-700">
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            className="absolute inset-0 w-full h-full object-contain"
                            fetchPriority="high"
                            decoding="async"
                            loading="eager"
                        />
                    </div>
                </div>

                {/* Right: Content Section */}
                <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse"></span>
                        <span className="text-zinc-300 font-mono text-[9px] uppercase tracking-[0.3em] font-bold">System Status // Offline</span>
                    </div>

                    {/* Main Message */}
                    <h2 className="text-3xl md:text-4xl text-white font-sans font-black tracking-tight mb-5 drop-shadow-md">
                        MISSION <span className="text-zinc-600">PAUSED</span>
                    </h2>

                    <p className="text-base md:text-lg text-zinc-400 font-sans leading-relaxed mb-10 text-balance border-l-2 border-white/10 pl-5">
                        {message}
                    </p>

                    {/* Follow Us / Action Area */}
                    <div className="w-full flex flex-col items-center md:items-start">
                        <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase mb-4 flex items-center gap-3">
                            <span className="w-8 h-px bg-zinc-700 hidden md:block"></span>
                            Monitor Comms
                            <span className="w-8 h-px bg-zinc-700"></span>
                        </span>
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 md:p-5 backdrop-blur-md shadow-lg w-full md:w-auto hover:bg-white/[0.04] transition-colors duration-300">
                            <FollowUs />
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}