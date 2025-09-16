import blogs from "@/public/data/blogs.json";

export async function GET(request, { params }) {
  const { blogID, entradaID } = params;
  const blog = blogs.find(b => b.id === blogID);

  if (!blog) return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });

  const entry = blog.entries.find(e => e.id === entradaID);

  if (!entry) return new Response(JSON.stringify({ error: "Entry not found" }), { status: 404 });

  return new Response(JSON.stringify(entry), {
    headers: { "Content-Type": "application/json" },
  });
}
