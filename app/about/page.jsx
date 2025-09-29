// app/about/page.jsx

import { ImageGallery, AboutUs, OurMission, Crew } from "@/components";
import { varien } from "../layout";

export const metadata = {
  title: "About | Core Memories",
  description: "Empresa de videojuegos independiente",
};

const mainClasses = `
    ${varien.className}
    w-[100dvw] px-6 md:px-10 lg:px-14 space-y-16 sm:space-y-24 py-16
    bg-zinc-900
`;

const separador =  `
    h-5px
`;

export default function About() {
    return (
        // --- INICIO DE CAMBIOS ---
        <main className={mainClasses}>
            {/* --- FIN DE CAMBIOS --- */}
            <div className={separador}></div>
            <ImageGallery />
            <div className={separador}></div>
            <AboutUs />
            <OurMission />
            <Crew />
        </main>
    );
}