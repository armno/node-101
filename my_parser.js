var Parser = require('./parser');
var fs = require('fs');

fs.readFile('log.txt', function(err, logData) {

	if (err) {
		throw err;
	}

	// logData is a Buffer, converting to a string
	var text = logData.toString();
	var parser = new Parser();
	console.log(parser.parse(text));
});