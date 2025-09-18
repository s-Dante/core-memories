"use client";

import { useEffect } from "react";
import { InfoGCard } from "@/components";

const mainClasses = `
  max-w-screen-xl mx-auto
  px-6 md:px-10
  space-y-24 md:space-y-36
`;

export default function GamesContent({ games }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        // Usamos un pequeño delay para asegurar que los elementos ya estén montados
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // Puedes ajustar el tiempo según la carga
      }
    }
  }, []);

  return (
    <main className={mainClasses}>
      {games.map((game) => (
        <InfoGCard key={game.id} game={game} id={`game-${game.id}`} />
      ))}
    </main>
  );
}
