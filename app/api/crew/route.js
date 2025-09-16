import crew from "@/public/data/crew.json";

export async function GET() {
  return new Response(JSON.stringify(crew), {
    headers: { "Content-Type": "application/json" },
  });
}
