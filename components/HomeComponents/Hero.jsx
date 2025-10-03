// components/HomeComponents/Hero.jsx
import { homeImgs } from '@/config';
import { varela } from "@/app/layout";
import "../HomeComponents/Home.css"

const sectionClasses = `
    relative isolate 
    min-h-[100dvh] 
    bg-zinc-900 text-zinc-200 
    flex items-center justify-center // Usamos flex para centrar el contenido como base
    overflow-hidden
`;

const imgBgClasses = `
    absolute inset-0 w-full h-full object-cover // Aseguramos que cubra todo el contenedor
    pointer-events-none select-none
    -z-30
`;

const imgFgClasses = `
    absolute
    w-lg max-w-xk
    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    opacity-95
    pointer-events-none select-none
    z-10
`;

const textClasses = `
    ${varela.className}
    absolute z-20
    px-6 md:px-12
    w-full top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-16 md:bottom-2/6
    text-right uppercase tracking-tight leading-[0.9]
    drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
    text-6xl sm:text-7xl md:text-8xl lg:text-7xl
`;

const imgDust = `
    absolute inset-0 w-full h-full
    opacity-50
    object-cover
`;


export default function Hero() {
    return (
        <section className={sectionClasses}>
            <svg className="absolute -z-30 w-0 h-0" aria-hidden="true" focusable="false">
                <filter id="warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="2" result="noise">
                        <animate attributeName="baseFrequency" values="0.008;0.005;0.008" dur="20s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G">
                        <animate attributeName="scale" values="8;11;8" dur="20s" repeatCount="indefinite" />
                    </feDisplacementMap>
                </filter>
            </svg>

            {/* Imagen de fondo */}
            <img
                src={homeImgs.images[0].src}
                alt={homeImgs.images[0].alt}
                className={imgBgClasses}
                style={{ filter: "url(#warp)" }}
            />

            {/* Polvo estelar */}
            <img
                src={homeImgs.images[2].src}
                alt={homeImgs.images[2].alt}
                className={imgDust}
            />

            {/* Galaxia (Foreground) */}
            <img
                src={homeImgs.images[1].src}
                alt={homeImgs.images[1].alt}
                className={imgFgClasses}
            />

            {/* Texto */}
            <h2 className={textClasses}>
                Where<br />dreams<br />are made
            </h2>
        </section>
    );
}