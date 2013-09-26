module.exports = function (grunt) {
	grunt.registerTask('validate', function () {
		var text = grunt.file.read('content/generated/latest.temp.md');
		var empty_url = /\[([^@\]]*)\]\(\)/.exec(text);

		if (empty_url) grunt.fatal('Empty link detected with text: ' + empty_url[1]);
	});
};