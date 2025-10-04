import { ComingSoonPage } from '@/components';

export const metadata = {
    title: "Jobs | Core Memories",
    description: "Ofertas de trabajo en Core Memories",
};

export default function Jobs() {
    const message = "Actualmente no hay puestos de trabajo disponibles, pero puedes seguirnos en nuestras redes sociales para estar al tanto de futuras oportunidades.";
    
    return (
        <ComingSoonPage 
            imageUrl="/resources/imgs/GeneralImgs/Stickers/SapaceShipBadgeBordado.png"
            imageAlt="Ilustración de un astronauta para indicar que no hay trabajos disponibles"
            message={message}
        />
    );
}