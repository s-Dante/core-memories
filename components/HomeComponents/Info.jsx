import { varien, varela } from "@/app/layout";
import "../HomeComponents/Home.css"

const sectionClasses = `
    bg-red-400
    z-30
    parallax
`;

const phraseClasses = `
    ${varien.clasName}
`;

const checkClasses = `
    z-11
`;

const arrowClasses = `
    h-10
    animate-bounce
    z-12
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