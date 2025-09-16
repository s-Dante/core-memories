import games from "@/public/data/games.json";

export async function GET(request, { params }) {
  const { id } = params;
  const game = games.find((g) => g.id === Number(id));

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
