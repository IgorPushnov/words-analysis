function calculateWordsStatistic(objectForAnalysis) {
  function parseWords(str) {
    return str.replace(/([A-Z])/g, " $1").replace(/\<+.+?(?=\>)|\>|\/|[^a-zA-Z ]|\s+/g, " ").toLowerCase().split(" ");
  }

  function collectStatistic(array) {
    const statistic = {};
    array.forEach(function (x) { statistic[x] = (statistic[x] || 0) + 1; });
    return statistic;
  }
  return collectStatistic(parseWords(objectForAnalysis.toString()));
}

module.exports = calculateWordsStatistic;

