const fs = require('fs');
const readFiles = require('./readfiles.js');
const { EOL } = require('os');

test('display the contents of the file as text', () => {
	const result = readFiles('testData/simpleTestData');

	expect(result.length).toEqual(3);
	expect(result).toContain("some text!");
	expect(result).toContain(`Text line 1${EOL}Text line 2`);
	expect(result).toContain("console.log(\"Hello\");");
});