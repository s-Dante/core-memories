export async function getCrew() {
  const res = await fetch(`${process.env.FETCH_CREW}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error fetching games");
  return res.json();
}
