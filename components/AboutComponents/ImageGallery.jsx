import { aboutImageGallery} from "@/config";

const sectionClasses = `
  relative h-[60vh] md:h-[72vh]
  rounded-xl 
`;

const commonImg = `
  absolute  rounded-2xl 
  shadow-[0_10px_30px_rgba(0,0,0,.35)]
  pointer-events-none select-none
`;

// posiciones (ajústalas a gusto)
const slots = [
  "w-100 h-auto top-8 left-10 -rotate-12",
  "w-100 h-auto top-6 right-10 rotate-8",
  "w-100 h-auto top-40 left-36 -rotate-3",
  "w-100 h-auto top-48 right-44 rotate-10",
  "w-100 h-auto -bottom-16 right-8 rotate-6",
];

export default function ImageGallery() {
    return (
        <section className={sectionClasses} aria-hidden>
            {aboutImageGallery.images.map((image, i) => (
                <img 
                    key={i} 
                    src={image.src} 
                    alt={image.alt}
                    className={`${commonImg} ${slots[i % slots.length]} object-cover`}
                />
            ))}
        </section>
    );
}