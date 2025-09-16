import blogs from "@/public/data/blogs.json";

export async function getBlogEntryById(blogID, entradaID) {
  const blog = blogs.find(b => b.id === blogID);
  if (!blog) throw new Error("Blog not found");

  const entry = blog.entries.find(e => e.id === entradaID);
  if (!entry) throw new Error("Entry not found");

  return entry; // devuelve el objeto completo de la entrada
}
