const readWorld = require('./readfiles.js');

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

console.log(calculateWordsStatistic(readWorld('testData')));

