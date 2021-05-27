test('check simple text statistic', () => {
	const testText = "Some test text, lala, test";
	expect(calculateWordsStatistic(testText)).toEqual({ 'some': 1, 'test': 2, 'text': 1, 'lala': 1 });
})