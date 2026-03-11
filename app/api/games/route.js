import { getAllGames } from "@/data/games";

export async function GET() {
  const games = getAllGames();
  return new Response(JSON.stringify(games), {
    headers: { "Content-Type": "application/json" },
  });
}
