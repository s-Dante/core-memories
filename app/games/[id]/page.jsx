// app/games/[id]/page.jsx

import { notFound } from "next/navigation";
import { getGamesById } from "@/app/lib/getGamesById";
import {GameFile} from '@/components'; // Importaremos el nuevo componente

// Metadata (puedes ajustarla para que sea dinámica)
export const metadata = {
  title: "Detalles del Juego | Core Memories",
  description: "Expediente del proyecto.",
};

// --- CONTENEDOR PRINCIPAL CON FONDO ---
const mainContainerClasses = `
  relative min-h-screen
  bg-zinc-800 bg-[url('/resources/textures/noise.png')] bg-repeat
  flex items-center justify-center
  p-4 sm:p-6 md:p-10
`;

export default async function GameDetailPage({ params }) {
  const { id } = await params;

  let game;
  try {
    game = await getGamesById(id);
  } catch {
    notFound();
  }

  return (
    <main className={mainContainerClasses}>
      <GameFile game={game} />
    </main>
  );
}