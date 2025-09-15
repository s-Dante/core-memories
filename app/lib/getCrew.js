import { getBaseUrl } from "@/app/lib"

export async function getCrew() {
    const res = await fetch(`${getBaseUrl()}/api/crew`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("No se pudo cargar crew");
    return res.json();
}