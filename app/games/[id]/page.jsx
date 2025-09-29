import { notFound } from "next/navigation";
import { getGamesById } from "@/app/lib/getGamesById";

export const metadata = {
  title: "Game Details | Core Memories",
  description: "Detalles del videojuego en Core Memories",
};

const articleClasses = `
  relative min-h-screen
  bg-[url('/resources/imgs/HomeImgs/hero-bg.png')]  /* 👈 tu imagen de fondo */
  bg-cover bg-center bg-fixed
  flex items-center justify-center
  p-6 md:p-10
`;

const glassContainer = `
  max-w-4xl w-full
  bg-black-500 backdrop-blur-md
  rounded-2xl shadow-xl
  p-6 md:p-10
  space-y-8
`;

const headerClasses = `
  grid gap-6 md:grid-cols-[auto,1fr] items-center
`;

const separador =  `
    h-[50px]
    md:h-[100px]
`;

export default async function GameDetailPage({ params }) {
  const { id } = params;

  let game;
  try {
    game = await getGamesById(id);
  } catch {
    notFound();
  }

  return (
    <article className={articleClasses}>
      <div className={separador}></div>
      <div className={glassContainer}>
        <header className={headerClasses}>
          <div className="flex justify-center">
            <img
              src={game.cover}
              alt={`Portada del videojuego ${game.title}`}
              className="max-h-64 rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">{game.title}</h1>
            {game.shortDescription && (
              <p className="text-neutral-200">{game.shortDescription}</p>
            )}

            {Array.isArray(game.downloads) && game.downloads.length > 0 && (
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {game.downloads.map((dl, i) => (
                  <a
                    key={i}
                    href={dl.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600/80 hover:bg-indigo-600 rounded-full text-white text-sm md:text-base transition-colors"
                  >
                    Descargar en {dl.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </header>

        <section className="space-y-6">
          <div>
            {game.details?.story && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Historia</h2>
                <p className="text-neutral-200">{game.details.story}</p>
              </div>
            )}

            {game.details?.theme && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Temática</h2>
                <p className="text-neutral-200">{game.details.theme}</p>
              </div>
            )}
          </div>

          {Array.isArray(game.details?.artBible) && game.details.artBible.length > 0 && (
            <aside>
              <h2  className="text-2xl font-bold text-white mb-2">Biblia de arte</h2>
              <ul className="list-disc list-inside space-y-1 text-neutral-200">
                {game.details.artBible.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </aside>
          )}
        </section>
      </div>
    </article>
  );
}
