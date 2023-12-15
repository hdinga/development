-portfolio description add #tags
- add tag: #wireframe

Dashboard

bground color: tc-bgcolor0, tc-bgcolor1, tc-bgcolor2, tc-bgcolor3
text color: tc-txtcolor0, tc-txtcolor1, tc-txtcolor2, tc-txtcolor3

This site was concepted, designed, built and tested from ground up by me through lots of research, midnight oil and coffee

Research inspiration
-toyfight

preloader

Scroll down (mouse icon)
Bio
- Hello! You found me! I am an interactive front-end developer from Boston. I build amazing digital experiences.
- I'm Haarris, an interactive developer driven by passion, curiousity and coffee... lots of coffee!
- I 'make' 'amazing' digital experience /design/develop/adorable/outstanding...
- I design engaging digital experiences
- I am... /interactive/design/traveler/triggercell...
- Driven by curiosity, with an undying hunger to learn, I am a multi-talented interactive design enthusiast with years of professional experience in digital media. I am the gorilla glue between design and development; specialized in concepting, developing and executing high-fidelity projects for modern platforms using the latest technological trends


    function fnIncludeMeta() {
        let test = "\
        <meta charset='utf-8'/>\
		<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/>\
		<meta name='robots' content='index,follow'/>\
		<meta name='keywords' content='triggercell,responsive,front-end,development,animation,motion,ux,ui,ixd,xd,design,mobile,interactive,portfolio'/>\
		<meta name='author' content='Harris Dinga'/>\
		<meta name='copyright' content='©2004-2024 TriggerCell Designs'/>\
		\
		<meta property='og:title' content='Triggercell Designs Portfolio'/>\
		<meta property='og:type' content='website®'/>\
		<meta property='og:url' content='http://triggercell.com'/>\
		<meta property='og:image' content='http://triggercell.com/img/tc-logo-sm.png'/>\
		<meta property='og:description' content='Online creative portfolio showcasing a fusion of UX/UI design expertise, interactive projects, and a user-centric approach, delivering impactful and visually engaging experiences'/>\
		<meta property='og:site_name' content='Triggercell Designs'/>\
        \
        <link rel='shortcut icon' type='image/x-icon' href='src/plugins/triggercell/img/tc-logo_favicon.png' />\
        \
        <!--// CSS //-->\
		<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.8.2/css/all.css'><!-- CSS FONTAWESOME -->\
		<link rel='stylesheet' href='src/plugins/bootstrap/4.3.1/bootstrap.min.css'><!-- CSS BOOTSTRAP -->\
		<link rel='stylesheet' href='src/plugins/triggercell/css/styles.css'><!-- CSS TRIGGERCELL STYLES --></link>\
        \
        <!--// GOOGLE ANALYTIC //-->\
        <script async src='https://www.googletagmanager.com/gtag/js?id=UA-16909194-3'></script>\
        <script>\
            window.dataLayer = window.dataLayer || [];\
            function gtag(){dataLayer.push(arguments);}\
            gtag('js', new Date());\
            gtag('config', 'UA-16909194-3');\
        </script>\
        ";

        $("#includeTest").html(test);

        let element = document.getElementById("includeTest");

        $('head').append( '<meta name="description" content="this is new">' );

        //element.remove();
        //element.innerHTML = "<h1>Page not found.</h1>";
        /*
        let xhttp;
        let element = document.getElementById("includeTest");
        let file = "partial-meta.html";
    
        if ( file ) {
    
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {element.innerHTML = this.responseText;}
                    if (this.status == 404) {element.innerHTML = "<h1>Page not found.</h1>";}
                }
            }
            xhttp.open("GET", `${file}`, true);
            xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");
            xhttp.setRequestHeader("Access-Control-Allow-Headers", "X-Token");
            xhttp.send();
            return;
        }*/

    }
    //
    fnIncludeMeta();