import { aboutImageGallery } from "@/config";

const sectionClasses = `
  // Ajustamos la altura para que sea más flexible en móviles
  relative h-[50vh] sm:h-[60vh] md:h-[72vh]
  mb-10 // Añadimos un margen inferior para separar del siguiente componente
`;

const commonImg = `
  absolute rounded-2xl 
  shadow-[0_10px_30px_rgba(0,0,0,.35)]
  pointer-events-none select-none
  object-cover
`;

// --- INICIO DE CAMBIOS: Slots responsivos ---
// Clases de la izquierda para móvil, de la derecha para pantallas más grandes
const slots = [
  "w-50 sm:w-48 lg:w-111 top-3 left-2 sm:left-10 -rotate-12", //Platicando
  "w-50 sm:w-48 lg:w-111 top-1 left-2/4 sm:right-10 rotate-8", //Arbol -> Resvaladero
  "w-50 sm:w-48 lg:w-111 top-1/3 left-1/7 -rotate-3", //Arriba de juego -> Arbol
  "w-50 sm:w-48 lg:w-111 top-1/2 right-2/6 rotate-10", //Resvaladero -> Arriba de juego
  "w-50 sm:w-48 lg:w-111 bottom-0 right-4 sm:right-8 rotate-6", //Mesa
];
// --- FIN DE CAMBIOS ---

export default function ImageGallery() {
    return (
        <section className={sectionClasses} aria-hidden>
            {aboutImageGallery.images.map((image, i) => (
                <img 
                    key={i} 
                    src={image.src} 
                    alt={image.alt}
                    className={`${commonImg} ${slots[i % slots.length]}`}
                />
            ))}
        </section>
    );
}