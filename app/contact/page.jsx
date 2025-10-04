// app/contact/page.jsx
import { InfoPageLayout, FollowUs } from "@/components";
import { socialLinks } from "@/config";

export const metadata = {
    title: "Contact Us | Core Memories",
};

export default function ContactPage() {
    return (
        <InfoPageLayout title="Contacto">
            <h2 className="text-2xl">Ponte en contacto</h2>
            <p className="mt-4">
                Para consultas generales, prensa o asuntos de negocio, puedes enviarnos un correo electrónico. ¡Nos encantaría saber de ti!
            </p>
            <a href={`mailto:${socialLinks.email}`} className="text-2xl text-indigo-400 hover:underline font-bold mt-4 block">
                {socialLinks.email}
            </a>

            <div className="mt-16">
                <FollowUs />
            </div>
        </InfoPageLayout>
    );
}