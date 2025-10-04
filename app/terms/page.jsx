import { InfoPageLayout } from "@/components";

export const metadata = {
    title: "Terms of Service | Core Memories",
};

export default function TermsOfServicePage() {
    return (
        <InfoPageLayout title="Términos de Servicio">
            <h2 className="text-2xl">1. Aceptación de los Términos</h2>
            <p>
                Al acceder y utilizar este servicio, aceptas y estás de acuerdo con estar sujeto a los términos y disposiciones de este acuerdo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h2 className="text-2xl mt-8">2. Modificaciones</h2>
            <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Se te notificará de cualquier cambio mediante la publicación de los nuevos términos en este sitio.
            </p>
        </InfoPageLayout>
    );
}