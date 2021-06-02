const calculateWordsStatistic = require('./analysis.js');

test('check simple text statistic', () => {
	const testText = "some Test text, lala, test";
	expect(calculateWordsStatistic(testText)).toEqual({ 'some': 1, 'test': 2, 'text': 1, 'lala': 1 });
});


