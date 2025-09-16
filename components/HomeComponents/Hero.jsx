import { homeImgs } from '@/config';
import { varela } from "@/app/layout";
import "../HomeComponents/Home.css"

const sectionClasses = `
    parallax
`;

const imgBgClasses = `
    parallax-bg
`;

const imgFgClasses = `
    parallax-fg
    object-cover
    h-30
`;

const textClasses = `
    ${varela.className}
    parallax-text
    text-7xl
    uppercase
    text-right
    px-15
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

            <img
                src={homeImgs.images[0].src}
                alt={homeImgs.images[0].alt}
                className={imgBgClasses}           // .parallax-bg compone el tamaño + bleed
                style={{ filter: "url(#warp)" }}
            />

            <img
                src={homeImgs.images[1].src}
                alt={homeImgs.images[1].alt}
                className={imgFgClasses}           // SIN -rotate-30 aquí
            />

            <h2 className={textClasses}>
                Where<br />dreams<br />are made
            </h2>
        </section>
    );
}