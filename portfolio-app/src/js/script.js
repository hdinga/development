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

const includePreloader = `
  <div id="preloader">
    <div class="fg-loader"></div>
    <div class="bg-loader"></div>
  </div>
`;

const includeNavigation = `
  <header>
    <nav>
      <a href="/home.html" class="tc-nav-logo" title="Triggercell Portfolio" alt="Triggercell Portfolio"></a>
      <div class="tc-nav-menu">
        <ul role="navigation">
          <li class="nav-item"><a class="nav-active" href="#">Home</a></li>
          <li class="nav-item"><a class="" href="src/hd-resume.pdf" target="_blank">Resum&#233;</a></li>
          <li class="nav-item"><a class="" href="about.html">About</a></li>
          <li class="nav-item" title="Coming soon!"><a class="disabled" href="#" disabled>Shop</a></li>
          <li class="nav-item"><a class="" href="#">Contact</a></li>
        </ul>
      </div>
      <div class="tc-nav-apps">
        <a class="material-icons nav-item" title="What's on the menu?">apps</a>
      </div>
    </nav>

  <!--// HAMBURGER MENU //-->
  <div class="burgermenu">
  <button type="button" id="btnBurgerMenuClose" class="tc-button_close" title="Close Menu"></button>
  <!---->
  <ul role="navigation">
  <li class="nav-item"><a class="nav-link nav-active" href="#">Home</a></li>
  <li class="nav-item"><a class="nav-link" href="src/hd-resume.pdf" target="_blank">Resumé</a></li>
  <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Shop</a></li>
  <li class="nav-item"><a class="nav-link">Contact</a></li>
  </ul>
  <!---->
  <div class="burgermenu-social">
  <h6><b>Social</b></h6>
  <div class="tc-socialicon_wrapper">
  <a href="https://linkedin.com/in/hdinga" title="LinkedIn" class="icn-social"></a>
  <a href="https://www.behance.net/triggercell" title="Behance" class="icn-social"></a>
  <a href="https://www.instagram.com/triggercell/" title="Instagram" class="icn-social"></a>
  <a href="https://www.dribbble.com/triggercell/" title="Dribbble" class="icn-social"></a>
  </div>
  </div>
  </div>
  </header>
`;

//-- DOCUMENT READY
$( document ).ready(function() {

  //console.log("Document ready!");
  //document.body.classList.remove("no-js");
  document.head.querySelector("title").insertAdjacentHTML('afterend', includeMetadata);
  document.body.insertAdjacentHTML('afterbegin', includeNavigation);
  document.body.insertAdjacentHTML('afterbegin', includePreloader);
  

  //-- LOAD SCRIPTS
  var arrScripts = [
    `https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js`,
    `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`,
    `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/EasePack.min.js`
  ]
  
  for (var i=0; i<arrScripts.length; i++) {
    let newscript = document.createElement("script");
    newscript.type = "text/javascript";
    newscript.async = false;
    newscript.src = arrScripts[i];
    document.body.append(newscript);

    if(i == arrScripts.length - 1) { newscript.onload = fnPreloader; } //scripts loaded"
  }

  //-- PRELOADER
  function fnPreloader() {
    var loopCounter = 1;
    let tl = gsap.timeline();

    function preloadAnimation() {
      if (loopCounter > 0) {
        tl.to(".fg-loader", { opacity:1, scale: 1.05, duration: 0.25, ease: "power1.inOut"});
        tl.to(".fg-loader", { opacity:0, scale: 1.0, duration: 0.5, ease: "power1.inOut", onComplete:preloadAnimation});
        loopCounter--;
      } else {
        gsap.to("#preloader", { opacity: 0, duration: 1, ease: "sine.out", onComplete: init});
        document.querySelector(".page-wrapper").style.display = "block";
        
      }
    }
    preloadAnimation();
  }

  //-- INITIALIZE
  function init() {
    document.querySelector("#preloader").remove();
    
  }

});
