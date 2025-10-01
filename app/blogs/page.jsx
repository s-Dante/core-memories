import { getBlogs } from "@/app/lib";
import { Folder } from "@/components";

export const metadata = {
    title: "Blogs | Core Memories",
    description: "Archivos de desarrollo de nuestros proyectos.",
};

const mainContainerClasses = `
    min-h-screen
    bg-zinc-900
`;

const wrapperClasses = `
    px-6 md:px-15 py-24 sm:py-32
`;

const titleClasses = `
    text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white 
    text-center mb-16 sm:mb-20
`;

const gridClasses = `
    grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 
    gap-x-5 gap-y-22
`;

export default async function Blogs() {
    const blogs = await getBlogs();

    // Verificamos si la respuesta es el objeto completo o solo el array
    const blogList = Array.isArray(blogs) ? blogs : blogs.blogs;

    if (!blogList || blogList.length === 0) {
        return (
            <main className={mainContainerClasses}>
                <div className={wrapperClasses}>
                    <h1 className={titleClasses}>Archivos de Blog</h1>
                    <p className="text-center text-neutral-400">No se encontraron archivos de blog.</p>
                </div>
            </main>
        );
    }
    
    return (
        <main className={mainContainerClasses}>
            <div className={wrapperClasses}>
                <div className="h-[60px] md:h-[100px]"></div>
                <h1 className={titleClasses}>Archivos de Blog</h1>

                <div className={gridClasses}>
                    {blogList.map((blog) => (
                        <Folder key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </main>
    );
}