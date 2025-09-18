import { getBlogs } from "@/app/lib";
import { Folder, FollowUs } from "@/components";


export const metadata = {
    title: "Blogs | Core Memories",
    description: "Empresa de videojuegos independiente",
};

const articleClasses = `
 relative min-h-[70vh]
        /* fondo texturizado + viñeta */
        bg-[#0d0d0f]
        bg-[url('/resources/textures/noise.png')] bg-repeat bg-[length:300px_300px]
        before:absolute before:inset-0
        before:bg-[radial-gradient(80%_60%_at_50%_30%,rgba(255,255,255,.08),transparent_60%)]
      pb-50
`;

const wraper = `
  max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-16 flex flex-col items-center gap-6 md:gap-8  
`;

const imgClasses = `
            w-150 max-w-3xl
            rounded-md 
            object-cover
`;

const caption = `
text-center text-neutral-100
            bg-black/50 backdrop-blur-md
            rounded-md px-4 py-3
            max-w-2xl
`;

export default async function Blogs() {
    const blogs = await getBlogs();

    return (
        /*
        <main>
            {blogs.map((blog) => (
                <Folder key={blog.id} blog={blog} />
            ))}
        </main>
        */
        <article className={articleClasses}>
            <div className={wraper}>
                <img
                    src="/resources/imgs/GeneralImgs/Stickers/PlanetBadgeBordado.png"
                    alt="Ilustracion para mostrar que actualmente Core Memories no tiene puestos de trabajo disponibles"
                    className={imgClasses}
                />
                <p className={caption}>
                    Los datos de los blogs se quedaron atorados por Pluton, estamos trabajando en recogerlos.
                </p>
            </div>
            <FollowUs />
        </article>
    );
}