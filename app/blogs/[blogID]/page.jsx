import { Disquete, CD } from "@/components";
import { getBlogsByGameId } from "@/data/blogs";
import Link from "next/link";

export const metadata = {
    title: "Entradas del Blog | Core Memories",
    description: "Empresa de videojuegos independiente",
};

export default async function BlogEntriesPage({ params }) {
    const { blogID } = await params;
    const blogId = blogID;

    // In our new schema, blogId from the URL actually matches the gameId
    const entries = getBlogsByGameId(blogId);

    const writtenEntries = entries.filter((entry) => entry.type === "Written");
    const videoEntries = entries.filter((entry) => entry.type === "Video");

    return (
        <div className="pt-32 pb-20 bg-[#0a0a0a] min-h-screen selection:bg-white selection:text-black relative">
            {/* Very subtle ambient noise */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen bg-[url('/resources/textures/noise.png')]"></div>

            <main className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10 text-center md:text-left">
                {/* Header Back Link */}
                <div className="mb-8">
                    <Link href="/blogs" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-sans text-sm tracking-widest uppercase">
                        <span>&larr;</span> Back to Archives
                    </Link>
                </div>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-sans font-black text-white tracking-tighter mb-2 leading-none">
                        EXPLORING: {blogId.toUpperCase()}
                    </h1>
                    <p className="text-zinc-500 font-sans text-base max-w-2xl">
                        Viewing all recorded developer logs and multimedia artifacts for this project.
                    </p>
                </div>

                <div className="mt-12 space-y-16">
                    {/* Section: Disquetes (Written) */}
                    {writtenEntries.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-white tracking-tight mb-8">
                                Written Logs
                                <span className="ml-3 text-xs font-mono text-zinc-600 font-normal">VOL 1</span>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
                                {writtenEntries.map((entry) => (
                                    <Disquete key={entry.id} entry={entry} blogId={blogId} />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Section: CDs (Videos) */}
                    {videoEntries.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-white tracking-tight mb-8">
                                Multimedia Archives
                                <span className="ml-3 text-xs font-mono text-zinc-600 font-normal">VOL 2</span>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
                                {videoEntries.map((entry) => (
                                    <CD key={entry.id} entry={entry} blogId={blogId} />
                                ))}
                            </div>
                        </section>
                    )}

                    {writtenEntries.length === 0 && videoEntries.length === 0 && (
                        <div className="py-20 text-center border-t border-white/10 mt-10">
                            <p className="text-zinc-500 font-sans text-lg">No archives found in this directory.</p>
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
}