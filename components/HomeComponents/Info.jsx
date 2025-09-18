import { varien, rubik } from "@/app/layout";
import "../HomeComponents/Home.css"

const sectionClasses = `
    
    text-zinc-200
    px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-20
    h-[100dvh]
    flex flex-col
    place-content-between
    bg-zinc-900
`;

const phraseClasses = `
    ${varien.className}
    uppercase tracking-tight
    text-4xl sm:text-6xl md:text-9xl lg:text-[9rem]
    leading-[0.95]
    sm:w-[100vw] md:w-[90vw] lg:w-[80vw]
    pt-20
`;

const checkClasses = `
    ${rubik.className}
    relative flex items-center gap-4 mt-[180px]
    text-2xl sm:text-4xl opacity-90
    uppercase font-bold
`;

const arrowClasses = `
    h-10 w-auto animate-bounce
    static flex items-center
`;


export default function Info() {
    return (
        <section className={sectionClasses}>
            <h2 className={phraseClasses}>
                An indie game studio out of this world
            </h2>

            <p className={checkClasses}>Check out our missions</p>
            <img
                src="/resources/svg/Arrow.svg"
                alt="Arrow pointing down"
                className={arrowClasses}
            />
        </section>
    );
}