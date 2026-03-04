import { varien, rubik } from "@/app/layout";
import "../HomeComponents/Home.css"

const sectionClasses = `
    text-zinc-200
    px-6 sm:px-10 lg:px-16 py-22 sm:py-14
    min-h-screen
    flex flex-col justify-between
    bg-zinc-900
`;

const phraseClasses = `
    ${varien.className}
    uppercase tracking-tight
    text-4xl sm:text-6xl md:text-7xl lg:text-[8rem]
    leading-none
    max-w-7xl
`;

const checkClasses = `
    ${rubik.className}
    text-2xl sm:text-4xl md:text-5xl opacity-90
    uppercase font-bold text-center sm:text-left
`;

const arrowContainerClasses = `
    flex flex-col items-center self-center sm:flex-row sm:self-start sm:items-center sm:gap-6 mt-12 sm:mt-0
`;

const arrowClasses = `
    h-8 sm:h-10 w-auto animate-bounce mt-4 sm:mt-0
`;


export default function Info() {
    return (
        <section className={sectionClasses}>
            <h2 className={phraseClasses}>
                An indie game studio out of this world
            </h2>

            <div className={arrowContainerClasses}>
                <p className={checkClasses}>Check out our missions</p>
                {/* ⚠️ RECUERDA: Este archivo SVG sigue vacío. Necesita contenido para mostrarse. */}
                <img
                    src="/resources/svg/Arrow.svg"
                    alt="Arrow pointing down"
                    className={arrowClasses}
                />
            </div>
        </section>
    );
}