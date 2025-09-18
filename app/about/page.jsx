import { ImageGallery, AboutUs, OurMission, Crew } from "@/components";

export const metadata = {
  title: "About | Core Memories",
  description: "Empresa de videojuegos independiente",
};

export default function About() {
    return (
        <main className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-14 space-y-28 md:space-y-36">
            <ImageGallery />
            <AboutUs />
            <OurMission />
            <Crew />
        </main>
    );
}