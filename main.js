const readFiles = require('./readfiles.js');
const calculateWordsStatistic = require('./analysis.js');

console.log(calculateWordsStatistic(readFiles('testData/mainTestData')));

