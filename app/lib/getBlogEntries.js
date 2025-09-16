import blogs from "@/public/data/blogs.json";

export async function getBlogEntries(blogID) {
    const blog = blogs.find(b => b.id === blogID);
    if (!blog) throw new Error("Blog not found");
    return blog.entries; 
}