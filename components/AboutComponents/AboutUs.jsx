// components/AboutComponents/AboutUs.jsx

export default function AboutUs() {
    return (
        // --- INICIO DE CAMBIOS: Centramos el contenedor y el texto en móvil ---
        <section className="max-w-2xl mx-auto text-center sm:text-left">
            {/* --- FIN DE CAMBIOS --- */}
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">About Us</h2>
            <p className="text-neutral-200 leading-relaxed">
                We are Core Memories, an Indie Game Studio born for the pasion of building inmerive worlds and
                tell memorable stories. We belive in the games power of make fellings and unforgetable memories.
            </p>
        </section>
    );
}