// Parser.js, refactored version
var Parser = function() {

};

Parser.prototype.parse = function(text) {
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

	return results;
};

module.exports = Parser;
