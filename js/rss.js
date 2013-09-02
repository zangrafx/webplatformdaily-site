// These functions are used in the markdown:rss task
// to generate the RSS XML file from latest.md
// (see Gruntfile.js)

exports.preCompile = function (src) {
	return src
			.replace(/\[@(\w+)\]\(\)/g, '[@$1](http://twitter.com/$1)')
			.replace(/\/img\//g, 'http://webplatformdaily.org/img/');
};

exports.postCompile = function (src) {
	var res = '';

	src.split('<h2>').slice(1).forEach(function (val) {
		val = '<h2>' + val;

		var title = (val.match(/<h2>(.+)<\/h2>/) || {})[1];
		var id = 'http://webplatformdaily.org/#' + escape(title.replace(/[ ,]/g, ''));

		res += '<item>\n' +
			'<title>Web Platform Daily: ' + title + '</title>\n' +
			'<link>' + id + '</link>\n' +
			'<guid>' + id + '</guid>\n' +
			'<description><![CDATA[' + val + ']]></description>\n' +
		'</item>\n';
	});

	return res;
}