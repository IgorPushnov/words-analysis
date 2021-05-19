const fs = require('fs');
const path = require('path');

const folderPath = 'testData';
const pathFiles = fs.readdirSync(folderPath).map(fileName => path.join(folderPath, fileName));
const textsForAnalysis = pathFiles.map(pathToFile => fs.readFileSync(pathToFile, 'utf-8'));

function readFiles(folder) {
  folder.forEach(function (arrayElement) {
    const textExample = fs.readFileSync(arrayElement, 'utf-8');
    textsForAnalysis.push(textExample);
    return textsForAnalysis;
  });
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
readFiles(pathFiles);
// console.log(textExample1);
// console.log(textExample2);
// console.log(textExample3);
// console.log(textsForAnalysis);
console.log(calculateWordsStatistic(textsForAnalysis));
