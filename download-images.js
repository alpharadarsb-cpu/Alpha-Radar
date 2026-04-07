// ─────────────────────────────────────────────────────────────
//  Run this ONCE to download all images from your live site
//  
//  Step 1: Open terminal
//  Step 2: cd alpha-radar-clean-new\src\frontend
//  Step 3: node download-images.js
//  Step 4: npx vite
// ─────────────────────────────────────────────────────────────

const https = require("https");
const fs = require("fs");
const path = require("path");

const BASE = "https://holy-olive-92s-draft.caffeine.xyz";

const images = [
  // Hero & backgrounds
  "assets/generated/hero-bg-unified.dim_1920x1080.jpg",
  "assets/generated/why-important-bg.dim_1600x900.jpg",
  // Service card images (homepage)
  "assets/generated/service-business-growth-v3.dim_800x500.jpg",
  "assets/generated/service-revenue-opt-new.dim_800x500.jpg",
  "assets/generated/service-leadership-v3.dim_800x500.jpg",
  "assets/generated/service-performance-new.dim_800x500.jpg",
  "assets/generated/service-systems-new.dim_800x500.jpg",
  "assets/generated/service-execution-new.dim_800x500.jpg",
  // Service page hero banners
  "assets/generated/service-hero-business-growth-v2.dim_1400x500.jpg",
  "assets/generated/service-hero-revenue-v2.dim_1400x500.jpg",
  "assets/generated/service-hero-leadership-v2.dim_1400x500.jpg",
  "assets/generated/service-hero-performance-v2.dim_1400x500.jpg",
  "assets/generated/service-hero-systems-v2.dim_1400x500.jpg",
  "assets/generated/service-hero-execution-v2.dim_1400x500.jpg",
];

let done = 0;
const total = images.length;

console.log(`\n📥 Downloading ${total} images from your live site...\n`);

function download(imgPath) {
  const url = `${BASE}/${imgPath}`;
  const dest = path.join(__dirname, "public", imgPath);
  const dir = path.dirname(dest);

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const file = fs.createWriteStream(dest);

  https.get(url, (res) => {
    if (res.statusCode === 200) {
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        const kb = (fs.statSync(dest).size / 1024).toFixed(0);
        const name = path.basename(imgPath);
        console.log(`  ✅  ${name}  (${kb} KB)`);
        done++;
        if (done === total) {
          console.log("\n🎯 All images downloaded successfully!");
          console.log("👉 Now run:  npx vite\n");
        }
      });
    } else {
      console.log(`  ❌  ${path.basename(imgPath)}  — HTTP ${res.statusCode}`);
      done++;
    }
  }).on("error", (err) => {
    console.log(`  ❌  ${path.basename(imgPath)}  — ${err.message}`);
    done++;
  });
}

images.forEach(download);
