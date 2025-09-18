import { varien, rubik } from "@/app/layout";
import "../HomeComponents/Home.css"

const sectionClasses = `
    other-content
    bg-zinc-900 text-zinc-200
    px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-20
    h-[100dvh]
    flex flex-col
    place-content-between
`;

const phraseClasses = `
    ${varien.className}
    uppercase tracking-tight
    text-4xl sm:text-6xl lg:text-9xl
    leading-[0.95]
    w-[80vw]
    pt-20
`;

const checkClasses = `
    ${rubik.className}
    mt-8 text-2xl sm:text-4xl opacity-90
    uppercase text-bold
`;

const arrowClasses = `
    mt-2 h-11 w-auto
    animate-bounce
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