// components/AboutComponents/OurMission.jsx

export default function OurMission() {
    return (
        <section className="relative bg-[#1f1f1f] rounded-2xl overflow-hidden py-14 md:py-20 px-6 md:px-10 min-h-[60vh] flex items-center">
            
            {/* --- INICIO DE CAMBIOS: Imagen de fondo ahora es responsiva y se oculta en móvil --- */}
            <div className="
                hidden lg:block // Se oculta en pantallas pequeñas y aparece en 'lg'
                absolute -left-20 top-1/2 -translate-y-1/2 // Centrada verticalmente a la izquierda
                w-[28rem] h-[28rem] rounded-2xl 
                rotate-12 opacity-50 pointer-events-none 
                bg-[url('/resources/imgs/AboutImgs/Casuals/7.JPG')] bg-cover bg-center" 
            />
            {/* --- FIN DE CAMBIOS --- */}

            <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-6">Our Mission</h2>
                <p className="text-neutral-200 text-lg md:text-xl leading-8">
                    We want to explore new narratvie and playable horizons.
                    Searching for develop unique experiencies that makes people conect with the story
                    and with other players.                    
                </p>
            </div>
        </section>
    );
}