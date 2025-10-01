import { FollowUs } from '@/components';

const mainContainerClasses = `
    flex-grow // Hace que el componente ocupe el espacio disponible
    bg-[#0d0d0f]
    bg-[url('/resources/textures/noise.png')] bg-repeat bg-[length:300px_300px]
`;

const wrapperClasses = `
    min-h-[80vh]
    max-w-5xl mx-auto
    px-6 md:px-10 py-16
    grid grid-cols-1 md:grid-cols-2 gap-12 items-center
`;

const imageClasses = `
    w-full max-w-sm mx-auto
    md:max-w-md
    object-contain
`;

const textContainerClasses = `
    text-center md:text-left
    flex flex-col items-center md:items-start
`;

const captionClasses = `
    text-lg text-neutral-200
    mb-8
`;

export default function ComingSoonPage({ imageUrl, imageAlt, message }) {
    return (
        <article className={mainContainerClasses}>
            <div className='h-[60px] md:h-[100px]'></div>
            <div className={wrapperClasses}>
                
                {/* Columna de la Imagen */}
                <div>
                    <img 
                        src={imageUrl} 
                        alt={imageAlt}
                        className={imageClasses}
                    />
                </div>

                {/* Columna del Texto y Redes Sociales */}
                <div className={textContainerClasses}>
                    <p className={captionClasses}>
                        {message}
                    </p>
                    <FollowUs />
                </div>

            </div>
        </article>
    );
}