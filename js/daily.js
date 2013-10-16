jQuery(function ( $ ) {
    'use strict';

    var converter,      // the Markdown converter object
        $dataWrapper,   // the DOM element that wraps the HTML generated from Markdown
        $article,       // the <article> element (i.e. the entire page)
        jqXHR,          // the jQuery Ajax object used for retrieving MD files

        // functions (commented below)
        processData;


    // request the data as soon as possible
    jqXHR = $.get( '/content/generated/main.md' );


    // FUNCTION DEFINITIONS

    // converts the Markdown text to HTML and appends it to the page
    // this is an Ajax response handler; "data" is Markdown text
    processData = function ( data ) {
        // temporary document fragment (to hold the DOM tree generated from the MD file)
        var $temp = $( '<div></div>' ).html( converter.makeHtml( data ) );

        // make all links open in new tabs
        // add corresponding twitter URLs to all links whose text starts with "@"
        $temp.find( 'a' ).attr({ target: '_blank' }).each(function () {
            if ( this.innerHTML.charAt( 0 ) === '@' ) {
                this.href = 'http://twitter.com/' + this.innerHTML.slice( 1 );
                $( this ).addClass( 'twitter-link' );
            }
        });

        // add classes to the ULs; add category labels
        $temp.children( 'ul' ).each(function () {
            $( this ).addClass( 'multi-level' );

            // creating the labels
            $( this ).children().each(function () {
                $( $( this ).contents()[ 0 ] ).replaceWith(function () {
                    return '<div class="list-label">' + this.data + '</div>';
                });
            });
        });

        $temp.children( 'h2' ).each(function () {
            var filename = (new Date(this.innerHTML.trim().replace(/\w{2},/, ',') + ' 12:00 UTC')).toISOString().slice(0,10);

            // add an id attribute to the H2 elements (fragment identifier)
            $(this).attr('id','#' + this.innerHTML.replace(/[ ,]/g, '')); // TODO: Test in production!

            // append "Edit on GitHub" link to the H2 elements
            $(this).append([
                ' <a class="edit-button" href="https://github.com/simevidas/webplatformdaily-site/blob/master/content/dailies/',
                filename,
                '.md" target="_blank">Edit on GitHub</a>'
            ].join(''));

            $( this ).next( 'ul' ).andSelf().wrapAll( '<section />' );
        });

        $dataWrapper.append( $temp.children() );
    };


    // INITIALIZATION

    // initialize the static references
    $article = $( 'body' ).children( 'article:first' );
    $dataWrapper = $( '.markdown-data:first' );
    converter = new Markdown.Converter();

    // hook up callbacks for the initial Ajax request
    jqXHR.then( processData );

});