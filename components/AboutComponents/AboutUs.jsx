// components/AboutComponents/AboutUs.jsx

export default function AboutUs() {
    return (
        // --- INICIO DE CAMBIOS: Centramos el contenedor y el texto en móvil ---
        <section className="max-w-2xl mx-auto text-center sm:text-left">
        {/* --- FIN DE CAMBIOS --- */}
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">Sobre Nosotros</h2>
            <p className="text-neutral-200 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione et illo,
                quis quia culpa dolorum consequatur recusandae expedita beatae ipsum tempora dolorem cum,
                blanditiis ullam ab, harum accusamus animi!
            </p>
        </section>
    );
}