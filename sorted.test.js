const sortedStatistic = require('./sorted.js');

test('check sorted text statistic', () => {
	const sortText = { 'some': 1, 'test': 12, 'text': 7, 'lala': 4 };
	expect(sortedStatistic(sortText)).toEqual({ 'test': 12, 'text': 7, 'lala': 4, 'some': 1 });
});