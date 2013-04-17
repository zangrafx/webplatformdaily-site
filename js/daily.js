jQuery(function ( $ ) {
    'use strict';

    var converter,      // the Markdown converter object
        $dataWrapper,   // the DOM element that wraps the HTML generated from Markdown
        $menu,          // the list of dailies in the top right of the page
        $article,       // the <article> element (i.e. the entire page)
        $headers,       // those <h2> elements that represent dailies
        data,           // the Markdown text (retrieved via Ajax)
        jqXHR,          // the jQuery Ajax object used for retrieving MD files
        countFiles,     // counts how many times MD files were requested

        // functions (commented below)
        processData,
        createMenu;


    // request the data as soon as possible
    jqXHR = $.get( '/data/latest.md' );


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

        $temp.children( 'h2' ).slice( 1 ).append( ' <a class="edit-button" href="https://github.com/simevidas/webplatformdaily-site/edit/master/data/latest.md" target="_blank">Edit on GitHub</a>' );

        $dataWrapper.append( $temp.children() );
        countFiles += 1;
    };

    // populates the $menu element
    createMenu = function () {
        var $items;

        // the <h2> elements excluding the "Sticky" header
        $headers = $dataWrapper.children( 'h2' ).slice( 1 );

        // creating a corresponding <li> element for each <h2>
        $items = $headers.map(function () {
            var text = $( this ).text();
            return $( '<li>' + text.slice( 0, text.indexOf( ',' ) ) + '</li>' )[0];
        });

        // populating the $menu element with a "Top" item, and one item per daily
        $menu.hide().empty().append( '<li id="menu-to-top">Top</li>' ).append( $items );
        if ( countFiles === 1 ) { $menu.append( '<li id="menu-load-archive">Load all</li>' ); }

        // trigger a "resize" event in order to set the "left" position of $menu
        $( window ).triggerHandler( 'resize' );

        // $menu has been populated and positioned; it's ready to be displayed
        $menu.show();
    };


    // INITIALIZATION

    // initialize the static references
    $article = $( 'body' ).children( 'article:first' );
    $dataWrapper = $( '.md-data:first' );
    $menu = $( '.daily-menu:first' );
    converter = new Markdown.Converter();
    countFiles = 0;


    // EVENT HANDLERS

    // clicking on $menu item scrolls page to corresponding daily
    $menu.on( 'click', 'li', function () {
        switch ( this.id ) {
            case 'menu-load-archive':
                $.get( '/data/archive.md' ).then( processData ).then( createMenu ); break;
            case 'menu-to-top':
                scrollTo( 0, 0 ); break;
            default:
                scrollTo( 0, $headers.eq( $( this ).index() - 1 ).position().top + 16 );
        }
    });

    // the $menu is horizontally repositioned on window "resize"
    $( window ).on( 'resize', function () {
        $menu.css({ left: $article.offset().left + $article.outerWidth() + 16 });
    });

    // hook up callbacks for the initial Ajax request
    jqXHR.then( processData ).then( createMenu );

});