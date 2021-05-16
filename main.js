const fs = require('fs');

const textExample1 = fs.readFileSync('testData/cat.html', 'utf-8');
const textExample2 = fs.readFileSync('testData/dog.css', 'utf-8');
const textExample3 = fs.readFileSync('testData/world.txt', 'utf-8');
const addText = new Array(textExample1, textExample2, textExample3);

function calculateWordsStatistic(text) {
  function parseWords(str) {
    return str.toString().replace(/\<+.+?(?=\>)|\>|\/|\W|\s/g, " ").replace(/\s+/g, " ").split(" ");
  }

  function collectStatistic(array) {
    var statistic = {};
    array.forEach(function (x) { statistic[x] = (statistic[x] || 0) + 1; });
    return statistic;
  }
  return collectStatistic(parseWords(text));
}

// console.log(textExample1);
// console.log(textExample2);
// console.log(textExample3);
// console.log(addText);
console.log(calculateWordsStatistic(addText));
