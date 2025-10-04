// app/not-found.jsx

import Link from 'next/link';
import { varien, rubik } from '@/app/layout';

const mainContainerClasses = `
    flex-grow // Asegura que ocupe el espacio disponible
    flex items-center justify-center
    text-center
    bg-[#0d0d0f]
    bg-[url('/resources/textures/noise.png')] bg-repeat bg-[length:300px_300px]
    px-6 py-24
`;

const wrapperClasses = `
    max-w-md
    flex flex-col items-center
`;

const imageClasses = `
    w-48 sm:w-64
    mb-8
`;

const errorCodeClasses = `
    ${varien.className}
    text-8xl sm:text-9xl
    font-bold
    text-white
    leading-none
`;

const titleClasses = `
    ${rubik.className}
    text-2xl sm:text-3xl
    font-bold
    uppercase
    text-neutral-300
    mt-4
`;

const descriptionClasses = `
    text-neutral-400
    mt-4
    max-w-sm
`;

const buttonClasses = `
    ${rubik.className}
    mt-10
    px-6 py-3
    bg-indigo-600
    text-white
    font-bold
    uppercase
    rounded-full
    transition-all
    hover:bg-indigo-500
    hover:scale-105
`;

export default function NotFound() {
    return (
        <main className={mainContainerClasses}>
            <div className={wrapperClasses}>
                <img
                    src="/resources/imgs/GeneralImgs/Stickers/AstronautBrockenBordado.png"
                    alt="Astronauta con el casco roto, perdido en el espacio"
                    className={imageClasses}
                />
                
                <h1 className={errorCodeClasses}>404</h1>
                <h2 className={titleClasses}>Señal Perdida</h2>

                <p className={descriptionClasses}>
                    Parece que te has desviado a un sector desconocido del universo. La página que buscas no fue encontrada.
                </p>

                <Link href="/" className={buttonClasses}>
                    Volver a la Base
                </Link>
            </div>
        </main>
    );
}