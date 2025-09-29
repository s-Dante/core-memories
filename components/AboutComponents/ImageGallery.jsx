// components/AboutComponents/ImageGallery.jsx

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
  "w-50 sm:w-48 lg:w-100 top-4 left-2 sm:left-10 -rotate-12",
  "w-50 sm:w-48 lg:w-100 top-2 right-2 sm:right-10 rotate-8",
  "w-50 sm:w-48 lg:w-100 top-1/3 left-1/4 -rotate-3",
  "w-50 sm:w-48 lg:w-100 top-1/2 right-1/4 rotate-10",
  "w-50 sm:w-48 lg:w-100 bottom-0 right-4 sm:right-8 rotate-6",
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