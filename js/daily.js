jQuery(function ( $ ) {
    'use strict';

    var converter,      // the Markdown converter object
        jqXHR;          // the jQuery Ajax object used for retrieving MD files


    // request the data as soon as possible
    jqXHR = $.get( '/content/generated/main.md' );


    // INITIALIZATION

    // tabbed navigation
    function initTabs () {
        var tabs = $('.main-tabs'),
            content = tabs.next(),
            active = 'active';

        tabs.on('click', 'li:not(.active)', function (e) {
            var tab = $(e.target),
                index = tab.index();

            tabs.children().removeClass(active);
            tab.addClass(active);

            content.children().hide().eq(index).show();
        });

        tabs.show().children().first().click();
    }


    // initialize the static references
    converter = new Markdown.Converter();


    // hook up the callback for the initial Ajax request
    jqXHR.then(function ( data ) {
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
            $(this).attr('id','#' + this.innerHTML.replace(/[ ,]/g, '')); // TODO: Test in production once you start serving static HTML

            // append "Edit on GitHub" link to the H2 elements
            $(this).append([
                ' <a class="edit-button" href="https://github.com/simevidas/webplatformdaily-site/blob/master/content/dailies/',
                filename,
                '.md" target="_blank">Edit on GitHub</a>'
            ].join(''));

            // wrap dailies in <section> elements
            $( this ).next( 'ul' ).andSelf().wrapAll( '<section />' );
        });

        $( '.markdown-data' ).html( $temp.children() );

        initTabs();
    });

});