import { Disquete, CD } from "@/components";
import { getBlogsByGameId } from "@/data/blogs";
import Link from "next/link";

export const metadata = {
    title: "Entradas del Blog | Core Memories",
    description: "Empresa de videojuegos independiente",
};

export default async function BlogEntriesPage({ params }) {
    const { blogId } = await params;

    // In our new schema, blogId from the URL actually matches the gameId
    const entries = getBlogsByGameId(blogId);

    const writtenEntries = entries.filter((entry) => entry.type === "Written");
    const videoEntries = entries.filter((entry) => entry.type === "Video");

    return (
        <main className="min-h-screen bg-[#008080] p-4 sm:p-8 md:p-16 relative overflow-hidden font-sans">
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('/resources/textures/noise.png')] z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto pb-16">

                <div className="mb-8">
                    <Link href="/blogs" className="bg-[#c0c0c0] inline-block border-t border-l border-white border-b border-r border-[#808080] shadow-[1px_1px_black] px-2 py-1 text-sm font-bold text-black hover:bg-[#d0d0d0] active:shadow-none active:translate-y-[1px] active:translate-x-[1px]">
                        &larr; C:\CORE_MEMORIES\ARCHIVES
                    </Link>
                </div>

                <div className="mb-12 bg-[#000080] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] p-1 inline-block shadow-md w-full max-w-3xl">
                    <h1 className="text-xl font-bold text-white flex items-center justify-between px-2 py-1">
                        <span>EXPLORING: {blogId.toUpperCase()}</span>
                        <div className="flex gap-1">
                            <div className="bg-[#c0c0c0] w-4 h-4 border-t border-l border-white border-b border-r border-[#808080] flex items-center justify-center text-black text-xs cursor-pointer">_</div>
                            <div className="bg-[#c0c0c0] w-4 h-4 border-t border-l border-white border-b border-r border-[#808080] flex items-center justify-center text-black text-xs cursor-pointer">□</div>
                            <div className="bg-[#c0c0c0] w-4 h-4 border-t border-l border-white border-b border-r border-[#808080] flex items-center justify-center text-black text-xs cursor-pointer">x</div>
                        </div>
                    </h1>
                    <div className="bg-white p-4 h-auto min-h-[300px] border-t border-l border-[#808080] border-b border-r border-white">

                        {/* Section: Disquetes (Written) */}
                        {writtenEntries.length > 0 && (
                            <section className="mb-8">
                                <h2 className="text-lg font-bold border-b-2 border-black inline-block mb-4">WRITTEN LOGS (A:)</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-2">
                                    {writtenEntries.map((entry) => (
                                        <Disquete key={entry.id} entry={entry} blogId={blogId} />
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Section: CDs (Videos) */}
                        {videoEntries.length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold border-b-2 border-black inline-block mb-4">VIDEO ARCHIVES (D:)</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-2">
                                    {videoEntries.map((entry) => (
                                        <CD key={entry.id} entry={entry} blogId={blogId} />
                                    ))}
                                </div>
                            </section>
                        )}

                        {writtenEntries.length === 0 && videoEntries.length === 0 && (
                            <p className="text-gray-500 italic mt-4">Directory is empty.</p>
                        )}

                    </div>
                </div>

            </div>
        </main>
    );
}