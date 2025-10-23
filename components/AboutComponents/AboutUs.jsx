// components/AboutComponents/AboutUs.jsx

export default function AboutUs() {
    return (
        // --- INICIO DE CAMBIOS: Centramos el contenedor y el texto en móvil ---
        <section className="max-w-2xl mx-auto text-center sm:text-left">
            {/* --- FIN DE CAMBIOS --- */}
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">Sobre Nosotros</h2>
            <p className="text-neutral-200 leading-relaxed">
            Somos Core Memories, un estudio de videojuegos 
            indie que surgió de la pasión de un par de estudiantes por contar historias 
            y crear nuevos mundos por medio de videojuegos.
            </p>
        </section>
    );
}