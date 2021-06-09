const fs = require('fs');

function readFiles(folderPath, pathFiles) {
  pathFiles = pathFiles || [];
  var files = fs.readdirSync(folderPath);
  for (var i in files) {
    var name = folderPath + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      readFiles(name, pathFiles);
    } else {
      pathFiles.push(name);
    }
  }
  return pathFiles.map(pathToFile => fs.readFileSync(pathToFile, 'utf-8'));
}

module.exports = readFiles;
