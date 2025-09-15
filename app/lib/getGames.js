import { getBaseUrl } from "@/app/lib"

export async function getGames() {
    const res = await fetch(`${getBaseUrl()}/api/games`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("No se pudo cargar juegos");
    return res.json();
}