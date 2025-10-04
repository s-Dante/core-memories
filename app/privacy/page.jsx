import { InfoPageLayout } from "@/components";

export const metadata = {
    title: "Privacy Policy | Core Memories",
};

export default function PrivacyPolicyPage() {
    return (
        <InfoPageLayout title="Política de Privacidad">
            <h2 className="text-2xl">1. Información que Recopilamos</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
            <h2 className="text-2xl mt-8">2. Cómo Usamos tu Información</h2>
            <p>
                Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            </p>
            <ul>
                <li>Para proveer y mantener nuestro servicio.</li>
                <li>Para notificarte sobre cambios en nuestro servicio.</li>
                <li>Para permitirte participar en funciones interactivas.</li>
            </ul>
        </InfoPageLayout>
    );
}