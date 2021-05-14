var fs = require('fs');

//function
function createFile(filePath, fileContent) {
	fs.appendFile(filePath, fileContent, function (err) {
		if (err) throw err;
		console.log('Saved!');
	});
}

module.exports = createFile;