const fs = require('fs');
const path = require('path');

if (fs.existsSync('dist/assets')) {
  if (!fs.existsSync('assets')) {
    fs.mkdirSync('assets');
  }
  const files = fs.readdirSync('dist/assets');
  for (const file of files) {
    fs.copyFileSync(path.join('dist/assets', file), path.join('assets', file));
    console.log('Copied asset:', file);
  }
}

if (fs.existsSync('dist/index.html')) {
  fs.copyFileSync('dist/index.html', 'index.html');
  console.log('Copied dist/index.html to index.html');
}
