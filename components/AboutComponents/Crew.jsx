import { Gafete } from "@/components";
import { getCrew } from "@/app/lib";
import { rubik } from "@/app/layout";

export default async function Crew() {
    const data = await getCrew();

    const crewList = Array.isArray(data) ? data : data.crew;

    return (
        <section aria-labelledby="crew-heading">
            <h2 id="crew-heading" className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-8 mt-30">Crew</h2>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {crewList.map((crew) => (
                    <Gafete key={crew.id} crew={crew} />
                ))}
            </div>
        </section>
    );
}
