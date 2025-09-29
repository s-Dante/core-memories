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
    text-6xl sm:text-7xl md:text-8xl lg:text-[9rem]
    leading-none
    max-w-7xl
`;

const checkClasses = `
    ${rubik.className}
    text-4xl sm:text-5xl opacity-90
    uppercase font-bold
`;

// --- INICIO DE CAMBIOS ---
const arrowContainerClasses = `
    flex flex-col items-center self-center // Por defecto (móvil): columna y centrado en el eje X
    sm:flex-row sm:self-start sm:items-center sm:gap-6 // En pantallas 'sm' y mayores: fila, alineado a la izquierda y con un espacio
`;
// --- FIN DE CAMBIOS ---

const arrowClasses = `
    h-10 w-auto animate-bounce
    mt-4 sm:mt-0 // Añadimos un margen superior solo en móvil
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