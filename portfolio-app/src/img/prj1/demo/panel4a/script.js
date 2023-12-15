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
var nCycle;

//--
function init() {
    //VARIABLES
    disp = 100;
    fDelay = 5;
    nCycle = 0;
    nCounter = 0;
    wFrame = container.offsetWidth; //
    hFrame = container.offsetHeight; //
    //arrTweens = [init, tween1a, tween2a, tween3a]; 
    
    
    //INIT PROPERTIES
    TweenMax.defaultOverwrite = "false";
    
    TweenLite.set(stageCurtain, {alpha:1}); // 
    
    TweenLite.set(quad1, {alpha:0, x:-disp/2});
    TweenLite.set(quad1a, {alpha:0, x:-disp/2});
    TweenLite.set(quad2, {alpha:0, x:-disp/2});
    TweenLite.set(quad3, {alpha:0, y:-disp});
    
    TweenLite.set(sandwich_top, {alpha:0, y:-disp/4});
    TweenLite.set(sandwich_mid1, {alpha:0, x:0});
    TweenLite.set(sandwich_mid2, {alpha:0, x:0});
    TweenLite.set(sandwich_base, {alpha:0, y:disp});
    TweenLite.set(smoke, {alpha:0, x:0, y:0});
    TweenLite.set(plate2, {alpha:0, x:0, y:0});
    TweenLite.set(flatplate, {alpha:0, y:disp, rotation: 0});
    
    TweenLite.set(txt1, {alpha:0, scaleX:0.9, scaleY:0.9});
    TweenLite.set(txt2, {alpha:0, y:disp/4});
    TweenLite.set(txt3, {alpha:0});
    TweenLite.set(txtCopyright1, {alpha:0});
    TweenLite.set(txtCopyright2, {alpha:0});
    TweenLite.set(txtDisclaimer, {alpha:0});
    
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
    TweenLite.to(txtCopyright1, 0.5, {delay:0.0, alpha:1, ease:Power3.easeInOut});
    TweenLite.to(quad1, 0.5, {delay:0.0, alpha:1, x:0, y:0, ease:Power3.easeInOut});
    TweenLite.to(quad2, 0.5, {delay:0.1, alpha:1, x:0, y:0, ease:Power3.easeInOut});
    TweenLite.to(quad3, 0.5, {delay:0.2, alpha:1, x:0, y:0, ease:Power3.easeInOut, onComplete:tween1a}); 
    TweenLite.to(flatplate, 0.5, {delay:0.2, alpha:1, x:0, y:0, ease:Power3.easeInOut, onComplete: fnSpinner, onCompleteParams:[flatplate,30,30]}); //mc, vSpeed, zRotation});
}

//-- FRAME 1 EXIT
function tween1a(){
    TweenLite.to(txtCopyright1, 0.5, {delay:fDelay+0.0, alpha:0, ease:Power3.easeInOut});
    TweenLite.to(quad1, 0.5, {delay:fDelay+0.0, alpha:0, x:-disp, y:0, ease:Power3.easeInOut, onComplete:tween2});
}

//-- FRAME 2
function tween2(){
    TweenLite.to(txtCopyright2, 0.5, {delay:0.0, alpha:1, ease:Power3.easeInOut});
    TweenLite.to(plate2, 0.5, {delay:0.1, alpha:1, ease:Power3.easeInOut});
    TweenLite.to(quad1a, 0.5, {delay:0.0, alpha:1, x:0, y:0, ease:Power3.easeInOut, onComplete:tween2a});
}
//-- FRAME 2 EXIT
function tween2a(){
    TweenLite.to(quad3, 0.5, {delay:fDelay+0.0, alpha:0, x:0, y:-disp, ease:Power3.easeInOut});
    TweenLite.to(flatplate, 0.5, {delay:fDelay+0.0, alpha:0, x:0, y:disp, ease:Power3.easeInOut, onComplete:tween3}); 
}

//-- FRAME 3
function tween3(){
    TweenLite.to(txt1, 0.5, {delay:0.0, alpha:1, scaleX:1, scaleY:1, ease:Back.easeInOut});
    TweenLite.to(txtDisclaimer, 0.5, {delay:0.0, alpha:1, scaleX:1, scaleY:1, ease:Back.easeInOut});
    
    TweenLite.to(sandwich_base, 0.5, {delay:0.0, alpha:1, x:0, y:0, ease:Power3.easeInOut});
    TweenLite.to(sandwich_mid2, 0.5, {delay:0.2, alpha:1, x:0, y:0, ease:Power3.easeInOut});
    TweenLite.to(sandwich_mid1, 0.5, {delay:0.4, alpha:1, x:0, y:0, ease:Power3.easeInOut, onComplete: fnSmokeGen, onCompleteParams:[smoke]});
    TweenLite.to(sandwich_top, 0.5, {delay:0.6, alpha:1, x:0, y:0, ease:Back.easeInOut});
    
    TweenLite.to(txt2, 0.5, {delay:0.8, alpha:1, y:0, ease:Expo.easeInOut});
    TweenLite.to(txt3, 0.5, {delay:1.0, alpha:1, y:0, ease:Power3.easeInOut});
    
    
}

//--
function fnSmokeGen(mc){
    var locX = fnRandomizer( 0, 10 );
    var locY = fnRandomizer( 10, 100 );
    var nAlpha = fnRandomizer( 1, 6 )*0.1;
    var vSpeed = fnRandomizer(2,3);
    
    TweenLite.to(mc, vSpeed, {delay:0, alpha: nAlpha, x:locX, y:-locY, ease:Linear.easeNone, onComplete: fnSmokeFade, onCompleteParams:[mc]}); 
    
    function fnSmokeFade(mc){
        TweenLite.to(mc, vSpeed, {delay:0, alpha: 0, x:locX, y:-locY-100, ease:Linear.easeNone, onComplete: fnSmokeReset, onCompleteParams:[mc]});   
    }
    function fnSmokeReset(mc){
        TweenLite.set(mc, {alpha:0, x:0, y:0});
        if (nCycle < 2) {
            fnSmokeGen(smoke);
            nCycle++;
        } else {
            init();
        }
    }
}

//-- RANDOMIZER
function fnRandomizer(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}   

//--
function fnSpinner(mc, vSpeed, zRotation){
    TweenLite.to(mc, vSpeed, {delay:0, rotationZ: zRotation, ease:Linear.easeNone}); //mc, vSpeed, zRotation
}
 
//--
function fnFrameHold(nFunction){
    TweenLite.delayedCall(5, arrTweens[nFunction]);
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