const readWorld = require('./main');
const calculateWordsStatistic = require('./main');

test('string in the number of words', () => {
	expect(calculateWordsStatistic(readWorld('testData')).toEqual
		({
			'Document' : 1,
			'New' : 2,
			'story' : 2,
			'h1' : 1,
			'color' : 1,
			'green' : 2,
			'block' : 1,
			'div' : 1,
			'width' : 1,
			'148px' : 1,
			'var' : 1,
			'fs' : 3,
			'require' : 1,
			'function' : 3,
			'createFile' : 2,
			'filePath' : 2,
			'fileContent' : 2,
			'appendFile' : 1,
			'err' : 3,
			'if' : 1,
			'throw' : 1,
			'console' : 1,
			'log' : 1,
			'Saved' : 1,
			'module' : 1,
			'exports' : 1,
			'Hello' : 2,
			'world' : 1,
			'all' : 1
		})
	)
})