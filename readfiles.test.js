const fs = require('fs');
const readFiles = require('./readfiles.js');


test('display the contents of the file as text', () => {
	expect(readFiles('testData')).toEqual([fs.readFileSync('testData/cat.html', 'utf-8') + fs.readFileSync('testData/dog.css', 'utf-8') + fs.readFileSync('testData/util.js', 'utf-8') + fs.readFileSync('testData/world.txt', 'utf-8')]);
});
