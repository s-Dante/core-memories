import { getBaseUrl } from "@/app/lib/getBaseUrl";

export async function getGamesById(id) {
  const res = await fetch(`${getBaseUrl()}/api/games/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Juego no encontrado");
  return res.json();
}
