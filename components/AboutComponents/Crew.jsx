import { Gafete } from "@/components";
import { getCrew } from "@/app/lib/getCrew";

export default async function Crew() {
    const crewList = await getCrew();

    return (
        <section aria-labelledby="crew-heading">
            <h2>Crew</h2>
            <div>
                {crewList.map((member) => (
                    <Gafete key={member.id} crew={member} />
                ))}
            </div>
        </section>
    );
}
