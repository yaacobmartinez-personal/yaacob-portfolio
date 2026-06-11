import { NextResponse } from "next/server";
import { getProjects } from "@/lib/works";

export async function GET(): Promise<NextResponse> {
  const projects = await getProjects();

  return NextResponse.json(projects, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
