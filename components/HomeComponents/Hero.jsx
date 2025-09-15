import { homeImgs } from '@/config';

export default function Hero() {
    return (
        <section>
            <img src={homeImgs.images[0].src} alt={homeImgs.images[0].alt} />
            <img src={homeImgs.images[1].src} alt={homeImgs.images[1].alt} />
            <h2>
                Where dreams are made
            </h2>
        </section>
    );
}