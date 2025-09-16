export async function getBlogs() {
  const res = await fetch(`${process.env.FETCH_BLOG}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error fetching blogs");
  return res.json();
}
