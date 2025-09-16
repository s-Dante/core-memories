export async function getGamesById(id) {
  const res = await fetch(`${process.env.FETCH_GAME_BY_ID}/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error fetching game");
  return res.json();
}
