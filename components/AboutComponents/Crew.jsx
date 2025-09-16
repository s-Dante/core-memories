import { Gafete } from "@/components";
import { getCrew } from "@/app/lib";

export default async function Crew() {
    const data = await getCrew();

    const crewList = Array.isArray(data) ? data : data.crew;

    return (
        <section aria-labelledby="crew-heading">
            <h2>Crew</h2>
            <div>
                {crewList.map((crew) => (
                    <Gafete key={crew.id} crew={crew} />
                ))}
            </div>
        </section>
    );
}
