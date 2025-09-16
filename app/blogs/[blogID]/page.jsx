import { Disquete, CD } from "@/components";
import { getBlogEntries } from "@/app/lib";

export const metadata = {
  title: "Blog Entries | Core Memories",
  description: "Empresa de videojuegos independiente",
};

export default async function BlogEntriesPage({ params }) {
    const { blogID } = params;
    const entries = await getBlogEntries(blogID);

    return (
        <main>
            {entries.map((entry) =>
                entry.type === "disquete" ? (
                    <Disquete key={entry.id} entry={entry} blogID={blogID} />
                ) : (
                    <CD key={entry.id} entry={entry} blogID={blogID} />
                )
            )}
        </main>
    );
}