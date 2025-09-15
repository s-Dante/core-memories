import { Gafete } from "@/components";
import { getCrew } from "@/app/lib/getCrew";

export default async function Crew() {
    const crewList = await getCrew();

    return (
        <section aria-labelledby="crew-heading">
            <h2 id="crew-heading">Crew</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {crewList.map((member) => (
                    <Gafete key={member.id} crew={member} />
                ))}
            </div>
        </section>
    );
}
