import blogs from "@/public/data/blogs.json";

export async function GET(request, { params }) {
    const { blogID } = params;
    const blog = blogs.find(b => b.id === blogID);

    if (!blog) {
        return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(blog.entries), {
        headers: { "Content-Type": "application/json" },
    });
}