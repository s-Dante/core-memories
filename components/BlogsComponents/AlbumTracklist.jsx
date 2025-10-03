import { rubik, varela } from "@/app/layout";

const containerClasses = `
    w-full max-w-2xl mx-auto
    bg-gray-800/50 backdrop-blur-md
    border border-white/10
    rounded-lg shadow-2xl
    text-white
`;

const headerClasses = `
    p-6 border-b border-white/10
`;

const titleClasses = `
    ${rubik.className} text-3xl font-bold uppercase tracking-wider
`;

const dateClasses = `
    text-sm text-neutral-400 mt-1
`;

const tracklistClasses = `
    p-6 space-y-3
`;

const trackItemClasses = `
    flex items-center justify-between gap-4 p-3
    rounded-md transition-colors hover:bg-white/5
`;

const trackTitleClasses = `
    ${varela.className} font-semibold
`;

const youtubeIcon = (
    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

export default function AlbumTracklist({ entry }) {
    return (
        <div className={containerClasses}>
            <header className={headerClasses}>
                <h1 className={titleClasses}>{entry.title}</h1>
                <p className={dateClasses}>Publicado: {entry.date}</p>
            </header>
            <div className={tracklistClasses}>
                {entry.tracks.map((track, index) => (
                    <a
                        key={track.youtubeId}
                        href={`https://www.youtube.com/watch?v=${track.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={trackItemClasses}
                    >
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-neutral-500">{String(index + 1).padStart(2, '0')}</span>
                            <p className={trackTitleClasses}>{track.title}</p>
                        </div>
                        {youtubeIcon}
                    </a>
                ))}
            </div>
        </div>
    );
}