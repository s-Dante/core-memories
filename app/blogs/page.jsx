import { getBlogs } from "@/app/lib";
import { Folder } from "@/components";

export const metadata = {
  title: "Blogs | Core Memories",
  description: "Empresa de videojuegos independiente",
};

export default async function Blogs() {
    const blogs = await getBlogs();

    return (
        <main>
            {blogs.map((blog) => (
                <Folder key={blog.id} blog={blog} />
            ))}
        </main>
    );
}