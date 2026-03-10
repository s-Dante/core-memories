// components/AboutComponents/AboutUs.jsx

export default function AboutUs() {
    return (
        // --- INICIO DE CAMBIOS: Centramos el contenedor y el texto en móvil ---
        <section className="max-w-3xl mx-auto text-center sm:text-left px-4">
            {/* --- FIN DE CAMBIOS --- */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black uppercase tracking-tighter text-white mb-6">Sobre Nosotros</h2>
            <p className="text-zinc-400 font-sans text-lg md:text-xl leading-relaxed">
                Somos Core Memories, un estudio de videojuegos
                indie que surgió de la pasión de un par de estudiantes por contar historias
                y crear nuevos mundos por medio de videojuegos.
            </p>
        </section>
    );
}