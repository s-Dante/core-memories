import { FollowUs } from '@/components';

export const metadata = {
    title: "Merch | Core Memories",
    description: "Tienda online de Core Memories",
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


export default function Merch() {
    return (
        <article className={articleClasses}>
            <div className={wraper}>
                <img 
                    src="/resources/imgs/GeneralImgs/Stickers/AlienBordado.png" 
                    alt="Ilustracion por que no hay merch para vender actualmente" 
                    className={imgClasses}
                />
                <p className={caption}>
                    Actualmente no hay merch para vender, pero puedes apoyar el proyecto siguiendonos
                    en nuestras redes sociales y compartiendo nuestro contenido con tus amigos.
                </p>
            </div>
            <FollowUs />
        </article>
    );
}