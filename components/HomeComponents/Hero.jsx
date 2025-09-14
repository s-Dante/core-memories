// components/home/Hero.jsx
import { varela } from "@/app/layout"; // usamos su className

export default function Hero() {
    return (
        <section
            aria-labelledby="hero-heading"
            role="banner"
            className="relative min-h-screen grid place-items-center pt-5" // espacio por header fijo
        >
            <svg className="absolute -z-30 w-0 h-0" aria-hidden="true" focusable="false">
                <filter id="warp">

                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="2" result="noise">
                        <animate attributeName="baseFrequency" values="0.008;0.005;0.008" dur="20s" repeatCount="indefinite" />
                    </feTurbulence>

                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G">
                        <animate attributeName="scale" values="11;22;11" dur="20s" repeatCount="indefinite" />
                    </feDisplacementMap>
                </filter>
            </svg>

            {/* Fondo estrellas (fijo a viewport) */}
            <img
                src="/resources/imgs/HomeImgs/hero-bg.png"
                alt=""
                aria-hidden="true"
                style={{ filter: "url(#warp)" }} 
                className="pointer-events-none fixed inset-0 -z-20 h-full w-full object-cover object-center"
            />

            {/* Overlay para contraste */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-black/30" />

            {/* Contenido */}
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 md:grid-cols-2">
                {/* Galaxia (izquierda) */}
                <figure className="order-2 md:order-1 md:justify-self-start">
                    <img
                        src="/resources/imgs/HomeImgs/hero-fg2.png"
                        alt="Ilustración principal de Core Memories"
                        className="w-[18rem] md:w-[34rem] drop-shadow-2xl"
                    />
                </figure>

                {/* Texto (derecha) */}
                <header className={`order-1 md:order-2 md:justify-self-end text-right ${varela.className}`}>
                    <h1
                        id="hero-heading"
                        className="text-4xl leading-tight sm:text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-[.08em]"
                    >
                        Where<br />Dreams<br />Are Made
                    </h1>
                    {/* Si quieres subtítulo, descomenta: */}
                    {/* <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90">
            Un estudio indie fuera de este mundo.
          </p> */}
                </header>
            </div>
        </section>
    );
}
