// app/faq/page.jsx
import { InfoPageLayout } from "@/components";
import Link from "next/link";

export const metadata = {
    title: "FAQ | Core Memories",
};

const detailsClasses = "py-4 border-b border-white/10";
const summaryClasses = "font-bold text-white text-xl cursor-pointer hover:text-indigo-300";
const answerClasses = "pt-4 text-neutral-400";

export default function FaqPage() {
    return (
        <InfoPageLayout title="Preguntas Frecuentes (FAQ)">
            <div className="space-y-4">
                <details className={detailsClasses}>
                    <summary className={summaryClasses}>¿En qué plataformas estarán disponibles los juegos?</summary>
                    <p className={answerClasses}>
                        Nuestro objetivo inicial es lanzar nuestros juegos en PC a través de plataformas como Steam e Itch.io. Estamos explorando la posibilidad de llevarlos a consolas en el futuro.
                    </p>
                </details>
                <details className={detailsClasses}>
                    <summary className={summaryClasses}>¿Cómo puedo unirme al equipo?</summary>
                    <p className={answerClasses}>
                        Actualmente no tenemos vacantes abiertas, pero te recomendamos estar atento a nuestra página de <Link href="/jobs" className="text-indigo-400 hover:underline">Jobs</Link> y seguirnos en redes sociales para futuras oportunidades.
                    </p>
                </details>
                <details className={detailsClasses}>
                    <summary className={summaryClasses}>¿Dónde puedo comprar su merch?</summary>
                    <p className={answerClasses}>
                        Estamos trabajando en nuestra primera línea de merch. ¡Mantente al tanto en nuestra página de <Link href="/merch" className="text-indigo-400 hover:underline">Merch</Link> para ser el primero en saberlo!
                    </p>
                </details>
            </div>
        </InfoPageLayout>
    );
}