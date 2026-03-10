import { rubik, courier } from "@/app/layout";

export default function BlogArticle({ entry }) {
    const blocks = entry.blocks || [];

    return (
        <article className="w-full max-w-4xl mx-auto bg-zinc-50 shadow-2xl rounded-sm overflow-hidden text-zinc-900 font-sans selection:bg-black selection:text-zinc-50">
            {/* Minimal Header */}
            <header className="px-8 pt-16 pb-8 border-b border-zinc-200 flex flex-col items-center text-center">
                <div className="flex gap-3 mb-6">
                    {entry.tags?.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-zinc-200/50 text-zinc-600 text-[10px] font-mono uppercase tracking-widest rounded-sm border border-zinc-300">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <h1 className={`${rubik.className} text-4xl sm:text-6xl font-black text-black tracking-tight mb-6 uppercase leading-[0.9]`}>
                    {entry.title}
                </h1>
                
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 uppercase tracking-widest mt-4">
                    <span>{entry.date}</span>
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></span>
                    <span>{entry.author || "ADMIN"}</span>
                </div>
            </header>

            {/* Dynamic Content Rendering */}
            <div className="px-6 sm:px-12 md:px-20 py-16 flex flex-col gap-10">
                {blocks.map((block, idx) => {
                    switch (block.type) {
                        case "paragraph":
                            return (
                                <p key={idx} className="text-lg leading-relaxed text-zinc-700">
                                    {block.content}
                                </p>
                            );
                        
                        case "heading":
                            return (
                                <h2 key={idx} className={`${rubik.className} text-2xl font-bold text-black uppercase tracking-tight mt-6 mb-2`}>
                                    {block.content}
                                </h2>
                            );
                        
                        case "quote":
                            return (
                                <blockquote key={idx} className="pl-6 py-2 border-l-4 border-black my-8">
                                    <p className={`${courier.className} text-xl italic text-zinc-800 tracking-tight leading-snug`}>
                                        "{block.content}"
                                    </p>
                                </blockquote>
                            );
                        
                        case "image":
                            return (
                                <figure key={idx} className="my-10 -mx-6 sm:-mx-12 md:-mx-20 relative">
                                    <img 
                                        src={block.url} 
                                        alt="Blog multimedia" 
                                        className="w-full h-auto object-cover max-h-[600px] border-y border-zinc-200" 
                                    />
                                    {block.caption && (
                                        <figcaption className="text-center mt-3 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                            {block.caption}
                                        </figcaption>
                                    )}
                                </figure>
                            );
                        
                        case "code":
                            return (
                                <div key={idx} className="my-8 rounded-md overflow-hidden shadow-xl border border-zinc-800 bg-[#0a0a0a]">
                                    <div className="flex items-center px-4 py-2 border-b border-zinc-800 bg-[#111]">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                                        </div>
                                        <span className="ml-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                                            {block.language || "code"}
                                        </span>
                                    </div>
                                    <pre className="p-4 sm:p-6 overflow-x-auto text-[13px] sm:text-sm leading-relaxed text-zinc-300 font-mono">
                                        <code>{block.content}</code>
                                    </pre>
                                </div>
                            );
                        
                        default:
                            return null;
                    }
                })}
            </div>

            {/* Footer Signature */}
            <div className="px-8 pb-16 flex flex-col items-center">
                <div className="w-12 h-0.5 bg-zinc-300 mb-8"></div>
                <div className={`${courier.className} text-6xl font-bold opacity-5 select-none`}>
                    EOF
                </div>
            </div>
        </article>
    );
}