import sharp from "sharp";
import path from "node:path";
import os from "node:os";

const src = path.join(os.homedir(), "Downloads", "profile-ai.png");
const outDir = path.join(process.cwd(), "public");

// Display width in the hero is ~460px; generate a 2x source (920px) so
// next/image can derive sharp responsive variants. Portrait stays 1792x2200 ratio.
const TARGET_W = 920;

const base = sharp(src).resize({ width: TARGET_W, withoutEnlargement: true });

await base
  .clone()
  .webp({ quality: 82, effort: 6 })
  .toFile(path.join(outDir, "yaacob-portrait.webp"));

await base
  .clone()
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toFile(path.join(outDir, "yaacob-portrait.jpg"));

const meta = await sharp(src).metadata();
console.log(`source: ${meta.width}x${meta.height}`);
for (const f of ["yaacob-portrait.webp", "yaacob-portrait.jpg"]) {
  const info = await sharp(path.join(outDir, f)).metadata();
  console.log(`${f}: ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
