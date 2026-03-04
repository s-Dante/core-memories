// app/games/[id]/page.jsx
import { notFound } from "next/navigation";
import { getGameById } from "@/data/games";
import { GameFile } from '@/components';


export const metadata = {
  title: "Detalles del Juego | Core Memories",
  description: "Expediente del proyecto.",
};

const mainContainerClasses = `
  relative min-h-screen
  bg-zinc-900 bg-[url('/resources/textures/noise.png')] bg-repeat
  flex items-center justify-center
  p-4 sm:p-6 md:p-10
`;

export default async function GameDetailPage({ params }) {
  const { id } = await params;

  const game = getGameById(id);

  if (!game) {
    notFound();
  }

  return (
    <main className={mainContainerClasses}>
      <GameFile game={game} />
    </main>
  );
}