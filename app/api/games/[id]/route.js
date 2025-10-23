// app/api/games/[id]/route.js

import gamesData from "@/public/data/games.json"; // Renombramos para claridad

export async function GET(request, { params }) {
  // No necesitas 'await' aquí, Next.js lo maneja. La advertencia es informativa.
  const { id } = params; 

  // --- INICIO DE CAMBIOS ---
  // Accedemos a la lista DENTRO del objeto importado
  const game = gamesData.games.find((g) => g.id === Number(id)); 
  // --- FIN DE CAMBIOS ---

  if (!game) {
    return new Response(JSON.stringify({ error: "Game not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(game), {
    headers: { "Content-Type": "application/json" },
  });
}