// components/AboutComponents/Crew.jsx
import { Gafete } from "@/components";
import { getAllTeamMembers } from "@/data/team";

export default function Crew() {
    // Sort so Active members are first
    const crewList = getAllTeamMembers().sort((a, b) => {
        if (a.status === "Active" && b.status !== "Active") return -1;
        if (a.status !== "Active" && b.status === "Active") return 1;
        return 0;
    });

    return (
        <section aria-labelledby="crew-heading" className="pt-10">
            <h2 id="crew-heading" className="text-4xl md:text-5xl font-sans font-black uppercase tracking-tight text-white mb-12 text-center sm:text-left border-b-2 border-red-600 inline-block pb-2">
                PERSONNEL ROSTER
            </h2>
            <div className="grid gap-x-8 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {crewList.map((crew) => (
                    <Gafete key={crew.id} crew={crew} />
                ))}
            </div>
        </section>
    );
}