"use client";

import { useEffect } from "react";
import { InfoGCard } from "@/components";

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
    <main>
      {games.map((game) => (
        <InfoGCard key={game.id} game={game} id={`game-${game.id}`} />
      ))}
    </main>
  );
}
