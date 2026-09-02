const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'out');

if (!fs.existsSync(outDir)) {
  console.error('Error: "out" directory does not exist. Run "next build" first.');
  process.exit(1);
}

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    for (const file of files) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy files from out/ to rootDir (excluding sensitive / source dirs)
const files = fs.readdirSync(outDir);
for (const file of files) {
  const srcPath = path.join(outDir, file);
  const destPath = path.join(rootDir, file);
  copyRecursive(srcPath, destPath);
}

// Create .nojekyll in root to bypass Jekyll processing on GitHub Pages
fs.writeFileSync(path.join(rootDir, '.nojekyll'), '');

console.log('Successfully deployed Next.js static build to root for GitHub Pages!');
