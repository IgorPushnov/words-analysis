const calculateWordsStatistic = require('./analysis.js');
const readWords = require('./readfiles.js');

test('check simple text statistic', () => {
	const testText = "some Test text, lala, test";
	expect(calculateWordsStatistic(testText)).toEqual({ 'some': 1, 'test': 2, 'text': 1, 'lala': 1 });
});

test('check simple text statistic', () => {
	const analysisData = "analysisData";
	expect(readWords(analysisData)).toEqual(['h1 {\r\n\tcolor: green;\r\n}\r\n/* block */\r\ndiv {\r\n\twidth: 148px;\r\n}']);
});

