const readWords = require('./readfiles.js');
const calculateWordsStatistic = require('./analysis.js');

console.log(calculateWordsStatistic(readWords('testData')));

