import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

async function readGames() {
  const fp = path.join(process.cwd(), "public", "data", "games.json");
  const raw = await readFile(fp, "utf-8");
  return JSON.parse(raw);
}

export async function GET(_req, { params }) {
  const { id } = params;
  const games = await readGames();

  const game = games.find(g => String(g.id) === String(id));
  if (!game) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(game);
}
