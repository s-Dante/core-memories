import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

// Si mañana usas BD, SOLO cambias este handler para leer de la BD.
export async function GET() {
  const filePath = path.join(process.cwd(), "public", "data", "crew.json");
  const raw = await readFile(filePath, "utf-8");
  const data = JSON.parse(raw);
  const crew = Array.isArray(data) ? data : (data.crew ?? []);
  return NextResponse.json(crew);
}
