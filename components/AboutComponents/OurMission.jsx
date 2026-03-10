// components/AboutComponents/OurMission.jsx

export default function OurMission() {
    return (
        <section className="relative bg-gradient-to-br from-[#1c1c1c] via-[#111111] to-[#0a0a0a] border border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] rounded-3xl overflow-hidden py-16 md:py-24 px-6 md:px-12 min-h-[50vh] flex items-center group">

            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/5 to-orange-500/5 mix-blend-screen pointer-events-none"></div>

            {/* --- INICIO DE CAMBIOS: Imagen de fondo ahora es responsiva y se oculta en móvil --- */}
            <div className="
                hidden lg:block // Se oculta en pantallas pequeñas y aparece en 'lg'
                absolute -left-20 top-1/2 -translate-y-1/2 // Centrada verticalmente a la izquierda
                w-[28rem] h-[28rem] rounded-2xl 
                rotate-12 opacity-[0.15] pointer-events-none 
                bg-[url('/resources/imgs/AboutImgs/Casuals/7.JPG')] bg-cover bg-center mix-blend-screen transition-transform duration-700 group-hover:scale-105"
            />
            {/* --- FIN DE CAMBIOS --- */}

            <div className="relative max-w-3xl mx-auto text-center z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black uppercase tracking-tighter text-white mb-6">Nuestra Misión</h2>
                <p className="text-zinc-400 font-sans text-lg md:text-xl leading-relaxed">
                    Queremos explorar los límites de lo que es posible creando experiencias únicas
                    mediante las historias que cuentan los videojuegos, tenemos una gran pasión por
                    los videojuegos y una inmensa creatividad para crear proyectos por lo que
                    queremos compartir esa emoción con otros.
                </p>
            </div>
        </section>
    );
}