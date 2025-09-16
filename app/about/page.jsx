import { ImageGallery, AboutUs, OurMission, Crew } from "@/components";

export const metadata = {
  title: "About | Core Memories",
  description: "Empresa de videojuegos independiente",
};

export default function About() {
    return (
        <main>
            <ImageGallery />
            <AboutUs />
            <OurMission />
            <Crew />
        </main>
    );
}