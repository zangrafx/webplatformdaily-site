// bookmarklet for extracting a sequence of Twitter handles from the webplatformdaily.org page (load all data first)
// e.g. "@foo", "@bar", "@baz"
// used for auto completion in Sublime Text
(function () {
    var a = [];
    $( 'a' ).each(function () {
        var text = this.innerHTML, text2;
        if ( text.indexOf( '@' ) === 0 && text.length > 1 ) {
            text2 = '\"' + text + '\"';
            if ( a.indexOf( text2 ) === -1 ) a.push( text2 );
        }
    });
    prompt( '', a.sort() );
}());