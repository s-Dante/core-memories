import { aboutImageGallery} from "@/config";

const sectionClasses = `
  relative h-[60vh] md:h-[72vh]
  bg-[#1f1f1f] rounded-xl overflow-hidden
`;

const commonImg = `
  absolute bg-[#4a4a4a] rounded-2xl/2 opacity-80
  shadow-[0_10px_30px_rgba(0,0,0,.35)]
  pointer-events-none select-none
`;

// posiciones (ajústalas a gusto)
const slots = [
  "w-64 h-64 top-8 left-10 -rotate-12",
  "w-80 h-80 top-6 right-10 rotate-8",
  "w-72 h-72 top-40 left-36 -rotate-3",
  "w-64 h-64 top-48 right-44 rotate-10",
  "w-96 h-96 -bottom-16 right-8 rotate-6",
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