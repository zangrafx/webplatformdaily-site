module.exports = function (grunt) {
	grunt.registerTask('merge', function () {
		var today = new Date,
			year = today.getFullYear(),
			month = today.getMonth() + 1,
			day = today.getDate(),
			month_names_arr = ['January', 'February', 'March', 'April', 'May', 'June',
					'July', 'August', 'September', 'October', 'November', 'December'],
			path,
			content,
			counter = 0,
			result = '';

		// adds one leading zero to one-digit numbers
		function z(n) {
			return n > 9 ? n : '0' + n;
		}

		// returns the suffix for the day number, e.g. 'nd' for 22
		function suffix(n) {
			if (Math.floor(n/10) === 1) return 'th';
			switch (n % 10) {
				case 1: return 'st';
				case 2: return 'nd';
				case 3: return 'rd';
				default: return 'th';
			} 
		}

		loop: while (year >= 2013) {
			while (month > 0) {
				while (day > 0) {
					path = 'content/dailies/' + year + '-' + z(month) + '-' + z(day) + '.md';
					if (grunt.file.exists(path)) {
						content = grunt.file.read(path);
						content = '## ' + month_names_arr[month-1] + ' ' + day + suffix(day) + ', ' + year + '\n\n' + content;
						result += content + '\n\n';

						counter++;
						if (counter === 20) {
							grunt.file.write('content/dailies/latest.md', result);
							result = '';
						}

						if (year === 2013 && month === 3 && day === 15) break loop;
					}
					day--;
				}
				month--;
				day = 31;
			}
			year--;
			month = 12;
		}

		grunt.file.write('content/dailies/archive.md', result);
	});
};