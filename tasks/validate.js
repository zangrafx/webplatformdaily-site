module.exports = function (grunt) {
	grunt.registerTask('validate', function () {
		var text = grunt.file.read('content/generated/latest.temp.md');
		var missing_url = /\[([^@\]]*)\]\(\)/.exec(text);

		if (missing_url) grunt.fatal('Missing URL detected in link with text: ' + missing_url[1]);
	});
};