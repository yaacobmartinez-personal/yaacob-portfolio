import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import type { Project } from "@/lib/data";

const TAG_MAP: Record<string, string[]> = {
  "andys-barber-shop":  ["Next.js", "Tailwind", "Mapbox", "Resend"],
  "audy":               ["Node.js", "Audio API", "YouTube DL"],
  "ehfc-tracking":      ["Next.js", "Mapbox", "Supabase"],
  "chapter-realestate": ["Next.js 16", "Tailwind v4", "App Router"],
  "barso":              ["Next.js", "Multi-audience", "Tailwind"],
  "email-sender":       ["Next.js", "Sender.net", "Email API"],
};

const TITLE_MAP: Record<string, string> = {
  "andys-barber-shop":  "Andy's Barber Shop",
  "audy":               "Audy",
  "ehfc-tracking":      "EHFC Tracking",
  "chapter-realestate": "Chapter Real Estate",
  "barso":              "Barso Homes",
  "email-sender":       "Email Sender",
};

/** Pexels image for each known slug — replace with your own screenshots when ready */
const IMAGE_MAP: Record<string, string> = {
  "andys-barber-shop":  "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "audy":               "https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "ehfc-tracking":      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "chapter-realestate": "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "barso":              "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "email-sender":       "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
};

const DEFAULT_IMAGE = "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop";

function slugToTitle(slug: string): string {
  return (
    TITLE_MAP[slug] ??
    slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
  );
}

function tagsForSlug(slug: string, language: string, topics: string[]): string[] {
  if (TAG_MAP[slug]) return TAG_MAP[slug];
  if (topics.length > 0) return topics;
  return [language];
}

interface RawProject {
  title:    string;
  description: string;
  language: string;
  topics:   string[];
  repo_url: string;
  live_url: string | null;
}

export async function GET(): Promise<NextResponse> {
  try {
    const filePath = path.join(process.cwd(), "data", "github-projects-metadata.json");
    const raw = await readFile(filePath, "utf8");
    const items: RawProject[] = JSON.parse(raw);

    const projects: Project[] = items.map((item) => ({
      title:       slugToTitle(item.title),
      description: item.description,
      language:    item.language,
      tags:        tagsForSlug(item.title, item.language, item.topics),
      repo_url:    item.repo_url,
      live_url:    item.live_url,
      imageUrl:    IMAGE_MAP[item.title] ?? DEFAULT_IMAGE,
    }));

    return NextResponse.json(projects, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    console.error("[GET /api/works] Failed to load project metadata:", err);
    return NextResponse.json(
      { error: "Could not load project data. Make sure data/github-projects-metadata.json exists." },
      { status: 500 }
    );
  }
}
