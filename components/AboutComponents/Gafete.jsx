import { componentsPath, crewImgs } from "@/config";

export default function Gafete ({ id }) {
    return (
        <article>
            <img src={componentsPath.gafete} alt="Gafete" />
            <img src={crewImgs.member[id].src} alt={crewImgs.member[id].alt} />

            
        </article>
    );
}