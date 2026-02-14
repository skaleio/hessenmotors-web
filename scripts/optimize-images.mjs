import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

// Opcional: subcarpeta, ej. "MG" para solo optimizar imágenes del MG
const SUBFOLDER = process.argv[2] || "";
const ROOT_DIR = path.resolve(
  "src/assets/Fotos Vehículos_ Hessen Motors",
  SUBFOLDER
);
const MAX_WIDTH = 1600;
const QUALITY = 75;
const MIN_SIZE_BYTES = 250 * 1024;

const isJpeg = (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  return ext === ".jpg" || ext === ".jpeg";
};

const walk = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile() && isJpeg(fullPath)) {
      files.push(fullPath);
    }
  }
  return files;
};

const optimizeImage = async (filePath) => {
  try {
    const stats = await fs.stat(filePath);
    if (stats.size < MIN_SIZE_BYTES) {
      return { skipped: true, reason: "small" };
    }

    const image = sharp(filePath);
    const metadata = await image.metadata();
    const resizeNeeded = metadata.width && metadata.width > MAX_WIDTH;
    // Si se pasó una subcarpeta (ej. MG), siempre comprimir; si no, omitir archivos ya pequeños
    const forceOptimize = !!SUBFOLDER;
    if (!forceOptimize && !resizeNeeded && stats.size < MIN_SIZE_BYTES * 2) {
      return { skipped: true, reason: "small-enough" };
    }

    const buffer = await image
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();

    const tempPath = `${filePath}.opt`;
    await fs.writeFile(tempPath, buffer);
    try {
      await fs.rename(tempPath, filePath);
    } catch (renameError) {
      await fs.unlink(tempPath);
      throw renameError;
    }
    const after = await fs.stat(filePath);
    return { skipped: false, before: stats.size, after: after.size };
  } catch (error) {
    return { skipped: true, reason: "error", error };
  }
};

const formatSize = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

const run = async () => {
  console.log(`Optimizando imágenes en: ${ROOT_DIR}`);
  const files = await walk(ROOT_DIR);
  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;
  let skipped = 0;

  for (const filePath of files) {
    const stats = await fs.stat(filePath);
    totalBefore += stats.size;
    const result = await optimizeImage(filePath);
    if (result.skipped) {
      skipped += 1;
      if (result.reason === "error") {
        console.warn(`SKIP (error): ${path.relative(ROOT_DIR, filePath)}`);
      }
      continue;
    }
    processed += 1;
    totalAfter += result.after;
    console.log(
      `OK: ${path.relative(ROOT_DIR, filePath)} ${formatSize(result.before)} -> ${formatSize(result.after)}`
    );
  }

  const totalAfterSafe = totalAfter || totalBefore;
  console.log(`\nProcesadas: ${processed}, Omitidas: ${skipped}`);
  console.log(`Total antes: ${formatSize(totalBefore)}`);
  console.log(`Total después: ${formatSize(totalAfterSafe)}`);
};

run().catch((error) => {
  console.error("Error al optimizar imágenes:", error);
  process.exit(1);
});
