const fs = require('fs');

const textExample = fs.readFileSync('testData/dog.css').toString();

function calculateWordsStatistic(text) {
  function parseWords(str) {
    return str.split(" ").join(" ").replace(/\<+.+?(?=\>)|\>|\/|\W|\s/g, " ").replace(/\s+/g, " ").split(" ");
  }

  function collectStatistic(array) {
    var statistic = {};
    array.forEach(function (x) { statistic[x] = (statistic[x] || 0) + 1; });
    return statistic;
  }
  return collectStatistic(parseWords(text));
}

// console.log(textExample);
console.log(calculateWordsStatistic(textExample));
