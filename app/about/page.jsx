// app/about/page.jsx

import { ImageGallery, AboutUs, OurMission, Crew } from "@/components";
import { varien } from "../layout";

export const metadata = {
    title: "About | Core Memories",
    description: "Empresa de videojuegos independiente",
};

const mainClasses = `
    ${varien.className}
    w-full px-6 md:px-10 lg:px-14 space-y-20 sm:space-y-32 pt-32 pb-24
    bg-[#0a0a0a] min-h-screen selection:bg-white selection:text-black
    relative overflow-x-hidden
`;

const separador = `
    h-px w-24 mx-auto bg-white/10
`;

export default function About() {
    return (
        <main className={mainClasses}>

            <div className="relative z-10 w-full flex flex-col items-center">
                <ImageGallery />
            </div>

            <div className="relative z-10 flex flex-col gap-20 sm:gap-32 w-full max-w-screen-xl mx-auto">
                <div className={separador}></div>
                <AboutUs />
                <OurMission />
                <Crew />
            </div>
        </main>
    );
}