import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const sourceRoot = path.join(projectRoot, "assets", "source");
const outputRoot = path.join(projectRoot, "public", "images");
const assets = [
  { source: "helena-perfil.jpg", name: "helena-barem-retrato" },
  { source: "cilios-efeito-ultra.jpg", name: "helena-barem-efeito-ultra" },
  { source: "sobrancelhas-nanoblanding.jpg", name: "helena-barem-nanoblanding" },
  { source: "cilios-efeito-gatinho.jpg", name: "helena-barem-efeito-gatinho" },
  { source: "sobrancelhas-volume-6d.jpg", name: "helena-barem-brow-lamination-volume-6d" },
  { source: "maquiagem-profissional.jpg", name: "helena-barem-maquiagem-profissional" },
];

await fs.mkdir(outputRoot, { recursive: true });

for (const asset of assets) {
  const input = path.join(sourceRoot, asset.source);
  const metadata = await sharp(input).metadata();
  const originalWidth = metadata.width ?? 1200;
  const largestWidth = Math.min(originalWidth, 1200);
  const widths = [...new Set([480, 800, largestWidth].filter((width) => width <= largestWidth))];

  for (const width of widths) {
    const base = sharp(input).rotate().resize({ width, fit: "inside", withoutEnlargement: true });
    await base.clone().webp({ quality: 80, effort: 5 }).toFile(path.join(outputRoot, asset.name + "-" + width + ".webp"));
    await base.clone().avif({ quality: 54, effort: 6 }).toFile(path.join(outputRoot, asset.name + "-" + width + ".avif"));
  }

  console.log(asset.name + ": " + widths.join(", ") + " px");
}
