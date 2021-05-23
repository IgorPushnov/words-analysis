const fs = require('fs');
const path = require('path');

function readFiles(folderPath) {
  const pathFiles = fs.readdirSync(folderPath).map(fileName => path.join(folderPath, fileName));
  return pathFiles.map(pathToFile => fs.readFileSync(pathToFile, 'utf-8'));
}

function calculateWordsStatistic(objectForAnalysis) {
  function parseWords(str) {
    return str.replace(/\<+.+?(?=\>)|\>|\/|\W|\s/g, " ").replace(/\s+/g, " ").split(" ");
  }

  function collectStatistic(array) {
    var statistic = {};
    array.forEach(function (x) { statistic[x] = (statistic[x] || 0) + 1; });
    return statistic;
  }
  return collectStatistic(parseWords(objectForAnalysis.toString()));
}

console.log(calculateWordsStatistic(readFiles('testData')));

