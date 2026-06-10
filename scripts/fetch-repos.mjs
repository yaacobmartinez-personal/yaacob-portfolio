/**
 * Fetch all public repos from yaacobmartinez-personal and write
 * data/github-projects-metadata.json.
 *
 * Usage:  node scripts/fetch-repos.mjs
 *
 * Repos excluded: yaacob-portfolio (the site itself), portfolio (old Vue site)
 * Forks are also excluded.
 */

import { writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "data", "github-projects-metadata.json");

const EXCLUDE = new Set(["yaacob-portfolio", "portfolio"]);

const res = await fetch(
  "https://api.github.com/users/yaacobmartinez-personal/repos?type=public&sort=updated&per_page=100",
  { headers: { Accept: "application/vnd.github+json" } }
);

if (!res.ok) {
  console.error(`GitHub API error: ${res.status} ${res.statusText}`);
  process.exit(1);
}

const repos = await res.json();

const projects = repos
  .filter((r) => !r.fork && !EXCLUDE.has(r.name))
  .map((r) => ({
    title:       r.name,
    description: r.description ?? "",
    language:    r.language ?? "JavaScript",
    topics:      r.topics ?? [],
    repo_url:    r.html_url,
    live_url:    r.homepage || null,
  }));

await writeFile(OUT, JSON.stringify(projects, null, 2));
console.log(`✓ Wrote ${projects.length} repos to data/github-projects-metadata.json`);
projects.forEach((p) => console.log(`  · ${p.title}`));
