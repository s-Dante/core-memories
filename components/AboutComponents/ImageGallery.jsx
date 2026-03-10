import { aboutImageGallery } from "@/config";

const sectionClasses = "relative w-full max-w-5xl mx-auto h-[50vh] sm:h-[60vh] md:h-[72vh] mb-10";

const commonImg = "absolute aspect-[4/3] rounded-2xl border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)] object-cover transition-transform duration-500 hover:scale-105 hover:z-50";

// --- INICIO DE CAMBIOS: Slots responsivos y espaciados ---
const slots = [
  // 1: Top left
  "w-56 sm:w-72 lg:w-[28rem] top-[0%] left-[2%] sm:left-[-10%] -rotate-6",
  // 2: Top right
  "w-52 sm:w-64 lg:w-[28rem] top-[15%] sm:top-[4%] right-[2%] sm:-right-[10%] rotate-6",
  // 3: Center left
  "w-60 sm:w-80 lg:w-[28rem] top-[35%] sm:top-[25%] left-[10%] sm:left-[25%] -rotate-3 z-10",
  // 4: Center right
  "w-56 sm:w-72 lg:w-[28rem] top-[60%] sm:top-[55%] right-[5%] sm:right-[10%] rotat e-3 z-10",
  // 5: Bottom center (slightly left)
  "w-60 sm:w-72 lg:w-[28rem] -bottom-[30%] left-[20%] sm:left-[0%] -rotate-6 z-20",
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