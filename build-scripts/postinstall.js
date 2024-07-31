const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach((element) => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

const srcDir = path.join(__dirname, '..', 'data');
const destDir = path.join(__dirname, '..', '..', 'public', 'data');

// Check if the environment is a client-side application
const isClientSide =
  fs.existsSync(path.join(__dirname, '..', 'next.config.js')) ||
  fs.existsSync(path.join(__dirname, '..', 'public'));

if (isClientSide) {
  copyFolderSync(srcDir, destDir);
  console.log('Data files copied to public directory');
} else {
  console.log('Skipping copying data files to public directory');
}
