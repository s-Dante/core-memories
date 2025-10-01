// app/merch/page.jsx

import { ComingSoonPage } from '@/components';

export const metadata = {
    title: "Merch | Core Memories",
    description: "Tienda online de Core Memories",
};

export default function Merch() {
    const message = "Actualmente no hay merch para vender, pero puedes apoyar el proyecto siguiéndonos en nuestras redes sociales y compartiendo nuestro contenido con tus amigos.";

    return (
        <ComingSoonPage 
            imageUrl="/resources/imgs/GeneralImgs/Stickers/AlienBordado.png"
            imageAlt="Ilustración de un alien para indicar que no hay merch disponible"
            message={message}
        />
    );
}