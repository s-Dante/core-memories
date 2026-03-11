// app/api/games/[id]/route.js

import { getGameById } from "@/data/games";

export async function GET(request, props) {
  const params = await props.params;
  const { id } = params;

  const game = getGameById(id);

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