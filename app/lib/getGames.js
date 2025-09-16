export async function getGames() {
  const res = await fetch(`${process.env.FETCH_GAMES}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error fetching games");
  return res.json();
}
