/*** TRIGGERCELLDESIGNS 2004-2024 ***/

'use strict';

const includeMetadata = `
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="robots" content="index,follow"/>
  <meta name="keywords" content="triggercell,responsive,front-end,development,animation,motion,ux,ui,ixd,xd,design,mobile,interactive,portfolio"/>
  <meta name="author" content="Harris Dinga"/>
  <meta name="copyright" content="©2004-2024 TriggerCell Designs"/>
  <meta property="og:title" content="Triggercell Designs Portfolio"/>
  <meta property="og:type" content="website®"/>
  <meta property="og:url" content="https://triggercell.com"/>
  <meta property="og:image" content="https://triggercell.com/img/tc-logo-sm.png"/>
  <meta property="og:description" content="Personal creative portfolio showcasing UX UI designs, development and interactive experience"/>
  <meta property="og:site_name" content="Triggercell Designs"/>
  <link rel="shortcut icon" type="image/x-icon" href="https://triggercell.com/src/plugins/triggercell/img/tc-logo_favicon.png" />

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-BQQDTMBKSZ"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BQQDTMBKSZ');
  </script>
`

const includeScripts = `
  <!--// JS //-->
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script><!-- JS BOOTSTRAP -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" async="false"></script><!-- JS GSAP -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/EasePack.min.js" async></script><!-- JS GSAP -->
  <script type="text/javascript" src="./src/plugins/storejs/store.modern.min.js"></script><!-- JS STOREJS -->
  <script type="text/javascript" src="./src/plugins/laxxx/lax.min.js"></script><!-- JS LAXXX -->
  <script type="text/javascript" src="src/plugins/particles/particles.min.js"></script><!-- JS PARTICLES -->
`;

const includePreloader = `
  <div id="preloader"></div>
  <div class="testelement">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
`;



//DOCUMENT READY
$( document ).ready(function() {

  //console.log("Document ready!");
  document.head.querySelector("title").insertAdjacentHTML('afterend', includeMetadata);
  document.body.insertAdjacentHTML('afterbegin', includePreloader);
  //document.body.insertAdjacentHTML('beforeend', includeScripts);
  //$('#testholder').append('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>');
  //document.getElementById('testholder').appendChild('<scrip type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/EasePack.min.js"></script>');
  //document.querySelector("#test1").onload = init;




  var myArray = [
    `https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js`,
    `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`,
    `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/EasePack.min.js`,
    `placeholder.min.js`
  ]
  
  for (var i=0; i<myArray.length; i++) {
    let newscript = document.createElement("script");
    newscript.type = "text/javascript";
    newscript.async = false;
    newscript.src = myArray[i];
    document.head.append(newscript);
    


    if(i == myArray.length - 1) { 
      console.log(i + "versus"+ (myArray.length-1));
      newscript.onload = init;
    }
    //alert('hello world');
  }


/*
  let script = document.createElement("script");
  script.type = "text/javascript";
script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
script.onload = init;
document.head.append(script);

  document.querySelector('#tester').addEventListener('load', function() {
    //alert('Tester loaded');
  });
*/

    //INITIALIZE
    function init() {
      //alert('hello world');
      //document.head.insertAdjacentHTML('beforeend', loadMetadata);
      TweenMax.to($('#preloader'), 0.25, {delay: 0, alpha: 0, ease:Linear.easeInOut});
    }


  //init();


  

//setTimeout(myMessage, 5000);

    
}); //--DOCUMENT READY END





/*
$(window).on('load', function () {
  const loadMetadata = 
  `
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="robots" content="index,follow"/>
  <meta name="keywords" content="triggercell,responsive,front-end,development,animation,motion,ux,ui,ixd,xd,design,mobile,interactive,portfolio"/>
  <meta name="author" content="Harris Dinga"/>
  <meta name="copyright" content="©2004-2024 TriggerCell Designs"/>
  <meta property="og:title" content="Triggercell Designs Portfolio"/>
  <meta property="og:type" content="website®"/>
  <meta property="og:url" content="https://triggercell.com"/>
  <meta property="og:image" content="https://triggercell.com/img/tc-logo-sm.png"/>
  <meta property="og:description" content="Personal creative portfolio showcasing UX UI designs, development and interactive experience"/>
  <meta property="og:site_name" content="Triggercell Designs"/>
  
  <link rel="shortcut icon" type="image/x-icon" href="https://triggercell.com/src/plugins/triggercell/img/tc-logo_favicon.png" />
  <link rel="stylesheet" href="styles.css"><!-- CSS -->
  `

  const loadElement1 =
  `
  <div class="class">Hello World!!!</div>
  `;

});

  var myArray = [
    `https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js`,
    `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`,
    `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/EasePack.min.js`,
    `src/plugins/storejs/store.modern.min.js`,
    `src/plugins/laxxx/lax.min.js`,
    `src/plugins/particles/particles.min.js`
  ]


*/