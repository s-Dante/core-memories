import blogs from "@/public/data/blogs.json";

export async function GET() {
  const summary = blogs.map(({ id, name, description }) => ({
    id,
    name,
    description,
  }));

  return new Response(JSON.stringify(summary), {
    headers: { "Content-Type": "application/json" },
  });
}
