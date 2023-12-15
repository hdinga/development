/***

///TRIGGERCELLDESIGNS 2005-2015
***/
    
/* jshint strict: false, -W117 */


//GLOBAL VARIABLES
var disp;
var fDelay;
var wFrame;
var hFrame;
var nCounter;


//--
function init() {
    //VARIABLES
    disp = 100;
    fDelay = 5;
    nCounter = 0;
    wFrame = container.offsetWidth; //
    hFrame = container.offsetHeight; //

    
    //INIT PROPERTIES
    TweenMax.defaultOverwrite = "false";
    
    TweenLite.set(stageCurtain, {alpha:1}); // 
    
    TweenLite.set(quad1, {alpha:0, x:-disp/4});
    TweenLite.set(quad2, {alpha:0, x:+disp/4});
    
    document.getElementById("banner").style.visibility = "visible";
    
    //INIT CALLOUTS
    setTimeout (function(){startFrame();}, 0000); //delaytimer
}

//--
function startFrame(){
    //fnBannerTimer();
    fnMovingParticles();
    TweenLite.to(stageCurtain, 0.25, {delay:0, alpha:0, onComplete:tween1});
}

//-- FRAME 1
function tween1(){
    TweenLite.to(quad1, 0.5, {delay:0.0, alpha:1, x:0, y:0, ease:Power3.easeInOut});
    TweenLite.to(quad2, 0.5, {delay:0.1, alpha:1, x:0, y:0, ease:Power3.easeInOut});
}

//-- 
function fnMovingParticles(){
    
    tweenParticle1();
    function tweenParticle1(){
        TweenLite.to(stageTexture, 360, {delay:0, alpha:0.7, rotationZ: 90, ease:Linear.easeNone, onComplete: tweenParticle2});
    }
    function tweenParticle2(){
        TweenLite.to(stageTexture, 360, {delay:0, alpha:1.0, rotationZ: 00, ease:Linear.easeNone, onComplete: tweenParticle1});
    }
}

//-- BANNER FRAME TIMER
function fnBannerTimer() {
    var timeTicker = setInterval(fnCounter, 1000);
    var runtime = 30;
    function fnCounter(){
        if(nCounter<runtime){
            console.log(nCounter);
            nCounter++;
        }else {
            clearInterval(nCounter);
        }
    }
}


/***
LIBRARY

TweenLite.delayedCall(5, init);
//txt1.style.opacity = 0;

***/