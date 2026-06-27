import sharp from "sharp";

const input = "public/images/ks-logo.webp";
const output = "public/images/ks-logo-transparent.webp";

const { data, info } = await sharp(input)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.alloc(width * height * 4);

for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  // Use brightness as alpha. Subtract a floor so the near-black background
  // fully clears, then boost so the metallic letters stay solid.
  const a = Math.max(0, Math.min(255, (lum - 18) * 1.3));
  out[j] = r;
  out[j + 1] = g;
  out[j + 2] = b;
  out[j + 3] = a;
}

await sharp(out, { raw: { width, height, channels: 4 } })
  .webp({ quality: 95, alphaQuality: 100, lossless: true })
  .toFile(output);

const m = await sharp(output).metadata();
console.log("written", output, m.width + "x" + m.height, "hasAlpha", m.hasAlpha);
