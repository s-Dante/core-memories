import { Disquete, CD } from "@/components";
import { getBlogEntries } from "@/app/lib";
import Link from "next/link";

export const metadata = {
  title: "Entradas del Blog | Core Memories",
  description: "Empresa de videojuegos independiente",
};

const mainContainerClasses = `
    min-h-screen
    bg-[#0d0d0f]
    bg-[url('/resources/textures/noise.png')] bg-repeat bg-[length:300px_300px]
`;

const wrapperClasses = `
    max-w-screen-xl mx-auto
    px-6 md:px-5 py-11 sm:py-32 pt-30
`;

const sectionClasses = `
    mb-20
`;

const titleClasses = `
    text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white 
    mb-12
`;

const gridClasses = `
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
    gap-x-8 gap-y-12
`;

export default async function BlogEntriesPage({ params }) {
    const { blogID } = await params;
    const entries = await getBlogEntries(blogID);

    const disqueteEntries = entries.filter((entry) => entry.type === "disquete");
    const cdEntries = entries.filter((entry) => entry.type === "album");

    return (
        <main className={mainContainerClasses}>
            <div className={wrapperClasses}>
                
                {/* Botón para volver a la lista de blogs */}
                <Link href="/blogs" className="text-indigo-400 hover:text-indigo-300 mb-12 block">
                    &larr; Volver a los Archivos
                </Link>

                {/* Sección de Disquetes */}
                {disqueteEntries.length > 0 && (
                    <section className={sectionClasses}>
                        <h2 className={titleClasses}>Entradas del Devlog</h2>
                        <div className={gridClasses}>
                            {disqueteEntries.map((entry) => (
                                <Disquete key={entry.id} entry={entry} blogID={blogID} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Sección de CDs */}
                {cdEntries.length > 0 && (
                    <section>
                        <h2 className={titleClasses}>Devlogs en Video</h2>
                        <div className={gridClasses}>
                            {cdEntries.map((entry) => (
                                <CD key={entry.id} entry={entry} blogID={blogID} />
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </main>
    );
}