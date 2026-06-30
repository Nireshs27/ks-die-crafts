import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(__dirname, "..", "public", "images", "favicon-logo.webp");
const appDir = path.join(__dirname, "..", "app");

const trimmed = await sharp(source)
  .trim({ threshold: 10 })
  .png()
  .toBuffer();

const icon32 = await sharp(trimmed)
  .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toBuffer();

const icon180 = await sharp(trimmed)
  .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toBuffer();

await writeFile(path.join(appDir, "icon.png"), icon32);
await writeFile(path.join(appDir, "apple-icon.png"), icon180);
await writeFile(path.join(appDir, "favicon.ico"), await pngToIco(icon32));

console.log("Generated app/icon.png, app/apple-icon.png, app/favicon.ico");
