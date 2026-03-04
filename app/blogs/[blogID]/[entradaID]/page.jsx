// app/blogs/[blogId]/[entradaId]/page.jsx
import { getBlogById } from "@/data/blogs";
import Link from "next/link";
import { AlbumTracklist, BlogArticle } from "@/components";

export async function generateMetadata({ params }) {
    const { entradaId } = await params;
    const entry = getBlogById(entradaId);
    return {
        title: entry ? `${entry.title} | Core Memories` : "Blog | Core Memories",
    };
}

export default async function BlogEntryPage({ params }) {
    const { blogId, entradaId } = await params;
    const entry = getBlogById(entradaId);

    if (!entry) return <p className="text-center p-20">File Not Found.</p>;

    return (
        <main className="min-h-screen bg-[#008080] py-24 px-4 sm:px-6 relative font-sans">
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('/resources/textures/noise.png')] z-0"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="mb-6">
                    <Link href={`/blogs/${blogId}`} className="bg-[#c0c0c0] inline-block border-t border-l border-white border-b border-r border-[#808080] shadow-[1px_1px_black] px-2 py-1 text-sm font-bold text-black hover:bg-[#d0d0d0] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]">
                        &larr; BACK TO DIR: {blogId.toUpperCase()}
                    </Link>
                </div>

                {entry.type === "Video" && <AlbumTracklist entry={entry} />}
                {entry.type === "Written" && <BlogArticle entry={entry} />}
            </div>
        </main>
    );
}