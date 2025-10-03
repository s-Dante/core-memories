import { rubik, varela } from "@/app/layout";

const articleWrapper = `
    w-full max-w-4xl mx-auto
    bg-black/50 backdrop-blur-xl
    border border-green-500/20
    rounded-lg shadow-2xl
    text-green-300
    font-mono
`;

const headerClasses = `
    p-6 border-b border-green-500/20
    flex justify-between items-center
`;

const titleClasses = `
    text-3xl sm:text-4xl font-bold text-green-400
`;

const metadataClasses = `
    mt-2 text-sm text-green-400/70
`;

const contentBody = `
    p-6 sm:p-8 md:p-10
    ${varela.className} // Cambiamos a una fuente más legible para el cuerpo
    text-lg leading-relaxed text-neutral-200
    prose prose-invert prose-p:text-neutral-200 prose-headings:text-green-400
`;

const blinker = `
    w-2 h-4 bg-green-400 animate-pulse
`;

export default function BlogArticle({ entry }) {
    return (
        <div className={articleWrapper}>
            <header className={headerClasses}>
                <div>
                    <h1 className={titleClasses}>// {entry.title}</h1>
                    <p className={metadataClasses}>
                        AUTOR(ES): {entry.authors.join(", ")} | FECHA: {entry.date}
                    </p>
                </div>
                <div className={blinker} />
            </header>
            
            <div className={contentBody}>
                {entry.content.map((block, i) => {
                    switch (block.type) {
                        case "intro":
                        case "technical":
                        case "notes":
                        case "conclusion":
                        case "finalMessage":
                            return <p key={i} className="my-4">{block.text}</p>;
                        case "image":
                            return (
                                <figure key={i} className="my-8">
                                    <img 
                                        src={block.src} 
                                        alt={block.caption} 
                                        className="rounded-md border border-green-500/20"
                                    />
                                    <figcaption className="text-center text-sm text-green-400/70 mt-2">
                                        {block.caption}
                                    </figcaption>
                                </figure>
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
}