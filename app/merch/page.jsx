import { FollowUs } from '@/components';

export const metadata = {
  title: "Merch | Core Memories",
  description: "Tienda online de Core Memories",
};

export default function Merch() {
    return (
        <article>
            <img src="" alt="Ilustracion por que no hay merch para vender actualmente" />
            <p>
                Actualmente no hay merch para vender, pero puedes apoyar el proyecto siguiendonos 
                en nuestras redes sociales y compartiendo nuestro contenido con tus amigos.
            </p>
            <FollowUs />
        </article>
    );
}