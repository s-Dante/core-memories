import { homeImgs } from '@/config';
import { varela } from "@/app/layout";
import "../HomeComponents/Home.css"

const sectionClasses = `
    parallax
    relative isolate 
    min-h-[42rem] sm:min-h-[54rem] md:min-h-[68vh]
    bg-zinc-900 text-zinc-200 overflow-hidden
    h-[90dvh]
`;

const imgBgClasses = `
    parallax-bg
    absolute inset-0 w-full object-cover object-center
    pointer-events-none select-none
`;

const imgFgClasses = `
    parallax-fg
    opacity-95
    galaxia
    absoulte left-1/2 top1/2 -translate-x-1/2 -translate-y-1/2
    w-[115%] md:w-[105%] max-w-none
    pointer-events-none select-none
`;

const textClasses = `
    ${varela.className}
    parallax-text
    absolute right-6 md:right-12 bottom-10 md:bottom-16
    text-right uppercase tracking-tight leading-[0.9]
    drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
    text-[14vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw]
`;

const imgHelperBg = `
    parallax-foreground-back
    object-fill 
    z-8
    -rotate-2
`;

const imgHelperFg = `
    parallax-foreground-front    
    z-9
`;

const imgDust = `
    parallax-dust
    opacity-50
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

            {/* Imagen de cover tracera */}
            <img
                src={homeImgs.images[4].src}
                alt={homeImgs.images[4].alt}
                className={imgHelperBg}
            />

            {/* Imagen de cover frontal */}
            <img
                src={homeImgs.images[3].src}
                alt={homeImgs.images[3].alt}
                className={imgHelperFg}
            />

            {/* Imagen de cover tracera */}
            <img
                src={homeImgs.images[0].src}
                alt={homeImgs.images[0].alt}
                className={imgBgClasses}
                style={{ filter: "url(#warp)" }}
            />

            {/* Imagen de cover tracera */}
            <img
                src={homeImgs.images[2].src}
                alt={homeImgs.images[2].alt}
                className={imgDust}
            />

            {/* Imagen de galaxia*/}
            <img
                src={homeImgs.images[1].src}
                alt={homeImgs.images[1].alt}
                className={imgFgClasses}
            />

            <h2 className={textClasses}>
                Where<br />dreams<br />are made
            </h2>
        </section>
    );
}