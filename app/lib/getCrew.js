// Esta función SIEMPRE consulta a tu API.
// Hoy la API lee JSON; mañana leerá BD, y tus componentes ni se enteran.

// Recomendado: usa una base URL por ENV para evitar headers().
// En desarrollo, cae a http://localhost:3000
const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    `http://localhost:${process.env.PORT ?? 3000}`;

export async function getCrew() {
    const res = await fetch(`${baseUrl}/api/crew`, {
        // Ajusta como prefieras:
        // cache: "no-store",              // data siempre fresca
        next: { revalidate: 60 },          // ISR/SSR con revalidación
    });
    if (!res.ok) throw new Error("No se pudo cargar crew");
    return res.json(); // <- array normalizado
}
