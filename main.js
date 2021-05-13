const textExample = "Hello world Hello all";

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

console.log(calculateWordsStatistic(textExample));
