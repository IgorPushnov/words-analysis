const readFiles = require('./readfiles.js');
const calculateWordsStatistic = require('./analysis.js');
const sortedStatistic = require('./sorted.js');

console.log(sortedStatistic(calculateWordsStatistic(readFiles('testData/mainTestData'))));

