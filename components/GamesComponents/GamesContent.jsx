// components/GamesComponents/GamesContent.jsx

"use client";

import { useEffect } from "react";
import { InfoGCard } from "@/components";

// --- INICIO DE CAMBIOS ---
const mainClasses = `
  max-w-screen-xl mx-auto
  px-6 md:px-10
  // Reducimos el espacio vertical entre las tarjetas
  space-y-16 md:space-y-24 
`;

const separador = `
  h-[5px]
  md:hidden
`;

// --- FIN DE CAMBIOS ---

export default function GamesContent({ games }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <main className={mainClasses}>
      <div className={separador}></div>
      <div className={separador}></div>
      {games.map((game) => (
        <InfoGCard key={game.id} game={game} id={`game-${game.id}`} />
      ))}
    </main>
  );
}