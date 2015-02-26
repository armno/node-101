var fs = require('fs');

fs.readFile('log.txt', function(err, logData) {

	if (err) {
		throw err;
	}

	// logData is a Buffer, converting to a string
	var text = logData.toString();

	var results = {};

	var lines = text.split('\n');

	lines.forEach(function(line) {
		var parts = line.split(' ');
		var letter = parts[1];
		var count = parseInt(parts[2], 10);

		if (!results[letter]) {
			results[letter] = 0;
		}

		results[letter] += parseInt(count, 10);
	});

	console.log(results);
});