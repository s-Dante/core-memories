import { notFound } from "next/navigation";
import { getGamesById } from "@/app/lib/getGamesById";

export default async function GameDetailPage({ params }) {
  const { id } = params;

  let game;
  try {
    game = await getGamesById(id);
  } catch {
    notFound();
  }

  return (
    <article className="space-y-6">
      <header>
        <div>
          <img
            src={game.cover}
            alt={`Portada del videojuego ${game.title}`}
          />
        </div>
        <div>
          <h1>{game.title}</h1>
          {game.shortDescription && (
            <p>{game.shortDescription}</p>
          )}

          {Array.isArray(game.downloads) && game.downloads.length > 0 && (
            <div>
              {game.downloads.map((dl, i) => (
                <a
                  key={i}
                  href={dl.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descargar en {dl.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <section>
        <div>
          {game.details?.story && (
            <div>
              <h2>Historia</h2>
              <p>{game.details.story}</p>
            </div>
          )}

          {game.details?.theme && (
            <div>
              <h2>Temática</h2>
              <p>{game.details.theme}</p>
            </div>
          )}
        </div>

        {Array.isArray(game.details?.artBible) && game.details.artBible.length > 0 && (
          <aside>
            <h2>Biblia de arte</h2>
            <ul>
              {game.details.artBible.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </aside>
        )}
      </section>
    </article>
  );
}
