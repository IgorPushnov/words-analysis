const readWorld = require('./readfiles.js');
const calculateWordsStatistic = require('./analysis.js');


console.log(calculateWordsStatistic(readWorld('testData')));