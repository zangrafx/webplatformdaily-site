The source code of this web-site is [on GitHub](https://github.com/simevidas/webplatformdaily-site). This includes all the data (which is in Markdown files). The README file of the repository also serves as a FAQ. Refer to it for information about this web-site.
 
## Sticky

 - **Dear publishers:** Every article should have an *easily digestible intro paragraph*. [tweet](https://twitter.com/simevidas/status/332853743676690435) ![][*]
 - Recommended *Twitter* feeds: [@remotesynth](), [@codepo8](), [@smashingmag]()
 - ![][>] *Google Developers* Live (live presentations) [link](https://developers.google.com/live/)
 - *Feeds* (w/ OMPL files) by [@paul_irish](): frontend [link](http://www.google.com/reader/bundle/user%2F11165870484951445324%2Fbundle%2Ffrontend), standards+browsers [link](http://www.google.com/reader/bundle/user%2F11165870484951445324%2Fbundle%2Ffrontend-standards%2Bbrowsers), webapps [link](http://www.google.com/reader/bundle/user%2F11165870484951445324%2Fbundle%2Ffrontend-webapps)

## May 30th, 2013

 - News
   - The *`<subline>` element* (a HTML5 extension spec), [@stevefaulkner]()’s unofficial [draft](https://rawgithub.com/w3c/subline/master/index.html) + [post](http://lists.w3.org/Archives/Public/public-html/2013May/0173.html)
   - Opera switching to a *fast release cycle* and will have 3 streams: Developer, Next, and Stable [post](http://my.opera.com/desktopteam/blog/opera-features-and-release-cycle)
   - Blink to start *removing `-webkit-` prefixes* from CSS [post](https://groups.google.com/a/chromium.org/d/msg/blink-dev/6DJaIAKD4qc/Z3rL2i7COZQJ)
   - EFF makes formal objection to *DRM in HTML5* [post](https://www.eff.org/press/releases/eff-makes-formal-objection-drm-html5)
 - FYI
   - Be careful *using `localStorage` as cache*; its synchronous API blocks the render thread [tweet](https://twitter.com/addyosmani/status/339776418768629760)
   - The *default language of JavaScript* is not statically scoped, my Stack Overflow [answer](http://stackoverflow.com/a/16823681/425275)
   - On desktop, *Web Audio API* is already in Chrome, Safari, Opera and Firefox Nightly [tweet](https://twitter.com/cfjedimaster/status/339891063844126723)
 - Tutorials
   - Building a Firefox OS *game with in-app payments* using Mozilla’s WebPayment API, [@rdlauer]()’s [post](http://flippinawesome.org/2013/05/28/building-a-game-with-in-app-payments-for-firefox-os/)
   - Creating a small platform *game with HTML5 Canvas*, [@jakesgordon]()’s [post](http://codeincomplete.com/posts/2013/5/27/tiny_platformer/)
   - Tips for *optimizing Canvas/JavaScript games* for Firefox OS, [@louisstow]()/[@digitarald]()’s [post](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)
   - Photoshop layer mask implemented with *CSS Custom Filters*, [@agreenblatt]()’s [post](http://blattchat.com/2013/05/28/photoshop-layer-mask-with-css-custom-filters/)
 - Articles
   - The state Of *Responsive Web Design*, [@walterstephanie]()’s extensive [post](http://mobile.smashingmagazine.com/2013/05/29/the-state-of-responsive-web-design/) ![][*]
   - How has Blink affected *Chrome’s WebGL implementation*?, [@Tojiro]()’s [post](http://blog.tojicode.com/2013/05/how-blink-has-affected-webgl.html)
 - Content
   - ![][>] [@BrendanEich ]() talks about the *future of JavaScript* in his 52-min [keynote](https://vimeo.com/66711027) from [@jquk]() 2013
   - ![][>] *Data visualization*: architecting better charts, [@ireneros]()’s 14-min [talk](https://www.youtube.com/watch?v=TYgSc_S0lCw) from [@fluentconf]() 2013
   - ![][>] JavaScript Jabber podcast #60: *Development environments*, [link](http://javascriptjabber.com/060-jsj-development-environments/) (59 min)
   - *Sass style guide*, [@chriscoyier]()’s [post](http://css-tricks.com/sass-style-guide/) ![][*]
   - A collection of 50 *CSS snippets*, [@jakerocheleau]()’s [post](http://www.hongkiat.com/blog/css-snippets-for-designers/)
   - *Internet trends* 2013, [@kpcb]()’s 117-page [slides](http://www.slideshare.net/kleinerperkins/kpcb-internet-trends-2013) (lots of data)
   - An introduction to *Web Audio API*, [@cwilso]()’s [slides](http://webaudiodemos.appspot.com/slides/index.html) (w/ demos)
 - Tools
   - d3.chart, a framework for *creating reusable charts* [page](http://misoproject.com/d3-chart/) + [post](http://weblog.bocoup.com/introducing-d3-chart/)
   - Facebook React, a JavaScript library for *building user interfaces* [page](http://facebook.github.io/react/) + [post](https://medium.com/make-your-own-apps/e71bcedc36b)
   - metaframe, a tool for making *annotated responsive wireframes* [repo](https://github.com/elliance/metaframe) + [post](http://aha.elliance.com/2013/05/28/responsive-wireframes/) + [demo](http://metaframe.elliance.com/)
 - Opinion
   - Should *open data standards* use an open license?, [@Hoedic]()’s [post](http://dataholic.ca/2013/05/24/should-standards-use-open-license/)

## May 29th, 2013
  
   - News
     - New W3C releases:
       - 3rd WD of “*CSS Exclusions*” [TR](http://www.w3.org/TR/css3-exclusions/) + [diff](http://www.w3.org/TR/2013/WD-css3-exclusions-20130528/,diff) + [notes](http://www.w3.org/blog/CSS/2013/05/28/css-exclusions-draft-separation/) (added `wrap-flow: minimum`)
       - 5th WD of “*CSS Regions*” [TR](http://www.w3.org/TR/css3-regions/) + [diff](http://www.w3.org/TR/2013/WD-css3-regions-20130528/,diff) + [notes](http://www.w3.org/blog/CSS/2013/05/28/css-regions-draft-updated/) (many improvements to the CSSOM section)
       - 2nd WD of “*Filter Effects*” [TR](http://www.w3.org/TR/filter-effects/) + [notes](http://www.w3.org/blog/CSS/2013/05/28/filter-effects-1-0-draft-updated/) (diff is broken but [@dontcallmeDOM]() will fix it `:)`)
     - Desktop-version of *Chromium-based Opera* (“Opera Next”) released, [notes](http://my.opera.com/ODIN/blog/2013/05/28/a-first-peek-at-opera-15-for-computers) + report bugs [here](https://bugs.opera.com/wizard/)
     - *Content Security Policy* 1.0 lands in Firefox Aurora, [post](https://hacks.mozilla.org/2013/05/content-security-policy-1-0-lands-in-firefox-aurora/)
     - *Foxconn joining Firefox OS* alliance as it tries to compensate for Apple slowdown, Verge [article](http://www.theverge.com/2013/5/27/4370750/foxconn-joining-firefox-os-alliance-as-manufacturer-tries-to)
     - Noise-canceling tech could lead to Internet connections *400 times faster than Google Fiber*, VB [article](http://venturebeat.com/2013/05/27/noise-canceling-tech-could-lead-to-internet-connections-400x-faster-than-google-fiber/)
   - FYI
     - The 3-bar menu icon, *☰*, is available as a Unicode character [tweet](https://twitter.com/SebAshton/status/338940947909967873)
     - Firefox still leads in *ECMAScript 6* support [tweet](https://twitter.com/kangax/status/339401889353437186)
     - Which sites use *Web Notifications*?, [twitter](https://twitter.com/miketaylr/status/339013607570411520) discussion
   - Tutorials
     - Using *HTML5 `rel="prerender"`* to speed up a multi-page registration process, [@adrianholovaty]()’s [post](http://www.holovaty.com/writing/prerendering/)
     - Exploring reusability: *reusable charts* with D3.js (best practices), [@JugglinMike]()’s [post](http://weblog.bocoup.com/reusability-with-d3/)
     - Four-part tutorial series on *Ember.js* by [@reybango]() [link](http://blog.reybango.com/2013/05/29/interested-in-ember-js-check-out-my-tutorial-series/)
     - Fixing *HTTP referrers in HTTPS*: the meta referrer, [@Smerity]()’s [post](http://smerity.com/articles/2013/where_did_all_the_http_referrers_go.html)
     - Chrome DevTools docs: *Evaluating network performance* [link](https://developers.google.com/chrome-developer-tools/docs/network)
   - Articles
     - Should sending `XMLHttpRequest`s *without `Origin:` and `Referer:` headers* be allowed?, [@hallvord]()’s [post](http://my.opera.com/hallvors/blog/2013/05/27/should-js-be-able-to-send-xmlhttprequest-without-origin-and-referer-headers)
     - What’s the point of *packaged web apps*?, [@ppk]() explains in his [post](http://www.quirksmode.org/blog/archives/2013/05/the_point_of_pa.html)
     - Easier testing with *Open Device Labs* (+ creating your own ODL), [@helloanselm]()’s [post](http://www.smashingmagazine.com/author/anselm-hannemann/)
     - How patents are ruining the adoption of *HTML5 `<video>`*, [@vu0tran]()’s [post](http://blog.framebase.io/post/51231726236/how-patents-are-ruining-the-adoption-of-html5-video)
     - [@aerotwist]()’s *reflections on performance* at Google I/O, [post](http://aerotwist.com/blog/reflections-on-performance-at-google-io/)
     - [@MarcoZehe]()’s extensive [recap](http://www.marcozehe.de/2013/05/28/recap-of-beyond-tellerrand-2013/) of *[@btconf]() 2013* + [@jancbeck]()’s talk [notes](http://jancbeck.com/articles/beyond-tellerrand-2013/) ![][*]
     - 6 considerations and tips for *creating HTML5 apps* (i.a. packaged or hosted), [@davidwalshblog]()’s [post](http://tech.pro/blog/1301/6-considerations-and-tips-for-creating-html5-apps)
   - Content
     - ![][>] “*HTML5 Video* in the Open Web Platform”, [@plhw3org]()’s 42-min [talk](https://www.youtube.com/watch?v=SnKpdhC5Ras) from [@html5devconf]() ![][*]
     - ![][>] Fixing the *mobile web*, [@codepo8]()’s 47-min [keynote](https://www.youtube.com/watch?v=5D7_3Y1TCjk) at [@btconf]() 2013
     - “*Web Performance* Crash Course”, [@igrigorik]()’s extensive [slides](http://www.igvita.com/slides/2013/fluent-perfcourse.pdf) (PDF) from [@fluentconf]() 2013
     - Awesome looking *popup links*, [@chriscoyier]()’s codepen [demo](http://codepen.io/chriscoyier/pen/Fjguy)
     - Setting up *multiple build-targets* with Grunt, [twitter](https://twitter.com/addyosmani/status/339377857585373185) discussion
   - Tools
     - Pure, a set of small, *responsive CSS modules* [page](http://purecss.io/)
     - imagesLoaded, a JavaScript library for *detecting when images have loaded* [page](http://desandro.github.io/imagesloaded/)
     - svg.js, a lightweight library for *manipulating and animating SVG* [page](http://svgjs.com/)
   - Opinion
     - “*Internet fragmentation* is a ‘law of history’”, He Baohong’s [post](http://www.internetgovernance.org/2013/05/25/internet-fragmentation-is-a-law-of-history/)
     - “On the politics, *cargo-culting*, and maintainability of JavaScript”, [@slicknet]()’s [post](http://www.nczonline.net/blog/2013/05/28/on-the-politics-cargo-culting-and-maintainability-of-javascript/)

## May 27th, 2013

 - News
   - ![][&] *HTML 5.1 spec*: Spaghetti Monster example replaced with Crocoduck [tweet](https://twitter.com/stevefaulkner/status/337879140625686528)
   - *Presto-based Opera Mobile* re-uploaded to Play Store as “Opera Mobile Classic” [page](https://play.google.com/store/apps/details?id=com.opera.browser.classic)
   - *jQuery* 1.10.0 and 2.0.1 released, [release notes](http://blog.jquery.com/2013/05/24/jquery-1-10-0-and-2-0-1-released/)
   - “Report: Google considering Internet balloons to *connect sub-Saharan Africa*”, Ars Technica [article](http://arstechnica.com/business/2013/05/report-google-considering-internet-balloons-to-connect-sub-saharan-africa/)
 - FYI
   - Microsoft is doing a 3-question survey on *dev tools* usage [tweet](https://twitter.com/IEDevChat/status/338041433065930753)
   - *CSS anomaly*: The `<body>` background only floods the viewport if no `<html>` background is defined [post](http://css-tricks.com/just-one-of-those-weird-things-about-css-background-on-body/)
   - “`about:about`” gives you a *list of all `about:` pages* in your Firefox and Chrome browser
   - *Accessibility tip*: Hashtags in camel case are read as separate words in screen readers [tweet](https://twitter.com/heydonworks/status/338646556490231808)
 - Tutorials
   - *Promises and deferreds* in JavaScript (theory + usage examples), [@cwebbdesign]()’s [post1](http://blog.mediumequalsmessage.com/promise-deferred-objects-in-javascript-pt1-theory-and-semantics) & [post2](http://blog.mediumequalsmessage.com/promise-deferred-objects-in-javascript-pt2-practical-use) ![][*]
   - 5 *HTML5 features* you need to know (i.a. DNS prefetching, `download` attr.), [@AdnaneBelmadiaf]()’s [post](http://daker.me/2013/05/5-html5-features-you-need-to-know.html)
   - *Testing JavaScript headless* with QUnit and PhantomJS, [@stylight_eng]()’s [post](http://www.stylight.com/Numbers/testing-javascript-headless-with-qunit-and-phantomjs/)
   - *Dependency injection* with AngularJS, [@alex_young]()’s [post](http://dailyjs.com/2013/05/23/angularjs-injection/)
 - Articles
   - Making the *Chromebook Pixel* more suitable for web development, [@ariyahidayat]()’s [post](http://ariya.ofilabs.com/2013/05/chromebook-pixel-for-web-development.html)
   - Determining the *ideal line length* in `em`s, [@russmaxdesign]()’s [post](http://www.maxdesign.com.au/2013/05/25/ideal-line-length-in-ems/)
   - *CPU core estimation* with JavaScript, [@eboyjr]()’s [post](http://blog.wg.oftn.org/post/51125082905/core-estimator) (w/ live demo)
 - Content
   - ![][>] *Mobile performance* from the radio up: Battery, latency…, [@igrigorik]()’s 54-min [talk](https://developers.google.com/events/io/sessions/327864330) from IO ’13
   - ![][>] Seeing the world through *high DPI*, [@petele]()’s 39-min [talk](https://developers.google.com/events/io/sessions/350992350) from IO ’13
   - ![][>] Build podcast #44: Event-driven, non-blocking I/O model with *Node.js*, [@sayanee_]()’s 30-min [screencast](http://build-podcast.com/node/)
   - A huge set of free *storyboard illustrations* [page](http://dribbble.com/shots/1083617-430-FREE-storyboard-illustrations)
 - Sites
   - datalist experiment, a test case for *`<datalist>`* combined with several `<input>` types [page](http://demo.agektmr.com/datalist/) ![][*]
 - Tools
   - Montage, *an HTML5 framework* for building modern web apps [page](http://montagejs.org/)
   - *Visualising CSS* selector matches [page](http://css.benjaminbenben.com/) (view in Chrome) ![][*]
   - JSON Editor Online, an online tool for *editing JSON via a treeview* [page](http://jsoneditoronline.org/)
   - Cytoscape.js, a JavaScript library for *graph analysis and visualization* [page](http://cytoscape.github.io/cytoscape.js/)
 - Opinion
   - “JavaScript is *Web Assembly Language* and that's OK”, [@shanselman]()’s [post](http://www.hanselman.com/blog/JavaScriptIsWebAssemblyLanguageAndThatsOK.aspx)

## May 24th, 2013

 - News
   - ![][&] New W3C releases:
     - **Last Call** of “*Vibration API*” [TR](http://www.w3.org/TR/vibration/) + [diff](http://www.w3.org/TR/2013/WD-vibration-20130523/,diff) (comments: through 13 June)
     - Group Note of “*Web Intents*” [TR](http://www.w3.org/TR/web-intents/) + [diff](http://www.w3.org/TR/2013/NOTE-web-intents-20130523/,diff)  (no longer a working draft)
     - 2nd WD of “*User Interface Security Directives for Content Security Policy*” [TR](http://www.w3.org/TR/UISecurity/) + [diff](http://www.w3.org/TR/2013/WD-UISecurity-20130523/,diff)
   - *CSS Box Alignment* 2nd WD release [notes](http://www.w3.org/blog/CSS/2013/05/24/css3-alig-update/) (posted with delay)
   - *Canvas Blending* is now in Chrome Canary, WebKit Nightly and Firefox [post](http://blogs.adobe.com/webplatform/2013/05/20/canvas-blending-is-now-in-chrome-canary-safari-and-firefox/)
   - *DOM Futures* support coming to Blink [post](https://groups.google.com/a/chromium.org/d/msg/blink-dev/9q5kP0eMQc8/Gy6M9nFHjuoJ)
   - Google abandons *open standards* for instant messaging, [@EFF]()’s [article](https://www.eff.org/deeplinks/2013/05/google-abandons-open-standards-instant-messaging)
   - Google introduces *Portable Native Client* (enables adding C/C++ code to web apps), TechCrunch [article](http://techcrunch.com/2013/05/17/google-introduces-portable-native-client-makes-it-easier-for-developers-to-add-c-and-c-code-to-their-web-apps/)
 - FYI
   - The short history of the *`about:` URL* [post](http://www.montulli.org/lou/about_urls)
   - AngularJS and Ember.js have expressed plans to support *Web Components* [post](http://www.2ality.com/2013/05/web-components-angular-ember.html)
   - There are over 70 *Yeoman generators* available on npm [tweet](https://twitter.com/addyosmani/status/337551686723846144)
 - Tutorials
   - A modular and flexible *alternative to the `switch` statement* in JavaScript, [@Encosia]()’s [post](http://encosia.com/first-class-functions-as-an-alternative-to-javascripts-switch-statement/)
 - Articles
   - *Case study*: Building the new Financial Times web app, [@wilsonpage]()’s [post](http://coding.smashingmagazine.com/2013/05/23/building-the-new-financial-times-web-app/) (extensive)
   - About JavaScript’s *event loop*, [@tlhunter]()’s [post](http://thomashunter.name/blog/the-javascript-event-loop-presentation/)
   - Working on a large *AngularJS project*, [@jhooks]()’s [post](http://joelhooks.com/blog/2013/05/22/lessons-learned-kicking-off-an-angularjs-project/) in which he shares his experiences
 - Content
   - ![][>] Introduction to *Modernizr*, [@chriscoyier]()’s 24-min [screencast](http://css-tricks.com/video-screencasts/126-using-modernizr/) ![][*]
   - *HTML5 Canvas*: counting pixels of a certain color + finding the color at a position `x` and `y`, live [demo](http://jsbin.com/ojiwan/3/edit)
   - *Checkboxes* that look like lightsabers from Star Wars in pure CSS, [demo](http://scotch.io/demos/pure-css3-star-wars-lightsaber-checkboxes) page ![][*]
 - Sites
   - Embercasts, free screencasts for learning *Ember.js* [embercasts.com](http://www.embercasts.com/)
 - Tools
   - Stylify Me, an online tool that *generates a style guide* of your web site [page](http://stylifyme.com/) ![][*]
   - WideArea, a JavaScript library that *adds fullscreen capabilities* to your `<textarea>` elements [page](http://usablica.github.io/widearea/)
   - Firefox OS Boilerplate App, a boilerplate for *getting started with apps for Firefox OS* [repo](https://github.com/robnyman/Firefox-OS-Boilerplate-App)
   - -prefix-free, a script that *adds the current browser’s prefix* to any CSS code [page](http://leaverou.github.io/prefixfree/)
 - Opinion
   - “The APIs surrounding *`contenteditable`* are so bad it’s insulting”, [@cjno]()’s [tweet](https://twitter.com/cjno/status/337862204613357568)

## May 23rd, 2013

 - News
   - ![][&] The *Fetch Standard* (supersedes CORS and the fetch algo from HTML5), [@annevk]()’s ELI5 [post](http://annevankesteren.nl/2013/05/fetching-urls) ![][*]
   - *Responsive images*, [@brucel]()’s interim [report](http://www.brucelawson.co.uk/2013/responsive-images-intrerim-report/)
   - New features in *Chrome 27* (recently released) [post](http://www.sitepoint.com/chrome-27-whats-new/) + `Accept-Charset` HTTP header removed [tweet](https://twitter.com/hsivonen/status/337165108646133760) 
   - *DevTools Workspaces* ([?](https://www.youtube.com/watch?v=kVSo4buDAEE&feature=youtu.be&t=47s)) landed in Chrome Canary [tweet](https://twitter.com/ChromiumDev/status/337308972858089474)
   - Initial support for *WebVTT* coming to Firefox Nightly [tweet](https://twitter.com/humphd/status/337388858654224384)
   - Mozilla can produce *near-native performance* on the Web, Ars Technica [article](http://arstechnica.com/information-technology/2013/05/native-level-performance-on-the-web-a-brief-examination-of-asm-js/)
   - Microsoft teases *Internet Explorer 11* WebGL support, Verge [article](http://www.theverge.com/2013/5/22/4355942/internet-explorer-11-webgl-support-teased-on-vine)
 - FYI
   - List of *Chrome sessions* from Google’s IO 2013 [playlist](https://www.youtube.com/playlist?list=PLg5dRHeDFEAWKN4weNJYDrC533aCVX7ME) (30 videos)
   - *AngularJS* is performing “spring cleaning” on GitHub [post](http://gigaom.com/2013/05/22/how-google-plans-to-rule-the-computing-world-through-chrome/)
 - Tutorials
   - Designing layouts has become easy with *CSS Flexbox*, [@dstorey]()’s [post](http://coding.smashingmagazine.com/2013/05/22/centering-elements-with-flexbox/) ![][*]
   - Creating a *natural language form* with custom input elements, [@crnacura]()’s [post](http://tympanus.net/codrops/2013/05/21/natural-language-form-with-custom-input-elements/) + [demo](http://tympanus.net/Tutorials/NaturalLanguageForm/) page
   - Providing *quasi scope in CSS* with BEM, [@csswizardry]()’s [post](http://csswizardry.com/2013/05/scope-in-css/)
   - *Animating CSS pseudo-elements* to create stunning effects, [@marco_bf]()’s [post](http://tympanus.net/codrops/2013/05/22/examples-of-pseudo-elements-animations-and-transitions/) + [demos](http://tympanus.net/Development/PseudoElementsAnimationsTransitions/) page
   - Example of using the `content` property and *`attr()` function* together in CSS, [@davidwalshblog]()’s [post](http://davidwalsh.name/css-content-attr)
   - *CSS media queries* - a handy cheat sheet (logic + patterns), [@chriscoyier]()’s [post](http://css-tricks.com/logic-in-media-queries/) 
 - Articles
   - Introduction to *Web Components* (quick overview), [@cfjedimaster]()’s [post](http://www.raymondcamden.com/index.cfm/2013/5/22/The-Future-of-the-Web) ![][*]
   - Choosing between HTML/CSS, SVG, Canvas and WebGL for *visualizations*, [@kissane]()’s [post](http://source.mozillaopennews.org/en-US/articles/twitters-miguel-rios-choosing-viz-methods/)
   - Inadvertent sharing of variables via *closures in JavaScript*, [@rauschma]()’s [post](http://www.2ality.com/2013/05/quirk-closures.html)
 - Content
   - ![][>] The modern workflow for *developing the mobile web*, [@gauntface]()’s 31-min [talk](https://developers.google.com/events/io/sessions/324558168) from IO ’13
   - ![][>] *Compositing* in Blink and WebKit (browser internals), a 51-min [video](https://www.youtube.com/watch?v=Lpk1dYdo62o) presentation
 - Sites
   - Front-end Rescue, *keeping up to date* with front-end technologies [page](http://uptodate.frontendrescue.org/)
 - Tools
   - Icenium, a set of cloud-based tools for *developing cross-platform mobile apps* [page](http://www.icenium.com/) + [comparison](http://www.icenium.com/blog/icenium-team-blog/2013/05/01/what%27s-the-difference-between-icenium-and-phonegap-build-)
   - Picksum Ipsum, a funny *“Lorem ipsum” text generator* [page](http://www.picksumipsum.co.uk/)
   - Two handy helper functions for *HTML5 Canvas* development [gist](https://gist.github.com/codepo8/5631638)
 - Opinion
   - “Stop publishing *JavaScript API design articles* centered around jQuery plugins” [tweet](https://twitter.com/slicknet/status/337224283967336450)
   - How *Google* plans to rule the computing world through Chrome, [@KevinCTofel]()’s [post](http://gigaom.com/2013/05/22/how-google-plans-to-rule-the-computing-world-through-chrome/)

## May 22nd, 2013

 - News
   - *Open licensing* at the W3C, [@davidbaron]()’s [post](http://dbaron.org/log/20130522-w3c-licensing) + [discussion](https://twitter.com/davidbaron/status/337024909874184193) on Twitter
   - *Web Performance APIs* rapidly become W3C recommendations, IEblog [post](http://blogs.msdn.com/b/ie/archive/2013/05/21/web-performance-apis-rapidly-become-w3c-recommendations.aspx)
 - FYI
   - ![][>] [@chriscoyier]() made screencasts for his “*Modern web dev workflow*” and “*Staying up to date*” talks [tweet](https://twitter.com/chriscoyier/status/336826654204755969)
   - Coverage of *[@mobilismconf]() 2013*: slides, blog posts (videos coming soon) [post](http://mobilism.nl/2013/coverage)
   - [@domenic]() proposes *JSHint* rule for disallowing ECMAScript’s “Annex B API” [github](https://github.com/jshint/jshint/issues/1092)
 - Tutorials
   - Writing testable JavaScript (*better code organization* for easier unit tests), [@rmurphey]()’s [post](http://alistapart.com/article/writing-testable-javascript) ![][*]
   - Guidelines for writing *reusable and extensible JavaScript*, [@acolangelo]()’s [post](http://alistapart.com/article/the-design-of-code-organizing-javascript)
   - Making a web site *ready for Retina* displays, [@allanberger]()’s [post](http://net.tutsplus.com/tutorials/html-css-techniques/the-right-way-to-retinafy-your-websites/)
 - Articles
   - *Usability guidelines* for mobile commerce (based on large-scale usability study), [@KiehnHolst]()’s [post](http://uxdesign.smashingmagazine.com/2013/05/21/recommendations-mobile-commerce-websites/)
   - How *GitHub* is used inside companies (based on survey), [@slicknet]()’s [post](http://www.nczonline.net/blog/2013/05/21/github-workflows-inside-of-a-company/)
   - Extending the web forward, [@wycats]()’s [post](http://yehudakatz.com/2013/05/21/extend-the-web-forward/)
 - Content
   - ![][>] “A More *Awesome Web*: Features You've Always Wanted”, [@ebidel]()’s 35-min [talk](https://developers.google.com/events/io/sessions/324706714) from IO ’13 + [slidedeck](http://www.moreawesomeweb.com/#1)
   - ![][>] Real-time communication with *WebRTC*, [@juberti]()/[@sw12]()’s 44-min [talk](https://developers.google.com/events/io/sessions/326336563) from IO ’13 
   - ![][>] Shop Talk *podcast* Ep. 69 with [@miketaylr]() from Opera [59min] [page](http://shoptalkshow.com/episodes/069-with-mike-taylor/)
 - Sites
   - Learn Git Branching, an *interactive tutorial* that teaches *branching in git* [page](http://pcottle.github.io/learnGitBranching/) ![][*]
   - Open Source Report Card, generates *dynamic progress reports* for GitHub users [page](http://osrc.dfm.io/)
 - Tools
   - gif.js, a *GIF encoder* written in JavaScript [page](http://jnordberg.github.io/gif.js/) ![][*] (w/ demos)
   - JSONView, a browser plugin that *pretty-prints JSON files* [page](http://jsonview.com/) (available for Firefox and Chrome) 
   - landmarks, a Firefox plugin that enables *keyboard navigation of WAI-ARIA landmarks* [repo](https://github.com/matatk/landmarks)
 - Opinion
   - The end* of *website development* as a profession, [@ChrisHardie]()’s [post](http://www.chrishardie.com/2013/05/end-of-website-development/)

## May 21st, 2013

 - News
   - ![][&] New W3C releases:
     - **Last Call** WD of “*Indexed Database API*” [TR](http://www.w3.org/TR/IndexedDB/) + [diff](http://www.w3.org/TR/2013/WD-IndexedDB-20130516/,diff) (comments: through 07 June)
     - **Last Call** WD of “*JSON-LD* 1.0 Processing Algorithms and API” [TR](http://www.w3.org/TR/json-ld-api/) + [diff](http://www.w3.org/TR/2013/WD-json-ld-api-20130516/,diff) (comments: through 06 June)
   - [@stevefaulkner]() proposes revising the definition of the *`<small>` element* [tweet](https://twitter.com/stevefaulkner/status/336780338086961152)
   - First Chromium-based Opera: *Opera 14 for Android* released on Google Play store [post](http://my.opera.com/ODIN/blog/opera-14-for-android-is-out)
   - Firefox 23 (currently in Aurora channel) brings *new DevTools features* [post](https://hacks.mozilla.org/2013/05/firefox-developer-tool-features-for-firefox-23/) ![][*]
   - Chrome 29 (Nightly) delivers *faster rendering speeds* with SPDY and HTTP/2 [post](https://plus.google.com/+IlyaGrigorik/posts/Uxgvk35ntL2?e=-RedirectToSandbox) 
   - *Intel* launches “HTML5 Development Environment” (cross-platform *HTML5 tools*) [page](http://software.intel.com/en-us/html5)
   - “Google believes *Web Components* are the future of web development”, TechCrunch [article](http://techcrunch.com/2013/05/19/google-believes-web-components-are-the-future-of-web-development/)
   - “Google: *Dart* will rescue browsers from JavaScript”, CNET [article](http://news.cnet.com/8301-1023_3-57584979-93/google-dart-will-rescue-browsers-from-javascript/)
 - FYI
   - Microsoft: port your PhoneGap app to *Windows Phone* and win prizes [post](http://blogs.windows.com/windows_phone/b/wpdev/archive/2013/05/20/use-your-html5-skills-port-your-phonegap-app-to-windows-phone-and-win-prizes.aspx)
   - *HTTP2* is rule changer: extra requests are cheap, separate cachable files better than combined [tweet](https://twitter.com/jaffathecake/status/336085960884367361)
 - Tutorials
   - *Accessing the camera* and taking a picture with *HTML Media Capture* ([?](http://www.w3.org/TR/html-media-capture/)), [@cfjedimaster]()’s [post](http://www.raymondcamden.com/index.cfm/2013/5/20/Capturing-camerapicture-data-without-PhoneGap)
   - Some lesser known but useful *LESS* features (i.a. mixins with return values), Mária’s [post](http://flippinawesome.org/2013/05/20/less-tips-and-tricks/)
   - Some of the more powerful features of *Require.js*, [@jcreamer898]()’s [post](http://tech.pro/tutorial/1300/deep-dive-into-requirejs)
   - *Revealing hidden latency patterns* with latency heat maps, [@brendangregg]()’s [post](http://dtrace.org/blogs/brendan/2013/05/19/revealing-hidden-latency-patterns/) ![][*]
 - Articles
   - *Network congestion*, domain sharding, *SPDY* and more, [@hobohacker]()’s [post](https://insouciant.org/tech/network-congestion-and-web-browsing/) ![][*]
   - Understanding *WCAG* (Web Content Accessibility Guidelines) Level, [@karlgroves]()’s [post](http://www.karlgroves.com/2013/05/20/understanding-wcag-level/)
 - Content
   - ![][>] *Chrome DevTools* Revolutions 2013, [@paul_irish]()’s 34-min [talk](https://developers.google.com/events/io/sessions/325206725) from IO ’13
   - ![][>] Stunning mobile visualization with *CSS Filters*, [@alexanderdanilo]()/[@Fyrd]()’s 45-min [talk](https://developers.google.com/events/io/sessions/325944029) from IO ’13
   - ![][>] “*Test the Web Forward*”, [@RebeccaHauck]()’s 26-min [talk](http://marakana.com/s/post/1466/test_the_web_forward_adobe_rebecca_hauck_video) from [@sfhtml5]()
   - ![][>] Debugging a real bug in JavaScript with *traceGL*, [@rem]()’s short 3-min [screencast](http://remysharp.com/2013/05/13/tracegl-for-javascript-debugging/)
   - Showcasing real-world *usage of ECMAScript 6* features in today’s projects [wiki](https://github.com/sindresorhus/esnext-showcase/wiki)
   - Design patterns for *GPU computing*, by NVIDIA Research [page](http://nvlabs.github.io/moderngpu/)
 - Tools
   - Fiddler, a free *web debugging proxy* for any browser, system or platform [page](http://fiddler2.com/) ![][*]
   - Lazy.js, a JavaScript *utility library* like Underscore.js but with *lazy evaluation* [page](http://dtao.github.io/lazy.js/)
   - sublime-jquery-snippets, a collection of Sublime Text *snippets for jQuery development* [repo](https://github.com/aaronpowell/sublime-jquery-snippets)
   - Knockout-ES5, a *Knockout.js plugin* that lets you use simpler and more natural syntax [page](http://blog.stevensanderson.com/2013/05/20/knockout-es5-a-plugin-to-simplify-your-syntax/)
   - Live *WebVTT* Validator, an online validator for the *WebVTT* (Web Video Text Tracks) format [page](http://quuz.org/webvtt/)
 - Opinion
   - *Cloud* is going to die much faster than anybody expected, [@leashless]()’s [post](http://vinay.howtolivewiki.com/blog/other/too-cheap-to-meter-massive-overbuild-in-server-farms-3373)
   - Gathering the *Web tribes* together for the common good, [@dalmaer]()’s [post](https://medium.com/tech-talk/dff3e0ffdead)
   - And so, Microsoft ruins *Skype*, [@NickBruun]()’s [post](http://bruun.co/2013/05/20/and-so-microsoft-ruins-skype)

[*]: /img/star.png "don’t miss"
[+]: /img/funding.png "seeks funding"
[1]: /img/calendar.png "upcoming event"
[o]: /img/contributor.png "seeks contributors"
[>]: /img/media.png "audio/video"
[&]: /img/feedback.png "seeks feedback"
