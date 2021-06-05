const fs = require('fs');
const path = require('path');

function readFiles(folderPath) {
  const pathFiles = fs.readdirSync(folderPath).map(fileName => path.join(folderPath, fileName));
  return pathFiles.map(pathToFile => fs.readFileSync(pathToFile, 'utf-8'));
}
module.exports = readFiles;
