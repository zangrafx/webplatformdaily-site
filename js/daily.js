jQuery(function ( $ ) {
    'use strict';

    var converter,      // the Markdown converter object
        $dataWrapper,   // the DOM element that wraps the HTML generated from MD
        $menu,          // the list of dailies in the top right of the page
        $article,       // the <article> element (i.e. the entire page)
        data;           // the Markdown text (retrieved via Ajax)

    // initializing the static references
    $article = $( 'body' ).children( 'article:first' );
    $dataWrapper = $( '.md-data:first' );
    $menu = $( '.daily-menu:first' );
    converter = new Markdown.Converter();

    $.get( '/data/latest.md', function ( data ) {
        var html = converter.makeHtml( data ),
            $temp = $( '<div></div>' ).html( html ); // serves as temporary document fragment (to hold the DOM tree generated from the MD file)

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
            if ( $( this ).children().children( 'ul' )[ 0 ] ) { // is it a multi-level list
                $( this ).addClass( 'multi-level' );

                // creating the labels
                $( this ).children().each(function () {
                    $( $( this ).contents()[ 0 ] ).replaceWith(function () {
                        return '<div class="list-label">' + this.data + '</div>';
                    });
                });
            }
        });

        // quick access menu
        (function () {
            var $headers  = $temp.children( 'h2' ).slice( 1 );

            $headers.map(function () {
                var text = $( this ).text();
                return $( '<li>' + text.slice( 0, text.indexOf( ',' ) ) + '</li>' )[0];
            }).appendTo( $menu );

            $menu.on( 'click', 'li', function () {
                var index = $( this ).index();
                var vPos = index === 0 ? 0 : $headers.eq( index - 1 ).position().top + 16;
                scrollTo( 0, vPos );
            });

            $( window ).on( 'resize', function () {
                $menu.css({ left: $article.offset().left + $article.outerWidth() + 16 });
            }).triggerHandler( 'resize' );
        }());

        $dataWrapper.append( $temp.children() );

        // the content is displayed only at the end to avoid unnecessary re-flows
        $dataWrapper.show();
        $menu.show();
    });
});