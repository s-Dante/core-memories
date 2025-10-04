import { rubik, varela } from "@/app/layout";

const mainContainerClasses = `
    flex-grow 
    bg-[#0d0d0f]
    bg-[url('/resources/textures/noise.png')] bg-repeat bg-[length:300px_300px]
    text-neutral-300
    px-6 py-24 sm:py-32
`;

const wrapperClasses = `
    max-w-4xl mx-auto
`;

const titleClasses = `
    ${rubik.className}
    text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white 
    mb-12 border-b-2 border-indigo-500/30 pb-4
`;

// Clases para el contenido (párrafos, listas, etc.)
// Usamos selectores para aplicar estilos a los hijos directos
const contentClasses = `
    ${varela.className}
    text-lg leading-relaxed
    prose-p:mb-4
    prose-headings:text-white prose-headings:font-bold prose-headings:mb-4
    prose-a:text-indigo-400 prose-a:hover:text-indigo-300
    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
`;

export default function InfoPageLayout({ title, children }) {
    return (
        <main className={mainContainerClasses}>
            <div className={wrapperClasses}>
                <h1 className={titleClasses}>{title}</h1>
                <div className={contentClasses}>
                    {children}
                </div>
            </div>
        </main>
    );
}