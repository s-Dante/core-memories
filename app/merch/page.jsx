// app/merch/page.jsx

import { ComingSoonPage } from '@/components';

export const metadata = {
    title: "Merch | Core Memories",
    description: "Tienda online de Core Memories",
};

export default function Merch() {
    const message = "Nuestra estación de merch está actualmente en construcción. Estamos diseñando equipo único para nuestras misiones. ¡Vuelve pronto, astronauta!";

    return (
        <ComingSoonPage 
            imageUrl="/resources/imgs/GeneralImgs/Stickers/AlienBordado.png"
            imageAlt="Ilustración de un alien para indicar que no hay merch disponible"
            message={message}
        />
    );
}