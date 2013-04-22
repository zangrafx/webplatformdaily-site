The source code of this web-site is [on GitHub](https://github.com/simevidas/webplatformdaily-site). This includes all the data (which is in Markdown files). The README file of the repository also serves as a FAQ. Refer to it for information about this web-site.

## Sticky

 - Tim Berners-Lee’s call to join the action to fix the CFAA [tweet](https://twitter.com/timberners_lee/status/321367692344963072) ![][*]
 - The "Web Platform" *chat room* on Stack Overflow [link](http://chat.stackoverflow.com/rooms/27674/web-platform)
 - Recommended *Twitter* feeds: [@remotesynth](), [@codepo8](), [@smashingmag]()
 - ![][>] *Google Developers* Live (live presentations) [link](https://developers.google.com/live/)
 - *Feeds* (w/ OMPL files) by [@paul_irish](): frontend [link](http://www.google.com/reader/bundle/user%2F11165870484951445324%2Fbundle%2Ffrontend), standards+browsers [link](http://www.google.com/reader/bundle/user%2F11165870484951445324%2Fbundle%2Ffrontend-standards%2Bbrowsers), webapps [link](http://www.google.com/reader/bundle/user%2F11165870484951445324%2Fbundle%2Ffrontend-webapps)

## April 19th, 2013 **but released on April 22nd**

 - News
   - *W3C* releases:
     - **New!** 1st WD of *“CSS Overflow”* [TR](http://www.w3.org/TR/css-overflow-3/) [notes](http://www.w3.org/blog/CSS/2013/04/18/css-overflow-module-working-draft-published/)
     - Updated CR of *“CSS Values and Units”* [TR](http://www.w3.org/TR/css3-values/) [notes](http://www.w3.org/blog/CSS/2013/04/18/css3-values-updated-cr/) (small fixes)
     - 4th WD of *“CSS Grid Layout”* [TR](http://www.w3.org/TR/css3-grid-layout/) [notes](http://www.w3.org/blog/CSS/2013/04/18/css-grid-layout-overhaul/) (overhauled; **provide feedback**
     )
   - *CSS WG* Minutes Telecon 2013-04-17 [notes](http://www.w3.org/blog/CSS/2013/04/18/resolutions-89/) (*CSS Marquee* discontinued, new `cursor` values in *CSS3 UI*)
   - *`<main>`* element about to be added to the *HTML5* CR spec [message](http://lists.w3.org/Archives/Public/public-html-admin/2013Apr/0047.html)
   - *Discussion*: making `<img>` elements not load until needed [link](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17842#c26) (related: *“Resource Priorities”* [ED](http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/ResourcePriorities/Overview.html))
   - *Firefox* 23 now has a faster (more efficient) *`localStorage`* implementation [post](http://www.janbambas.cz/firefox-23-new-faster-localstorage/)
   - *jQuery* 2.0 released (12% smaller with 12 excludable modules) [release notes](http://blog.jquery.com/2013/04/18/jquery-2-0-released/)
   - “*LinkedIn* dumped *HTML5* & went native for its *mobile* apps” (VentureBeat) [article](http://venturebeat.com/2013/04/17/linkedin-mobile-web-breakup/)
   - “*Firefox OS* dev units coming to Geeksphone next week” (engadget) [article](http://www.engadget.com/2013/04/18/firefox-os-dev-units-geeksphone-next-week/)
 - FYI
   - The *CSS* `background-position:10px+3em` works differently than you think [tweet](https://twitter.com/tabatkins/status/324949893162610688) + explanation [tweet](https://twitter.com/tabatkins/status/324950004693360640)
   - [@tabatkins]() updated the “history” part of his *Futures* post to include more background info [post](http://www.xanthir.com/b4PY0)
   - “Want to know and control what data *Firefox* shares? Data Choices in Preferences.” [tweet](https://twitter.com/robertnyman/status/325148047879307265)
   - *Heisenbug* = a software bug that seems to disappear or alter its behavior when one attempts to study it
 - Tutorials
   - “Touchy-Feely with *DOM Events*: Rethinking Cross-Device User Interaction” by [@girlie_mac]() [link](http://girliemac.com/blog/2013/04/17/touchy-feely-with-dom-events-rethinking-cross-device-user-interaction/) ![][*]
   - “Feature Detection and Styling For The HTML5 *`<details>`* Element” by [@dudleystorey]() [link](http://demosthenes.info/blog/680/Feature-Detection-and-Styling-For-The-HTML5-details-Element)
   - “Getting Into *Ember.js*: Part 3” (about data) by [@reybango]() [link](http://net.tutsplus.com/tutorials/javascript-ajax/getting-into-ember-js-part-3/)
   - “Web Page Clipping with PhantomJS” (*capturing web pages* as images) by [@ariyahidayat]() [link](http://ariya.ofilabs.com/2013/04/web-page-clipping-with-phantomjs.html)
   - “How to Edit Remote Files With *Sublime Text* via an *SSH Tunnel*” [link](http://log.liminastudio.com/writing/tutorials/sublime-tunnel-of-love-how-to-edit-remote-files-with-sublime-text-via-an-ssh-tunnel)
 - Content
   - “Essence of *CoffeeScript*”, *interactive tutorial* (7 lessons, multiple exercises per lesson) [link](http://coffeescript.carbonfive.com/)
   - Retro Vectors, free high quality *vector stock files* [retrovectors.com](http://retrovectors.com/)
 - Tools
   - SourceTree, a free *Git client* for Windows or Mac [link](http://www.sourcetreeapp.com/)
   - init, extends *HTML5 Boilerplate* with more structure for *SCSS* and JavaScript [repo](https://github.com/drublic/init)
   - Heck Yes Markdown, *converts web pages* to Markdown [page](http://heckyesmarkdown.com/)
 - Opinion
   - ![][>] [@mozillagary]() (Mozilla CEO): “The web needs to be unlocked on *mobile*” [3min] [video](http://allthingsd.com/20130415/firefox-os-wtf/) ![][*]
   - [@davemethvin](): “*WebKit*, get your bug-ridden house in order” [article](http://news.cnet.com/8301-1023_3-57569342-93/javascript-expert-webkit-get-your-bug-ridden-house-in-order/)

## April 18th, 2013

 - News
   - New specification: *“Resource Priorities”* [ED](http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/ResourcePriorities/Overview.html), e.g. `<img src="supplemental.gif" defer>`
   - ![][o] The *Responsive Images* CG needs help writing layout tests for WebKit and Blink (*`<picture>`*) [message](http://lists.w3.org/Archives/Public/public-respimg/2013Apr/0001.html)
   - *Microsoft* donated over 400 MSDN JavaScript articles to *Web Platform Docs* [anncmnt](http://lists.w3.org/Archives/Public/public-webplatform/2013Apr/0238.html) [tweet](https://twitter.com/WebPlatform/status/324645876536598529)
   - FTC chair urges advertising industry to work with *W3C* to develop a *DNT* (Do Not Track) standard [article](http://www.adweek.com/news/technology/ftc-chair-stuns-advertisers-148644)
   - “The Plot to Block Internet Freedom” [article](http://www.foreignpolicy.com/articles/2013/04/16/plot_block_internet_freedom)
   - Google adds new *security* measures to protect *Chrome* from malware [post](http://googleonlinesecurity.blogspot.fi/2013/04/new-warnings-about-potentially.html)
   - Detailed article on *WebRTC* implementation progress in *Firefox* (Mozilla Hacks) [post](https://hacks.mozilla.org/2013/04/webrtc-update-our-first-implementation-will-be-in-release-soon-welcome-to-the-party-but-please-watch-your-head/) ![][*]
   - *WebRTC* support lands in *Firefox for Android* Nightly (+ instructions, + link to test page) [post](http://www.morbo.org/2013/04/webrtc-support-on-android.html)
 - FYI
   - Microsoft extends Windows 8 QuickStart offer to Mac and iOS developers [link](http://blogs.parallels.com/consumertech/2013/4/17/microsoft-extends-windows-8-quickstart-offer-to-mac-and-ios.html)
   - On iOS, *Safari* is 18% faster than the embedded UIWebView, 7% faster than *Chrome* [post](http://www.guypo.com/mobile/ios-browsers-speed-bakeoff/)
   - *PayPal*’s developer site is quite decent (Mobile SDKs, REST APIs, …) [site](https://developer.paypal.com/)
   - *Firefox OS* User Guide (huge) [context](https://blog.mozilla.org/sumo/2013/04/17/firefox-os-english-user-guide/) [page](https://support.mozilla.org/en-US/kb/firefox-os-user-guide)
 - Tutorials
   - “Preventing the *Performance* Hit from *Custom Fonts*” by [@chriscoyier]() [link](http://css-tricks.com/preventing-the-performance-hit-from-custom-fonts/)
   - “Random Number Generation in *JavaScript*” by [@therealprotonk]() [link](http://weblog.bocoup.com/random-numbers/)
   - “*IRC* is Back: Here’s Your Starter Guide” by [@reybango]() [link](http://net.tutsplus.com/tutorials/tools-and-tips/irc-is-back-heres-your-starter-guide/) ![][*]
 - Articles
   - “Explaining *Futures*” by [@tabatkins]() [link](http://www.xanthir.com/b4PY0) ![][*]
   - “A *Comparison* of Angular, Backbone, CanJS and Ember” by [@sebasporto]() [link](http://sporto.github.io/blog/2013/04/12/comparison-angular-backbone-can-ember/)
   - “shame.css” (stylesheet dedicated to housing your nasty, hacky, quick-fix *CSS*) by [@csswizardry]() [link](http://csswizardry.com/2013/04/shame-css/)
   - “An Introduction To *Programming* Type Systems” by [@ZackGrossbart]() [link](http://coding.smashingmagazine.com/2013/04/18/introduction-to-programming-type-systems/)
 - Content
   - “Fidus Writer: foxy *CSS Regions* spotted in the wild” [link](http://blogs.adobe.com/webplatform/2013/04/17/fidus-writer-foxy-css-regions-spotted-in-the-wild/)
   - [@ccoenraets]() has updated his sample *Backbone.js*/*Twitter Bootstrap* application [link](http://coenraets.org/blog/2013/04/sample-application-with-backbone-js-and-twitter-bootstrap-updated-and-improved/) ![][*]
   - “Kittydar: *Face Detection* for Cats in JavaScript” by [@harthvader]() [link](http://harthur.github.io/kittydar/)
   - ![][&] [@zachleat]() is documenting discrepancies between pure-*IE8* and faux-IE8 [link](https://gist.github.com/zachleat/5407068)
   - Ember 101, collection of video + article tutorials for learing *Ember.js* [ember101.com](http://ember101.com/)
 - Tools
   - Devtools redirect (lets you redirect web page resources) [link](https://chrome.google.com/webstore/detail/devtools-redirect/jmhdebkkippcccflcoddckhjjfgnfhnp) + demo on [youtube](http://youtu.be/5J2-9lFaESI)
   - sublime-grunt (Grunt plugin for Sublime Text) [repo](https://github.com/tvooo/sublime-grunt)
 - Opinion
   - “Content Parity on the Web” (dedicated mobile sites vs *responsive design*) by [@ChrisFerdinandi]() [link](http://gomakethings.com/content-parity-on-the-web/)
   - W3C, TC-39 divergence regarding *Futures* [tweet1](https://twitter.com/annevk/status/324550070253006849) [tweet2](https://twitter.com/annevk/status/324573346874421248)

## April 17th, 2013

 - News
   - *W3C* releases: 2. WD of *“Media Source Extensions”* [TR](http://www.w3.org/TR/media-source/), 5. WD of *“Emotion Markup Language”* [TR](http://www.w3.org/TR/emotionml/)
   - *W3C* France launched a new web site: [www.w3c.fr](http://www.w3c.fr/)
   - [@eseidel]()’s proposal for cleaning up “webkit” prefixes in *Blink* [post](https://groups.google.com/a/chromium.org/d/msg/blink-dev/E0OkYhvF7q8/Q4dUCEz8_YYJ)
   - *Chrome for Business* introduces “Legacy Browser Support” (opens selected sites in legacy browser) [post](http://googleenterprise.blogspot.co.uk/2013/04/new-chrome-features-bring-modern-web-to.html)
   - ![][&] *Mozilla* Ignite Challenge seeks feedback on the team pitches [link](https://docs.google.com/spreadsheet/ccc?key=0Au84mgOp1Pj4dHBNVlI0RkRjTXhoX0NldE1mM2dBaUE#gid=2)
   - *Microsoft Open Technologies* celebrates its first year anniversary [post](http://blogs.msdn.com/b/interoperability/archive/2013/04/16/you-re-invited-to-help-us-celebrate-an-unlikely-pairing-in-open-source.aspx)
 - FYI
   - The second *Global Accessibility Awareness Day* is on May 9th [link](http://www.sitepoint.com/global-accessibility-awareness-day/)
   - “Websites are 3.5% faster on desktop, 30% faster on mobile year-over-year” (based on *GA* data) [link](http://analytics.blogspot.com/2013/04/is-web-getting-faster.html)
   - “*CSS Selectors* Level 4” defines an `:user-error` pseudo-class [link](http://dev.w3.org/csswg/selectors4/#user-error-pseudo)
   - “*CSS Selectors* Level 4” defines reference combinators, e.g. `label /for/ input { … }` [link](http://dev.w3.org/csswg/selectors4/#idref-combinators)
   - *`getComputedStyle`* returns `"normal"` in Chrome and `"19.1667px"` in Firefox for `lineHeight` [tweet](https://twitter.com/davidwalshblog/status/324214585496313856)
 - Tutorials
   - “Getting the *URL* of an *iframe*’s parent” by [@slicknet]() [link](http://www.nczonline.net/blog/2013/04/16/getting-the-url-of-an-iframes-parent/)
   - “Animating *flexboxes*: the lowdown” by [@chrisdavidmills]() (Dev.Opera) [link](http://dev.opera.com/articles/view/animating-flexboxes-the-lowdown/)
   - “Create xkcd-Style *Comics* with Comix” by [@davidwalshblog]() [link](http://davidwalsh.name/cmx-js)
 - Articles
   - “Case Study: Google I/O 2013 Experiment” by [@tdreyno]() [link](http://www.html5rocks.com/en/tutorials/casestudies/google-io-2013/)
   - “Designing for a *Responsive* Web Means Starting with Type First” by [@paulmckeever]() [link](http://typecast.com/blog/designing-for-a-responsive-web-means-starting-with-type-first)
   - “Hack Your Maps” (about *responsive* and usable map interfaces) by [@younghahn]() [link](http://alistapart.com/article/hack-your-maps)
 - Content
   - ![][>] “Demystifying *Regular Expressions*”, [@LeaVerou]()’s talk from Fluent 2012 [48min] [youtube](http://youtu.be/EkluES9Rvak)
   - [@dam]()’s (*CSS*) Coding Guidelines [link](https://github.com/topcoat/topcoat/wiki/Coding-Guidelines) ![][*]
   - ![][>] “Low Cost *Usability Testing*”, user tests Amazon’s mobile site [22min] [link](https://www.usertesting.com/videos/GSf4%2begr26E%3d)
 - Tools 
   - jQuery Builder (builds a *custom version of jQuery* that only includes the modules you need) [link](http://projects.jga.me/jquery-builder/)
   - DOMLint (*test suite* against HTML/DOM conflicts) [link](http://kangax.github.io/domlint/)
   - FPSMeter (“simple *JavaScript* library for sexy, fast, and themable FPS meter”) [link](http://darsa.in/fpsmeter/)
 - Opinion
   - “Getting agreements is hard”, [@sideshowbarker]()’s thoughts on the *W3C* blog [post](http://www.w3.org/QA/2013/04/getting_agreements_is_hard_som.html)
   - ![][>] “The New Prohibition Created By *Copyright*” by [@](waxpancake) [32min] [link](http://www.techdirt.com/articles/20130415/21153522717/andy-baio-new-prohibition-created-copyright.shtml) ![][*]
   - “*jQuery* made me become a programmer” [link](https://medium.com/the-javascript-collection/d9e3f716bb9e)

## April 16th, 2013

 - News
   - “Last week in *WebKit*: a new hope” (Benjamin Poulain’s recap at Surfin’ Safari) [post](https://www.webkit.org/blog/2291/last-week-in-webkit-a-new-hope/)
   - Microdata API (part of *“HTML Microdata”* [TR](http://www.w3.org/TR/microdata/)) removed from *Chrome* [post](https://plus.google.com/102122664946994504971/posts/7BPx9VxnWAQ?partnerid=gplp0)
   - *WebKit*/*Blink* open to use *W3C* tests regularly (instead of relying on their own tests) [tweet](https://twitter.com/dirkschulze/status/323979629553676289)
   - [@annevk]() pushes for *`<blink>`* to be completely removed from the *HTML* standard [link](https://www.w3.org/Bugs/Public/show_bug.cgi?id=21712)
   - Inapplicable *stylesheets* block rendering in IE and Firefox ([@scottjehl]()’s research + bug tickets) [link](https://github.com/scottjehl/css-inapplicable-load/)
   - Government funded healthcare project to trial *WebRTC* [link](http://www.pulseitmagazine.com.au/index.php?option=com_content&view=article&id=1382:cystic-fibrosis-project-to-trial-webrtc-home-monitoring-and-shared-ehr&catid=16:australian-ehealth&Itemid=327)
   - Mozilla to debut *Firefox OS* in five countries in June [link](http://allthingsd.com/20130415/mozilla-will-debut-firefox-os-in-five-countries-by-summer/)
   - Netflix working […] to implement support for the “*HTML5* Premium Video Extensions” in *Chrome* [link](http://techblog.netflix.com/2013/04/html5-video-at-netflix.html)
 - FYI
   - Chrome *DevTools* can be “dragged to right” [tweet](https://twitter.com/paul_irish/status/323813248287797248); cool for quick *RWD* testing [link](http://www.welcomebrand.co.uk/thoughts/docking-inspector-for-responsive-design-testing/)
   - “In a third-party library, is there any way to safely detect if *`DOMContentLoaded`* has fired?” [tweet](https://twitter.com/LeaVerou/status/323781385464717312)
 - Tutorials
   - “List of *Pseudo-Elements* to Style Form Controls” by [@tjvantoll]() [link](http://tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls/) ![][*]
   - An introduction to front-end *package management*, by [@codylindley]() [link](http://tech.pro/tutorial/1190/package-managers-an-introductory-guide-for-the-uninitiated-front-end-developer)
   - “*Responsive* Retrofitting” by [@bencallahan]() [link](http://webstandardssherpa.com/reviews/responsive-retrofitting/) ![][*]
   - “5 techniques for smooth infinite scrolling in *HTML5*” Trunal Bhanse [link](http://engineering.linkedin.com/linkedin-ipad-5-techniques-smooth-infinite-scrolling-html5)
   - “*Web Payments* with PaySwarm: Identity (part 1 of 3)” (Mozilla Hacks) [link](https://hacks.mozilla.org/2013/04/web-payments-with-payswarm-identity-part-1-of-3/)
   - ![][>] “Video Tutorial: *AngularJS* Fundamentals in 60-ish Minutes” by [@DanWahlin]() [71min] [link](http://weblogs.asp.net/dwahlin/archive/2013/04/12/video-tutorial-angularjs-fundamentals-in-60-ish-minutes.aspx)
 - Articles
   - “Taking the pain out of debugging with *live programming*” (Computerworld) [link](http://www.computerworld.com.au/article/459054/taking_pain_debugging_live_programming/)
   - “Setting up *Sublime Text* 2” by [@maccaw]() [link](http://blog.alexmaccaw.com/sublime-text)
 - Content
   - ![][>] “*JavaScript* and new possibilities”, [@robertnyman]()’s talk from [@sthlmjs]() [51min] [youtube](https://www.youtube.com/watch?v=3WY8hKml9_Y)
   - ![][>] JavaScript Jabber Podcast Ep. 55: “Web Developer Skills” [38min] [link](http://javascriptjabber.com/055-jsj-web-developer-skills/)
   - ![][>] GitMinutes Podcast Ep. 4: “Marius Mathiesen on Gitorious and Git Infrastructure” [56min] [link](http://episodes.gitminutes.com/2013/04/gitminutes-04-marius-mathiesen-on.html)
 - Tools
   - Packery (“the bin-packing *layout* library”) [page](http://packery.metafizzy.co/)
   - Breeze.js (*rich data* management library) [page](http://www.breezejs.com/) + [article](http://www.johnpapa.net/spajs04/)
   - Sublime-Text--cdnjs (*Sublime* plugin to add scripts from cdnjs.com) [repo](https://github.com/dafrancis/Sublime-Text--cdnjs)
   - captureCalls.js (capture *stack traces* for any function on every call) [repo](https://github.com/NV/captureCalls.js) + video demo [youtube](https://www.youtube.com/watch?feature=player_embedded&v=jm31znLczrU)

## April 15th, 2013

 - News
   - `<hgroup>` removed from *HTML* 5.1 [message](http://lists.w3.org/Archives/Public/public-html/2013Apr/0060.html)
   - ![][&] Subheadings added to “Common idioms without dedicated elements” sec. of *HTML* 5.1 [spec](http://www.w3.org/html/wg/drafts/html/master/common-idioms.html#sub-head) [tweet](https://twitter.com/stevefaulkner/status/323390311944568833) ![][*]
   - Discussion about *“CSS Variables”* syntax change (`set-`/`get()` instead of `var-`/`var()`) [thread](http://lists.w3.org/Archives/Public/www-style/2013Apr/thread.html#msg289)
   - *“Test the Web Forward”* Seattle event produced 514 tests [tweet](https://twitter.com/IEDevChat/status/323252161301585920)
   - “How Mozilla's *Firefox OS* Will Open Up The Smartphone Market” (Forbes) [link](http://www.forbes.com/sites/haydnshaughnessy/2013/04/13/how-mozillas-firefox-os-will-open-up-the-smartphone-market/)
   - “Google, Yahoo executives back *CISPA* through lobbying group” [link](http://www.dailydot.com/news/technet-google-yahoo-lobbying-CISPA/)
   - “Massive botnet using *brute force attack* to target WordPress sites” [link](http://www.theverge.com/2013/4/13/4218846/massive-botnet-using-brute-force-attack-to-target-wordpress-sites)
 - FYI
   - ![][&] Taste.js (successor of *TodoMVC*) is in the process of defining its initial feature set [tweet](https://twitter.com/tastejs/status/323121223720640512)
   - Sass-Mixins repo now available in *Bower* (`bower install sass-mixins`) [tweet](https://twitter.com/drublic/status/323513643532693504)
   - *DevTools* protip: right-click on functions to jump to their definition [tweet](https://twitter.com/ChromiumDev/status/323247793521176576) (w/ screenshot)
   - `curl --trace-ascii req.log --trace-time <URL>` (flags in *cURL*, full byte log + timestamps) [tweet](https://twitter.com/igrigorik/status/323154207127502848)
 - Tutorials
   - [@sierroid]()’s [@WebPlatform]() articles: “*SVG* grand tour” [link](http://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_overview), “*SVG* filters” [link](http://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters) ![][*]
   - “*JavaScript* quirk 2: two “non-values” – `undefined` and `null`” by [@rauschma]() [link](http://www.2ality.com/2013/04/quirk-undefined.html)
   - “*Flight* Mixins Are Awesome!” by [@WebReflection]() [link](http://webreflection.blogspot.com/2013/04/flight-mixins-are-awesome.html)
   - “Designing a modern *email*” by [@efedorenko]() [link](http://blog.postmarkapp.com/post/47718375205/designing-a-modern-email)
   - “Case Study: Google I/O 2013 Experiment” by [@tdreyno]() [link](http://www.html5rocks.com/en/tutorials/casestudies/google-io-2013/)
 - Articles
   - “A proposal for *DOM* Streams” by [@tabatkins]() [link](http://www.xanthir.com/b4PV0)
   - “Font Load Tracking with *Futures*” (an attempt to rewrite *“CSS Font Load Events”*) by [@tabatkins]() [link](http://www.xanthir.com/b4PV1)
   - “Seismic Changes To The *Browser* Landscape: Where We’re Headed Now” by [@dudleystorey]() [link](http://demosthenes.info/blog/683/Seismic-Changes-To-The-Browser-Landscape-Where-Were-Headed-Now)
   - “The *usability* error you don’t know you’re making” by [@userfocus]() [link](http://www.userfocus.co.uk/articles/speak-your-users-language.html)   
 - Content
   - ![][>] “… time to brush up your web products”, [@codepo8]()’s keynote at [@frontendunited]() [46min] [youtube](https://www.youtube.com/watch?v=LYFJWJZPmpE)
   - Responsive Patterns (a collection of patterns and modules for *responsive designs*) [link](http://bradfrost.github.io/this-is-responsive/patterns.html) ![][*]
   - HTML5 Inline *Workers* [link](http://www.html5rocks.com/en/tutorials/workers/basics/#toc-inlineworkers)
 - Tools
   - Mozilla TowTruck (real-time collaboration via *WebRTC* and *WebSocket*) [link](https://towtruck.mozillalabs.com/)
   - stopBefore.js (*debugging* aid, prepends the `debugger` statement to a function) [link](https://gist.github.com/NV/5376464)
   - store (“a better way to use `localStorage` and `sessionStorage`”) [repo](https://github.com/nbubna/store)
 - Opinion
   - “Code Hard or Go Home” (why Google forked *WebKit*) [link](http://hypercritical.co/2013/04/12/code-hard-or-go-home)

## April 13th, 2013

 - News
   - This week at *W3C*: “`<hgroup>` dropped from HTML5, W3C at GSoC 2013, …” (digest by [@koalie]()) [link](http://lists.w3.org/Archives/Public/public-w3c-digest/2013AprJun/0001.html)
   - Should the *HTML5* structured cloning algorithm become part of *ECMAScript*? [link](http://esdiscuss.org/topic/structudclones)
 - FYI
   - “In *Chrome* you can `.submit()` forms without adding them to the *DOM*” [tweet](https://twitter.com/LeaVerou/status/322821758069661696)
   - New *Brackets* build released [post](http://blog.brackets.io/2013/04/12/brackets-sprint-23-build/) ![][*]
 - Tutorials
   - “How To Benefit From *CSS Generated Content And Counters*” by [@gabromanato]() [link](http://coding.smashingmagazine.com/2013/04/12/css-generated-content-counters/)
   - Info about the *CSS* `quotes` property, by [@chriscoyier]() [link](http://css-tricks.com/almanac/properties/q/quotes/)
   - “Understanding *JavaScript* Inheritance” by [@SlexAxton]() [link](http://alexsexton.com/blog/2013/04/understanding-javascript-inheritance/)
   - “Angry Birds of JavaScript: Mighty Eagle - *Automation*” by [@elijahmanor]() [link](http://www.elijahmanor.com/2013/04/angry-birds-of-javascript-mighty-eagle.html)
   - “How To Reduce Image Size With *WebP* Automagically” by [@adamdbradley]() [link](http://blog.netdna.com/developer/how-to-reduce-image-size-with-webp-automagically/)
   - “*CSS* Paint Times and Page Render Weight” by [@duhroach]() [link](http://www.html5rocks.com/en/tutorials/speed/css-paint-times/)
 - Articles
   - “The Changing *Web Platform* Landscape: More Fragmentation?” by [@vincent_hardy]() [link](http://blogs.adobe.com/digitalmedia/2013/04/the-changing-web-platform-landscape-more-fragmentation/)
   - “It’s not a *web app*. It’s an app you install from the web.” [link](http://blog.forecast.io/its-not-a-web-app-its-an-app-you-install-from-the-web/)
   - “*HTML5 Video* Preload” by [@souders]() [link](http://www.stevesouders.com/blog/2013/04/12/html5-video-preload/)
   - “Transitional Interfaces” by [@pasql]() [link](https://medium.com/design-ux/926eb80d64e3)
 - Content
   - “Angry Birds of *JavaScript*”, [@elijahmanor]()’s slides from Angle Brackets [link](http://elijahmanor.github.io/talks/angry-birds-javascript/index.html#/introduction)
   - “The Why and How of *Mixins* in Flight”, [@angustweets]()’s slides [speakerdeck](https://speakerdeck.com/anguscroll/the-why-and-how-of-mixins-in-flight)
   - Advanced `console.log()`-ing [link](http://adamschwartz.co/log/) ![][*]
   - *Demo*: “Double ring” (pure *CSS*) [codepen](http://codepen.io/fixcl/details/lvCFr) ![][*]
 - Sites
   - Starlogs (displays commit logs Star Wars style) [starlogs.net](http://starlogs.net/) (e.g. W3C’s “csswg-drafts” repo [link](http://starlogs.net/#w3c/csswg-drafts))
 - Tools
   - Helium (scans your site and shows *unused CSS*) [repo](https://github.com/geuis/helium-css)
   - Chardin.js (“simple *overlay instructions* for your apps”) [link](http://heelhook.github.io/chardin.js/)
   - tinydown (lightweight *Markdown parser* with support for YouTube videos, gists, …) [repo](https://github.com/WebReflection/tinydown)
 - Opinion
   - “…the growing pains of the *(web) platform* with respect to *APIs*” [tweet](https://twitter.com/annevk/status/322738312664211460)
   - “Why *Developers* Should Care About Oracle's Upcoming Appeal of the Google Lawsuit” [link](http://blog.cloudbees.com/2013/04/why-developers-should-care-about.html)

## April 12th, 2013

 - News
   - *W3C* releases: 4. WD of “*Clipboard API* and events” [TR](http://www.w3.org/TR/clipboard-apis/), 6. WD of “Internationalization Tag Set” [TR](Internationalization Tag Set), 3. LCWD of “API for Media Resources” [TR](http://www.w3.org/TR/mediaont-api-1.0/) [about](http://www.w3.org/News/2013.html#entry-9786)
   - ![][&] “*JSON*-LD” specs moved to Last Call [post](http://www.w3.org/News/2013.html#entry-9785) (“Syntax” [TR](http://www.w3.org/TR/json-ld-syntax/), “Algorithms and API” [TR](http://www.w3.org/TR/json-ld-api/))
   - New in *Blink*: enable stylesheet preloading according to `media` attribute [issue](https://codereview.chromium.org/13945017/)
   - *Mozilla* is looking for organizations to align with […] the open learning standard for *Web Literacy* [link](https://wiki.mozilla.org/Learning/WebLiteracyStandard)
   - *Cross-site scripting* attack (via a *Java* applet) wipes out Bitcoin accounts [link](http://techcrunch.com/2013/04/11/mt-gox-cross-site-scripting-attack-wipes-out-bitcoin-accounts/)
 - FYI 
   - *W3C* TAG meeting 18-20 March 2013 (agenda /w details) [link](http://www.w3.org/2001/tag/2013/03/18-agenda)
   - *HTML5 Templates* [TR](http://www.w3.org/TR/html-templates/) will be shareable across pages e.g. `<link rel="import" href="templ.html">`
   - *Modernizr* can now detect pseudo element transitions/animations  [link](https://github.com/Modernizr/Modernizr/pull/896)
   - List of tools consuming/using *Bower* [link](https://github.com/twitter/bower/issues/354)
   - Remote Device Access provided by [Nokia](http://www.developer.nokia.com/Devices/Remote_device_access/) and [Samsung](http://developer.samsung.com/remotetestlab/rtlDeviceList.action)
 - Tutorials
   - “All the Glory of *CSS Transitions*” by [@paulaborowska]() [link](http://www.devgarage.com/css-transitions/)
   - “Transitional Interfaces, Coded” (adding list items with *CSS animations*) by [@chriscoyier]() (w/ demos) [link](http://css-tricks.com/transitional-interfaces-coded/)
   - “Easing JavaScript *Memory Profiling* In Chrome *DevTools*” by [@addyosmani]() [link](http://addyosmani.com/blog/taming-the-unicorn-easing-javascript-memory-profiling-in-devtools/) ![][*]
 - Articles
   - “(Support for) *Media Queries* Within *SVG*” by [@tkadlec]() [link](http://timkadlec.com/2013/04/media-queries-within-svg/) (“based on SVG width” [tweet](https://twitter.com/chriscoyier/status/322375758465093632))
   - “Automatic (Function) Inlining in *JavaScript* Engines” by [@ariyahidayat]() [link](http://ariya.ofilabs.com/2013/04/automatic-inlining-in-javascript-engines.html)
   - “A shorthand for designing *UI flows*” by [@rjs]() [link](http://37signals.com/svn/posts/1926-a-shorthand-for-designing-ui-flows)
 - Content
   - ![][>] “Making the Web Rock: The *Web Audio API*” by [@cwilso]() [46min] [youtube](https://www.youtube.com/watch?v=wZrNI-86zYI)
   - ![][>] *CSS Regions* and *Exclusions* on *Mobile*, by [@cantrell]() [2min] [link](http://blogs.adobe.com/webplatform/2013/04/10/css-regions-and-exclusions-on-mobile/)
   - ![][>] “The Breakpoint Ep. 8: *Memory Profiling* with Chrome *DevTools*” [26min] [youtube](https://www.youtube.com/watch?v=L3ugr9BJqIs) ![][*]
   - “*JavaScript*: Need for Speed”, [@ariyahidayat]()’s slides from [@SFWebPerf]() [speakerdeck](https://speakerdeck.com/ariya/javascript-need-for-speed)
   - *HTTP* cheat sheets (three A0-sized posters) [link](https://github.com/bigcompany/know-your-http) ![][*]
   - ![][>] Shop Talk Podcast Ep. 64: Rapidfire #15, hosted by [@chriscoyier]() [56min] [link](http://shoptalkshow.com/episodes/064-rapidfire-15/)
 - Tools
   - TimeJump (adds “Media Fragments URI” deep linking capabilities to *HTML5 audio/video*) [link](http://davatron5000.github.io/TimeJump/)
   - Sticky (jQuery plugin for creating simple *notifications*) (similar to “Notifications API”) [link](http://www.andymatthews.net/read/2013/04/10/Sticky-Seriously-simple-notifications-for-jQuery)
   - pixelplant (converts *Flash* to *HTML5*) [link](http://pixelplant.com/)
   - grunt-concurrent (run Grunt tasks concurrently) [link](https://github.com/sindresorhus/grunt-concurrent)
 - Opinion
   - “Why I love *Ember.js*” by [@himkp]() [link](http://fleon.org/post/47401547699/why-i-love-ember-js)
   - “*Adobe*, I AM DISSAPOINT” [tweet](https://twitter.com/simevidas/status/323039021230088192)

[*]: /img/star.png "don’t miss"
[+]: /img/funding.png "seeks funding"
[1]: /img/calendar.png "upcoming event"
[o]: /img/contributor.png "seeks contributors"
[>]: /img/media.png "audio/video"
[&]: /img/feedback.png "seeks feedback"
