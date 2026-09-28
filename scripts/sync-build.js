import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const docsDir = path.resolve('docs');
const assetsDir = path.resolve('assets');

if (fs.existsSync(distDir)) {
  // Sync dist to docs
  fs.cpSync(distDir, docsDir, { recursive: true, force: true });

  // Sync dist/assets to root assets
  const distAssets = path.join(distDir, 'assets');
  if (fs.existsSync(distAssets)) {
    fs.cpSync(distAssets, assetsDir, { recursive: true, force: true });
  }

  // Backup source index.html if not already backed up
  if (!fs.existsSync('index.source.html') && fs.existsSync('index.html')) {
    fs.copyFileSync('index.html', 'index.source.html');
  }

  // Copy compiled index.html to root
  fs.copyFileSync(path.join(distDir, 'index.html'), 'index.html');
  console.log('Build output successfully synced to root and docs folder.');
}
