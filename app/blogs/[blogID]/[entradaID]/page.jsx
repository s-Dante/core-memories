// app/blogs/[blogID]/[entradaID]/page.jsx

import { getBlogEntryById } from "@/app/lib";
import Link from "next/link";
import { AlbumTracklist, BlogArticle } from "@/components";

export async function generateMetadata({ params }) {
    const { blogID, entradaID } = params;
    const entry = await getBlogEntryById(blogID, entradaID);
    return {
        title: `${entry.title} | Core Memories`,
    };
}

const mainContainerClasses = `
    min-h-screen
    bg-[#0d0d0f]
    bg-[url('/resources/textures/noise.png')] bg-repeat bg-[length:300px_300px]
    py-24 sm:py-32 px-4 sm:px-6
`;

export default async function BlogEntryPage({ params }) {
    const { blogID, entradaID } = params;
    const entry = await getBlogEntryById(blogID, entradaID);

    return (
        <main className={mainContainerClasses}>
            <div className="max-w-4xl mx-auto mb-8">
                <Link href={`/blogs/${blogID}`} className="text-indigo-400 hover:text-indigo-300">
                    &larr; Volver a las entradas de {blogID}
                </Link>
            </div>

            {entry.type === "album" && <AlbumTracklist entry={entry} />}
            {entry.type === "disquete" && <BlogArticle entry={entry} />}
        </main>
    );
}