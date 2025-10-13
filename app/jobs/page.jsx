import { ComingSoonPage } from '@/components';

export const metadata = {
    title: "Jobs | Core Memories",
    description: "Ofertas de trabajo en Core Memories",
};

export default function Jobs() {
    const message = "Actualmente no tenemos nuevas misiones de reclutamiento. Sin embargo, siempre estamos en busca de nuevos talentos. Mantente al tanto en nuestras redes sociales para futuras vacantes.";
    
    return (
        <ComingSoonPage 
            imageUrl="/resources/imgs/GeneralImgs/Stickers/SapaceShipBadgeBordado.png"
            imageAlt="Ilustración de un astronauta para indicar que no hay trabajos disponibles"
            message={message}
        />
    );
}