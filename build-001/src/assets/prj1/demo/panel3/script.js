/***

///TRIGGERCELLDESIGNS 2005-2015
***/
    
/* jshint strict: false, -W117 */


//GLOBAL VARIABLES
var disp;
var fDelay;
var nCycle = 1;
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
    
    TweenLite.set(imgLabel, {alpha:0, scaleX:0, scaleY:0});
    TweenLite.set(txtDisclaimer, {alpha:0});
    
    //-- LEFT
    TweenLite.set(f1_imgSub1, {alpha:0, y:+disp/4});
    TweenLite.set(f1_imgSub2, {alpha:0, y:+disp/4});
    TweenLite.set(f1_imgSub3, {alpha:0, y:+disp/4});
    
    TweenLite.set(f1_txtHeader, {alpha:0, y:disp/4});
    TweenLite.set(f1_txtGroup1, {alpha:0, y:disp/4});
    TweenLite.set(f1_txtGroup2, {alpha:0, y:disp/4});
    TweenLite.set(f1_txtGroup3, {alpha:0, y:disp/4});
    
    //-- RIGHT
    TweenLite.set(f2_imgSub1, {alpha:0, y:+disp/4});
    TweenLite.set(f2_imgSub2, {alpha:0, y:+disp/4});
    TweenLite.set(f2_imgSub3, {alpha:0, y:+disp/4});
    
    TweenLite.set(f2_txtHeader, {alpha:0, y:disp/4});
    TweenLite.set(f2_txtGroup1, {alpha:0, y:disp/4});
    TweenLite.set(f2_txtGroup2, {alpha:0, y:disp/4});
    TweenLite.set(f2_txtGroup3, {alpha:0, y:disp/4});
    
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
    TweenLite.to(txtDisclaimer, 0.75, {delay:0, alpha:1, ease:Expo.easeInOut});
    TweenLite.to(f1_txtHeader, 0.5, {delay:0, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(f1_imgSub1, 0.5, {delay:0.1, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    TweenLite.to(imgLabel, 0.5, {delay:0.1, alpha:1, scaleX:1, scaleY:1, ease:Back.easeInOut});
    TweenLite.to(f1_txtGroup1, 0.75, {delay:0.3, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(f1_txtGroup2, 0.75, {delay:0.35, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(f1_txtGroup3, 0.75, {delay:0.4, alpha:1, y:0, ease:Back.easeInOut}); 
    
    TweenLite.to(f2_txtHeader, 0.5, {delay:0.1, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(f2_imgSub1, 0.5, {delay:0.2, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    TweenLite.to(f2_txtGroup1, 0.75, {delay:0.3, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(f2_txtGroup2, 0.75, {delay:0.35, alpha:1, y:0, ease:Back.easeInOut});
    TweenLite.to(f2_txtGroup3, 0.75, {delay:0.4, alpha:1, y:0, ease:Back.easeInOut});
    
    TweenLite.to(f2_txtGroup2_txt1, 0.75, {delay:0.6, backgroundPositionY:-50, ease:Expo.easeInOut}); //nFunction
    TweenLite.to(f1_txtGroup2_txt1, 0.75, {delay:0.6, backgroundPositionY:-50, ease:Expo.easeInOut, onComplete: tween2}); //nFunction
}
//-- FRAME 2
function tween2(){
    TweenLite.to(f1_imgSub1, 0.5, {delay:fDelay, alpha:0, y:+disp/4, ease:Expo.easeInOut});
    TweenLite.to(f1_txtGroup2_txt1, 0.50, {delay:fDelay, backgroundPositionY:0, ease:Expo.easeInOut});
    
    TweenLite.to(f1_imgSub2, 0.75, {delay:fDelay, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    TweenLite.to(f1_txtGroup2_txt2, 0.75, {delay:fDelay, backgroundPositionY:-50, ease:Expo.easeInOut, onComplete: tween3}); //nFunction
}

//-- FRAME 3 
function tween3(){
    TweenLite.to(f1_imgSub2, 0.5, {delay:fDelay, alpha:0, y:+disp/4, ease:Expo.easeInOut});
    TweenLite.to(f1_txtGroup2_txt2, 0.5, {delay:fDelay, backgroundPositionY:0, ease:Expo.easeInOut});
    
    TweenLite.to(f1_imgSub3, 0.75, {delay:fDelay, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    TweenLite.to(f1_txtGroup2_txt3, 0.75, {delay:fDelay, backgroundPositionY:-50, ease:Expo.easeInOut, onComplete: tween4}); //nFunction
}

//-- FRAME 4 RESET
function tween4(){
    TweenLite.to(f1_imgSub3, 0.75, {delay:fDelay, alpha:0, y:+disp/4, ease:Expo.easeInOut});
    TweenLite.to(f1_txtGroup2_txt3, 0.75, {delay:fDelay, backgroundPositionY:0, ease:Expo.easeInOut});
    
    TweenLite.to(f1_imgSub1, 0.75, {delay:fDelay, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    TweenLite.to(f1_txtGroup2_txt1, 0.75, {delay:fDelay, backgroundPositionY:-50, ease:Expo.easeInOut, onComplete: tween5}); //nFunction
}

//-- FRAME 5
function tween5(){
    TweenLite.to(f2_imgSub1, 0.5, {delay:1, alpha:0, y:+disp/4, ease:Expo.easeInOut});
    TweenLite.to(f2_txtGroup2_txt1, 0.5, {delay:1, backgroundPositionY:0, ease:Expo.easeInOut});
    
    TweenLite.to(f2_imgSub2, 0.75, {delay:1, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    TweenLite.to(f2_txtGroup2_txt2, 0.75, {delay:1, backgroundPositionY:-50, ease:Expo.easeInOut, onComplete: tween6}); //nFunction
}

//-- FRAME 6 
function tween6(){
    TweenLite.to(f2_imgSub2, 0.5, {delay:fDelay, alpha:0, y:+disp/4, ease:Expo.easeInOut});
    TweenLite.to(f2_txtGroup2_txt2, 0.5, {delay:fDelay, backgroundPositionY:0, ease:Expo.easeInOut});
    
    TweenLite.to(f2_imgSub3, 0.75, {delay:fDelay, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    TweenLite.to(f2_txtGroup3_txt1, 0.75, {delay:fDelay, backgroundPositionY:-50, ease:Expo.easeInOut, onComplete: tween7}); //nFunction
}

//-- FRAME 7
function tween7(){
    TweenLite.to(f2_imgSub3, 0.5, {delay:fDelay, alpha:0, y:+disp/4, ease:Expo.easeInOut});
    TweenLite.to(f2_txtGroup3_txt1, 0.5, {delay:fDelay, backgroundPositionY:0, ease:Expo.easeInOut});
    
    TweenLite.to(f2_imgSub1, 0.75, {delay:fDelay, alpha:1, x:0, y:0, ease:Expo.easeInOut});
    TweenLite.to(f2_txtGroup2_txt1, 0.75, {delay:fDelay, backgroundPositionY:-50, ease:Expo.easeInOut, onComplete: tween2}); //nFunction
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