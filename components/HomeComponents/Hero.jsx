import { homeImgs } from '@/config';
import {varela} from "@/app/layout";
import "../HomeComponents/Home.css"

const sectionClasses = `
    parallax
`;

const imgBgClasses = `
    parallax-bg
    object-cover
`;

const imgFgClasses = `
    parallax-fg
    object-contain
`;

const textClasses = `
    ${varela.className}
    parallax-text
    text-7xl
    uppercase
    text-right
    px-15
`;

export default function Hero() {
    return (
        <section className={sectionClasses}>
            <img 
                src={homeImgs.images[0].src} 
                alt={homeImgs.images[0].alt}
                className={imgBgClasses} 
            />
            <img 
                src={homeImgs.images[1].src} 
                alt={homeImgs.images[1].alt}
                className={imgFgClasses} 
            />
            <h2 className={textClasses}>
                Where<br/>dreams<br/>are made
            </h2>
        </section>
    );
}