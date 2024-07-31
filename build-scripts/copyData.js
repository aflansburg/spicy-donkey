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
const destDirDist = path.join(__dirname, '..', 'dist', 'data');
const destDirPublic = path.join(__dirname, '..', 'public', 'data');

copyFolderSync(srcDir, destDirDist);
copyFolderSync(srcDir, destDirPublic);

console.log('Data files copied to dist and public directories');
