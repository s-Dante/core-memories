import { getBlogEntryById } from "@/app/lib";

export default async function BlogEntryPage({ params }) {
  const { blogID, entradaID } = params;
  const entry = await getBlogEntryById(blogID, entradaID);

  if (entry.type === "album") {
    return (
      <section>
        <h1>{entry.title}</h1>
        <ul>
          {entry.tracks.map((track) => (
            <li key={track.youtubeId}>
              <a
                href={`https://www.youtube.com/watch?v=${track.youtubeId}`}
                target="_blank"
              >
                {track.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (entry.type === "disquete") {
    return (
      <section>
        <h1>{entry.title}</h1>
        <p>Por: {entry.authors.join(", ")}</p>
        <div>
          {entry.content.map((block, i) => {
            switch (block.type) {
              case "intro":
              case "technical":
              case "notes":
              case "conclusion":
              case "finalMessage":
                return <p key={i}>{block.text}</p>;
              case "image":
                return (
                  <figure key={i}>
                    <img src={block.src} alt={block.caption} />
                    <figcaption>{block.caption}</figcaption>
                  </figure>
                );
              default:
                return null;
            }
          })}
        </div>
      </section>
    );
  }
}
