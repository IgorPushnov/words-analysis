const fs = require('fs');

const array = fs.readFileSync('dog.css').toString().split(" ");
// for (i in array) {
//   console.log(array[i]);
// }

const textExample = array.join(" ");

function calculateWordsStatistic(text) {
  function parseWords(str) {
    return str.split(" ");
  }

  function collectStatistic(array) {
    var statistic = {};
    array.forEach(function (x) { statistic[x] = (statistic[x] || 0) + 1; });
    return statistic;
  }
  return collectStatistic(parseWords(text));
}

console.log(textExample);
// console.log(calculateWordsStatistic(textExample));
