// app/blogs/[blogId]/[entradaId]/page.jsx
import { getBlogById } from "@/data/blogs";
import Link from "next/link";
import { AlbumTracklist, BlogArticle } from "@/components";

export async function generateMetadata({ params }) {
    const { entradaID } = await params;
    const entry = getBlogById(entradaID);
    return {
        title: entry ? `${entry.title} | Core Memories` : "Blog | Core Memories",
    };
}

export default async function BlogEntryPage({ params }) {
    const { blogID, entradaID } = await params;
    const blogId = blogID;
    const entry = getBlogById(entradaID);

    if (!entry) return <p className="text-center p-20">File Not Found.</p>;

    return (
        <main className="min-h-screen bg-[#0a0a0a] py-24 px-4 sm:px-6 relative font-sans selection:bg-white selection:text-black">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen bg-[url('/resources/textures/noise.png')] z-0"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="mb-12">
                     <Link href={`/blogs/${blogId}`} className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-sans text-sm tracking-widest uppercase mb-6">
                        <span>&larr;</span> Back to Details
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2">
                        {entry.title}
                    </h1>
                    <div className="flex gap-4 items-center border-t border-white/10 pt-4 mt-2">
                         <span className="text-zinc-500 font-mono text-sm">{entry.date}</span>
                         <span className="text-zinc-500 font-mono text-xs px-2 py-0.5 border border-zinc-700 bg-zinc-900">{entry.type.toUpperCase()}</span>
                    </div>
                </div>

                {entry.type === "Video" && <AlbumTracklist entry={entry} />}
                {entry.type === "Written" && <BlogArticle entry={entry} />}
            </div>
        </main>
    );
}